nose_x = 0 ;
nose_y = 0 ;
function preload() {
    m = loadImage("https://i.postimg.cc/HWFWHnTd/m.png");
}
function setup(){
    canvas = createCanvas(300,250);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,250);
    video.hide();
    posenet = ml5.poseNet(video,modelloaded);
    posenet.on("pose",gotposes); 
}
function take_snapshot() {
    save("You look good in moustache.png");
}
function draw() {
    image(video,0,0,300,250);
    image(m,nose_x,nose_y,35,30);
}
function modelloaded() {
    console.log("model loaded");
}
function gotposes(results) {
    if (results.length>0) {
    console.log(results);
    console.log("nose x = "+results[0].pose.nose.x);
    console.log("nose y = "+results[0].pose.nose.y);
    nose_x = results[0].pose.nose.x-17;
    nose_y = results[0].pose.nose.y-2; 
    }
}