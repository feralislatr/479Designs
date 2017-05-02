
    // var sheetIndex = 0;
    // var sheets = [
    // "/des1/style.css",
    // "/des2/style.css",
    // "/des3/style.css"];
    // var nextSheet = function(){
    //     sheetIndex = (sheetIndex + 1) % sheets.length;
    //     var newHref = sheets[sheetIndex];
    //     document.getElementById('currentstyle').innerHTML = newHref;
    //     document.getElementById('pagestyle').setAttribute('href', newHref);
    // }

function fadeOut(el){
  el.style.opacity = 1;

  (function fade() {
    if ((el.style.opacity -= .1) < 0) {
      el.style.display = "none";
    } else {
      requestAnimationFrame(fade);
    }
  })();
}

// fade in
function fadeIn(el, display){
  el.style.opacity = 0;
  el.style.display = display || "block";

  (function fade() {
    var val = parseFloat(el.style.opacity);
    if (!((val += .1) > 1)) {
      el.style.opacity = val;
      requestAnimationFrame(fade);
    }
  })();
}