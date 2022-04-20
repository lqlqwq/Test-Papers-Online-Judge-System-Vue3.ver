<template>
    <div class="register-out">
        <div class="login">
            <div class="register-title">登录</div>
            <a href="javascript:void(0)" rel="external nofollow" class="back-main"></a>
            <form id="formLogin">
                <div class="input-div">
                    <input type="text" class="input" placeholder="用户名" name="username" id="username">
                </div>
                <div class="error_msg" id="username_msg" style="visibility: hidden">
                    <span>用户名大于等于六位</span>
                </div>
                <div class="input-div">
                    <input type="password" class="input" placeholder="密码" name="password" id="password">
                </div>
                <div class="error_msg" id="password_msg" style="visibility: hidden">
                    <span>密码不能大于等于六位</span>
                </div>
                <div class="input-div">
                    <input type="text" class="v-code-input one" placeholder="验证码" name="vc" id="vc">
                    <img id="imgVerifyCode" src="/verifyCode" class="two v-code-img">
                </div>
                <div class="error_msg" id="code_msg" style="visibility: hidden">
                    <span>验证码输入错误</span>
                </div>
                <div class="check">
                    <label>
                        <input type="checkbox" id="checked" name="checked" value="1">
                        <span class="check-font">保存用户名</span>
                    </label>
                    <span class="check-pwd"><a href="https://www.baidu.com" target="_blank">忘记密码</a></span>
                </div>
                <button class="butt" id="btnSubmit">登录</button>
                <div class="to-register">
                    还没有账号？<a href="register">马上注册</a>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.register-out {
    height: 480px;
    padding-top: 20vh
}

.login {
    width: 360px;
    height: 460px;
    margin: auto;
    background-color: white;
    opacity: 0.5;
    position: relative
}

.register-title {
    text-align: center;
    font-weight: normal;
    font-size: 25px;
    font-family: 'Microsoft YaHei UI';
    color: #1f3eff;
    padding: 15px;
    margin: auto;
    width: 260px;
    border-bottom: solid 1px;
    border-bottom-color: rgba(0, 0, 0, 0.5);
}

.input-div {
    width: 300px;
    height: 40px;
    margin: 18px auto 0 auto
}

.input {
    height: 30px;
    width: 280px;
    font-size: 16px;
    display: block;
    margin-left: auto;
    margin-right: auto
}

.error_msg {
    width: 282px;
    height: 18px;
    margin: 0 auto 0 auto;
    font-size: 13px;
    font-weight: bold;
    color: red;
}

.v-code-input {
    height: 30px;
    width: 160px;
    font-size: 16px;
    display: block;
    margin: auto auto auto 8px
}

.v-code-img {
    width: 80px;
    height: 34px;
    cursor: pointer;
    margin-left: 30px;
    margin-top: 1px
}

.check {
    width: 282px;
    height: 18px;
    margin: 15px auto 0 auto
}

.check-font {
    font-size: 12px;
    position: relative;
    top: -2px
}

.check-pwd {
    font-size: 12px;
    font-weight: bold;
    position: relative;
    top: -2px;
    left: 120px;
    color: blue
}

.butt {
    height: 40px;
    width: 284px;
    margin: 20px auto 0 38px;
    background-color: #1f3eff;
    border: none;
    font-size: 20px;
    color: white;
    font-weight: bold
}

.to-register {
    width: 288px;
    height: 20px;
    margin: 18px auto 0 auto;
    font-size: 15px
}

.back-main {
    position: absolute;
    display: block;
    left: -50px;
    top: 415px;
    height: 50px;
    width: 50px;
    /* background: url("../img/icon/backmain.png") no-repeat 100%; */
    background-size: cover;
}
</style>