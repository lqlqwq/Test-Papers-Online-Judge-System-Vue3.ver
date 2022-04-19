$('#username').blur(function () {
    verify("username","username_msg",6);
})
$('#password').blur(function () {
    verify("password","password_msg",6);
})
$('#vc').blur(function () {
    verify("vc","code_msg",4);
})

function verify(orgbox,msgbox,i) {
    if (document.getElementById(orgbox).value.length>0){
        if (document.getElementById(orgbox).value.length<i){
            document.getElementById(msgbox).style.visibility="visible";
        } else {document.getElementById(msgbox).style.visibility="hidden";}
    }
}