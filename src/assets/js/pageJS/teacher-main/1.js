function pageNext(){
    var nextPage=document.getElementById("page").value;
    $.ajax({
        url:'testList.data',
        data:{"page":nextPage},
        type:'post',
        dataType:'json',
        success:function (data) {
            var testList=data.ans.records;
            var infoList=data.info;
            document.getElementById("page").value=1+Number(nextPage);
            for (var i=0;i<testList.length;i++){
                var test=testList[i];
                var createTime=testList[i].createtime;
                var reCreateTime=createTime.substring(0,4)+"年"+createTime.substring(5,7)+"月"+createTime.substring(8,10)+"日"+createTime.substring(11)+":00";
                var endTime=testList[i].endtime;
                var reEndTime=endTime.substring(0,4)+"年"+endTime.substring(5,7)+"月"+endTime.substring(8,10)+"日"+endTime.substring(11)+":00";
                var nowDay=new Date();
                var someDay=new Date(endTime.substring(0,4),endTime.substring(5,7)-1,endTime.substring(8,10),endTime.substring(11,13),endTime.substring(14));
                if (nowDay>someDay){test.status="END";test.color="red";}else {test.status="RUN";test.color="green";}
                test.createtime=reCreateTime;
                test.endtime=reEndTime;
                test.finishNum=infoList[i].finishNum;
                test.avgscore=infoList[i].avgScore;
                var html=template('testTemplate',test);
                $('#test-table').append(html);
                shabi();
                if (testList.length<12){
                    document.getElementById("nextPage").style.display="none";
                }
            }
        }
    })
}
function shabi() {
    var href=document.getElementsByName("scorea");
    for (i=0;i<href.length;i++){
        href[i].onclick=function () {
            var id=$(this).attr("id");
            var idNum=id.split("s")[0];
            $.ajax({
                url:'goTeacherStatus',
                type:'post',
                data:{"testid":idNum},
                dataType:'json',
                success:function () {
                    location.href="teacher-status";
                }
            })
        }
    }
}
$(function () {
    $('#gotest').click(function () {
        location.href="teacher-create";
    })
    $('#logo').click(function () {
        location.href='index';
    })
})
$(function () {
    pageNext();
})
$(function () {
    $('#nextPage').click(function () {
        pageNext()
    })
})