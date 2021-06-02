song="";
song2="";
leftWristX ="" ;
leftWristY = "";
rightWristX ="";
rightWristY = "";
function preload(){
   song =  loadSound("music.mp3");
   song2 =  loadSound("music2.mp3");
}


function setup(){
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

   poseNet = ml5.poseNet(video , modelLoaded);
   posenet.on("pose" , gotPoses);
}

function modelLoaded(){
    console.log("posenet is initialised");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("left wrist x =" + leftWristX + "left wirst y =" + leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("right wrist x =" + rightWristX + "right wirst y =" + rightWristY);
    }
}

function draw(){
image(video,0,0,600,500);
}
