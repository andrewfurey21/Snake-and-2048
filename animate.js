//ANDREW FUREY
let animation;
newNum();
newNum();
function animate() {
  animation = requestAnimationFrame(animate);
  document.getElementById('canvas-container').style.left = window.innerWidth / 2 - canv.width + 'px';
  currentScore = Math.ceil(lerp(currentScore, score, .06));
  // currentScore = score;
  document.getElementById("score").innerHTML = currentScore;
  document.getElementById("hiscore").innerHTML = hiscore;
  if (hiscore < currentScore) hiscore = currentScore;
  showBoard(ctx, canv, grid, scl, space, colours);
  playSnake('#31b531', '#2be32b', 'red');
  if (checkLose(grid)){
    lose = true;
  }

  if (Keys.right){
    oldgrid = copy2dArray(grid);
    grid = right(grid);
    prevX = xdir;
    prevY = ydir;
    if (prevX != -1){
      xdir = 1;
      ydir = 0;
    }

    Keys.right = false;
    Keys.up = false;
    Keys.down = false;
    Keys.left = false;

    if (!checkLose(grid) && check2dArray(oldgrid, grid)){
      newNum();
    }
  } else if (Keys.left){
    oldgrid = copy2dArray(grid);
    grid = left(grid);
    prevX = xdir;
    prevY = ydir;
    if (prevX != 1){
      xdir = -1;
      ydir = 0;
    }
    Keys.right = false;
    Keys.up = false;
    Keys.down = false;
    Keys.left = false;
    if (!checkLose(grid) && check2dArray(oldgrid, grid)){
      newNum();
    }
  } else if (Keys.up){
    oldgrid = copy2dArray(grid);
    grid = up(grid);
    prevX = xdir;
    prevY = ydir;
    if (prevY != 1){
      xdir = 0;
      ydir = -1;
    }
    Keys.right = false;
    Keys.up = false;
    Keys.down = false;
    Keys.left = false;
    if (!checkLose(grid) && check2dArray(oldgrid, grid)){
      newNum();
    }
  } else if (Keys.down){
    oldgrid = copy2dArray(grid);
    grid = down(grid);
    prevX = xdir;
    prevY = ydir;
    if (prevY != -1){
      xdir = 0;
      ydir = 1;
    }
    Keys.right = false;
    Keys.up = false;
    Keys.down = false;
    Keys.left = false;
    if (!checkLose(grid) && check2dArray(oldgrid, grid)){
      newNum();
    }
  }

  if (lose){
    clear(ctx, canv, 'rgba(234, 234, 234, .6)');
    clear(ctx2, canv2, 'rgba(234, 234, 234, .6)');
    text(ctx, 'Game Over', canv.width / 2, canv.height/ 2);
    text(ctx2, 'Game Over', canv.width / 2, canv.height/ 2);
    cancelAnimationFrame(animation);
  }
}

animation = requestAnimationFrame(animate);

function restartGame() {
  cancelAnimationFrame(animation);
  moving = false;
  grid = [ [0, 0, 0, 0],
               [0, 0, 0, 0],
               [0, 0, 0, 0],
               [0, 0, 0, 0]
             ];
  oldgrid;
  newNum();
  newNum();
  const colours = ['#EEE4DA', '#EDE0C8', '#F2B179', '#F59563', '#F67C60', '#F65E3B', '#EDCF73', '#EDCC62', '#EDC850', '#EDC53F', '#EDC22D'];
  const snakeScl = 40;
  score = 0;
  currentScore = 0;
  lose = false;
  xdir = 0;
  ydir = 1;
  prevX = xdir;
  prevY = ydir;
  tailLength = 0;
  tailX = [];
  tailY = [];
  ontail = true;
  // const snakeCols = ['#425df5', '#42b9f5', '#42f5e6', '#42f58a', '#87f542', '#cef542', '#f5d742', '#f5a142', '#f57e42']


  snake = {
    x: canv2.width / snakeScl,
    y: canv2.width / snakeScl,
    w: canv2.width / snakeScl
  }
  food = {
    x: Math.floor(random(snake.w * 2, (canv.width - snake.w) / snakeScl + 1)) * canv.width / snakeScl,
    y: Math.floor(random(snake.w * 2, (canv.height - snake.w) / snakeScl + 1)) * canv.height / snakeScl,
    w: canv2.width / snakeScl
  }
  animation = requestAnimationFrame(animate);
}
