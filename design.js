function ChangeImage(){
    var pic = document.getElementById("bulb");
    if(pic.src.match("on")){
        console.log("on");
        pic.src= "off bulb.png";
    }
    else{
        console.log("off");
        pic.src= "on bulb.png";
    }
}