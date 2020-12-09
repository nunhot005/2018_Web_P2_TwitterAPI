var isGrayscale = true;
var inDarkTheme = true;

/**
 * pieChart for sentiment twitter
 * @param canvas is data from web canvas
 * @param data is the data of twitter
 */
function pieApple(canvas,data) {
    const{pos, neu, neg} = data.sentiment_freq;
    let barChart = new Chart(canvas,{
        type: 'pie',
        data: {
            labels: ["Positive", "Neutral", "Negative"],
            datasets: [{
                borderWidth: 2,
                backgroundColor: ["rgba(155, 223, 159)", "rgba(143, 197, 200)","rgba(220, 146, 201)"],
                data: [pos, neu, neg]
            }]
        },
        options: {
            title: {
                display: true,
                text: "Overall Sentiment"
            },
            scales: {
                labelString: "Frequency",
            },
            legend: {
                display: false
            }
        }
    });
}

function darkTheme(){
    // if (inDarkTheme){
    //     $("#dark").click();
    // }
}

/**
 * color blind mode using grayscale change content color in to black and white
 */
$(function(){
    $("#colorblindMode").click(function(){
        if(isGrayscale){
            $("body").css("-webkit-filter", "grayscale(100%)");
            $("body").css("filter", "grayscale(100%)");
            $("footer").css("position","fixed");
            $("#colorblindMode").val("Color Mode");
        }
        else{
            $("body").css("-webkit-filter", "none");
            $("body").css("filter", "none");
            $("#colorblindMode").val("Color Blind Mode");
        }
        isGrayscale = !isGrayscale;
    });

    /**
     * dark mode will change web color in the dark theme //but not change content color
     */
    $("#dark").click(function(){
        if(inDarkTheme){
            $("body").css("background-color","#000000");
            $("body").css("background-image", "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 100 60'%3E%3Cg %3E%3Crect fill='%23000000' width='11' height='11'/%3E%3Crect fill='%23040303' x='10' width='11' height='11'/%3E%3Crect fill='%23070707' y='10' width='11' height='11'/%3E%3Crect fill='%230b0a0a' x='20' width='11' height='11'/%3E%3Crect fill='%230e0d0d' x='10' y='10' width='11' height='11'/%3E%3Crect fill='%23111010' y='20' width='11' height='11'/%3E%3Crect fill='%23131312' x='30' width='11' height='11'/%3E%3Crect fill='%23151514' x='20' y='10' width='11' height='11'/%3E%3Crect fill='%23171716' x='10' y='20' width='11' height='11'/%3E%3Crect fill='%23191918' y='30' width='11' height='11'/%3E%3Crect fill='%231b1a1a' x='40' width='11' height='11'/%3E%3Crect fill='%231d1c1b' x='30' y='10' width='11' height='11'/%3E%3Crect fill='%231f1e1d' x='20' y='20' width='11' height='11'/%3E%3Crect fill='%2321201f' x='10' y='30' width='11' height='11'/%3E%3Crect fill='%23232221' y='40' width='11' height='11'/%3E%3Crect fill='%23252423' x='50' width='11' height='11'/%3E%3Crect fill='%23282625' x='40' y='10' width='11' height='11'/%3E%3Crect fill='%232a2827' x='30' y='20' width='11' height='11'/%3E%3Crect fill='%232c2a28' x='20' y='30' width='11' height='11'/%3E%3Crect fill='%232e2c2a' x='10' y='40' width='11' height='11'/%3E%3Crect fill='%23302e2c' y='50' width='11' height='11'/%3E%3Crect fill='%2332302e' x='60' width='11' height='11'/%3E%3Crect fill='%23343230' x='50' y='10' width='11' height='11'/%3E%3Crect fill='%23373432' x='40' y='20' width='11' height='11'/%3E%3Crect fill='%23393634' x='30' y='30' width='11' height='11'/%3E%3Crect fill='%233b3836' x='20' y='40' width='11' height='11'/%3E%3Crect fill='%233d3b38' x='10' y='50' width='11' height='11'/%3E%3Crect fill='%233f3d3a' x='70' width='11' height='11'/%3E%3Crect fill='%23423f3c' x='60' y='10' width='11' height='11'/%3E%3Crect fill='%2344413e' x='50' y='20' width='11' height='11'/%3E%3Crect fill='%23464340' x='40' y='30' width='11' height='11'/%3E%3Crect fill='%23494542' x='30' y='40' width='11' height='11'/%3E%3Crect fill='%234b4744' x='20' y='50' width='11' height='11'/%3E%3Crect fill='%234d4a47' x='80' width='11' height='11'/%3E%3Crect fill='%234f4c49' x='70' y='10' width='11' height='11'/%3E%3Crect fill='%23524e4b' x='60' y='20' width='11' height='11'/%3E%3Crect fill='%2354504d' x='50' y='30' width='11' height='11'/%3E%3Crect fill='%2357524f' x='40' y='40' width='11' height='11'/%3E%3Crect fill='%23595551' x='30' y='50' width='11' height='11'/%3E%3Crect fill='%235b5753' x='90' width='11' height='11'/%3E%3Crect fill='%235e5955' x='80' y='10' width='11' height='11'/%3E%3Crect fill='%23605b58' x='70' y='20' width='11' height='11'/%3E%3Crect fill='%23625e5a' x='60' y='30' width='11' height='11'/%3E%3Crect fill='%2365605c' x='50' y='40' width='11' height='11'/%3E%3Crect fill='%2367625e' x='40' y='50' width='11' height='11'/%3E%3Crect fill='%236a6560' x='90' y='10' width='11' height='11'/%3E%3Crect fill='%236c6763' x='80' y='20' width='11' height='11'/%3E%3Crect fill='%236f6965' x='70' y='30' width='11' height='11'/%3E%3Crect fill='%23716c67' x='60' y='40' width='11' height='11'/%3E%3Crect fill='%23746e69' x='50' y='50' width='11' height='11'/%3E%3Crect fill='%2376706b' x='90' y='20' width='11' height='11'/%3E%3Crect fill='%2379736e' x='80' y='30' width='11' height='11'/%3E%3Crect fill='%237b7570' x='70' y='40' width='11' height='11'/%3E%3Crect fill='%237e7872' x='60' y='50' width='11' height='11'/%3E%3Crect fill='%23807a75' x='90' y='30' width='11' height='11'/%3E%3Crect fill='%23837c77' x='80' y='40' width='11' height='11'/%3E%3Crect fill='%23857f79' x='70' y='50' width='11' height='11'/%3E%3Crect fill='%2388817b' x='90' y='40' width='11' height='11'/%3E%3Crect fill='%238a847e' x='80' y='50' width='11' height='11'/%3E%3Crect fill='%238d8680' x='90' y='50' width='11' height='11'/%3E%3C/g%3E%3C/svg%3E\")");
            $("body").css("background-attachment", "fixed");
            $("body").css("background-size", "cover");
            $(".card").css("background-color", "#929292");
            $(".card--body").css("background-color","#929292");
            $("span").css("background-color","#929292");
            $("footer").css("background-color", "#BAA4A4");
            $(".button").css("color", "#CBEBED");
            $(".italyBun").css("color", "white");
            $("body").css("color", "white");


            $("#dark").val("Bright Mode");
        }
        else{
            $("body").css("background-color", "#fa8072");
            $("body").css("background-image", "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 100 60'%3E%3Cg %3E%3Crect fill='%23fa8072' width='11' height='11'/%3E%3Crect fill='%23fa8272' x='10' width='11' height='11'/%3E%3Crect fill='%23fa8471' y='10' width='11' height='11'/%3E%3Crect fill='%23fa8671' x='20' width='11' height='11'/%3E%3Crect fill='%23fa8971' x='10' y='10' width='11' height='11'/%3E%3Crect fill='%23fa8b71' y='20' width='11' height='11'/%3E%3Crect fill='%23fa8d71' x='30' width='11' height='11'/%3E%3Crect fill='%23fa8f71' x='20' y='10' width='11' height='11'/%3E%3Crect fill='%23fa9171' x='10' y='20' width='11' height='11'/%3E%3Crect fill='%23fa9371' y='30' width='11' height='11'/%3E%3Crect fill='%23fa9571' x='40' width='11' height='11'/%3E%3Crect fill='%23fa9772' x='30' y='10' width='11' height='11'/%3E%3Crect fill='%23fa9972' x='20' y='20' width='11' height='11'/%3E%3Crect fill='%23f99b72' x='10' y='30' width='11' height='11'/%3E%3Crect fill='%23f99e73' y='40' width='11' height='11'/%3E%3Crect fill='%23f9a073' x='50' width='11' height='11'/%3E%3Crect fill='%23f9a274' x='40' y='10' width='11' height='11'/%3E%3Crect fill='%23f9a474' x='30' y='20' width='11' height='11'/%3E%3Crect fill='%23f8a675' x='20' y='30' width='11' height='11'/%3E%3Crect fill='%23f8a876' x='10' y='40' width='11' height='11'/%3E%3Crect fill='%23f8aa77' y='50' width='11' height='11'/%3E%3Crect fill='%23f7ac78' x='60' width='11' height='11'/%3E%3Crect fill='%23f7ae78' x='50' y='10' width='11' height='11'/%3E%3Crect fill='%23f7b079' x='40' y='20' width='11' height='11'/%3E%3Crect fill='%23f7b17a' x='30' y='30' width='11' height='11'/%3E%3Crect fill='%23f6b37b' x='20' y='40' width='11' height='11'/%3E%3Crect fill='%23f6b57d' x='10' y='50' width='11' height='11'/%3E%3Crect fill='%23f6b77e' x='70' width='11' height='11'/%3E%3Crect fill='%23f5b97f' x='60' y='10' width='11' height='11'/%3E%3Crect fill='%23f5bb80' x='50' y='20' width='11' height='11'/%3E%3Crect fill='%23f5bd82' x='40' y='30' width='11' height='11'/%3E%3Crect fill='%23f4bf83' x='30' y='40' width='11' height='11'/%3E%3Crect fill='%23f4c185' x='20' y='50' width='11' height='11'/%3E%3Crect fill='%23f3c286' x='80' width='11' height='11'/%3E%3Crect fill='%23f3c488' x='70' y='10' width='11' height='11'/%3E%3Crect fill='%23f3c689' x='60' y='20' width='11' height='11'/%3E%3Crect fill='%23f2c88b' x='50' y='30' width='11' height='11'/%3E%3Crect fill='%23f2ca8d' x='40' y='40' width='11' height='11'/%3E%3Crect fill='%23f2cb8e' x='30' y='50' width='11' height='11'/%3E%3Crect fill='%23f1cd90' x='90' width='11' height='11'/%3E%3Crect fill='%23f1cf92' x='80' y='10' width='11' height='11'/%3E%3Crect fill='%23f1d194' x='70' y='20' width='11' height='11'/%3E%3Crect fill='%23f0d296' x='60' y='30' width='11' height='11'/%3E%3Crect fill='%23f0d498' x='50' y='40' width='11' height='11'/%3E%3Crect fill='%23f0d69a' x='40' y='50' width='11' height='11'/%3E%3Crect fill='%23f0d89c' x='90' y='10' width='11' height='11'/%3E%3Crect fill='%23efd99e' x='80' y='20' width='11' height='11'/%3E%3Crect fill='%23efdba0' x='70' y='30' width='11' height='11'/%3E%3Crect fill='%23efdda2' x='60' y='40' width='11' height='11'/%3E%3Crect fill='%23efdea4' x='50' y='50' width='11' height='11'/%3E%3Crect fill='%23efe0a6' x='90' y='20' width='11' height='11'/%3E%3Crect fill='%23eee1a8' x='80' y='30' width='11' height='11'/%3E%3Crect fill='%23eee3ab' x='70' y='40' width='11' height='11'/%3E%3Crect fill='%23eee5ad' x='60' y='50' width='11' height='11'/%3E%3Crect fill='%23eee6af' x='90' y='30' width='11' height='11'/%3E%3Crect fill='%23eee8b2' x='80' y='40' width='11' height='11'/%3E%3Crect fill='%23eee9b4' x='70' y='50' width='11' height='11'/%3E%3Crect fill='%23eeebb6' x='90' y='40' width='11' height='11'/%3E%3Crect fill='%23eeecb9' x='80' y='50' width='11' height='11'/%3E%3Crect fill='%23EEB' x='90' y='50' width='11' height='11'/%3E%3C/g%3E%3C/svg%3E\")");
            $("body").css("background-attachment", "fixed");
            $("body").css("background-size", "cover");
            $(".card").css("background-color","white");
            $(".card--body").css("background-color","white");
            $("span").css("background-color","white");
            $("footer").css("background-color", "#FA8072");
            $(".button").css("color", "blue");
            $(".italyBun").css("color", "black");
            $("body").css("color", "black");

            $("#dark").val("Dark Mode");
        }

        $("#dark > span").css("background-color","");
        $("#dark > body").css("background-color", "");

        inDarkTheme = !inDarkTheme;
    });

});
