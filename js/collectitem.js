$(function () {
  //先定义shopid areaid
  var shopid;
  var areaid;
  //功能1-点击京东导航渲染下面的列表内容
  $(".jd").one("click", function () {
    renderShop();
  });

  //功能2-点击店铺区域渲染下面的内容
  $(".hb").one("click",function(){
    renderArea();   
  });
  //封装一个渲染店铺区域的方法
  function renderArea(){
    $.ajax({
      type: "get",
      url: "http://127.0.0.1:9090/api/getgsshoparea",
      dataType: "json",
      success: function (info) {
      console.log(info);
      var htmlStr = template("secondTmp", info);
      $(".second_ul_hb").html(htmlStr);
      $ulh = $(".second_ul_hb");
      $ulh.css({
        "display":"none"
      });
      $ulh.slideDown();
      $(".hb").on("click", function () {
        $ulh.prev().stop(true).hide();
        $ulh.stop().slideToggle();
      });
      $lis = $(".second_ul_hb li");
      $lis.each(function(){
        $(this).on("click",function(){
           // 添加now类
           $(this).addClass("now").siblings().removeClass("now");
  
           // 获取参数areaid
           areaid = $(this).data("areaid");
           // 修改nav导航的值
           var areaName = $(this).data("name");
           areaName = areaName.split("（")[0];
           $(".nav_name_hb").text(areaName);
  
           //隐藏ul
           $(this).parent().hide();
  
           // 重新渲染
           renderPro(shopid,areaid);
        })
      })    
      }
    });
  }
  //封装渲染二级导航的方法
  function renderShop() {
    $.ajax({
      type: "get",
      url: "http://127.0.0.1:9090/api/getgsshop",
      dataType: "json",
      success: function (info) {
        console.log(info);
        var htmlStr = template("firstTmp", info);
        $(".second_ul").html(htmlStr);
        var $ul = $(".second_ul");
        //让ul隐藏
        $ul.css({
          "display": "none"
        });
        $ul.slideDown();
        $(".jd").on("click", function () {
          $ul.next().stop(true).hide();
          $ul.stop().slideToggle();
      });
      // // 给ul下面的所有li注册点击事件
      $lis = $(".second_ul li");
      $lis.each(function(){
        $(this).on("click",function(){
          console.log(111);
          $(this).addClass("now").siblings().removeClass("now");
          
          //获取参数shopid
          shopid = $(this).data("shopid");
    
          // 修改nav导航的值
          var shopName = $(this).data("name");
          $(".nav_name_jd").text(shopName);
    
          // 隐藏掉ul
          $(this).parent().hide();
    
          // 重新渲染
          renderPro(shopid,areaid);
        })
      });
      }
    })

  }
  renderPro(shopid, areaid);
  //封装一个渲染产品内容的方法
  function renderPro(shopid, areaid) {
    $.ajax({
      type: "get",
      url: "http://127.0.0.1:9090/api/getgsproduct",
      data: {
        shopid: shopid || 0,
        areaid: areaid || 0
      },
      dataType: "json",
      success: function (info) {
        console.log(info);
        var htmlStr = template("mainTmp", info);
        $(".main .li_list").html(htmlStr);
      }
    })
  
  }
});
