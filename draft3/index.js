/*
 * Created by Rishi Kapadia
 * 
 */
$(document).ready(function () {

    H = $(window).height();
    W = $(window).width();

    //intro, nametag
    $("#helloDiv").attr({
        "data-0": "background-color:rgb(0,0,0);transform:translate(0%, 0%);",
        "data-500":"transform:translate(0%, -100%);"
        });
    $("#namecard").attr({"data-0":"transform:rotate(0deg);",
        "data-250":"transform:rotate(120deg);"
        });
    $("#namecardDiv").attr({"data-0":"opacity:1;transform:translate(0%, 0%);",
        "data-250":"opacity:0;transform:translate(200%, -100%);"
        });
    $("#nameDiv").attr({"data-0":"color:rgba(0,0,0,1);transform:translate(0%, 0%);",
        "data-450":"color:rgba(255,255,255,1);transform:translate(-0px, -"+(H/2 - 10)+"px);"
        });

	var s = skrollr.init({"smoothScrolling":true, "forceHeight":true});
	var nice = $('html').niceScroll({'zindex':'9999'});
	//$(window).resize(function() {location.reload();});

});

