var image = null;
var grayImage = null;
var redImage = null;
var rgbImage = null;
var borderImage = null;
var halfgrayImage = null;
var rainbowImage = null;
var blurImage = null;
var canvas ;

function loadImage(){
  var file = document.getElementById("loadImage");
  image = new SimpleImage(file);
  canvas = document.getElementById("can1")
  image.drawTo(canvas);
}

function dogray(){
  //copyLoadImage(grayImage);
  
  if(image==null || !image.complete()){
    alert("The image is not loaded");
  }
  else
{ 
  grayImage = new SimpleImage(image);
  grayfilter(); 
}

}

function dored(){
 
  if(image==null || !image.complete()){
    alert("The image is not loaded!");
  }
  else{
     redImage = new SimpleImage(image);
    redfilter();
  }
}

function doRGB() {
  
  if(image==null || !image.complete()){
    alert("The image is not loaded!");
  }
  else{
    rgbImage = new SimpleImage(image);
    rgbfilter();
  }
}

function doRainbow(){
  if(image==null || !image.complete()){
    alert("The image is not loaded!");
  }
  else{
    rainbowImage = new SimpleImage(image);
    rainbowfilter();
  }
}

function grayfilter(){
  for(var pixel of grayImage.values()){
    var avg = pixel.getRed()+pixel.getGreen()+pixel.getBlue()/3;
    if(avg<255){
      pixel.setRed(224-avg);
      pixel.setGreen(224-avg);
      pixel.setBlue(224-avg);
    }
    else{
      pixel.setRed(avg-224);
      pixel.setGreen(avg-224);
      pixel.setBlue(avg-224);
    }
    
  }
  canvas = document.getElementById("can1");
  grayImage.drawTo(canvas);
}

function redfilter(){
  for(var pixel of redImage.values()){
    var avg = pixel.getRed()+pixel.getGreen()+pixel.getBlue()/3;
    if(avg<20){
      pixel.setRed(avg);
      pixel.setGreen(255-avg);
      pixel.setBlue(255-avg);
    }
    else{
      pixel.setRed(avg);
      pixel.setGreen(avg-255);
      pixel.setBlue(avg-255);
    }
  }
  canvas = document.getElementById("can1");
  redImage.drawTo(canvas);
}

function rgbfilter(){
  var w = rgbImage.getWidth();
  
  for (var pixel of rgbImage.values()){
    var x = pixel.getX();
    if(x<w/3){
      pixel.setRed(255);
    }
    else if(x<2*w/3){
      pixel.setGreen(255);
    }
    else{
      pixel.setBlue(255);
    }
  }
  canvas = document.getElementById("can1");
  rgbImage.drawTo(canvas);
}

function rainbowfilter(){
  var h = rainbowImage.getHeight();
  for(var pixel of rainbowImage.values()){
    var y = pixel.getY();
    var avg = pixel.getRed()+pixel.getGreen()+pixel.getBlue()/3;
    if(y<h/7){
      if(avg<128){
      pixel.setRed(2*avg);
      pixel.setGreen(0);
      pixel.setBlue(0);
    }
    else{
      pixel.setRed(255);
      pixel.setGreen(2*avg-255);
      pixel.setBlue(2*avg-255);
    }
    }
    
    else if(y<2*h/7){
      if(avg<128){
      pixel.setRed(2*avg);
      pixel.setGreen(0.8*avg);
      pixel.setBlue(0);
      }
      else{
      pixel.setRed(255);
      pixel.setGreen(1.2*avg - 51);
      pixel.setBlue(2*avg - 255);
      }
      
    }
    
    else if(y<3*h/7){
      if(avg<128){
         pixel.setRed(2*avg);
      pixel.setGreen(2*avg);
      pixel.setBlue(0);
    }
    else{
      pixel.setRed(255);
      pixel.setGreen(255);
      pixel.setBlue(2*avg-255);
    }
      }
    
    else if(y<4*h/7){
      if(avg<128){
         pixel.setRed(0);
      pixel.setGreen(2*avg);
      pixel.setBlue(0);
    }
    else{
      pixel.setRed(2*avg-255);
      pixel.setGreen(255);
      pixel.setBlue(2*avg-255);
    }
      }
    
    else if(y<5*h/7){
      if(avg<128){
        pixel.setRed(0);
      pixel.setGreen(0);
      pixel.setBlue(2*avg);
      }
      else{
        pixel.setRed(2*avg-255);
      pixel.setGreen(2*avg-255);
      pixel.setBlue(255);
      }
    }
    
    else if(y<6*h/7){
      if(avg<128){
        pixel.setRed(0.8*avg);
      pixel.setGreen(0);
      pixel.setBlue(2*avg);
      }
      else{
        pixel.setRed(1.2*avg-51);
      pixel.setGreen(2*avg-255);
      pixel.setBlue(255);
      }
    }
    
    else{
      if(avg<128){
        pixel.setRed(1.6*avg);
      pixel.setGreen(0);
      pixel.setBlue(1.6*avg);
      }
      else{
        pixel.setRed(0.4*avg+153);
      pixel.setGreen(2*avg-255);
      pixel.setBlue(0.4*avg+153);
      }
    }
     
   
  }
  canvas = document.getElementById("can1");
  rainbowImage.drawTo(canvas);
}

function resetImage(){
  if(image==null || !image.complete()){
    alert("The image is not loaded!");
  }
  
  else{
    image = new SimpleImage(image);
    canvas = document.getElementById("can1");
  image.drawTo(canvas);
  }
  
}

function setWhite(pixel){
  pixel.setRed(102);
  pixel.setGreen(178);
  pixel.setBlue(255);
  return pixel;
}

function addBorder(img,thickness){ 
    for(var pixel of borderImage.values()){
      var x = pixel.getX();
      var y = pixel.getY();
      if(x<thickness){
        setWhite(pixel);
      }
      if(x>=borderImage.getWidth()-thickness){
        setWhite(pixel);
      }
      
      if(y<thickness){
        setWhite(pixel);
      }
      if(y>=borderImage.getHeight()-thickness){
        setWhite(pixel);
      }
    }
  
  canvas = document.getElementById("can1");
  borderImage.drawTo(canvas);
}

function Border(){
  if(image==null || !image.complete()){
   alert("The image is not loaded!");
 }
  else{
    borderImage= new SimpleImage(image);
    addBorder(borderImage,70);
  }
}

function halfgray(){
  if(image==null || !image.complete()){
    alert("The image is not loaded!");
  }
  else{
    halfgrayImage = new SimpleImage(image);
    for(var pixel of halfgrayImage.values()){
      if(pixel.getX()>pixel.getY()){  
    var avg = pixel.getRed()+pixel.getGreen()+pixel.getBlue()/3;
    
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
    
  }
    }
  canvas = document.getElementById("can1");
  halfgrayImage.drawTo(canvas);
}
}

