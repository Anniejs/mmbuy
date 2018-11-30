$(function () {
  var productid = tools.getParam("productId");
  $.ajax({
    type: "get",
    url: "http://192.168.27.24:9090/api/getproduct",
    data: {
      productid: productid
    },
    dataType: "json",
    success: function (info) {
      console.log(info);
      var brandName = tools.getParam("brandName");
      var category = tools.getParam("category");
      info.result[0].brandName = brandName;
      info.result[0].category = category;
      var htmlStr = template("productId", info);
      $(".nav_left ul").html(htmlStr);
    }
  });


  //发送请求渲染产品详情
  $.ajax({
    type:"get",
    url:"http://192.168.27.24:9090/api/getproduct",
    data:{
      productid:productid
    },
    dataType:"json",
    success:function(info){
      console.log(info);
      var htmlStr = template("detailTmp",info);
      $(".pro_chart").html(htmlStr);
    }
  });

  //发送ajax获取评论详情
  $.ajax({
    type:"get",
    url:"http://192.168.27.24:9090/api/getproductcom",
    data:{
      productid:productid
    },
    dataType:"json",
    success:function(info){
      console.log(info);
    }
  })
})