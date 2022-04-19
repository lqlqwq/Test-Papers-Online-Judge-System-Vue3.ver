$(function () {
    $('#logout').click(function () {
        var ans=confirm("是否确认退出登录？");
        if(ans==true){
            $.ajax({
                url:'logout.data',
                type:'post',
                dataType:'json',
                success:function (data) {
                    if (data.code=="ok-logout"){
                        alert(data.msg);
                        location.href="index";
                    }
                    else {
                        alert(data.msg);
                    }
                }
            })
        }
    })
})
$(function () {
    $('#gotest').click(function () {
        location.href="teacher-create";
    })
    $('#backmain').click(function () {
        location.href="teacher-main";
    })
    $('#logo').click(function () {
        location.href='index';
    })
    $('#re-nickname').click(function () {
        var pwdiv=document.getElementById("re-password-div");
        pwdiv.style.display="none";
        var pw=document.getElementById("re-password");
        pw.style.color="";     //默认色 不影响a：hover
        var nicknamediv=document.getElementById("re-nickname-div");
        nicknamediv.style.display="block";
        var nickname=document.getElementById("re-nickname");
        nickname.style.color="rgb(155,255,8)";
    })
    $('#re-password').click(function () {
        var pwdiv=document.getElementById("re-password-div");
        pwdiv.style.display="block";
        var pw=document.getElementById("re-password");
        pw.style.color="rgb(155,255,8)";     //默认色 不影响a：hover
        var nicknamediv=document.getElementById("re-nickname-div");
        nicknamediv.style.display="none";
        var nickname=document.getElementById("re-nickname");
        nickname.style.color="";
    })
})
$(function () {
    $('#pw-button').click(function () {
        $btnReg = $(this);
        $btnReg.text("正在处理...");
        $btnReg.attr("disabled", "disabled");
        $.ajax({
            url: 'repassword.data',
            type: 'post',
            dataType: 'json',
            data: $('#pw-form').serialize(),
            success: function (data) {
                if (data.code == "ok-logout") {
                    alert(data.msg);
                    location.href = "login";
                }
                else {
                    alert(data.msg);
                    $btnReg.text("确认修改");
                    $btnReg.removeAttr("disabled");
                }
            }
        })
    })
})
$(function () {
    $('#nickname-button').click(function () {
        $btnReg = $(this);
        $btnReg.text("正在处理...");
        $btnReg.attr("disabled","disabled");
        $.ajax({
            url:'renickname.data',
            type:'post',
            dataType:'json',
            data:$('#nickname-form').serialize(),
            success:function (data) {
                alert(data.msg);
                location.reload();
            }
        })
    })
})