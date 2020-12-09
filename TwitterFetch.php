<?php
require "vendor/autoload.php";
Use Sentiment\Analyzer;


/**
 * Use Library in TwitterOAuth
 * to access the twitter server by xampp server
 * by keyword and API key
 */
use Abraham\TwitterOAuth\TwitterOAuth;

$access_token = "3300688478-bBnRheLuX9UXngHEAYJmZ40ENGmSmjbO1k4TsEM";
$access_token_secret = "vvXiPWje2grtE5oVYtM7nQPkDZdJpsJo8PN3EtgaD8GNn";
$consumer_key = "3XfDkFE8mw7OiXXSeFqpFOYTA";
$consumer_secret = "ZfsJ3O5pz1ISIZgjJqLyBB8VtBO9OtpKbqh28Nji5DUYFasDq6";

$connection = new TwitterOAuth($consumer_key, $consumer_secret, $access_token, $access_token_secret);
$content = $connection->get("search/tweets", ["count" => 10, "q" => $_GET['q']]);

/**
 * Analyze the content twitter statuses that posivive, neutral or negative
 * There are already have in the library but have to produce a new parameter in statuses call "sentiment"
 * frequencies is to count the total positive, neutral, negative
 * negative sentimentVal < 0
 * positive sentimentVal > 0
 * neutral sentimentVal = 0
 */
$content = analyze(json_decode(json_encode($content), true));

header('Content-Type: application/json');
echo json_encode($content);

function analyze($data)
{
    $sentiAnalyzer = new Analyzer();
    error_reporting(E_ERROR | E_PARSE);
    $frequencies = array('pos' => 0, 'neg' => 0, 'neu' => 0);
    for ($i = 0; $i < count($data['statuses']); $i++) {
        $message = $data['statuses'][$i]['text'];
        $sentiment = $sentiAnalyzer->getSentiment($message);

        $data['statuses'][$i]['sentiment'] = $sentiment;

        $sentimentVal = $sentiment['compound'];
        if ($sentimentVal > 0){
            $frequencies['pos']++;
        }else if ($sentimentVal == 0){
            $frequencies['neu']++;
        }
        else{
            $frequencies['neg']++;
        }
    }
    $data['sentiment_freq'] = $frequencies;
    return $data;
}