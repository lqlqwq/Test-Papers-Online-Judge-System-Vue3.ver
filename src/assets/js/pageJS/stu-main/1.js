$(function () {
    $.ajax({
        url:'stuList.data',
        type:'post',
        dataType:'json',
        success:function (data) {
            if (data.code=="ok"){
                var stuList=data.ans;
                for (var i = 0; i < stuList.length; i++) {
                    var list=stuList[i];
                    var createTime=stuList[i].createtime;
                    var reCreateTime=createTime.substring(0,4)+"年"+createTime.substring(5,7)+"月"+createTime.substring(8,10)+"日"+createTime.substring(11)+":00";
                    var endTime=stuList[i].endtime;
                    var reEndTime=endTime.substring(0,4)+"年"+endTime.substring(5,7)+"月"+endTime.substring(8,10)+"日"+endTime.substring(11)+":00";
                    var nowDay=new Date();
                    var someDay=new Date(endTime.substring(0,4),endTime.substring(5,7)-1,endTime.substring(8,10),endTime.substring(11,13),endTime.substring(14));
                    if (nowDay>someDay){stuList[i].status="END";stuList[i].color="red";}else {stuList[i].status="RUN";stuList[i].color="green";}
                    stuList[i].createtime=reCreateTime;
                    stuList[i].endtime=reEndTime;
                    var html=template('testTemplate',list);
                    $('#test-table').append(html);
                    shabi();
                }
            }
        }
    })
    $('#gotest').click(function () {
        location.href="stu-test";
    })
    $('#logo').click(function () {
        location.href='index';
    })
})
function shabi() {
    var href=document.getElementsByName("scorea");
    for (i=0;i<href.length;i++){
        href[i].onclick=function () {
            var id=$(this).attr("id");
            var idNum=id.split("s")[0];
            $.ajax({
                url:'goScore',
                type:'post',
                data:{"testid":idNum},
                dataType:'json',
                success:function () {
                    location.href="stu-score";
                }
            })
        }
    }
}