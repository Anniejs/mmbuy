$(function () {
  //功能1-实现区域滚动
  var myScroll = new IScroll('#wrapper', {
    scrollX: true, //横向滚动
    scrollY: false //纵向滚动


  });
  var titleid = 0;
  //功能2-渲染头部导航
  function slideRender(){
    $.ajax({
      type: "get",
      url: "http://127.0.0.1:9090/api/getbaicaijiatitle",
      dataType: "json",
      success: function (info) {
        console.log(info);
        var htmlStr = template("etamTmp", info);
        $(".head_tap ul").html(htmlStr);
        //功能3-导航切换效果    
        var lis = $(".nav_list").children();
        console.log(lis);
        lis.each(function () {
          $(this).on("click", function () {
            var titleid = $(this).data("id");
            console.log(titleid);
            $(this).addClass("active").siblings().removeClass("active");
            console.log(titleid);
            renderPro(titleid)
  
          })
        });
        
      }
    });

  }
 
  slideRender();

  //渲染产品列表模块

  function renderPro(titleid) {
    
    $.ajax({
      type: "get",
      url: "http://127.0.0.1:9090/api/getbaicaijiaproduct",
      data: {
        titleid: titleid
      },
      dataType: "json",
      success: function (info) {
        console.log(info);
        var htmlStr = template("etamTmp1", info);
        $(".pro_list ul").html(htmlStr);
      }
    });

  }
  renderPro(titleid);
});