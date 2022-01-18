//Andrew Furey

//RANDOM
function random(min, max) {
  return Math.random() * (max - min) + min;
}

//Linear Interpolation (lerp)
function lerp(start, end, amt){
  return (1-amt) * start + amt * end;
}

//sometime add reverse lerp

/**************************************************************************/

//RGB to HEXIDECIMAL
function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

/**************************************************************************/

//MAP
function map(x, in_min, in_max, out_min, out_max) {
  return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

//degrees to RADIANS
function radians(d){
  return d * (Math.PI / 180);
}

//radians to DEGREES
function degrees(r){
  return r * (180 / Math.PI);
}

//DISTANCE
function dist(x1, y1, x2, y2) {
  let a = x2 - x1;
  let b = y2 - y1;
  return Math.sqrt(a * a + b * b);
}

function transpose(array) {
  let oldarr = [[],[],[],[]];
  let newarr = [[],[],[],[]];
  for (let i = 0; i < array.length; i++){
    for (let j = 0; j < array[i].length; j++){
      oldarr[i].push(array[i][j]);
    }
  }

  for (let i = 0; i < array.length; i++){
    for (let j = 0; j < array.length; j++){
        newarr[i].push(oldarr[j][i]);
    }
  }

  return newarr;
}

function log(base, num) {
  return Math.log(num) / Math.log(base);
}

function copy2dArray(arr){
  let newarr = [];
  for(let i = 0; i < arr.length; i++){
    newarr.push(new Array());
    for (let j = 0; j < arr[i].length; j++){
      newarr[i][j] = arr[i][j];
    }
  }
  return newarr;
}

function copyArray(arr){
  let newarr = [];
  for(let i = 0; i < arr.length; i++){
      newarr[i] = arr[i];
  }
  return newarr;
}

function check2dArray(o, n){
  let checker = true;
  for (let i = 0; i < o.length; i++){
    for (let j = 0; j < o[i].length; j++){
      if (o[i][j] != n[i][j]) checker = false;
    }
  }
  return !checker;
}
