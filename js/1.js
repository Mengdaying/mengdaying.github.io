
var myVideo=document.getElementById("ab"); ////获取视频对象

//播放、暂停 

function playPause(){ 
if (myVideo.paused) 
  myVideo.play(); 
else 
  myVideo.pause(); 
} 
//设置视频显示尺寸

function makeBig(){ myVideo.width=1080; 
} 

function makeSmall(){ 
myVideo.width=300; 
} 

function makeNormal(){ 
myVideo.width=600; 
} 
