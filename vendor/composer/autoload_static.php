<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit75e384fd5f1c907efb2a434f7771551d
{
    public static $prefixLengthsPsr4 = array (
        'S' => 
        array (
            'Sentiment\\' => 10,
        ),
        'A' => 
        array (
            'Abraham\\TwitterOAuth\\' => 21,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Sentiment\\' => 
        array (
            0 => __DIR__ . '/..' . '/davmixcool/php-sentiment-analyzer/src',
        ),
        'Abraham\\TwitterOAuth\\' => 
        array (
            0 => __DIR__ . '/..' . '/abraham/twitteroauth/src',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit75e384fd5f1c907efb2a434f7771551d::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit75e384fd5f1c907efb2a434f7771551d::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}