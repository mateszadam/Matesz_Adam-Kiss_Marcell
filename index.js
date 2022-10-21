var browserName = (function (agent) {
    switch (true) {
        case agent.indexOf("edge") > -1: return "MS Edge";
        case agent.indexOf("edg/") > -1: return "Edge ( chromium based)";
        case agent.indexOf("opr") > -1 && !!window.opr: return "Opera";
        case agent.indexOf("chrome") > -1 && !!window.chrome: return "Chrome";
        case agent.indexOf("trident") > -1: return "MS IE";
        case agent.indexOf("firefox") > -1: return "Mozilla Firefox";
        case agent.indexOf("safari") > -1: return "Safari";
        default: return "other";
    }
})(window.navigator.userAgent.toLowerCase());

if(browserName.toString() == "MS Edge"){
    alert("Nem támogatott böngésző")
}

window.onscroll = function a() {
    if(window.pageYOffset > 10){
        document.getElementById("eltun").style.opacity = "0"
        setTimeout(anim_n, 200);
    }
    if(window.pageYOffset <= 0){
        anim_b();

        document.getElementById("eltun").style.opacity = "1"
        setTimeout(a, 8);
    }
};
function anim_n(){
    document.getElementById("eltun").style.display = "none"
}

function anim_b(){
    document.getElementById("eltun").style.display = "block"
}
function elo(){
    anim_b()
    document.getElementById("eltun").style.opacity = "1"
}
