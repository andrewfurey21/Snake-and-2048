//Andrew Furey

//LINE
function line(context, x, y, x1, y1, s){
  context.beginPath();
  context.lineWidth = 2;
  context.strokeStyle = s;
  context.moveTo(x, y);
  context.lineTo(x1, y1);
  context.stroke();
  context.closePath();
}

//CIRCLE
function circle(context, x, y, r, c){
  context.beginPath();
  context.fillStyle = c;
  context.arc(x, y, r, 0, Math.PI * 2);
  context.fill();
  context.closePath();
}

//RECTANGLE
function rect(context, x, y, w, h, c){
  context.beginPath();
  context.fillStyle = c;
  context.fillRect(x, y, w, h);
  context.closePath();
}

//IMAGE
function drawImage(context, img, x, y, w, h) {
  context.drawImage(img, x, y, w, h);
}

//CLEAR
function clear(context, canv, col) {
  context.beginPath();
  context.fillStyle = col;
  context.fillRect(0, 0, canv.width, canv.height)
  context.closePath();
}

//CROSS
function drawCross(context, x, y, c){
  context.beginPath();
  context.strokeStyle = c;
  context.lineWidth = 2;
  context.beginPath();
  context.moveTo(x - 15, y);
  context.lineTo(x + 15, y);
  context.moveTo(x, y - 15);
  context.lineTo(x, y + 15);
  context.stroke();
  context.closePath();
}


function roundRect(context, x, y, width, height, radius, col, stroke) {
 if (typeof stroke === 'undefined') {
   stroke = true;
 }
 if (typeof radius === 'undefined') {
   radius = 5;
 }
 if (typeof radius === 'number') {
   radius = {tl: radius, tr: radius, br: radius, bl: radius};
 } else {
   let defaultRadius = {tl: 0, tr: 0, br: 0, bl: 0};
   for (let side in defaultRadius) {
     radius[side] = radius[side] || defaultRadius[side];
   }
 }
 context.beginPath();
 context.fillStyle = col;

 context.moveTo(x + radius.tl, y);
 context.lineTo(x + width - radius.tr, y);
 context.quadraticCurveTo(x + width, y, x + width, y + radius.tr);
 context.lineTo(x + width, y + height - radius.br);
 context.quadraticCurveTo(x + width, y + height, x + width - radius.br, y + height);
 context.lineTo(x + radius.bl, y + height);
 context.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
 context.lineTo(x, y + radius.tl);
 context.quadraticCurveTo(x, y, x + radius.tl, y);
 context.fill();
 context.closePath();
 if (col) {
   context.fill();
 }
 if (stroke) {
   context.stroke();
 }

}

function text(context, str, x, y, col) {
  context.beginPath();
  context.moveTo(x, y);
  context.textAlign = "center";
  context.fillStyle = col || 'black';
  context.fillText(str, x, y);
  context.closePath();
}
