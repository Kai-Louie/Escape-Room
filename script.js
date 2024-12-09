var m = document.getElementById("myModal");
var input_div = document.getElementById("answer1");
var check = 1;
var s1 = 0;
var s2 = 0;
var s3 = 0;
var cv = document.getElementById("cover");

window.onload = function () {
  playBGMusic();
};

function playBGMusic() {
  var audio = document.getElementById("a12");
  audio.volume = 0.6;
  audio.play();
  document.getElementById("a12").loop = false;
  sleep(205000).then(() => {
    var audio = document.getElementById("a13");
    audio.play();
    document.getElementById("a13").loop = true;
  });
}

function showchart() {
  document.getElementById("a2").play();
  document.getElementById("chart").classList.remove("chart");
}
function hidechart() {
  document.getElementById("chart").classList.add("chart");
}
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
function modal1() {
  document.getElementById("a3").play();
  document.getElementById("modal1").style.display = "flex";
}
function hmodal1() {
  document.getElementById("modal1").style.display = "none";
}
function modal4() {
  document.getElementById("modal4").style.display = "flex";
}
function hmodal4() {
  document.getElementById("modal4").style.display = "none";
}
function modal5() {
  document.getElementById("modal5").style.display = "flex";
  document.getElementById("a4").play();
  document.getElementById("c5").removeAttribute("onclick", "hmodal5()");
  sleep(60000).then(() => {
    document.getElementById("c5").setAttribute("onclick", "hmodal5()");
  });
}
function hmodal5() {
  document.getElementById("modal5").style.display = "none";
}
function modal2() {
  document.getElementById("a2").play();
  document.getElementById("modal2").style.display = "flex";
  sleep(1000).then(() => {
    document.getElementById("secret1").classList.add("center");
    document.getElementById("secret1").classList.remove("evil-center");
    document.getElementById("a1").play();
    modal2pt2();
  });
}
function modal2pt2() {
  sleep(1000).then(() => {
    document.getElementById("secret2").classList.add("right");
    document.getElementById("secret2").classList.remove("evil-center");
  });
}
function hmodal2() {
  document.getElementById("modal2").style.display = "none";
}
function uexit() {
  document.getElementById("window").onclick = exit;
  document.getElementById("out").src = "images/out.png";
  document.getElementById("out").onclick = exit;
}
function exit() {
  window.location.href = "https://jacobbozzalla123.github.io/Escape-Room/";
}
function modal3() {
  document.getElementById("modal3").style.display = "flex";
}
function hmodal3() {
  document.getElementById("modal3").style.display = "none";
}
function open1() {
  if (check == 1) {
    document.getElementById("a5").play();
    sleep(1000).then(() => {
      document.getElementById("hawk").src = "images/open-locker.png";
      document.getElementById("nugget").setAttribute("onclick", "funny()");
      check = 2;
    });
  } else {
    document.getElementById("a6").play();
    sleep(1000).then(() => {
      document.getElementById("hawk").src = "images/opened-locker.png";
      hmodal3();
      uexit();
      document.getElementById("a10").play();
      sleep(1000).then(() => {
        document.getElementById("a7").play();
      });
      sleep(7220).then(() => {
        document.getElementById("a7").pause();
        dead();
      });
    });
  }
}
function checkInput() {
  console.log(input_div.value);
  console.log("rightinput");
  if (document.getElementById("answer1").value == "32146") {
    open1();
    document.getElementById("hawk").setAttribute("onclick", "open1()");
  }
  input_div.value = "";
}
function slot1() {
  if (s1 == 0) {
    document.getElementById("fslot").src = "images/letter/C.png";
    s1++;
  } else if (s1 == 1) {
    document.getElementById("fslot").src = "images/letter/D.png";
    s1++;
  } else if (s1 == 2) {
    document.getElementById("fslot").src = "images/letter/e.png";
    s1++;
  } else if (s1 == 3) {
    document.getElementById("fslot").src = "images/letter/g.png";
    document.getElementById("slot1").src = "images/correct.png";
    s1++;
  } else if (s1 == 4) {
    document.getElementById("fslot").src = "images/letter/k.png";
    document.getElementById("slot1").src = "images/wrong.png";
    s1++;
  } else if (s1 == 5) {
    document.getElementById("fslot").src = "images/letter/p.png";
    s1++;
  } else if (s1 == 6) {
    document.getElementById("fslot").src = "images/letter/R.png";
    s1++;
  } else if (s1 == 7) {
    document.getElementById("fslot").src = "images/letter/u.png";
    s1++;
  } else if (s1 == 8) {
    document.getElementById("fslot").src = "images/letter/V.png";
    s1 = 0;
  } else {
  }
}
function slot2() {
  if (s2 == 0) {
    document.getElementById("sslot").src = "images/letter/g.png";
    s2++;
  } else if (s2 == 1) {
    document.getElementById("sslot").src = "images/letter/e.png";
    s2++;
  } else if (s2 == 2) {
    document.getElementById("sslot").src = "images/letter/k.png";
    s2++;
  } else if (s2 == 3) {
    document.getElementById("sslot").src = "images/letter/V.png";
    s2++;
  } else if (s2 == 4) {
    document.getElementById("sslot").src = "images/letter/u.png";
    s2++;
  } else if (s2 == 5) {
    document.getElementById("sslot").src = "images/letter/C.png";
    s2++;
  } else if (s2 == 6) {
    document.getElementById("sslot").src = "images/letter/R.png";
    s2++;
  } else if (s2 == 7) {
    document.getElementById("sslot").src = "images/letter/B.png";
    document.getElementById("slot2").src = "images/correct.png";
    s2++;
  } else if (s2 == 8) {
    document.getElementById("sslot").src = "images/letter/p.png";
    document.getElementById("slot2").src = "images/wrong.png";
    s2 = 0;
  } else {
  }
}
function slot3() {
  if (s3 == 0) {
    document.getElementById("tslot").src = "images/letter/V.png";
    s3++;
  } else if (s3 == 1) {
    document.getElementById("tslot").src = "images/letter/u.png";
    document.getElementById("slot3").src = "images/correct.png";
    s3++;
  } else if (s3 == 2) {
    document.getElementById("tslot").src = "images/letter/R.png";
    document.getElementById("slot3").src = "images/wrong.png";
    s3++;
  } else if (s3 == 3) {
    document.getElementById("tslot").src = "images/letter/p.png";
    s3++;
  } else if (s3 == 4) {
    document.getElementById("tslot").src = "images/letter/k.png";
    s3++;
  } else if (s3 == 5) {
    document.getElementById("tslot").src = "images/letter/g.png";
    s3++;
  } else if (s3 == 6) {
    document.getElementById("tslot").src = "images/letter/e.png";
    s3++;
  } else if (s3 == 7) {
    document.getElementById("tslot").src = "images/letter/D.png";
    s3++;
  } else if (s3 == 8) {
    document.getElementById("tslot").src = "images/letter/C.png";
    s3 = 0;
  } else {
  }
}
function funny() {
  document.getElementById("a6").play();
  sleep(1000).then(() => {
    hmodal3();
    dead2();
  });
}
function dead() {
  document.getElementById("a8").play();
  document.getElementById("a11").play();
  sleep(1000).then(() => {
    document.getElementById("a9").play();
    sleep(1000).then(() => {
      document.getElementById("dead").style.display = "flex";
    });
  });
}
function dead2() {
  document.getElementById("a8").play();
  document.getElementById("a11").play();
  sleep(1000).then(() => {
    document.getElementById("a9").play();
    sleep(1000).then(() => {
      document.getElementById("dead2").style.display = "flex";
    });
  });
}
function cover() {
  if (window.innerHeight !== screen.height) {
    isPaused = true;
    cv.style.display = "flex";
  } else {
    isPaused = false;
    cv.style.display = "none";
  }
}
function start() {
  document.getElementById("opening").style.display = "none";
}
setInterval(cover, 1);
