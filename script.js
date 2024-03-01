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
