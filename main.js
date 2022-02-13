
leftWristX=0;
rightWristX=0;
difference=0;

function setup(){
video=createCapture(VIDEO);
video.size(500,600);
video.position(500,200); 
canvas=createCanvas(600,600);
canvas.position(1200,300)
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on("pose",gotPoses);
}
function modelLoaded(){
    console.log("Pose net has loaded");
}

function gotPoses(results){
if(results.length > 0){
leftWristX=results[0].pose.leftWrist.x;
rightWristX=results[0].pose.rightWrist.x; 
difference=Math.floor(leftWristX-rightWristX);        
}

}

function draw(){
background("red"); 
fill("blue");
stroke("blue");
text("Taran",52,401);
textSize(difference);
document.getElementById("noodels").innerHTML="Font size of text is"+difference+"px";   
}