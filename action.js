let audioElement = new Audio();
let Player = document.getElementById("Player");
let songList = document.querySelector(".songList");
let icns = document.querySelectorAll(".icn");
let songItem = document.querySelectorAll(".songItem");
let masterPlay = document.querySelector(".masterPlay");
let bar = document.querySelector(".bar");
let progressbar = document.querySelector(".progressbar");
let back = document.querySelector(".back");
let next = document.querySelector(".next");

// to add song name dynamically

let songs = [
  {
    Name: "love you zindagi",
    filePath: "audio/song1.mp3",
    coverPath: "covers/download.jpg",
    class: "icn fas fa-play",
    id: "0",
  },
  {
    Name: "dilbar",
    filePath: "audio/song6.mp3",
    coverPath: "covers/download.jpg",
    class: "icn fas fa-play",
    id: "1",
  },
  {
    Name: "salm-e-Ishq",
    filePath: "audio/song3.mp3",
    coverPath: "covers/download.jpg",
    class: "icn fas fa-play",
    id: "2",
  },
  {
    Name: "namo-namo",
    filePath: "audio/song4.mp3",
    coverPath: "covers/download.jpg",
    class: "icn fas fa-play",
    id: "3",
  },
  {
    Name: "zara-zara",
    filePath: "audio/song5.mp3",
    coverPath: "covers/download.jpg",
    class: "icn fas fa-play",
    id: "4",
  },
  {
    Name: "dilbar",
    filePath: "audio/song6.mp3",
    coverPath: "covers/download.jpg",
    class: "icn fas fa-play",
    id: "5",
  },
  {
    Name: "ishq sufiyana",
    filePath: "audio/song7.mp3",
    coverPath: "covers/download.jpg",
    class: "icn fas fa-play",
    id: "6",
  },
  {
    Name: "vaaste",
    filePath: "audio/song8.mp3",
    coverPath: "covers/download.jpg",
    class: "icn fas fa-play",
    id: "7",
  },
  {
    Name: "o mere dil chain",
    filePath: "audio/song9.mp3",
    coverPath: "covers/download.jpg",
    class: "icn fas fa-play",
    id: "8",
  },
  {
    Name: "salm-e-Ishq",
    filePath: "audio/song2.mp3",
    coverPath: "covers/download.jpg",
    class: "icn fas fa-play",
    id: "9",
  },
  {
    Name: "salm-e-Ishq",
    filePath: "audio/song3.mp3",
    coverPath: "covers/download.jpg",
    class: "icn fas fa-play",
    id: "10",
  },
  {
    Name: "namo-namo",
    filePath: "audio/song4.mp3",
    coverPath: "covers/download.jpg",
    class: "icn fas fa-play",
    id: "11",
  },
];

window.addEventListener("DOMContentLoaded", function () {
  displaySong(songs);
  maintainIcns();
  masterplayfun();
  nextIcn();
  backIcn();
});

function displaySong(arr) {
  let output = arr.map((item) => {
    return `
    <div class="songItem">
    <img src="${item.coverPath}" class="image" />
    <span class="songName">${item.Name}</span>
    <span id="${item.id}" class="${item.class}"></span>
    <audio class="audio" src=""></audio>
  </div>
    `;
  });
  output = output.join(" ");
  songList.innerHTML = `<h1>Best Song Collection</h1> ${output}`;
}

// change icn on click
// slect all the icns and use for each and add the class of pause and remove play class and vice-versa
// now phele bar jo click hoga vo currentClick hoga classlist add or remove kr denge but jb second click hoga
// to vo currentClick bnega or phela currentClick last click bnega or hm uspe se remove krenge pause icn and add
// kr denge play icn
// audio element ke liye jis icn p click kiya hai uski id lenge or vhi same id pass kr denge audioelment.scr ke songs arry indx m

let id;
function maintainIcns() {
  displaySong(songs);
  let icns = document.querySelectorAll(".icn");
  icns.forEach((icn) => {
    icn.addEventListener("click", (e) => {
      let currentClick = e.target;
      id = e.target.id;
      if (currentClick.classList.contains("fa-play")) {
        currentClick.classList.remove("fa-play");
        currentClick.classList.add("fa-pause");
        masterPlay.classList.add("fa-pause-circle");
        masterPlay.classList.remove("fa-play-circle");
        audioElement.src = songs[e.target.id].filePath;
        audioElement.play();
      } else {
        currentClick.classList.add("fa-play");
        currentClick.classList.remove("fa-pause");
        masterPlay.classList.remove("fa-pause-circle");
        masterPlay.classList.add("fa-play-circle");
        audioElement.pause();
      }
      icns.forEach((icn2) => {
        let lastClick = icn2;
        if (lastClick != currentClick) {
          lastClick.classList.remove("fa-pause");
          lastClick.classList.add("fa-play");
        }
      });
    });
  });
}

// to play music we have to add pause icn and remove play icn so make this function instead of passsing directly
// icns i m passing here item becoz it show error kyuki icns paas krne se ye id bhi leta or fir ise or khi bhi
// use nhi kr skte and same on other function as well
function playMusic(item) {
  item[id].classList.add("fa-pause");
  item[id].classList.remove("fa-play");
}

function pauseMusic(item) {
  item[id].classList.remove("fa-pause");
  item[id].classList.add("fa-play");
}

function masterPlayIcn(item2) {
  item2.classList.remove("fa-pause-circle");
  item2.classList.add("fa-play-circle");
}

function masterPauseIcn(item2) {
  item2.classList.add("fa-pause-circle");
  item2.classList.remove("fa-play-circle");
}

function masterplayfun() {
  displaySong(songs);
  maintainIcns();
  masterPlay.addEventListener("click", () => {
    let icns = document.querySelectorAll(".icn");
    if (id == undefined) {
      id = 0;
    }
    if (id != undefined) {
      if (masterPlay.classList.contains("fa-pause-circle")) {
        masterPlayIcn(masterPlay);
        pauseMusic(icns);
        audioElement.pause();
      } else {
        masterPauseIcn(masterPlay);
        audioElement.src = songs[id].filePath;
        playMusic(icns);
        audioElement.play();
      }
    }
  });
}

audioElement.ontimeupdate = function (e) {
  bar.style.width =
    Math.floor((audioElement.currentTime * 100) / audioElement.duration) + "%";
  if (audioElement.currentTime > 0) {
    progressbar.onclick = function (e) {
      audioElement.currentTime =
        (e.offsetX / progressbar.offsetWidth) * audioElement.duration;
    };
  }
};
// sbse phele declare kiya variable id ke naam se then usko equal kiya e.target.id ke taki jo bhi gana chlrha h uski
// id aajaye first thing is we want to increase value of id means id++ and kitne se isliye incId+1 to id ki value 1 ho jayegi
// pas krenge id ko songs ki jo lenght hai vo 5 h and hr bar 1 ka increment hoga to jb id ki real value 3 hogi
// to vo inc. hoke 4 ho jayegi isliye hm ise lenght se 2 km tk chalyenge kyuki jaise hi uski real value id ki 4 index hogi
// to incr hoke 5 hojayegi and error dega islye jb value 3 se bdi hogi to use vapis zero p set kr denge or vapis loop krnge

function nextIcn() {
  displaySong(songs);
  maintainIcns();
  next.addEventListener("click", () => {
    let icns = document.querySelectorAll(".icn");
    if (id != undefined) {
      masterPauseIcn(masterPlay);
      if (id <= songs.length - 2) {
        let incId = id++;
        incId + 1;
        audioElement.src = songs[id].filePath;
        audioElement.play();
      } else if (id == songs.length - 1) {
        pauseMusic(icns);
        id = 0;
        audioElement.src = songs[id].filePath;
        audioElement.play();
      }
      playMusic(icns);
      if (id > 0) {
        icns[id - 1].classList.remove("fa-pause");
        icns[id - 1].classList.add("fa-play");
      }
    }
  });
}
// same as next

function backIcn() {
  displaySong(songs);
  maintainIcns();
  let icns = document.querySelectorAll(".icn");
  back.addEventListener("click", () => {
    if (id != undefined) {
      masterPauseIcn(masterPlay);
      if (id > 0 && id <= songs.length - 1) {
        let incId = id--;
        incId - 1;
        audioElement.src = songs[id].filePath;
        audioElement.play();
      } else if (id == 0) {
        pauseMusic(icns);
        id = songs.length - 1;
        audioElement.src = songs[id].filePath;
        audioElement.play();
      }
      playMusic(icns);
      if (id < songs.length - 1) {
        icns[id + 1].classList.remove("fa-pause");
        icns[id + 1].classList.add("fa-play");
      }
    }
  });
}
