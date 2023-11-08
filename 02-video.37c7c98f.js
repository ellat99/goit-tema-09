const e=document.querySelector("iframe"),t=newPlayer(e);localStorage.getItem("video-current");let o=0;console.log("savedTime=",savedTime),savedTime>0&&(o=savedTime),t.on("timeupdate",throttle((()=>{t.getCurrentTime().then((function(e){o=e})).catch((function(e){console.log(e+"occurred")})),localStorage.setItem("video-current",o.toString())}),1e3));
//# sourceMappingURL=02-video.37c7c98f.js.map
