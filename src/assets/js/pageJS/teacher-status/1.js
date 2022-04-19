var x=0;
window.onload=function zero() {
    $.ajax({
        url:'getTeacherTest.data',
        type:'post',
        dataType:'json',
        success:function (data) {
            var ansList=data.ansList;
            for (var i=1;i<=data.num;i++){
                var test=ansList[i-1];
                test.truePercent=test.truePercent+"%";
                var html=template('testTemplate',test);
                $('#score').append(html);
            }
            document.getElementById("avgScore").innerText=data.avgScore;
            document.getElementById("finishNum").innerText=data.finishNum;
            document.getElementById("testid").value=data.testid;
            document.getElementById("maxScore").innerText=data.maxScore;
            document.getElementById("minScore").innerText=data.minScore;
            firstAll(data.finishNum);
            nextAll();
            var length=document.getElementById("score").offsetHeight;
            if (length>1010){
                document.getElementById("leftbox").style.height=length+"px";
            }
        }
    })
    $.ajax({
        url:'getStuTest.data',
        type:'post',
        dataType:'json',
        success:function (data) {
            var stulist=data.testList;
            var nameList=data.nameList;
            for (var a=1;a<=data.lengthLong;a++){
                var stu=stulist[a-1];
                stu.nickname=nameList[a-1];
                stu.num=a;
                var createTime=stu.createtime;
                var reCreateTime=createTime.substring(0,4)+"年"+createTime.substring(5,7)+"月"+createTime.substring(8,10)+"日"+createTime.substring(11)+":00";
                stu.createtime=reCreateTime;
                var temp=template('stuTemplate',stu);
                $('#repor-table').append(temp);
                thirdAll();
                fourthAll();
            }
        }
    })
}
function firstAll(finishNum) {                                         //页面加载时触发
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
                var AA=document.getElementById(ansNum+"ansA").value;
                var BB=document.getElementById(ansNum+"ansB").value;
                var CC=document.getElementById(ansNum+"ansC").value;
                var DD=document.getElementById(ansNum+"ansD").value;
                var ansNull=document.getElementById(ansNum+"ansNull").value;
                var ansRight=document.getElementById(ansNum+"ansRight").value;
                abcd(ans1,AA,BB,CC,DD,ansNull);
                truefalse(ans2,ansRight,(finishNum-ansRight));
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
            '#c80a00',
            '#219600',
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
                    {value: d2, name: '错误'},
                    {value: d1, name: '正确'},
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
            var ans3=document.getElementById(val+3);
            if (ans1.style.display=="block"){
                ans1.style.display="none";
                ans2.style.display="none";
                ans3.style.display="none";
                leftbox.style.height="1000px";                               //先等于1000px，再等于mainbox高度，让mainbox恢复正常状态
                leftbox.style.height=mainbox.offsetHeight+"px";           //解决高度自适应问题  结尾+px
            }
            else {
                ans1.style.display="block";
                ans2.style.display="block";
                ans3.style.display="block";
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
function thirdAll() {
    var href=document.getElementsByName("detail");
    for (i=0;i<href.length;i++){
        href[i].onclick=function () {
            var val=$(this).attr("id");
            var stuId=val.split("d")[0];
            var testId=document.getElementById("testid").value;
            $.ajax({
                url:'stuDetail.data',
                type:'post',
                data:{"stuid":stuId,"testid":testId},
                dataType:'json',
                success:function () {
                    location.href="teacher-stu";
                }
            })
        }
    }
}
function fourthAll() {
    var href=document.getElementsByName("textbutton");
    for (i=0;i<href.length;i++){
        href[i].onclick=function () {
            var val=$(this).attr("id");
            var text=document.getElementById(val+"area").value;
            var testid=document.getElementById("testid").value;
            var order=val.split("t")[0];
            $.ajax({
                url:'addComment',
                type:'post',
                data:{"testid":testid,"order":order,"text":text},
                dataType:'json',
                success:function () {
                    location.href="teacher-status";
                }
            })
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
})
$(function () {
    $('#stuRepor').click(function () {
        var score=document.getElementById("testRepor");
        score.style.color="black";
        var scoreBox=document.getElementById("score")
        scoreBox.style.display="none";
        var repor=document.getElementById("stuRepor")
        repor.style.color="rgb(0,100,255)";
        document.getElementById("repor-box").style.display="block";
    })
    $('#testRepor').click(function () {
        var score=document.getElementById("testRepor");
        score.style.color="rgb(0,100,255)";
        var scoreBox=document.getElementById("score")
        scoreBox.style.display="block";
        var repor=document.getElementById("stuRepor")
        repor.style.color="black";
        document.getElementById("repor-box").style.display="none";
    })
})