$(function(){
  var couponid = tools.getParam("couponid");
  console.log(couponid);
  $.ajax({
    type:"get",
    url:"http://127.0.0.1:9090/api/getcouponproduct",
    data:{
      couponid:couponid
    },
    dataType:"json",
    success:function(info){
      console.log(info);
      var htmlStr = template("couponproTmp",info);
      $(".product_list").html(htmlStr);
    }
  })
})