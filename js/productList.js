$(function () {
  var currentPage = 1;
  var totlePage;
  var pagesize;
  var categoryid = tools.getParam("categoryId");
  var category;
  // //已进入页面就渲染一次
  //   render();
  console.log(location.search);
  $.ajax({
    type: "get",
    url: "http://127.0.0.1:9090/api/getcategorybyid",
    data: {
      categoryid: categoryid
    },
    dataType: "json",
    success: function (info) {
      console.log(info);
      var htmlStr = template("cagetoryId", info);
      $(".nav_left ul").html(htmlStr);
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
      dataType: "json",
      success: function (info) {
        console.log(info);
        totlePage = Math.ceil(info.totalCount / info.pagesize);
        info.category = category;
        var htmlStr = template("proTmp", info);
        $(".pro_content").html(htmlStr);
        // $(".page .select").val(currentPage+"/"+totlePage);


        // totlePage = info.totalCount;
        // pagesize = info.pagesize;
        // pagesize = info.pagesize;
        // var setpage = Math.ceil(totlePage / pagesize)

        // $("span").text(pageid + "/" + setpage)


        // for (var i = 1; i <= setpage; i++) {
        //   str += '<option>' + i + '/' + setpage + '</option>'
        // }

        // str;
        // $('.select').html(str);

        // var index = Option.index + 1;

        // pagesize = index;
        // render();
      }
    });
  }
  //已进入页面先渲染当前页就是第一页
  render(currentPage);
  //点击上一下下一页的注册事件

  $(".next").on("click", function () {
    if (currentPage >= totlePage) {
      return false;
    }
    currentPage++;
    render(currentPage);


  });
  $(".prev").on("click", function () {
    if (currentPage <= 0) {
      return false;
    }
    currentPage--;
    render(currentPage);
  })
})