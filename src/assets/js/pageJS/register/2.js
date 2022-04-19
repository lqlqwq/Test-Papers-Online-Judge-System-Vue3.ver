//点击验证码图片刷新验证码
$('#imgVerifyCode').click(function () {
    reloadVerifyCode();
});
//重新发送请求,刷新验证码
function reloadVerifyCode(){
    //请在这里实现刷新验证码,请求中设置时间戳。
    $('#imgVerifyCode').attr("src","verifyCode?tp="+new Date().getTime());
}
//提交表单的操作
$('#btnSubmit').click(function () {
    // //表单校验
    // var username = $.trim($("#username").val());   //.trim用于删除数据两边的空格
    // var regex = /^.{6,10}$/;
    // if (!regex.test(username)) {
    //     alert(username)
    //     alert("用户名请输入正确格式（6-10位）");
    //     return;
    // }
    //
    // var password = $.trim($("#password").val());
    //
    // if (!regex.test(password)) {
    //     alert("密码请输入正确格式（6-10位）");
    //     return;
    // }

    $btnReg = $(this);

    $btnReg.text("正在处理...");
    $btnReg.attr("disabled", "disabled");     //使按钮不再可用 防止重复提交
    var checkBox=document.getElementsByName("type");
    var check=0;
    for (i=0;i<checkBox.length;i++){
        if (checkBox[i].checked){
            check=check+1;
        }
    }
    if (check==0){
        alert("请选择用户类型！");
        reloadVerifyCode();
        $btnReg.text("注册");
        $btnReg.removeAttr("disabled");
    } else {
        //发送ajax请求
        $.ajax({
            url: "registet.data",
            type: "post",
            dataType: "json",
            data: $("#formLogin").serialize(),
            success: function (data) {
                //结果处理,根据服务器返回code判断服务器处理状态
                //服务器要求返回JSON格式:
                //{"code":"0","msg":"处理消息"}
                console.info("服务器响应:" , data);
                if (data.code == "ok-vc") {
                    alert(data.msg)
                    // $('#username').val("");
                    // $('#password').val("");
                    // $('#nickname').val("");
                    location.href="login";   //跳转至登录
                } else {
                    //服务器校验异常,提示错误信息
                    alert(data.msg);
                    reloadVerifyCode();
                    $("#vc").val("");
                    $btnReg.text("注册");
                    $btnReg.removeAttr("disabled");
                }
            }
        });
    }
    return false;
});