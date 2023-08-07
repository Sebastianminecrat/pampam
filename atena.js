var prediction_1=""
var prediction_2=""
Webcam.set({
width:500,
height:500,image_format:"jpg",jpg_quality:89,
})



camera=document.getElementById("camera");
Webcam.attach("#camera")