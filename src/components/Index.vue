<template>
    <img :src="BG.Hiten1" alt="" style="display: none">
    <div id="snow"></div>
    <div style="display: none" id="top"><a href="#logo" class="go-top"
            :style="`background-image: url(${ICON.go_top})`"></a>
    </div> <!-- 回顶部 -->
    <div id="effects" class="effects"><a href="javascript:void(0)" class="effects-img" title="关闭特效"
            :style="`background-image: url(${ICON.snow})`"></a></div> <!-- 关闭特效 -->
    <div class="mainbox mid">
        <h3>大肥羊智能评卷系统</h3>
        <h1 style="margin-top: 40px">一款智能的评卷系统</h1>
        <h2 style="margin-top: 40px">让教师更省心</h2>
        <h2 style="margin-top: 10px">让家长更放心</h2>
        <h2 style="margin-top: 10px">让学生更上心</h2>
        <h4 style="margin-top: 30px">大肥羊评卷系统，致力于打造更好的师生互动评卷系统，让教师在寒暑假不再操心</h4>
        <a href="register" class="button">马上注册</a><a href="login" class="button" style="margin-left: 40px">立刻登录</a><a
            href="javascript:void(0)" class="button" style="margin-left: 40px" id="express">进行体验</a>
    </div>
    <div class="reason mid" id="aaa">
        <div class="reason-left">
            <h7 style="margin-top: 35px" class="bigfatsheep">为什么选择&nbsp&nbsp大肥羊</h7>
            <span class="shape"></span>
            <span class="now">迄今为止</span>
        </div>
        <div class="reason-right">
            <ul class="num">
                <li>10+</li>
                <li>500+</li>
                <li>24000+</li>
            </ul>
            <ul class="num-exp">
                <li style="margin-left: 73px">合作学校</li>
                <li style="margin-left: 75px">教师使用</li>
                <li style="margin-left: 100px">学生使用</li>
            </ul>
        </div>
    </div>
    <div class="exp mid" name="aaa">
        <span>
            <h2>为教师和学生</h2>
        </span>
        <span>
            <h2>&nbsp&nbsp&nbsp量身定制的服务</h2>
        </span>
        <h5 class="exp-bot">可靠的答题卡批阅服务，并能提供您喜爱的诸多功能</h5>
    </div>
    <div class="details mid">
        <ul>
            <li class="sparkley">
                <h2>准确识别</h2>
                <h4 style="display: inline-block">答题卡识别准确率高达99.9999999999999%</h4>
                <span class="iconfont" style="font-size: 24px">&#xe600;</span>
            </li>
            <li class="sparkley">
                <h2>快速开始</h2>
                <h4>注册即可开始使用</h4>
            </li>
            <li class="sparkley">
                <h2>简单使用</h2>
                <h4>一键生成答题卡模板</h4>
            </li>
            <li class="sparkley">
                <h2>数据分析</h2>
                <h4>轻松分析学生数据信息</h4>
            </li>
            <li class="sparkley">
                <h2>可视化图表</h2>
                <h4>让掌握学生学习情况变得更加简单</h4>
            </li>
            <li class="sparkley">
                <h2>互动留言</h2>
                <h4>远距离也能轻松指导学生学习</h4>
            </li>
        </ul>
    </div>
    <div class="evaluation mid" id="evaluation">
        <div id="left-icon-box" style="display: none">
            <a href="javascript:void(0)" rel="external nofollow" class="next-icon"
                :style="`background-image: url(${ICON.right})`" name="xxx"></a>
        </div>
        <div id="right-icon-box" style="display: none">
            <a href="javascript:void(0)" rel="external nofollow" class="prev-icon"
                :style="`background-image: url(${ICON.left})`" name="xxx"></a>
        </div>
        <div class="banner" id="b04">
            <ul ref="banner">
                <li><text class="iconfont">教师可以登录用户名lqlqwq密码159753进行体验&#xe601;&#xe601;</text></li>
                <li><text class="iconfont">学生可以登录用户名shagou密码123321进行体验&#xe600;&#xe600;&#xe600;</text></li>
                <li><text class="iconfont dowload">点击下载学生用交卷答题卡&#xe618;&#xe618;&#xe618;</text></li>
                <li><text class="iconfont">雪花特效可以点击右侧雪花关闭&#xe68c;&#xe846;&#xe613;</text></li>
            </ul>
        </div>
    </div>
    <div style="display: none">
        <a href="./img/other/1.png" download="test1" id="test1">下载答题卡模板</a>
        <a href="./img/other/2.png" download="test2" id="test1">下载答题卡模板</a>
        <a href="./img/other/3.png" download="test3" id="test1">下载答题卡模板</a>
        <a href="./img/other/4.png" download="test4" id="test1">下载答题卡模板</a>
    </div>
    <div class="copyok">复制成功！(=・ω・=)</div>
    <div class="support mid">
        <div class="bottom-left">
            <h2 style="margin-top: 85px" id="sup">大肥羊</h2>
            <h5 style="margin-top: 20px">致力于打造更好的师生互动评卷系统</h5>
            <h5 style="margin-top: 35px">© 大肥羊 • All Rights Reserved.</h5>
            <div class="icon1" :style="`background-image: url(${ICON.github})`"></div>
            <div class="icon2" :style="`background-image: url(${ICON.twitter})`"></div>
            <button class="icon3 btn" :style="`background-image: url(${ICON.google})`" title="点击复制联系邮箱"
                data-clipboard-text="lqlqwq1@gmail.com"></button>
        </div>
        <div class="bottom-mid">
            <h4 style="margin-top: 88px">首页</h4>
            <ul>
                <li><a href="">注册</a></li>
                <li><a href="">登录</a></li>
                <li><a href="">用户中心</a></li>
                <li><a href="">编不出来了</a></li>
            </ul>
        </div>
        <div class="bottom-mid">
            <h4 style="margin-top: 88px">支持</h4>
            <ul>
                <li><a href="">服务条款</a></li>
                <li><a href="">常见问题</a></li>
                <li><a href="">联系方式</a></li>
                <li><a href="">编不出来了</a></li>
            </ul>
        </div>
    </div>
    <div class="gov">
        <a href="http://beian.miit.gov.cn/">浙ICP备2021034010号-1</a>
        <span :style="`background-image: url(${ICON.beian})`"></span>
        <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010202001997">浙公网安备 33010202001997号</a>
    </div>
</template>

<script setup>
import ICON from '@/assets/img/icon/output'
import BG from '@/assets/img/output-bg'
import { onMounted , getCurrentInstance , ref } from 'vue'
let banner=ref(null)
onMounted( () => {
    console.log(getCurrentInstance())
    console.log(banner.value)
} )
</script>

<style scoped lang="scss">
@use "@/style/page-css/index-js.scss";

.mid {
    width: 1200px;
    margin: 0 auto
}

.mainbox {
    height: 450px;
    margin-top: 100px;

    .button {
        display: inline-block;
        position: relative;
        z-index: 1;
        height: 50px;
        width: 140px;
        background-color: rgba(255, 165, 0, 0.8);
        line-height: 50px;
        text-align: center;
        text-decoration: none;
        color: white;
        font-size: 18px;
        font-weight: bold;
        border-radius: 50px;
        margin-top: 40px;

        &:hover {
            background-color: rgba(255, 60, 0, 0.8)
        }
    }
}

.reason {
    height: 150px;
    background-color: rgba(175, 198, 255, 0.5);
    border-radius: 50px;

    .reason-left {
        height: 150px;
        width: 250px;
        float: left;

        * {
            margin-left: 50px;
        }

        ;

        .shape {
            display: inline-block;
            height: 8px;
            width: 30px;
            margin-top: 30px;
            background-color: blue;
            border-radius: 8px
        }

        .now {
            display: inline-block;
            margin-left: 10px;
            color: blue;
            font-size: 24px;
            font-weight: bold
        }

        .bigfatsheep {
            display: block;
            color: #8a0aff
        }
    }

    .reason-right {
        float: right;
        height: 150px;
        width: 600px;

        >.num {
            height: 90px;

            >li {
                display: inline-block;
                font-size: 26px;
                font-weight: bold;
                margin-left: 80px;
                line-height: 135px;
            }
        }

        >.num-exp>li {
            display: inline-block;
            font-family: "微软雅黑 Light";
        }
    }
}

.exp {
    height: 100px;
    margin-top: 80px;

    >span:nth-of-type(1) {
        margin-left: 430px;
    }

    >span:nth-of-type(2) {
        color: #1f3eff
    }

    h2 {
        display: inline-block
    }

    .exp-bot {
        margin-top: 10px;
        text-align: center;
        font: 16px "Microsoft YaHei UI Light"
    }
}

.details {
    >ul {
        >.sparkley:hover {
            color: red
        }

        >li {
            display: block;
            float: left;
            height: 220px;
            width: 400px;
            list-style: none;

            >h2 {
                margin-top: 70px
            }

            >h4 {
                margin-top: 10px;
                font-family: "Microsoft YaHei UI Light";
            }
        }
    }

    &::after {
        content: "";
        display: block;
        height: 0;
        clear: both;
        visibility: hidden
    }
}

.evaluation {
    height: 350px;
    position: relative;


    >.banner {
        position: relative;
        text-align: center;
        width: 4800px;
        margin-top: 50px;

        >ul>li {
            float: left;
            height: 350px;
            width: 1200px;
            list-style: none;

            >.dowload {
                cursor: pointer
            }

            >text {
                display: block;
                height: 250px;
                width: 600px;
                position: relative;
                z-index: 100;
                text-align: center;
                margin-top: 50px;
                margin-left: 300px;
                background-color: rgba(135, 191, 255, 0.5);
                border-radius: 50px;
                line-height: 220px;
                font-size: 20px;
            }
        }
    }

    .prev-icon,
    .next-icon {
        height: 50px;
        width: 50px;
        position: absolute;
        top: 150px;
        z-index: 3;
        background-repeat: no-repeat;
    }

    .prev-icon {
        left: 0px;
        background-size: 100%;
    }

    .next-icon {
        right: 0px;
        background-size: 100%;
    }
}

.support {
    height: 280px;

    >.bottom-left {
        width: 500px;
        float: left;

        >h5 {
            font-family: "微软雅黑 Light";
            font-weight: 500;
        }

        >.icon1 {
            position: relative;
            z-index: 1;
            height: 25px;
            width: 25px;
            cursor: pointer;
            margin-top: 35px;
            display: inline-block;
            background-repeat: no-repeat;
            background-size: 100%
        }

        >.icon2 {
            position: relative;
            z-index: 1;
            height: 25px;
            width: 25px;
            cursor: pointer;
            margin-top: 35px;
            margin-left: 15px;
            display: inline-block;
            background-repeat: no-repeat;
            background-size: 100%
        }

        >.icon3 {
            position: relative;
            z-index: 1;
            height: 25px;
            width: 25px;
            cursor: pointer;
            margin-top: 35px;
            margin-left: 15px;
            display: inline-block;
            border: none;
            background-repeat: no-repeat;
            background-size: 100%
        }
    }

    >.bottom-mid {
        width: 350px;
        height: 280px;
        float: left;
        position: relative;
        z-index: 1;

        >ul>li {
            margin-top: 15px;
            list-style: none;
            font-size: 14px;
            font-family: "微软雅黑 Light";

            >a {
                color: black;
                text-decoration: none;

                &:hover {
                    color: red
                }
            }
        }
    }
}

.go-top {
    height: 50px;
    width: 50px;
    position: fixed;
    left: 50%;
    margin-left: 605px;
    top: 80vh;
    background-repeat: no-repeat;
    background-size: 100%
}

.effects {
    position: fixed;
    height: 50px;
    left: 50%;
    margin-left: 605px;
    top: calc(80vh - 50px);
    cursor: pointer;

    >.effects-img {
        position: fixed;
        height: 50px;
        width: 50px;
        background-repeat: no-repeat;
        background-size: 100%;
    }
}

.copyok {
    position: fixed;
    padding: 12px 24px;
    left: calc(50vw - 100px);
    top: 0;
    background-color: #81d296;
    box-shadow: 0 0.2em 0.1em 0.1em rgba(71, 210, 121, 0.2);
    border-radius: 8px;
    opacity: 0
}

.gov {
    margin-left: calc(50vw - 210px);
    position: relative;
    z-index: 1;

    >a {
        text-decoration: none;
        color: black;
        font-size: 18px;
        font-family: "微软雅黑 Light";
        font-weight: bolder;
    }

    >span {
        display: inline-block;
        height: 25px;
        width: 25px;
        margin-left: 50px;
        background: no-repeat 100%;
        vertical-align: bottom;
        transform: translateY(3px);
    }
}
</style>