

let songs = [
    {Name:"love you zindagi", filePath:"audio/song1.mp3", coverPath: "covers/download.jpg" },
    {Name:"salm-e-Ishq", filePath:"audio/song2.mp3", coverPath: "covers/download.jpg" },
    {Name:"salm-e-Ishq", filePath:"audio/song3.mp3", coverPath: "covers/download.jpg" },
    // {Name:"namo-namo", filePath:"audio/song4.mp3", coverPath: "covers/download.jpg" },
    // {Name:"zara-zara", filePath:"audio/song5.mp3", coverPath: "covers/download.jpg" },
    // {Name:"dilbar",       filePath:"audio/song6.mp3", coverPath: "covers/download.jpg" },
    // {Name:"ishq sufiyana", filePath:"audio/song7.mp3", coverPath: "covers/download.jpg" },
    // {Name:"vaaste",        filePath:"audio/song8.mp3", coverPath: "covers/download.jpg" },
    // {Name:"o mere dil chain", filePath:"audio/song9.mp3", coverPath: "covers/download.jpg" },
    // {Name:"salm-e-Ishq", filePath:"audio/song2.mp3", coverPath: "covers/download.jpg" },
    // {Name:"salm-e-Ishq", filePath:"audio/song3.mp3", coverPath: "covers/download.jpg" },
    // {Name:"namo-namo", filePath:"audio/song4.mp3", coverPath: "covers/download.jpg" },
]




songItem.forEach((element,i)=>{
    console.log(element,i)
    element.querySelector(".songName").innerText = songs[i].Name;
    element.querySelectorAll(".songName").audioElement = songs[i].filePath;
   console.log(element,i)
})

function PlaySong(){
    console.log("im active")
    audioElement.play();
    document.querySelector("#Player").style.display="none";
    document.querySelector("#Playeroff").style.display="block"
    document.querySelector(".timePlay").style.display="none";
    document.querySelector(".timeStop").style.display="block";
}
Player.addEventListener('click',PlaySong());
  
Playeroff.addEventListener('click',()=>{
    audioElement.pause()
    document.querySelector(".timePlay").style.display="block";
    document.querySelector(".timeStop").style.display="none";
    document.querySelector("#Player").style.display="block";
    document.querySelector("#Playeroff").style.display="none"
})




btn.addEventListener("click",()=>{
    PlaySong();
    // audioElement.play();
    console.log("nfddhj")
});

audioElement.ontimeupdate = function(e){
    progress = parseInt(audioElement.currentTime*100/audioElement.duration);
    myProgressBar.value=progress 
}

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value * audioElement.duration/100
})



function songPlay (){
    audioElement.play()
    document.querySelector(".timePlay").style.display="none";
    document.querySelector(".timeStop").style.display="block";
    document.querySelector("#Player").style.display="none";
    document.querySelector("#Playeroff").style.display="block"
}

function pauseSong (){
    document.querySelector(".timePlay").style.display="block";
    document.querySelector(".timeStop").style.display="none";
    document.querySelector("#Player").style.display="block";
    document.querySelector("#Playeroff").style.display="none"
    audioElement.pause()
}