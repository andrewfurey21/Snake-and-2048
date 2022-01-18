//Andrew Furey

const canv = document.getElementById('canvas');
const ctx = canv.getContext('2d');
const canv2 = document.getElementById('canvas2');
const ctx2 = canv2.getContext('2d');
document.getElementById('canvas-container').style.left = window.innerWidth / 2 - canv.width + 'px';
// console.log(window.getComputedStyle(document.getElementById('canvas'), null).getPropertyValue('left'));
ctx.font = "45px Bungee";
ctx2.font = "45px Bungee";

// canv.style.cursor = 'none';

//hides right click menu
// document.addEventListener("contextmenu", (e) => {
//   e.preventDefault();
// }, false);
