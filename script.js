console.log("Hello!");
console.log("Welcome to your course selection process.");
/*
document.getElementById("EngTotal").style.color =  #ff5360;
document.getElementById("MathTotal").style.color =  #ff5360;
document.getElementById("HistTotal").style.color =  #ff5360;
document.getElementById("SciTotal").style.color =  #ff5360;
document.getElementById("ArtTotal").style.color =  #ff5360;
document.getElementById("ElectTotal").style.color = #ff5360;
*/

let Required = ["4", "3", "3", "2", "2", "1", "3"];

function UpdateCredits(){
  document.getElementById('EngTotal').innerHTML = parseFloat(document.getElementById("FreshEng").value) + parseFloat(document.getElementById("SophEng").value) + parseFloat(document.getElementById("JunEng").value) + parseFloat(document.getElementById("SenEng").value);
  document.getElementById('MathTotal').innerHTML = parseFloat(document.getElementById("FreshMath").value) + parseFloat(document.getElementById("SophMath").value) + parseFloat(document.getElementById("JunMath").value) + parseFloat(document.getElementById("SenMath").value);
  document.getElementById('HistTotal').innerHTML = parseFloat(document.getElementById("FreshHist").value) + parseFloat(document.getElementById("SophHist").value) + parseFloat(document.getElementById("JunHist").value) + parseFloat(document.getElementById("SenHist").value);
  document.getElementById('SciTotal').innerHTML = parseFloat(document.getElementById("FreshSci").value) + parseFloat(document.getElementById("SophSci").value) + parseFloat(document.getElementById("JunSci").value) + parseFloat(document.getElementById("SenSci").value);
  document.getElementById('LangTotal').innerHTML = parseFloat(document.getElementById("FreshLang").value) + parseFloat(document.getElementById("SophLang").value) + parseFloat(document.getElementById("JunLang").value) + parseFloat(document.getElementById("SenLang").value);
  document.getElementById('ArtTotal').innerHTML = parseFloat(document.getElementById("FreshArt").value) + parseFloat(document.getElementById("SophArt").value) + parseFloat(document.getElementById("JunArt").value) + parseFloat(document.getElementById("SenArt").value);
  document.getElementById('ElectTotal').innerHTML = parseFloat(document.getElementById("FreshElect").value) + parseFloat(document.getElementById("SophElect").value) + parseFloat(document.getElementById("JunElect").value) + parseFloat(document.getElementById("SenElect").value);
  updateenglish();
  updatemath();
  updatehistory();
  updatescience();
  updateart();
  updateelective();
  updatelanguage();
}

function updateenglish(){
  if (parseFloat(document.getElementById('EngTotal').innerHTML) >= Required[0]) {
    document.getElementById('EngTotal').style.color = "#3cd12e";
  } else {
    document.getElementById("EngTotal").style.color =  "#ff5360";
  }
}
function updatemath(){
    if (parseFloat(document.getElementById('MathTotal').innerHTML) >= Required[1]) {
      document.getElementById('MathTotal').style.color = "#3cd12e";
  } else {
    document.getElementById("MathTotal").style.color =  "#ff5360";
  }
}
  function updatehistory(){
      if (parseFloat(document.getElementById('HistTotal').innerHTML) >= Required[2]) {
        document.getElementById('HistTotal').style.color = "#3cd12e";
    } else {
      document.getElementById("HistTotal").style.color =  "#ff5360";
    }
}
    function updatescience(){
        if (parseFloat(document.getElementById('SciTotal').innerHTML) >= Required[3]) {
          document.getElementById('SciTotal').style.color = "#3cd12e";
      } else {
        document.getElementById("SciTotal").style.color =  "#ff5360";
      }
}
    function updatelanguage(){
        if (parseFloat(document.getElementById('LangTotal').innerHTML) >= Required[4]) {
          document.getElementById('LangTotal').style.color = "#3cd12e";
      } else {
        document.getElementById("LangTotal").style.color =  "#ff5360";
      }
}
      function updateart(){
          if (parseFloat(document.getElementById('ArtTotal').innerHTML) >= Required[5]) {
            document.getElementById('ArtTotal').style.color = "#3cd12e";
        } else {
          document.getElementById("ArtTotal").style.color =  "#ff5360";
        }
}
        function updateelective(){
            if (parseFloat(document.getElementById('ElectTotal').innerHTML) >= Required[6]) {
              document.getElementById('ElectTotal').style.color = "#3cd12e";
          } else {
              document.getElementById("ElectTotal").style.color = "#ff5360";
          }
}
