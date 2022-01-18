function checkLose(grid) {
  let stillAlive = false;
  loop1:
  for (let i = 0; i < grid.length; i++){
    loop2:
    for (let j = 0; j < grid[i].length; j++){
      const current = grid[i][j];
      //core
      if (i > 0 && j > 0 && i < scl - 1 && j < scl - 1){
        if (current == grid[i+1][j] || current == grid[i-1][j] || current == grid[i][j+1] || current == grid[i][j-1]){
          stillAlive = true;
          break loop1;
        }// edges, not corners
      } else if (i == 0 && j > 0 && j < scl - 1){
        if (current == grid[i+1][j] || current == grid[i][j+1] || current == grid[i][j-1]){
          stillAlive = true;
          break loop1;
        }
      } else if (i == scl - 1 && j > 0 && j < scl - 1){
        if (current == grid[i][j-1] || current == grid[i-1][j] || current == grid[i][j+1]){
          stillAlive = true;
          break loop1;
        }
      } else if (j == 0 && i > 0 && i < scl - 1){
        if (current == grid[i-1][j] || current == grid[i][j+1] || current == grid[i+1][j]){
          stillAlive = true;
          break loop1;
        }
      } else if (j == scl - 1 && i > 0 && i < scl - 1){
        if (current == grid[i+1][j] || current == grid[i-1][j] || current == grid[i][j-1]){
          stillAlive = true;
          break loop1;
        }// corners
      } else if (i == 0 && j == 0) {
        if (current == grid[i+1][j] || current == grid[i][j+1]){
          stillAlive = true;
          break loop1;
        }
      } else if (i == 0 && j == scl - 1) {
        if (current == grid[i+1][j] || current == grid[i][j-1]){
          stillAlive = true;
          break loop1;
        }
      } else if (i == scl - 1 && j == scl - 1) {
        if (current == grid[i-1][j] || current == grid[i][j-1]){
          stillAlive = true;
          break loop1;
        }
      } else if (i == scl - 1 && j == 0) {
        if (current == grid[i-1][j] || current == grid[i][j+1]){
          stillAlive = true;
          break loop1;
        }
      }
    }
  }

  for (let i = 0; i < grid.length; i++){
    for (let j = 0; j < grid[i].length; j++){
      if (grid[i][j] == 0){
        stillAlive = true;
      }
    }
  }

  return !stillAlive;
}



function newNum() {
  let list = [];
  for (let i = 0; i < grid.length; i++){
    for (let j = 0; j < grid[i].length; j++){
      if (grid[i][j] == 0){
        list.push({i, j});
      }
    }
  }
  let chosen = list[Math.floor(random(0, list.length))];
  grid[chosen.i][chosen.j] = 2;
}

function showBoard(ctx, canv, grid, scl, space, colors) {
  clear(ctx, canv, '#BBADA0');
  for (let i = 0; i < scl; i++){
    for (let j = 0; j < scl; j++){
      if (grid[i][j] == 0){
        roundRect(ctx, j * (canv.width / scl) + space, i * (canv.width / scl) + space, (canv.width / scl) - space * 2, canv.height / scl - space * 2, 10, '#CDC1B4');
      } else if (grid[i][j] <= 4){
        roundRect(ctx, j * (canv.width / scl) + space, i * (canv.width / scl) + space, (canv.width / scl) - space * 2, canv.height / scl - space * 2, 10, colors[log(2, grid[i][j]) - 1]);
        text(ctx, grid[i][j], j * (canv.width / scl) + space + (canv.width / 16) + 30, i * (canv.width / scl) + space + (canv.width / 8) + 10, '#776E65');
      } else {
        roundRect(ctx, j * (canv.width / scl) + space, i * (canv.width / scl) + space, (canv.width / scl) - space * 2, canv.height / scl - space * 2, 10, colors[log(2, grid[i][j]) - 1]);
        text(ctx, grid[i][j], j * (canv.width / scl) + space + (canv.width / 16) + 30, i * (canv.width / scl) + space + (canv.width / 8) + 10, 'white');
      }
    }
  }
}
