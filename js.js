window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("header").style.background = "#2B2B28";
  } else {
    document.getElementById("header").style.background = "rgba(0, 0, 0, 0)";
  }
}