$(function () {
    $('#backmain').click(function () {
        location.href="teacher-main";
    })
    $('#logo').click(function () {
        location.href='index';
    })
})
$(function () {
    $('#set-ans').click(function () {
        var num=document.getElementById("num").value;
        if (num>40){
            alert("题目数量超过最大限制");
            document.getElementById("num").value="";
        }
        else {
            var nowDay=new Date();
            var setdate=document.getElementById("date").value;
            var settime=document.getElementById("time").value;
            var yyyy=setdate.split("-")[0];
            var MM=setdate.split("-")[1];
            var dd=setdate.split("-")[2];
            var HH=settime.split(":")[0];
            var mm=settime.split(":")[1];
            var someDay=new Date(yyyy,MM-1,dd,HH,mm);
            var count=(nowDay-someDay);
            if (count>0){
                alert("截止时间输入错误！");
                document.getElementById("date").value="";
                document.getElementById("time").value="";
            }else {
                document.getElementById("test-box").style.display="none";
                document.getElementById("ans-box").style.display="block";
                var truenum=Math.ceil(num/5);
                for (i=1;i<=8;i++){
                    document.getElementById("ansbox"+i).style.display="none";
                }
                for (i=1;i<=truenum;i++){
                    document.getElementById("ansbox"+i).style.display="block";
                }
            }
        }
    })
})
$(function () {
    $("#gogogo").click(function () {
        $btnReg = $(this);
        $btnReg.text("正在处理...");
        $btnReg.attr("disabled","disabled");
        $.ajax({
            url:'settest.data',
            type:'post',
            dataType:'json',
            data:$('#create').serialize(),
            success:function (data) {
                if (data.code=="ok"){
                    alert(data.msg);
                    location.href="teacher-main";
                } else {
                    alert(data.msg);
                    $btnReg.text("提交");
                    $btnReg.removeAttr("disabled");
                }
            }
        })
    })
})
$(function () {
    $("#re-ans").click(function () {
        document.getElementById("test-out-box").style.display="none";
        document.getElementById("re-test-out-box").style.display="block";
    })
})
$(function () {
    $("#create-test-butt").click(function () {
        location.reload();
    })
})
$(function () {
    $("#search").click(function () {
        $btnReg = $(this);
        $btnReg.text("正在处理...");
        $btnReg.attr("disabled","disabled");
        $.ajax({
            url:'searchtest.data',
            type:'post',
            dataType:'json',
            data:$('#testid-search').serialize(),
            success:function (data) {
                alert(data.msg);
                if (data.code=="ok") {
                    var truenum=Math.ceil(data.teacherTest.ans_num/5);
                    document.getElementById("hideid").value=data.teacherTest.test_id;
                    document.getElementById("re-test-search-box").style.display="none";
                    document.getElementById("re-test-revise-box").style.display="block";
                    for (i=1;i<=truenum;i++){
                        document.getElementById("revisebox"+i).style.display="block";
                        document.getElementById("revisevalue"+i).value=data.teacherTest.original_ans.substring((i-1)*5,(i*5));
                    }
                }else {
                    $btnReg.text("查询答案");
                    $btnReg.removeAttr("disabled");
                }
            }
        })
    })
})
$(function () {
    $('#confirm-revise').click(function () {
        $btnReg = $(this);
        $btnReg.text("正在处理...");
        $btnReg.attr("disabled","disabled");
        $.ajax({
            url:'revise.data',
            type:'post',
            dataType:'json',
            data:$('#revise').serialize(),
            success:function (data) {
                if (data.code=="ok"){
                    alert(data.msg);
                    location.href="teacher-main";
                } else{
                    alert(data.msg);
                    location.reload();
                }
            }
        })
    })
})