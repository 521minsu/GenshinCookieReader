function getCookieBackbone(domain, name, callback) {
    chrome.cookies.get({"url": domain, "name": name}, function(cookie) {
        if(callback) {
            callback(cookie.value);
        }
    });
}

function getCookies(){
    getCookieBackbone("https://genshin.hoyoverse.com/", "account_id", function(aid) {
        getCookieBackbone("https://genshin.hoyoverse.com/", "cookie_token", function(ato) {
            //alert(`여행자님의 원신 토큰 정보입니다.\naccount_id=${aid}\ncookie_token=${ato}`);
            document.getElementById("aidtxt").innerHTML=aid;
            document.getElementById("ctotxt").innerHTML=ato;
        });
    });
}
document.getElementById("testButton").addEventListener("click", getCookies);
