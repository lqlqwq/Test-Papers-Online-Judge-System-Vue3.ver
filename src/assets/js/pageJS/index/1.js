$(function () {
    $('#evaluation').mouseenter(function () {
        document.getElementById("left-icon-box").style.display="block";
        document.getElementById("right-icon-box").style.display="block";
    })
    $('#evaluation').mouseleave(function () {
        document.getElementById("left-icon-box").style.display="none";
        document.getElementById("right-icon-box").style.display="none";
    })
})
$(document).ready(function () {
    var unslider04=$('#b04').unslider({
            dots:true
        }),
        data04=unslider04.data('unslider');
    $('a[name="xxx"]').click(function () {
        var fn=this.className.split("-")[0];
        data04[fn]();
    })
})