$(function () {
  var categoryid = tools.getParam("categoryId");
  var totlePage;
  var category;
  var currentPage = 1;

  $.ajax({
    type: "get",
    url: "http://127.0.0.1:9090/api/getcategorybyid",
    data: {
      categoryid: categoryid
    },
    success: function (info) {
      console.log(info);
      $(".nav_left ul").html(template("cagetoryId", info));
      category = info.result[0].category;
    }
  });

  function render(pageid) {
    $.ajax({
      type: "get",
      url: "http://127.0.0.1:9090/api/getproductlist",
      data: {
        categoryid: categoryid,
        pageid: pageid
      },
      success: function (data) {
        totlePage = Math.ceil(data.totalCount / data.pagesize);
        data.category = category;
        console.log(data);
        console.log(totlePage);
        console.log(currentPage);
        $(".pro_content").html(template("proTmp", data));
        //$(".page .select").text(currentPage+"/"+totlePage);

        // console.log($(".page .select").val());

        renderPage(pageid);



      }
    });
  }

  function renderPage(currentPageNum) {
    $("#page_select").empty()
    // 更改分页的数字
    // var page = [];
    // for (var i = 1; i < totlePage + 1; i++) {
    //   page.push({
    //     currentPageNum,
    //     totlePage
    //   });
    // };
    // console.log({
    //   data: page
    // });
    // $('#page_select').append(template('page_list', {
    //   data: page
    // }));
    for (var i = 1; i <= totlePage; i++) {
      $("#page_select").append('<option value=' + i + '>' + i + '/' + totlePage + '</option>')
    }
    // 同步当前页面标识为渲染的页数
    currentPage = currentPageNum;

  }

  render(currentPage);
  $("#page_select").on("change", function () {
    render($('#page_select option:selected').val());
    // 返回顶部
    $(window).scrollTop(0);
  })
    $(".next").on("click",function(){
      if(currentPage >= totlePage){
          return false;
      }
      currentPage++;
      render(currentPage);
  });
  $(".prev").on("click",function(){
      if(currentPage <= 0){
          return false;
      }
      currentPage--;
      render(currentPage);
  });
})





// $(function () {
//   var categoryid = tools.getParam("catagoryid");
//   var totlePage;
//   var category;
//   var currentPage = 1;
//   $.ajax({
//       type: "get",
//       url: "http://127.0.0.1:9090/api/getcategorybyid",
//       data: {
//           categoryid: categoryid
//       },
//       success: function (data) {
//           console.log(data);
//           $(".nav_left ul").html(template("cagetoryId", data));
//           category = data.result[0].category;
//           console.log(category);
//       }
//   });
//   // function render(pageid) {
//   //     $.ajax({
//   //         type: "get",
//   //         url: "http://127.0.0.1:9090/api/getproductlist",
//   //         data: {
//   //             categoryid: categoryid,
//   //             pageid: pageid
//   //         },
//   //         success: function (data) {
//   //             totlePage = Math.ceil(data.totalCount / data.pagesize);
//   //             data.category = category;
//   //             console.log(data);
//   //             console.log(totlePage);
//   //             console.log(currentPage);
//   //             $(".pro_content").html(template("proTmp",data));
//   //             $(".page select").val(currentPage+"/"+totlePage);
//   //             console.log($(".page select").val());
//   //         }
//   //     });
//   // }
//   // render(currentPage);
//   // // 点击下一页渲染下一页
//   // $(".next").on("click",function(){
//   //     if(currentPage >= totlePage){
//   //         return false;
//   //     }
//   //     currentPage++;
//   //     render(currentPage);
//   // });
//   // $(".prev").on("click",function(){
//   //     if(currentPage <= 0){
//   //         return false;
//   //     }
//   //     currentPage--;
//   //     render(currentPage);
//   // });
// });