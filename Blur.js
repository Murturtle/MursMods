ModAPI.require("settings");
var oldFPS = 260;
function fcs(){
    if(ModAPI.settings != null){
        ModAPI.settings.limitFramerate = oldFPS;
        ModAPI.settings.reload();
    }
}

function blr(){
    oldFPS = ModAPI.settings.limitFramerate;
    if(ModAPI.settings != null){
        ModAPI.settings.limitFramerate = 5;
        ModAPI.settings.reload();
    }
}

addEventListener("focus",fcs);
addEventListener("blur",blr);
