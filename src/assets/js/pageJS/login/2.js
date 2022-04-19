//点击验证码图片刷新验证码
$("#imgVerifyCode").click(function () {
    reloadVerifyCode();
});
//重新发送请求,刷新验证码
function reloadVerifyCode(){
    //请在这里实现刷新验证码,请求中设置时间戳。
    $('#imgVerifyCode').attr("src","verifyCode?tp="+new Date().getTime());
}
$('#btnSubmit').click(function () {
    $btnReg = $(this);

    $btnReg.text("正在处理...");
    $btnReg.attr("disabled", "disabled");     //使按钮不再可用 防止重复提交

    $.ajax({
        url:'login.data',
        type:'post',
        dataType:'json',
        data:$('#formLogin').serialize(),
        success:function (data) {
            if (data.code=="ok-vc") {
                alert(data.msg);
                if (data.usertype==1){
                    location.href="teacher-main";
                }else {
                    location.href="stu-main";
                }
            }
            else {
                alert(data.msg);
                reloadVerifyCode();
                $("#password").val("");
                $("#vc").val("");
                $btnReg.text("登录");
                $btnReg.removeAttr("disabled");
            }
        }
    })
})