const finalPosition = function (moves) {
  let position = [0,0];
  for (let move of moves) {
    if (move === "north") {
      position[1] ++
    }
    else if (move === "south") {
      position[1] --
    }
    else if (move === "east") {
      position[0] ++
    }
    else {
      position[0] --
    }
  }
  
  console.log(position);
}

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

finalPosition(moves);