var browserName = (function (agent) {
  switch (true) {
    case agent.indexOf("edge") > -1:
      return "MS Edge";
    case agent.indexOf("edg/") > -1:
      return "Edge ( chromium based)";
    case agent.indexOf("opr") > -1 && !!window.opr:
      return "Opera";
    case agent.indexOf("chrome") > -1 && !!window.chrome:
      return "Chrome";
    case agent.indexOf("trident") > -1:
      return "MS IE";
    case agent.indexOf("firefox") > -1:
      return "Mozilla Firefox";
    case agent.indexOf("safari") > -1:
      return "Safari";
    default:
      return "other";
  }
})(window.navigator.userAgent.toLowerCase());

if (browserName.toString() == "MS Edge") {
  alert("Nem támogatott böngésző");
}
;
var path = window.location.pathname;
var page = path.split("/").pop();
console.log( page );
var NAME = "";
if(page == "kemeny.html"){
    NAME = "#account"
} 
else if (page == "janosi.html"){
    NAME = "#about"

}
var LINK = false;
window.onscroll = function a() {
  if (window.pageYOffset > 10) {
    document.getElementById("eltun").style.opacity = "0";
    setTimeout(anim_n, 200);
    LINK = true
    console.log(LINK)
}
  else if (window.pageYOffset <= 0) {
    console.log(LINK)
    
    anim_b();
    document.getElementById("eltun").style.opacity = "1";
    setTimeout(a, 200);
    linkker();

  }
};
function linkker() {
  if (LINK) {
    window.location = "http://127.0.0.1:5500/" + page + NAME;
    LINK = false

}
}
function anim_n() {
  if (!window.pageYOffset <= 0) {
    document.getElementById("eltun").style.display = "none";
  }
}

function anim_b() {
  document.getElementById("eltun").style.display = "block";
}
function elo() {
  anim_b();
  document.getElementById("eltun").style.opacity = "1";
}
