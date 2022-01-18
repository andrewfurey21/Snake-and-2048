function down(grid) {
  let oldgrid = extractColumns(grid);
  let newgrid = [];
  for (let i = 0; i < scl; i++){
    let newarr = zerosRight(oldgrid[i]);
    if (newarr.length < scl){
      for (let k = 0; k < scl - newarr.length; k++){
        newarr.unshift(0);
      }
    }
    newgrid.push(addRight(newarr));
  }
  newgrid = extractColumns(newgrid);
  return newgrid;

}

function left(grid) {
  let newgrid = [];
  for (let i = 0; i < scl; i++){
    let newarr = zerosLeft(grid[i]);
    if (newarr.length < scl){
      for (let k = 0; k < scl - newarr.length; k++){
        newarr.push(0);
      }
    }
    // console.table(newarr);
    newgrid.push(addLeft(newarr));
  }

  return newgrid;

}

function  addLeft(arr) {
    let newarr = [];
    for (let j = 0; j < scl; j++){
      if (arr[j] == arr[j+1] && j != 3){
        score += arr[j] * 2;
        newarr.push(arr[j] * 2);
        ++j;
      } else if (arr[j+1] == 0 && j != 3){
        newarr.push(arr[j])
      } else {
        newarr.push(arr[j]);
      }
    }
    if (newarr.length < scl){
      for (let i = 0; i < scl - newarr.length; i++){
        newarr.push(0);
      }
    }

    if (newarr.length < scl){
      for (let i = 0; i < scl - newarr.length; i++){
        newarr.push(0);
      }
    }
    // console.table(newarr)
    return newarr;
}

function zerosLeft(arr){
  let newarr = [];
  let moveon = true;
  for (let i = 0; i < arr.length; i++){
    if (arr[i] > 0){
       moveon = false;
    }
  }
  if (!moveon){
    for (let i = 0; i < arr.length; i++){
      if (arr[i] != 0){
        newarr.push(arr[i]);
      }
    }
  }
  if (newarr.length < scl){
    for (let i = 0; i < scl - newarr.length; i++){
      newarr.push(0);
    }
  }
  if (moveon){
    newarr = [0, 0, 0, 0];
  }
  return newarr;
}

function right(grid) {
  let newgrid = [];
  for (let i = 0; i < scl; i++){
    let newarr = zerosRight(grid[i]);
    if (newarr.length < scl){
      for (let k = 0; k < scl - newarr.length; k++){
        newarr.unshift(0);
      }
    }
    newgrid.push(addRight(newarr));
  }

  return newgrid;

}

function  addRight(arr) {
    let newarr = [];
    for (let j = scl - 1; j >= 0; j--){
      if (arr[j] == arr[j-1] && j != 0){
        score += arr[j] * 2;
        newarr.unshift(arr[j] * 2);
        --j;
      } else if (arr[j-1] == 0 && j != 0){
        newarr.unshift(arr[j])
      } else {
        newarr.unshift(arr[j]);
      }
    }
    if (newarr.length < scl){
      for (let i = 0; i < scl - newarr.length; i++){
        newarr.unshift(0);
      }
    }

    if (newarr.length < scl){
      for (let i = 0; i < scl - newarr.length; i++){
        newarr.unshift(0);
      }
    }
    return newarr;
}

function zerosRight(arr){
  let newarr = [];
  let moveon = true;
  for (let i = 0; i < arr.length; i++){
    if (arr[i] > 0){
       moveon = false;
    }
  }
  if (!moveon){
    for (let i = arr.length - 1; i >= 0; --i){
      if (arr[i] != 0){
        newarr.unshift(arr[i]);
      }
    }
  }
  if (newarr.length < scl){
    for (let i = 0; i < scl - newarr.length; i++){
      newarr.unshift(0);
    }
  }
  if (moveon){
    newarr = [0, 0, 0, 0];
  }
  return newarr;
}

//to insert, use extract again
function extractColumns(grid){
  //returns 2d array, but of columns instead of rows
  let newgrid = [];
  for (let i = 0; i < grid.length; i++){
    newgrid.push(new Array());
    for (let j = 0; j < grid[i].length; j++){
      newgrid[i].push(0);
    }
  }
  for (let i = 0; i < grid.length; i++){
    for (let j = 0; j < grid[i].length; j++){
      newgrid[i][j] = grid[j][i];
    }
  }
  return newgrid;
}


function up(grid) {
  let oldgrid = extractColumns(grid);
  let newgrid = [];
  for (let i = 0; i < scl; i++){
    let newarr = zerosLeft(oldgrid[i]);
    if (newarr.length < scl){
      for (let k = 0; k < scl - newarr.length; k++){
        newarr.push(0);
      }
    }

    newgrid.push(addLeft(newarr));

  }
  newgrid = extractColumns(newgrid);
  return newgrid;

}
