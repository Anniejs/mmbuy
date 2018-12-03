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
  //点击产品标签元素，显示模态框
  $(document).on('click', '#showModal', function() { 
    $("#slideModal").show();

    var mySwiper = new Swiper ('.swiper-container', {
      loop: true, // 循环模式选项
      
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
      },
      
      // 如果需要前进后退按钮
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      
    })            
  });
})