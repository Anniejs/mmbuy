$(function(){
  $.ajax({
    type:"get",
    url:"http://127.0.0.1:9090/api/getmoneyctrl",
    dataType:"json",
    success:function(info){
      console.log(info);
      var comcountArr = [];
        info.result.forEach(function(e,i){
            comcountArr.push(e.productComCount.slice(1).split("人")[0]);
            // console.log(comcountArr);
            // console.log(e);   
        });
        comcountArr.forEach(function(e,i){
            info.result[i].counts = e;
        });
      var htmlStr = template("saveTmp",{list:info.result});
      $(".recommen_product ul").html(htmlStr);
    }
  })
})