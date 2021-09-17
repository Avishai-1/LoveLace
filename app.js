var mySong = document.getElementById("mySong");
var icon = document.getElementById("icon");

icon.onclick = function(){
     if(mySong.paused){
     mySong.play();
     icon.src = "pause.png"
}else{
     mySong.pause();
     icon.src= "play.png"
     }
}


var mySeondSong = document.getElementById("mySecondSong");
var iconTwo = document.getElementById("iconTwo");

iconTwo.onclick = function(){
     if(mySeondSong.paused){
     mySeondSong.play();
     iconTwo.src = "pause.png"
}else{
     mySeondSong.pause();
     iconTwo.src= "play.png"
     }
}

var myThirdSong = document.getElementById("myThirdSong");
var iconThird = document.getElementById("iconThird");

iconThird.onclick = function(){
     if(myThirdSong.paused){
          myThirdSong.play();
          iconThird.src = "pause.png"
     }else{
          myThirdSong.pause();
          iconThird.src = "play.png"
     }
}


var myFourthSong = document.getElementById("myFourthSong");
var iconFour = document.getElementById("iconFour");

iconFour.onclick = function(){
     if(myFourthSong.paused){
          myFourthSong.play();
          iconFour.src = "pause.png"
     }else{
          myFourthSong.pause();
          iconFour.src = "play.png"
     }
}

