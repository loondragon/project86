var canvas = new fabric.Canvas('i1');
 var x= document.getElementById("myAudio");

function new_image()
{
fabric.Image.fromURL("BirthdayImage.jpg",function (Img) {
  canvasimg=Img;
  canvasimg.scaleToWidth(700);
  canvasimg.scaleToHeight(500);
  canvasimg.set({
      top:0,left:0
  });
  canvas.add(canvasimg)
})	
	
}

function playSound(){
	x.play()
}
