$(function(){
  //渲染优惠券列表
  $.ajax({
    type:"get",
    url:"http://127.0.0.1:9090/api/getcoupon",
    dataType:"json",
    success:function(info){
      console.log(info);
      var htmlStr = template("couponTmp",info);
      $(".coupon_product ul").html(htmlStr);
    }
  });
});