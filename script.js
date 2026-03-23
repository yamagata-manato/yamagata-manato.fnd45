'use strict';
// 1行目に記載している 'use strict' は削除しないでください

function test(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("OK! Test PASSED.");
  } else {
    console.error("Test FAILED. Try again!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
    console.trace();
  }
}



//メイン画面の要素とコード
const mainScreen = document.getElementById("mainscreen");//main画面
const mainButton = document.getElementById("main-button");
const countDown = document.getElementById("count1");//カウントダウン
const redButton = document.getElementById("badbutton");//アウトボタン
const greenButton = document.getElementById("succesbutton");//成功ボタン
const result = document.getElementById("result");//結果
const playButtons =document.getElementsByClassName("playscreen");//プレイ画面
const resultTime = document.getElementById("time");//結果秒数
const returnScreen = document.getElementById("return");



//遊び心
document.getElementById("noiseonoff").addEventListener("click",noiseon);

function noiseon () {
  if (document.getElementById("noiseonoff").checked === true) {
  const noise2 = function () {
    setTimeout(function () {
    mainScreen.style.alignItems = "end";
    setTimeout(function () {
      mainScreen.style.alignItems = "center";
      }, 40);
    setTimeout(noise1, 1)}, (Math.random() * 3000) + 1000);
  }

  const noise1 = function () {
    setTimeout(function () {
    mainScreen.style.backgroundColor = "white";
    mainButton.style.background = "green";
    mainScreen.style.alignItems = "flex-start"
    mainScreen.style.color = "white";
    setTimeout(function () {
      mainScreen.style.backgroundColor = "transparent";
      mainButton.style.background = "white";
      mainScreen.style.alignItems = "center";
      mainScreen.style.color = "black";
    }, 50 );
    setTimeout(noise3,1);
  }, (Math.random() * 2000) + 1000);
  }

  const noise3 = function () {
    setTimeout(function () {
      mainScreen.style.fontSize = "50%";
      document.getElementsByTagName("p").backgroundColor = "gray";
      setTimeout(function () {
        mainScreen.style.fontSize = "100%";
        document.getElementsByTagName("p").backgroundColor = "white";
        setTimeout(noise2,1);
      }, 50)
    },(Math.random() * 1000) + 500);
  }
  noise2();
}
}









mainButton.addEventListener("click", start);//スタートボタン　クリックイベント

function start() {
  mainScreen.style.display = "none";
  countDown.style.display = "flex";
  countDown.innerText = "3";
  let count = setInterval(function () {
      countDown.innerText = Number(countDown.innerText) - 1
  }, 1000);
  count;//スタート前のカウントダウン
  setTimeout(function () {
    redButton.style.display = "flex";
    clearInterval(count);
    countDown.style.display = "none";
  }, 3000);
  reflexes();
}

//計測開始
let startTime = 0;
function reflexes() {
  setTimeout(function () {
    redButton.style.display = "none";
    greenButton.style.display = "flex";
    startTime = performance.now() / 1000;
  },(Math.random() * 4000) + 5000);
}




//計測終了後の処理
greenButton.addEventListener("click", end);
let resultMemory

function end() {
  if(typeof resultMemory === "undefined") {
    document.getElementById("lasttime").innerText　= "前回の結果： なし"
  } else {
    document.getElementById("lasttime").innerText = resultMemory
  };
  let endTime = 0;
  greenButton.style.display = "none";
  result.style.display = "flex";
  endTime = performance.now() / 1000;
  resultTime.innerText = (endTime - startTime).toFixed(2) + "秒";
  resultMemory = "前回の結果: " + (endTime - startTime).toFixed(2) + "秒";
}




//結果画面
returnScreen.addEventListener("click", remove);

function remove() {
  result.style.display = "none";
  mainScreen.style.display = "flex";
}





//設定画面表示
const setButton = document.getElementById("setting");
const setScreen = document.getElementById("settingscreen");
setButton.addEventListener("click", setting);

function setting() {
  mainScreen.style.display = "none";
  setScreen.style.display = "flex";
}

document.getElementById("remove").addEventListener("click", function () {
  setScreen.style.display = "none";
  mainScreen.style.display = "flex";
})
