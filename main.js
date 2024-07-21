noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(400,400);

    canvas = createCanvas(400,400);
    canvas.position(560,150)

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("Nose X = " + noseX + " nose y = " +noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftwrist = " +leftWristX + " rightwrist = "+rightWristX + " difference = " + difference);
    }

}
function draw(){
    background("#969A97");
    fill('#F90093');
    stroke('#F90093');
    square(noseX, noseY, difference);
    document.getElementById("square_side").innerHTML = "Width and Height of the Square will be - " + difference+"px";

}

function modelLoaded(){
    console.log("Posenet is intialized!");
}

