const width = 28;
const grid = document.querySelector(".grid");
const scoreDisplay = document.getElementById("score");
let squares = [];
//starting position of pacman
let pacmanCurrentIndex = 490;
let score = 0;

//28 * 28 = 784
// 0 - pac-dots
// 1 - wall
// 2 - ghost-lair
// 3 - power-pellet
// 4 - empty

const layout = [
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  3,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  3,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  4,
  1,
  1,
  1,
  2,
  2,
  1,
  1,
  1,
  4,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  4,
  1,
  2,
  2,
  2,
  2,
  2,
  2,
  1,
  4,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  1,
  4,
  4,
  4,
  4,
  4,
  4,
  0,
  0,
  0,
  4,
  1,
  2,
  2,
  2,
  2,
  2,
  2,
  1,
  4,
  0,
  0,
  0,
  4,
  4,
  4,
  4,
  4,
  4,
  1,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  4,
  1,
  2,
  2,
  2,
  2,
  2,
  2,
  1,
  4,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  4,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  4,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  4,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  4,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  3,
  0,
  0,
  1,
  1,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  0,
  0,
  3,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  0,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  0,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  0,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  0,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  0,
  0,
  0,
  0,
  1,
  1,
  0,
  0,
  0,
  0,
  1,
  1,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  1,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
];

//create board
function createBoard() {
  for (i = 0; i < layout.length; i++) {
    const square = document.createElement("div");
    grid.appendChild(square);
    squares.push(square);
    if (layout[i] === 0) {
      square.classList.add("pac-dots");
    } else if (layout[i] === 1) {
      square.classList.add("wall");
    } else if (layout[i] === 2) {
      square.classList.add("ghost-lair");
    } else if (layout[i] === 3) {
      square.classList.add("power-pellet");
    }
  }
}
createBoard();

squares[pacmanCurrentIndex].classList.add("pacman");

function control(e) {
  squares[pacmanCurrentIndex].classList.remove("pacman");
  if (e.keyCode === 37) {
    if (
      pacmanCurrentIndex !== 364 &&
      !squares[pacmanCurrentIndex - 1].classList.contains("ghost-lair") &&
      !squares[pacmanCurrentIndex - 1].classList.contains("wall") &&
      pacmanCurrentIndex % width !== 0
    ) {
      pacmanCurrentIndex -= 1;
    } else if (pacmanCurrentIndex === 364) {
      pacmanCurrentIndex += width - 1;
    }
  } else if (e.keyCode === 38) {
    if (
      !squares[pacmanCurrentIndex - width].classList.contains("ghost-lair") &&
      !squares[pacmanCurrentIndex - width].classList.contains("wall") &&
      pacmanCurrentIndex - width >= 0
    ) {
      pacmanCurrentIndex -= width;
    }
  } else if (e.keyCode === 39) {
    if (
      pacmanCurrentIndex !== 391 &&
      !squares[pacmanCurrentIndex + 1].classList.contains("ghost-lair") &&
      !squares[pacmanCurrentIndex + 1].classList.contains("wall") &&
      pacmanCurrentIndex % width < width - 1
    ) {
      pacmanCurrentIndex += 1;
    } else if (pacmanCurrentIndex === 391) {
      pacmanCurrentIndex -= width - 1;
    }
  } else if (e.keyCode === 40) {
    if (
      !squares[pacmanCurrentIndex + width].classList.contains("ghost-lair") &&
      !squares[pacmanCurrentIndex + width].classList.contains("wall") &&
      pacmanCurrentIndex + width < width * width
    ) {
      pacmanCurrentIndex += width;
    }
  }
  squares[pacmanCurrentIndex].classList.add("pacman");
  pacDotEaten();
  powerPelletEaten();
  checkGameover();
  checkForWin();
}

document.addEventListener("keydown", control);

function pacDotEaten() {
  if (squares[pacmanCurrentIndex].classList.contains("pac-dots")) {
    score++;
    console.log("here");
    scoreDisplay.innerHTML = score;
    squares[pacmanCurrentIndex].classList.remove("pac-dots");
  }
}

function powerPelletEaten() {
  if (squares[pacmanCurrentIndex].classList.contains("power-pellet")) {
    squares[pacmanCurrentIndex].classList.remove("power-pellet");
    squares[pacmanCurrentIndex].classList.add("pacman");
    score += 10;
    ghosts.forEach((ghost) => (ghost.isScared = true));
    setTimeout(unScaredGhost, 10000);
  }
}

function unScaredGhost() {
  ghosts.forEach((ghost) => (ghost.isScared = false));
}

class ghost {
  constructor(className, startIndex, speed) {
    this.className = className;
    this.startIndex = startIndex;
    this.speed = speed;
    this.currentIndex = startIndex;
    this.isScared = false;
    this.timerId = NaN;
  }
}

const ghosts = [
  new ghost("blinkey", 348, 250),
  new ghost("pinkey", 376, 400),
  new ghost("inkey", 351, 300),
  new ghost("clyde", 379, 500),
];

//drawing ghosts
ghosts.forEach((ghost) => {
  squares[ghost.startIndex].classList.add(ghost.className);
  squares[ghost.startIndex].classList.add("ghost");
});

ghosts.forEach((ghost) => moveGhost(ghost));

function moveGhost(ghost) {
  const directions = [-1, 1, -width, width];
  let direction = directions[Math.floor(Math.random() * directions.length)];
  ghost.timerId = setInterval(function () {
    if (
      !squares[ghost.currentIndex + direction].classList.contains("ghost") &&
      !squares[ghost.currentIndex + direction].classList.contains("wall")
    ) {
      squares[ghost.currentIndex].classList.remove(ghost.className);
      squares[ghost.currentIndex].classList.remove("ghost", "scared-ghost");
      ghost.currentIndex += direction;
      squares[ghost.currentIndex].classList.add(ghost.className);
      squares[ghost.currentIndex].classList.add("ghost");
    } else {
      direction = directions[Math.floor(Math.random() * directions.length)];
    }
    if (ghost.isScared) {
      squares[ghost.currentIndex].classList.add("scared-ghost");
    }

    if (
      ghost.isScared &&
      squares[ghost.currentIndex].classList.contains("pacman")
    ) {
      squares[ghost.currentIndex].classList.remove(
        "ghost",
        ghost.className,
        "scared-ghost"
      );
      ghost.currentIndex = ghost.startIndex;
      score += 100;
      squares[ghost.currentIndex].classList.add("ghost", ghost.className);
    }
    checkGameover();
    checkForWin();
  }, ghost.speed);
}

//check for gameover
function checkGameover() {
  //if the square pacman is in contains a ghost AND the square does NOT contain a scared ghost
  if (
    squares[pacmanCurrentIndex].classList.contains("ghost") &&
    !squares[pacmanCurrentIndex].classList.contains("scared-ghost")
  ) {
    //for each ghost - we need to stop it moving
    ghosts.forEach((ghost) => clearInterval(ghost.timerId));
    //remove eventlistener from our control function
    document.removeEventListener("keydown", control);
    //tell user the game is over
    scoreDisplay.innerHTML = "YOU LOSE !";
  }
}

//check for Win
function checkForWin() {
  if (score >= 274) {
    //stop each ghost
    ghosts.forEach((ghost) => clearInterval(ghost.timerId));
    //remove the eventListener for the control function
    document.removeEventListener("keydown", control);
    //tell our user we have won
    scoreDisplay.innerHTML = "YOU WON !";
  }
}
