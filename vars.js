const scl = 4;
const space = 8;
let moving = false;
let grid = [ [0, 0, 0, 0],
             [0, 0, 0, 0],
             [0, 0, 0, 0],
             [0, 0, 0, 0]
           ];
let oldgrid;
const colours = ['#EEE4DA', '#EDE0C8', '#F2B179', '#F59563', '#F67C60', '#F65E3B', '#EDCF73', '#EDCC62', '#EDC850', '#EDC53F', '#EDC22D'];
const snakeScl = 40;
let score = 0;
let currentScore = 0;
let hiscore = score;
let lose = false;
