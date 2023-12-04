var $ = function (id) {
    return document.getElementById(id);
  };
  
var gen=function(){
    $("m").checked=false;
};


var gen2=function(){
    $("f").checked=false;
};

  window.onload = function () {
    // $("button").onclick = processEntries;
    $('f').onclick = gen;
    $('m').onclick = gen2;
  };
  