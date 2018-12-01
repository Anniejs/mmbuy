$(function () {
  var productid = tools.getParam("productid");
  // console.log(productid);
  $.ajax({
    type: "get",
    url: "http://127.0.0.1:9090/api/getdiscountproduct",
    data: {
      productid: productid
    },
    dataType: "json",
    success: function (info) {
      console.log(info);
      var htmlStr = template("saveTmp",info);
      $(".savecontent").html(htmlStr);
    }
  });
});