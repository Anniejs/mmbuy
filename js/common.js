//封装一个获取地址栏参数的函数，方便以后使用

function getSearch(name) {
  //获取地址栏参数
  var search = location.search;
  //解析成中文
  search = decodeURI(search);
  // 去掉第一个问号
  search = search.slice(1); // "key=匡威鹏&name=pp&age=18&desc=帅"
  // console.log(str);
  // split 将字符串分割数组
  var arr = search.split("&");
  // console.log(arr);
  var obj = {};
  arr.forEach(function (v, i) { //v就是每一项
    var key = v.split("=")[0];
    var value = v.split("=")[1];
    obj[key] = value;


  });
  return obj[name];

}