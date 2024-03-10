// **********TITLE ANIMATION********** //

msg = "Web Developer | ";
msg = "Haris Ljubović | " + msg;
position = 0;
function titleAnimation() {
  document.title =
    msg.substring(position, msg.length) + msg.substring(0, position);
  position++;
  if (position > msg.length) position = 0;
  window.setTimeout("titleAnimation()", 150);
}
titleAnimation();

let mybutton = document.getElementById("btn-back-to-top");
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
mybutton.addEventListener("click", backToTop);
function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
