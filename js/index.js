$(function(){
   // 发送ajax请求获取menu信息渲染到页面
   $.ajax({
    type:"get",
    url:"http://192.168.27.62:9090/api/getindexmenu",
    success:function(data){
        console.log(data);
        $(".nav ul").html(template("tpl",{list : data.result}));
        $(".more").nextAll().hide();
    }
});
 // 点击更多按钮显示隐藏最后一行li
 $(".nav").on("click",".more",function(){
    $(this).nextAll().slideToggle();
});

  //发送ajax请求去后台拿产品的数据
  $.ajax({
    type:"get",
    url:"http://192.168.27.62:9090/api/getmoneyctrl",
    dataType:"json",
    success:function(data){
      console.log(data);
      var comcountArr = [];
    //   var comcountObj = {};
      data.result.forEach(function(e,i){
          comcountArr.push(e.productComCount.slice(1).split("人")[0]);
          console.log(comcountArr);
          console.log(e);   
      });
      comcountArr.forEach(function(e,i){
          data.result[i].counts = e;
      });
      console.log(data.result);      
      var htmlStr = template("productTmp",{list:data.result});
      $(".product ul").html(htmlStr);
    }
  });

});