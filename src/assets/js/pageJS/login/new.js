$(function () {
    var username=document.querySelector("#username");
    var checkBox=document.querySelector("#checked");
    if (localStorage.getItem("check")){username.value=localStorage.getItem("name");checkBox.checked=true;}
    checkBox.addEventListener("change",function (evt) {
        if (this.checked){
            var value=username.value;
            localStorage.setItem("name",value);
            localStorage.setItem("check",1);
        }
        else {localStorage.removeItem("name");localStorage.removeItem("check");}
    })
});
$(function () {
    $(".back-main").click(function () {
        location.href="/"
    })
})