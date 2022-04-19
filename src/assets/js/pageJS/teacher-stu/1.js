// function addEvent(obj,evt,fn) {                              //解决了Window onload function只能加载一个的问题
//     var saved;                                                //原理 将几个储存起来一起执行
//     if (typeof obj["on"+evt] == "function") {
//         saved = obj["on"+evt];
//     }
//     obj["on"+evt] = function () {
//         if (saved) saved();
//         fn();
//     }
// }
// addEvent(window,'load',zero);
// addEvent(window,'load',firstAll);
// // $(function () {
// //     $('#chart').click(function () {
// //         var val=$(this).attr("id");
// //         alert(val);
// //     })
// // })
var x=0;
window.onload=function zero() {
    $.ajax({
        url:'getTest.data',
        type:'post',
        dataType:'json',
        success:function (data) {
            for (i=1;i<=data.num;i++){
                var name="num"+i;
                var test=data[""+name+""];
                if (test.youAns=="1") {test.youAns="未识别"}
                var html=template('testTemplate',test);
                $('#score').append(html);
            }
            document.getElementById("avgScore").innerText=data.avgScore;
            document.getElementById("finishNum").innerText=data.fininshNum;
            document.getElementById("testid").value=data.testid;
            firstAll();
            nextAll();
            var length=document.getElementById("score").offsetHeight;
            if (length>1010){
                document.getElementById("leftbox").style.height=length+"px";
            }
        }
    })
}
function firstAll() {                                         //页面加载时触发
    var div=document.getElementById("score");               //选定指定div
    var href=document.getElementsByName("photo");           //指定div下遍历所有name
    for (i=0;i<href.length;i++){                            //循环绑定click function
        href[i].onclick=function () {
            var val=$(this).attr("id");
            var leftbox=document.getElementById("leftbox");
            var mainbox=document.getElementById("tablebox");
            var ans1=document.getElementById(val+1);
            var ans2=document.getElementById(val+2);
            if (ans1.style.display=="block"){
                ans1.style.display="none";
                ans2.style.display="none";
                leftbox.style.height="1000px";
                leftbox.style.height=mainbox.offsetHeight+"px";           //解决高度自适应问题  结尾+px
            }
            else {
                ans1.style.display="block";
                ans2.style.display="block";
                leftbox.style.height=mainbox.offsetHeight+"px";           //解决高度自适应问题  结尾+px
                mainbox.style.marginBottom="50px";
                var ansNum=val.split("c")[0];
                var testid=document.getElementById("testid").value;
                $.ajax({
                    url:'charts.data',
                    type:'post',
                    data:{"number":ansNum,"testid":testid},
                    dataType:'json',
                    success:function (data) {
                        abcd(ans1,data.AA,data.BB,data.CC,data.DD,data.ansNull);
                        truefalse(ans2,data.ansRight,(data.ansAll-data.ansRight))
                    }
                })
            }
        }
    }
}
function abcd(box,d1,d2,d3,d4,d5) {
    var option;
    option = {
        color: [                //自定义颜色组
            '#f600ff',
            '#d5fdff',
            '#00f7ff',
            '#ffec11',
            '#04643a',
        ],
        tooltip: {
            trigger: 'item'
        },
        legend: {                              //表头样例
            top: '5%',
            left: 'center'
        },
        series: [
            {
                name: '人数',      //表名
                type: 'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                itemStyle: {
                    borderRadius: 10,
                    borderColor: '#fff',
                    borderWidth: 0          //图表边框长度
                },
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {           //中心字体样式
                    label: {
                        show: true,
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                },
                data: [
                    {value: d1, name: 'A'},
                    {value: d2, name: 'B'},
                    {value: d3, name: 'C'},
                    {value: d4, name: 'D'},
                    {value: d5, name: '未识别'},
                ]
            }
        ]
    };
    var myChart = echarts.init(box);
    myChart.clear();                                        //重载动画
    option && myChart.setOption(option);
}
function truefalse(box,d1,d2) {
    var option;
    option = {
        color: [                //自定义颜色组
            '#219600',
            '#c80a00',
        ],
        tooltip: {
            trigger: 'item'
        },
        legend: {                              //表头样例
            top: '5%',
            left: 'center'
        },
        series: [
            {
                name: '人数',      //表名
                type: 'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                itemStyle: {
                    borderRadius: 10,
                    borderColor: '#fff',
                    borderWidth: 0          //图表边框长度
                },
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {           //中心字体样式
                    label: {
                        show: true,
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                },
                data: [
                    {value: d1, name: '正确'},
                    {value: d2, name: '错误'},
                ]
            }
        ]
    };
    var myChart = echarts.init(box);
    myChart.clear();
    option && myChart.setOption(option);
}
function nextAll() {                                          //页面加载时触发
    var div=document.getElementById("score");               //选定指定div
    var href=document.getElementsByName("dis");             //指定div下遍历所有name
    for (i=0;i<href.length;i++){                            //循环绑定click function
        href[i].onclick=function () {
            var val=$(this).attr("id");
            var order=val.split("d")[0];
            var leftbox=document.getElementById("leftbox");
            var mainbox=document.getElementById("tablebox");
            var ans1=document.getElementById(val+1);
            var ans2=document.getElementById(val+2);
            if (ans1.style.display=="block"){
                ans1.style.display="none";
                ans2.style.display="none";
                leftbox.style.height="1000px";                               //先等于1000px，再等于mainbox高度，让mainbox恢复正常状态
                leftbox.style.height=mainbox.offsetHeight+"px";           //解决高度自适应问题  结尾+px
            }
            else {
                ans1.style.display="block";
                ans2.style.display="block";
                leftbox.style.height=mainbox.offsetHeight+"px";           //解决高度自适应问题  结尾+px
                mainbox.style.marginBottom="50px";
                if (x==0){
                    getMes(order,ans1,ans2,val);
                    x=x+1;
                }
            }
        }
    }
}
function getMes(order,box1,box2,val) {
    var testid=document.getElementById("testid").value;
    $.ajax({
        url:'getMes',
        type:'post',
        data:{"testid":testid,"order":order},
        dataType:'json',
        success:function (data) {
            var mesList=data.mesList;
            for (i=0;i<data.mesnum;i++){
                var mes=mesList[i];
                var createTime=mes.mes_time;
                var reCreateTime=createTime.substring(5,7)+"月"+createTime.substring(8,10)+"日";
                mes.mes_time=reCreateTime;
                if (mes.user_type==1){
                    var box=val+"1";
                    document.getElementById(val+"1null").style.display="none";
                    var html=template('mesTemplate',mes);
                    $("#" +box+ "").append(html);
                    //$("#" +box+ "").append(html);
                }else {
                    var box=val+"2";
                    document.getElementById(val+"2null").style.display="none";
                    var html=template('mesTemplate',mes);
                    $("#" +box+ "").append(html);
                }
            }
        }
    })
}
$(function () {
    $('#gotest').click(function () {
        location.href="teacher-create";
    })
    $('#logo').click(function () {
        location.href='index';
    })
    $('#backmain').click(function () {
        location.href='teacher-main';
    })
    $('#back').click(function () {
        var testid=document.getElementById("testid").value;
        $.ajax({
            url:'goTeacherStatus',
            type:'post',
            data:{"testid":testid},
            dataType:'json',
            success:function () {
                location.href="teacher-status";
            }
        })
    })
})