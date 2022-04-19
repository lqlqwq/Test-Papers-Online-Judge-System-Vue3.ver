function barChange(){
    var barBox=document.getElementById("bar");              //进度条
    var bar=document.getElementsByClassName("bar-num");    //文本DIV
    var numpx=barBox.offsetWidth;
    bar[0].innerText=(Math.round(numpx/1.96)+"%");
}
$(function () {
    $('#upload').click(function () {
        if ($('#testphoto')[0].value){
            $btnReg = $(this);
            $btnReg.text("正在上传中...");
            $btnReg.attr("disabled","disabled");
            var testid=document.getElementById("testid").value;
            var formData=new FormData;
            var file=$('#testphoto')[0].files[0];
            formData.append("file",file);
            formData.append("testid",testid);
            var bar=document.getElementById("bar");
            var barnum=document.getElementsByClassName("bar-num");
            bar.style.transition="width 46s ease";
            bar.style.width="194px";
            var barNum=window.setInterval("barChange()","100");
            $.ajax({
                url:'upload.data',
                type:'post',
                cache:false,
                data:formData,
                processData:false,
                contentType:false,
                success:function (data) {
                    if (data.code=="ok"){
                        bar.style.transition="width 1s linear";
                        bar.style.width="196px";
                        window.clearInterval(barNum);
                        barnum[0].innerText="100%";
                        alert("上传成功");
                        location.href='stu-score';
                    }else {
                        alert(data.msg);
                        location.reload();
                    }
                }
            })
        }
        else {alert("请选择文件！")}
    })
})
// function uploadProgress(evt) {
//     alert(1111);
//     var percentComplete = Math.round((evt.loaded)*100/evt.total);    //evt.load文件上传的大小  evt.total文件的总大小
//     $('#percent').html(percentComplete + "%");                        //加载进度条，同时显示信息
//     $('#progressNumber').css("width",""+percentComplete+"px");
// }