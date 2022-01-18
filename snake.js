let xdir = 0;
let ydir = 1;
let prevX = xdir;
let prevY = ydir;
let tailLength = 0;
let tailX = [];
let tailY = [];
let ontail = true;
// const snakeCols = ['#425df5', '#42b9f5', '#42f5e6', '#42f58a', '#87f542', '#cef542', '#f5d742', '#f5a142', '#f57e42']


let  snake = {
  x: canv2.width / snakeScl,
  y: canv2.width / snakeScl,
  w: canv2.width / snakeScl
}
let  food = {
  x: Math.floor(random(snake.w * 2, (canv.width - snake.w) / snakeScl + 1)) * canv.width / snakeScl,
  y: Math.floor(random(snake.w * 2, (canv.height - snake.w) / snakeScl + 1)) * canv.height / snakeScl,
  w: canv2.width / snakeScl
}



let counter = 0;
let snakeRate = 5;
function playSnake(bg, snakeC, foodC) {

  counter++;
  if (counter == snakeRate){
    clear(ctx2, canv2, bg);
    for (let i = 0; i < snakeScl; i++){
      line(ctx2, i * snake.w, snake.w, i * snake.w, canv2.height - snake.w);
    }

    for (let i = 0; i < snakeScl; i++){
      line(ctx2, snake.w, i * snake.w, canv2.width - snake.w, i * snake.w, '#70ba70');
    }
    // if (snake.x < snake.w) snake.x = canv2.width - snake.w * 2;
    // if (snake.x > canv.width - snake.w * 2) snake.x = snake.w;
    // if (snake.y < snake.w) snake.y = canv2.height - snake.w * 2;
    // if (snake.y > canv.height - snake.w * 2) snake.y = snake.w;


    snake.x += xdir * snake.w;
    snake.y += ydir * snake.w;
    if (snake.x < snake.w) {
      lose = true;
      // snake.x = canv2.width - (snake.w * 2);
    } else if (snake.x > canv.width - (snake.w * 2)){
      lose = true;
      // snake.x = snake.w;
    } else if (snake.y < snake.w){
      lose = true;
      // snake.y = canv2.height - snake.w * 2;
    } else if (snake.y > canv.height - snake.w *2) {
      lose = true;
      // snake.y = snake.w
    }

    counter = 0;
    // snakeC = snakeCols[Math.floor(score / 100)]
    rect(ctx2, snake.x, snake.y, snake.w, snake.w, snakeC);
    tailX.push(snake.x);
    tailY.push(snake.y);
    if (tailX.length > tailLength) {
      tailX.shift();
      tailY.shift();
    }

    for (let i = 0; i < tailLength; i++){
      rect(ctx2, tailX[i], tailY[i], snake.w, snake.w, snakeC);
    }
    if (snake.x == food.x && snake.y == food.y) {
        foodPos();
        if (score < 1) score += 5
        else score += Math.floor(score * .1);

        tailLength += 5;
      }

      rect(ctx2, food.x, food.y, food.w, food.w, foodC);

      let tail = [];
      for (let i = 0; i < tailX.length; i++){
        tail.push(new Vector(tailX[i], tailY[i]));
      }

      for (let i = tail.length - 3; i >= 0; --i){
        if (snake.x == tail[i].x && snake.y == tail[i].y){
          lose = true;
          console.log('LOOOSE');
        }
      }
    }



}

function foodPos() {

  let available = [];
  for (let i = 1; i < snakeScl - 1; i++){
    for (let j = 1; j < snakeScl - 1; j++){
      available.push(new Vector(i * snake.w, j * snake.w));
    }
  }

  for (let i = 0; i < available; i++){
    for (let j = 0; j < tailX.length; j++){
      if (available[i].x == tailX[j] && available[i].y == tailY[j]){
        available.splice(i, 1);
      }
    }
  }
  food.x = available[Math.floor(Math.random() * available.length)].x;
  food.y = available[Math.floor(Math.random() * available.length)].y;
}
