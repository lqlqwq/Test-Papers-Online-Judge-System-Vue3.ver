$(function () {
    $('#username').blur(function () {
        var orgbox=document.getElementById("username");
        var msgbox=document.getElementById("username_msg");
        if (orgbox.value.length>0){
            if (orgbox.value.length<6){
                msgbox.innerText="用户名不能小于六位";
                msgbox.style.color="red";
            } else {$.ajax({
                url:'username.data',
                type:'post',
                data:{"username":orgbox.value},
                dataType:'json',
                success:function (data) {
                    if (data.code=="ok"){
                        msgbox.innerText="恭喜！该用户名可以注册";
                        msgbox.style.color="green";
                    }else {
                        msgbox.innerText="抱歉，该用户名已被注册！";
                        msgbox.style.color="red";
                    }
                }
            })}
        }
    })
    $('#password').blur(function () {
        verify("password","password_msg",6);
    })
    $('#nickname').blur(function () {
        var orgbox=document.getElementById("nickname");
        var msgbox=document.getElementById("nickname_msg");
        if (orgbox.value.length>0){
            if (orgbox.value.length<2){
                msgbox.innerText="昵称长度过短";
                msgbox.style.color="red";
            } else {$.ajax({
                url:'nickname.data',
                type:'post',
                data:{"nickname":orgbox.value},
                dataType:'json',
                success:function (data) {
                    if (data.code=="ok"){
                        msgbox.innerText="恭喜！该昵称可以使用";
                        msgbox.style.color="green";
                    }else {
                        msgbox.innerText="抱歉，该昵称已被注册！";
                        msgbox.style.color="red";
                    }
                }
            })}
        }
    })
    $('#vc').blur(function () {
        verify("vc","code_msg",4);
    })
})
function verify(orgbox,msgbox,i) {
    if (document.getElementById(orgbox).value.length>0){
        if (document.getElementById(orgbox).value.length<i){
            document.getElementById(msgbox).style.visibility="visible";
        } else {document.getElementById(msgbox).style.visibility="hidden";}
    }
}
$(function () {
    $(".back-main").click(function () {
        location.href="/"
    })
})