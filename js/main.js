function speedTest(){tim=10,t=setInterval("tim++",10);for(var e=0;e<lis.length;e++){var i=lis[e],r=i.href;speed[e].innerHTML="测试中...<img src="+r+' width="1" height="1" onerror="speedTouch('+e+')">'}}function speedTouch(e){if(tim>1e3)var t="超时";else if(fastest)var t=(tim/100).toFixed(2)+"秒";else{fastest=!0,speed[e].style.color="red";var t=(tim/100).toFixed(2)+"秒 最快"}speed[e].innerHTML=t}function addFavorite(){var e=window.location,t=document.title,i=navigator.userAgent.toLowerCase();if(i.indexOf("360se")>-1)alert("由于360浏览器功能限制，请按 Ctrl+D 手动收藏！");else if(i.indexOf("msie 8")>-1)window.external.AddToFavoritesBar(e,t);else if(document.all)try{window.external.addFavorite(e,t)}catch(e){alert("您的浏览器不支持,请按 Ctrl+D 手动收藏!")}else window.sidebar?window.sidebar.addPanel(t,e,""):alert("您的浏览器不支持,请按 Ctrl+D 手动收藏!")}function testSysKind(){var e=navigator.userAgent;e.indexOf("Android")>-1||e.indexOf("Adr");return!!!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)}var lis=document.getElementsByClassName("roadlink"),speed=document.getElementsByClassName("speed"),fastest;speedTest();var search=document.location.search;if(search.length)for(var roadLinks=document.getElementsByClassName("addintr"),i=0;i<roadLinks.length;i++){var initHref=roadLinks[i].href;roadLinks[i].href=initHref+search}