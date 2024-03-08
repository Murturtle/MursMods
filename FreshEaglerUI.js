function(){
  invAnimDone = false;
  invAnimSpeed = 300;


function hsl2rgb(h, s, l) {
  s /= 100;
  l /= 100;
  const k = n => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = n =>
    l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
  return [255 * f(0), 255 * f(8), 255 * f(4)];
}

function slideInYGui(yElement,yStart,yEnd,duration){
  yElement.$guiTop = yStart;
  this.startTime = Date.now();
  this.slidn = setInterval(function(){
    if(Date.now()-duration-startTime < 0 && yElement != yEnd){
        this.calc = yEnd - ((startTime+duration - Date.now()) / duration) * yEnd;
        yElement.$guiTop = this.calc;
    }else{
      yElement.$guiTop = yEnd;
      clearInterval(slidn);
    }
  }
  ,16);
}
  
  function invSlideIn(){
      if (ModAPI.mcinstance.$currentScreen != null) {
          if(ModAPI.mcinstance.$currentScreen.$guiTop != null){
              if(!invAnimDone){
                  slideInYGui(ModAPI.mcinstance.$currentScreen,0,ModAPI.mcinstance.$currentScreen.$guiTop,invAnimSpeed)
                  invAnimDone = true;
              } 
          } else {
              invAnimDone = false;
          }
      } else {
              invAnimDone = false;
      }
  }
  
  function drawHudThings(){
    invSlideIn();
    
  }

  ModAPI.addEventListener("drawhud",drawHudThings)
}
