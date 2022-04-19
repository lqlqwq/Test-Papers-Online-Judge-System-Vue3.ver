$(function () {
    anm=setInterval(show,100)
});
function show(){
    if (document.querySelector("img").complete){
        $(".bg-after-index").fadeTo(5000,0.5);
        var snow=setTimeout(function() {
            Snowflake.init(document.getElementById('snow'));
        }, 500);
        clearInterval(anm);
    }
}
$(function () {
    var flag=true;
    $(".title ul li").eq(1).click(function () {
        $("body,html").stop().animate({
            scrollTop:$(".reason").offset().top-100
        },2000)
    });
    $(".title ul li").eq(2).click(function () {
        $("body,html").stop().animate({
            scrollTop:$(".bottom-mid").offset().top
        },2000)
    });
    $(document).scroll(function () {
        if ($(document).scrollTop()>300){$("#top").stop().show(1000)}
        else {$("#top").stop().hide(1000)}
    });
    $("#effects").click(function () {
        if (flag){$("#snow").stop().fadeOut(3000);flag=false}
        else {$("#snow").stop().fadeIn(3000);flag=true;}
    });
    $("#top").click(function () {
        $("body,html").stop().animate({
            scrollTop:0
        },2000)
    });
    $("#express").click(function () {
        $(".title ul li").eq(2).triggerHandler("click");
    });
    var flagbox=true;
    $(".icon3").click(function () {
        if (flagbox){
            flagbox=false;
            var height=$("#snow").height();
            height=Math.floor(height/2)-25;
            $(".copyok").stop().animate({
                top: height,
                opacity: 1.0
            },1000);
            setTimeout(out,3500);
            function out() {
                $(".copyok").stop().animate({
                    top: $("#snow").height(),
                    opacity: 0
                },1000,function () {
                    $(".copyok").css("top",0);
                    flagbox=true;
                });
            }
        }
    });
    $(".icon1").click(function () {  //https://twitter.com/
        window.open("https://github.com/lqlqwq/Test-Papers-Online-Judge-System");
    });
    $(".icon2").click(function () {  //https://twitter.com/
        window.open("https://twitter.com/");
    });
    $(document).ready(function(){
        var clip=new ClipboardJS(".icon3");
    });
    $(".dowload").click(function () {
        var num=Math.ceil(Math.random()*4)-1;
        document.querySelectorAll("#test1")[num].click();
    })
})