//Andrew Furey

/****************************************************************************/

//MOUSE OBJECT
//once mouse is moved, it mouse.moved will always be true. needs to be fixed
// const mouse = {
//     x : null,
//     y : null
// }
//
// document.addEventListener("mousemove", e => {
//   let b = canv.getBoundingClientRect();
//   mouse.x = e.pageX - b.left;
//   mouse.y = e.pageY - b.top;
// });

/****************************************************************************/

//MOVEMENT KEYS
//add arrow keys
const Keys = {
    up: false,
    down: false,
    left: false,
    right: false,
};

// let prevKey;
// let currentKey;

// window.onkeydown = e => {
//   e.preventDefault();
//   if(e.keyCode == 65 || e.keyCode == 37) Keys.left = true;
//   if(e.keyCode == 87 || e.keyCode == 38) Keys.up = true;
//   if(e.keyCode == 68 || e.keyCode == 39) Keys.right = true;
//   if(e.keyCode == 83 || e.keyCode == 40) Keys.down = true;
// };
//
// window.onkeyup = e => {
//   e.preventDefault();
//   if(e.keyCode == 65 || e.keyCode == 37) Keys.left = false;
//   if(e.keyCode == 87 || e.keyCode == 38) Keys.up = false;
//   if(e.keyCode == 68 || e.keyCode == 39) Keys.right = false;
//   if(e.keyCode == 83 || e.keyCode == 40) Keys.down = false;
// };

let keydown = false;
window.addEventListener('keydown', (e) => {
  if (!keydown){
    keydown = true;
    if(e.keyCode == 65 || e.keyCode == 37) Keys.left = true;
    else if(e.keyCode == 87 || e.keyCode == 38) Keys.up = true;
    else if(e.keyCode == 68 || e.keyCode == 39) Keys.right = true;
    else if(e.keyCode == 83 || e.keyCode == 40) Keys.down = true;
  }
  window.addEventListener('keyup', (e) => {
    keydown = false;
    Keys.left = false;
    Keys.up = false;
    Keys.right = false;
    Keys.down = false;
  });
});



/****************************************************************************/

let buttons = {
  left: false,
  middle: false,
  right: false
};

window.onmousedown = e => {
  // e.preventDefault();
  if (e.button == 0) buttons.left = true;
  if (e.button == 1) buttons.middle = true;
  if (e.button == 2) buttons.right = true;
}

window.onmouseup = e => {
  // e.preventDefault();
  if (e.button == 0) buttons.left = false;
  if (e.button == 1) buttons.middle = false;
  if (e.button == 2) buttons.right = false;
}

/****************************************************************************/
