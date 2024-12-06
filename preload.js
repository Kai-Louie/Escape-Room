console.log("Preload running...");

var images = [];
function preload() {
  for (var i = 0; i < arguments.length; i++) {
    images[i] = new Image();
    images[i].src = preload.arguments[i];
  }
}

preload(
  "images/letter/B.png",
  "images/letter/C.png",
  "images/letter/D.png",
  "images/letter/e.png",
  "images/letter/g.png",
  "images/letter/k.png",
  "images/letter/p.png",
  "images/letter/R.png",
  "images/letter/u.png",
  "images/letter/V.png",
  "images/correct.png",
  "images/wrong.png",
  "audio/boom.mp3",
  "audio/paperS.mp3",
  "audio/doors.mp3",
  "audio/lclose.mp3",
  "audio/lopen.mp3",
  "audio/background.mp3",
  "audio/Owen1.mp3",
  "audio/letmein.mp3",
  "audio/dead.mp3",
  "audio/deads.mp3"
);
