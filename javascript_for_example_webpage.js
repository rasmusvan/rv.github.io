var loaded;
var originalImage=null;
var imageChange;
var canvasid=document.getElementById("canvas");

function loadImage(){
  var uploadid=document.getElementById("upload");
  originalImage=new SimpleImage(uploadid)
  imageChange=new SimpleImage(uploadid)
  originalImage.drawTo(canvasid)
}

function resetImage(){
      if (originalImage==null || !originalImage.complete()){
    alert("Image not loaded!");
  }
  else{
  var uploadid=document.getElementById("upload");
  imageChange=new SimpleImage(uploadid)
  imageChange.drawTo(canvasid);
}}

function makeGray(){
    if (originalImage==null || !originalImage.complete()){
    alert("Image not loaded!");
  }
  else{
    for (var pixel of imageChange.values()){
      var avg = (pixel.getGreen() + pixel.getRed() + pixel.getBlue())/3;
        pixel.setGreen(avg);
        pixel.setBlue(avg);
        pixel.setRed(avg);
    }
  var canvasid=document.getElementById("canvas");
  imageChange.drawTo(canvasid);
}}

function doInvert(){
    if (originalImage==null || !originalImage.complete()){
    alert("Image not loaded!");
  }
  else{
    for (var pixel of imageChange.values()){
     var newg=255-pixel.getGreen();
     var newr=255-pixel.getRed();
     var newb=255-pixel.getBlue();
        pixel.setGreen(newg);
        pixel.setBlue(newb);
        pixel.setRed(newr);
    }
  var canvasid=document.getElementById("canvas");
  imageChange.drawTo(canvasid);
}}

function blackAndWhite(){
if (originalImage==null || !originalImage.complete()){
    alert("Image not loaded!");
  }
  else{
    for (var pixel of imageChange.values()){
      var avg = (pixel.getGreen() + pixel.getRed() + pixel.getBlue())/3;
      if (avg>128){
        pixel.setGreen(255);
        pixel.setBlue(255);
        pixel.setRed(255);
    }
    else{
        pixel.setGreen(0);
        pixel.setBlue(0);
        pixel.setRed(0);
    }}
  var canvasid=document.getElementById("canvas");
  imageChange.drawTo(canvasid);
}}

function redMess(){
    if (originalImage==null || !originalImage.complete()){
    alert("Image not loaded!");
  }
  else{
    for (var pixel of imageChange.values()){
      var avg = (pixel.getGreen() + pixel.getRed() + pixel.getBlue())/3;
      if (avg<128){
        pixel.setGreen(0);
        pixel.setBlue(0);
        pixel.setRed(2*avg);
    }
      else{
        pixel.setGreen(2*avg-255);
        pixel.setBlue(2*avg-255);
        pixel.setRed(255);
      }
    }
  var canvasid=document.getElementById("canvas");
  imageChange.drawTo(canvasid);
}}

function blueMess(){
    if (originalImage==null || !originalImage.complete()){
    alert("Image not loaded!");
  }
  else{
    for (var pixel of imageChange.values()){
      var avg = (pixel.getGreen() + pixel.getRed() + pixel.getBlue())/3;
      if (avg<128){
        pixel.setGreen(0);
        pixel.setBlue(2*avg);
        pixel.setRed(0);
    }
      else{
        pixel.setGreen(2*avg-255);
        pixel.setBlue(255);
        pixel.setRed(2*avg-255);
      }
    }
  var canvasid=document.getElementById("canvas");
  imageChange.drawTo(canvasid);
}}

function greenMess(){
    if (originalImage==null || !originalImage.complete()){
    alert("Image not loaded!");
  }
  else{
    for (var pixel of imageChange.values()){
      var avg = (pixel.getGreen() + pixel.getRed() + pixel.getBlue())/3;
      if (avg<128){
        pixel.setGreen(2*avg);
        pixel.setBlue(0);
        pixel.setRed(0);
    }
      else{
        pixel.setGreen(255);
        pixel.setBlue(2*avg-255);
        pixel.setRed(2*avg-255);
      }
    }
  var canvasid=document.getElementById("canvas");
  imageChange.drawTo(canvasid);
}}

function yellowMess(){
    if (originalImage==null || !originalImage.complete()){
    alert("Image not loaded!");
  }
  else{
    for (var pixel of imageChange.values()){
      var avg = (pixel.getGreen() + pixel.getRed() + pixel.getBlue())/3;
      if (avg<128){
        pixel.setGreen(2*avg);
        pixel.setBlue(0);
        pixel.setRed(2*avg);
    }
      else{
        pixel.setGreen(255);
        pixel.setBlue(2*avg-255);
        pixel.setRed(255);
      }
    }
  var canvasid=document.getElementById("canvas");
  imageChange.drawTo(canvasid);
}}

function makeWindows(){
    if (originalImage==null || !originalImage.complete()){
    alert("Image not loaded!");
  }
  else{
   for (var pixel of imageChange.values()){
     var avg = (pixel.getGreen() + pixel.getRed() + pixel.getBlue())/3;
     if((pixel.getX()<imageChange.getWidth()/2)&&(pixel.getY()<imageChange.getHeight()/2)){
      if (avg<128){
        pixel.setRed(2*avg);        
        pixel.setGreen(0);
        pixel.setBlue(0);
    }
      else{
        pixel.setRed(255);        
        pixel.setGreen(2*avg-255);
        pixel.setBlue(2*avg-255);
      }}
     if((pixel.getX()<imageChange.getWidth()/2)&&(pixel.getY()>imageChange.getHeight()/2)){
      if (avg<128){
        pixel.setRed(0);        
        pixel.setGreen(0);
        pixel.setBlue(2*avg);
    }
      else{
        pixel.setRed(2*avg-255);        
        pixel.setGreen(2*avg-255);
        pixel.setBlue(255);
      }}   
     if((pixel.getX()>imageChange.getWidth()/2)&&(pixel.getY()<imageChange.getHeight()/2)){
      if (avg<128){
        pixel.setGreen(2*avg);
        pixel.setBlue(0);
        pixel.setRed(0);
    }
      else{
        pixel.setGreen(255);
        pixel.setBlue(2*avg-255);
        pixel.setRed(2*avg-255);
      }}
     if((pixel.getX()>imageChange.getWidth()/2)&&(pixel.getY()>imageChange.getHeight()/2)){
      if (avg<128){
        pixel.setGreen(2*avg);
        pixel.setBlue(0);
        pixel.setRed(2*avg);
    }
      else{
        pixel.setGreen(255);
        pixel.setBlue(2*avg-255);
        pixel.setRed(255);
      }}     
  }
    for (var pixel of imageChange.values()){
    if ((pixel.getX()<=imageChange.getWidth()/40) || (pixel.getY()<=imageChange.getHeight()/40) || (pixel.getY()>imageChange.getHeight()*(1-0.025)) || (pixel.getX()>imageChange.getWidth()*(1-0.025)) || (imageChange.getWidth()*(39/80))<pixel.getX()&&pixel.getX()<imageChange.getWidth()*(41/80)|| (imageChange.getHeight()*(39/80))<pixel.getY()&&pixel.getY()<imageChange.getHeight()*(41/80)){
      pixel.setRed(255);
      pixel.setGreen(255);
      pixel.setBlue(255);
    }}
  var canvasid=document.getElementById("canvas");
  imageChange.drawTo(canvasid);
}}

function makeRainbow(){
    if (originalImage==null || !originalImage.complete()){
    alert("Image not loaded!");
  }
  else{
    for(var pixel of imageChange.values()){
      var avg = (pixel.getGreen() + pixel.getRed() + pixel.getBlue())/3;
      if(pixel.getY()<imageChange.getHeight()/7){
      if (avg<128){
        pixel.setRed(2*avg);        
        pixel.setGreen(0);
        pixel.setBlue(0);
    }
      else{
        pixel.setRed(255);        
        pixel.setGreen(2*avg-255);
        pixel.setBlue(2*avg-255);
      }}
      if((pixel.getY()<imageChange.getHeight()/7*2)&&(pixel.getY()>imageChange.getHeight()/7)){
      if (avg<128){
        pixel.setRed(2*avg);        
        pixel.setGreen(0.8*avg);
        pixel.setBlue(0);
    }
      else{
        pixel.setRed(255);        
        pixel.setGreen(1.2*avg-51);
        pixel.setBlue(2*avg-255);
      }}     
      if((pixel.getY()<imageChange.getHeight()/7*3)&&(pixel.getY()>imageChange.getHeight()/7*2)){
      if (avg<128){
        pixel.setRed(2*avg);        
        pixel.setGreen(2*avg);
        pixel.setBlue(0);
    }
      else{
        pixel.setRed(255);        
        pixel.setGreen(255);
        pixel.setBlue(2*avg-255);
      }}
      if((pixel.getY()<imageChange.getHeight()/7*4)&&(pixel.getY()>imageChange.getHeight()/7*3)){
      if (avg<128){
        pixel.setRed(0);        
        pixel.setGreen(2*avg);
        pixel.setBlue(0);
    }
      else{
        pixel.setRed(2*avg-255);        
        pixel.setGreen(255);
        pixel.setBlue(2*avg-255);
      }}
      if((pixel.getY()<imageChange.getHeight()/7*5)&&(pixel.getY()>imageChange.getHeight()/7*4)){
      if (avg<128){
        pixel.setRed(0);        
        pixel.setGreen(0);
        pixel.setBlue(2*avg);
    }
      else{
        pixel.setRed(2*avg-255);        
        pixel.setGreen(2*avg-255);
        pixel.setBlue(255);
      }}   
      if((pixel.getY()<imageChange.getHeight()/7*6)&&(pixel.getY()>imageChange.getHeight()/7*5)){
      if (avg<128){
        pixel.setRed(0.8*avg);        
        pixel.setGreen(0);
        pixel.setBlue(2*avg);
    }
      else{
        pixel.setRed(1.2*avg-51);        
        pixel.setGreen(2*avg-255);
        pixel.setBlue(255);
      }}      
      if(pixel.getY()>imageChange.getHeight()/7*6){
      if (avg<128){
        pixel.setRed(1.6*avg);        
        pixel.setGreen(0);
        pixel.setBlue(1.6*avg);
    }
      else{
        pixel.setRed(0.4*avg+153);        
        pixel.setGreen(2*avg-255);
        pixel.setBlue(0.4*avg+153);
      }}      
    }
  var canvasid=document.getElementById("canvas");
  imageChange.drawTo(canvasid);
  }}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function makeBlur(){
    if (originalImage==null || !originalImage.complete()){
    alert("Image not loaded!");
  }
  else{
    var context=canvasid.getContext("2d"); 
    context.clearRect(0,0,canvasid.width,canvasid.height);
    var output= new SimpleImage(imageChange.getWidth(),imageChange.getHeight());
    for (var pixel of imageChange.values()){
    var random=Math.random();
      if(random<0.5){
    var newpixelX=pixel.getX()+(getRandomInt(-25,25));
    var newpixelY=pixel.getY()+(getRandomInt(-25,25));
          if (newpixelX>=imageChange.getWidth()){
           newpixelX=imageChange.getWidth()-1;
          }
          if (newpixelY>=imageChange.getHeight()){
           newpixelY=imageChange.getHeight()-1;
          }
          if (newpixelX<0){
           newpixelX=0;   
          }
          if (newpixelY<0){
           newpixelY=0;              
          }
        var newpixel=imageChange.getPixel(newpixelX,newpixelY);
        output.setPixel(pixel.getX(),pixel.getY(),newpixel);
    }
      else{
          output.setPixel(pixel.getX(),pixel.getY(),pixel)     
      }}
   output.drawTo(canvasid);     
}}