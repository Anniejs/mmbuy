$(function(){
 $.ajax({
   type:"get",
   url:"http://192.168.27.62:9090/api/getcategorytitle",
   dataType:"json",
   success:function(info){
     console.log(info);
     var htmlStr = template("tmp1",info);
     $(".category .category_title").html(htmlStr);
     
     $(".getCategory").on("click", function () {
      var id = $(this).data("id");
      if($(this).next().find("li").length == 0){
          renderCategory(id);
      } else {
          $(this).next().slideToggle();
      }
    }); 
   }  
 });
 
  

 //发送ajax获取分类id 
 function renderCategory(id){
   $.ajax({
     type:"get",
     url:"http://192.168.27.62:9090/api/getcategory",
     data:{
      titleid:id,
     },
     dataType:"json",
     success:function(info){
       console.log(info);
       $ul = $("a[index=" + id + "]").next();
       $ul.html(template("tmp2", {
           list: info.result
       }));
       $ul.css({
           "display":"none"
       });
       $ul.slideDown();
   }
     
   })

 }

});$(function(){
 $.ajax({
   type:"get",
   url:"http://192.168.27.62:9090/api/getcategorytitle",
   dataType:"json",
   success:function(info){
     console.log(info);
     var htmlStr = template("tmp1",info);
     $(".category .category_title").html(htmlStr);
     
     $(".getCategory").on("click", function () {
      var id = $(this).data("id");
      if($(this).next().find("li").length == 0){
          renderCategory(id);
      } else {
          $(this).next().slideToggle();
      }
    }); 
   }  
 });
 
  

 //发送ajax获取分类id 
 function renderCategory(id){
   $.ajax({
     type:"get",
     url:"http://192.168.27.62:9090/api/getcategory",
     data:{
      titleid:id,
     },
     dataType:"json",
     success:function(info){
       console.log(info);
       $ul = $("a[index=" + id + "]").next();
       $ul.html(template("tmp2", {
           list: info.result
       }));
       $ul.css({
           "display":"none"
       });
       $ul.slideDown();
   }
     
   })

 }

});