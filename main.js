sttatus = "";
objectname = "";
function setup(){
    canvas = createCanvas(480,300);
    canvas.position(430,280);

    video = createCapture(VIDEO);
    video.hide();
}

function start(){
    objectDetector = ml5.objectDetector("cocossd",modelloaded);
    document.getElementById("status").innerHTML = "Status: Detecting Object";
    document.getElementById("objectname").value = objectname;
}

function modelloaded(){
    console.log("Model is working neat and fine");
    sttatus = true;
}

function draw(){
    image(video,0,0,480,300)
}