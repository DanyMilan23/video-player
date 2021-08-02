const $video = document.querySelector("#video");
const $play = document.querySelector("#play");
const $pause = document.querySelector("#pause");
const $backward = document.querySelector("#backward");
const $forward = document.querySelector("#forward");
const $progress = document.querySelector("#progress");

$play.addEventListener("click", handlePlay);
$pause.addEventListener("click", handlePause);
$backward.addEventListener("click", handleBackward);
$forward.addEventListener("click", handleForward);
$video.addEventListener("loadedmetadata", handleLoaded);
$video.addEventListener("timeupdate", handleTimeUpdate);
$progress.addEventListener("input", handleInput);

function handlePlay() {
  $video.play();
  $play.hidden = true;
  $pause.hidden = false;
  $backward.hidden = false;
  $forward.hidden = false;
  console.log("Le diste click a play");
}
function handlePause() {
  $video.pause();
  $play.hidden = false;
  $pause.hidden = true;
  console.log("Le diste click a pausa");
}
function handleBackward() {
  $video.currentTime -= 10;
  console.log("para atras 10 segundos");
}
function handleForward() {
  $video.currentTime += 10;
  console.log("para adelante 10 segundos");
}
function handleLoaded() {
  console.log("ha cargado el video");
  $progress.max = $video.duration;
}
function handleTimeUpdate() {
  $progress.value = $video.currentTime;
}
function handleInput() {
  $video.currentTime = $progress.value;
}
