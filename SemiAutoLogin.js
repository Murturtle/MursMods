(() => {
  const popupCenter = ({url, title, w, h}) => {
      const dualScreenLeft = window.screenLeft !==  undefined ? window.screenLeft : window.screenX;
      const dualScreenTop = window.screenTop !==  undefined   ? window.screenTop  : window.screenY;
  
      const width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
      const height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;
  
      const systemZoom = width / window.screen.availWidth;
      const left = (width - w) / 2 / systemZoom + dualScreenLeft
      const top = (height - h) / 2 / systemZoom + dualScreenTop
      const newWindow = window.open(url, title, 
        `
        scrollbars=yes,
        width=${w / systemZoom}, 
        height=${h / systemZoom}, 
        top=${top}, 
        left=${left}
        `
      )
  
      if (window.focus) newWindow.focus();
      return newWindow;
  }
  ModAPI.require("player");
  const w = 200;
  const h = 200;
  const newWin = popupCenter({url: '', title: '', w: 200, h: 100});
  const pass = "";

  if(!newWin || newWin.closed || typeof newWin.closed=='undefined') 
  { 
      const pass = prompt("login (popup failed!)");
  } else {
    newWin.document.body.innerHTML="<center><form id='form'><input id='pass' type='password' autofocus/><br><br><input type='submit' value='Register'></form></center>";
    newWin.document.getElementById("form").onsubmit=function(){
        const pass = newWin.document.getElementById("pass").value;
        newWin.close();
    };
  }
  
  function loginModFunc(e){
      if(e.key == 38){
        ModAPI.player.sendChatMessage({message:"/login "+pass})
      }
    };
    ModAPI.addEventListener("key",loginModFunc);
})();
