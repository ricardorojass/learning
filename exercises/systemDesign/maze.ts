// Debemos modelar un laberinto utilizando OOP.
// El laberinto tiene obstáculos: paredes, bombas y premios:

// Hay un robot que inicia en alguna posición del laberinto
// y su objetivo es llegar a la meta.

// El robot va a tener energía. Si se queda sin energía por las
// bombas pierde. Los premios le dan energía.

// Laberinto (tablero)
  // inicio
  // meta

class Maze {
  walls: boolean[][]

  constructor(maze) {
    this.walls = maze
  }
}

// Paredes
  // posicion
  // puede o no haber pared

// Robot
  // nombre
  // posicion
  // bateria

interface Position {
  x: number
  y: number
}

enum Direction {
  Up = 'up',
  Down = 'down',
  Left = 'left',
  Right = 'right'
}

class Robot {
  energy
  position
  walls: boolean[][]

  constructor(walls: boolean[][], position: Position) {
    this.energy = 100
    this.position = position
    this.walls = walls
  }

  move(direction: string) {
    switch (direction) {
      case Direction.Up:
        if (this.isThereWall(direction, this.position)) {
          console.log('Attention, there is a wall!');
        } else {
          this.position.x -= 1
        }
        break
      case "down":
        if (this.isThereWall(direction, this.position)) {
          console.log('Attention, there is a wall!');
        } else {
          this.position.x += 1
        }
        break
      case "left":
        if (this.isThereWall(direction, this.position)) {
          console.log('Attention, there is a wall!');
        } else {
          this.position.y -= 1
        }
        break
      default:
        if (this.isThereWall(direction, this.position)) {
          console.log('Attention, there is a wall!');
        } else {
          this.position.y += 1
        }
        break
    }
  }

  isThereWall(direction: string, position: Position) {
    switch (direction) {
      case Direction.Up:
        return this.walls[position.x-1][position.y] ? true : false
      case Direction.Down:
        return this.walls[position.x+1][position.y] ? true : false
      case Direction.Left:
        return this.walls[position.x][position.y-1] ? true : false

      default:
        return this.walls[position.x][position.y+1] ? true : false
    }
  }

}



function start() {
  const board = [
    [true, true, true, true],
    [true, false, false, false],
    [true, false, true, true],
    [true, false, false, true],
    [true, true, false, true],
    [false, false, false, true],
    [true, true, true, true],
  ]
  const maze = new Maze(board)

  const start = findStarterPoint(maze)
  const robot = new Robot(maze.walls, start)


  robot.move('right')
  robot.move('up')
  console.log(robot.position)
}

start()

function findStarterPoint(maze) {
  let start
  for (let i = 0; i < maze.walls.length; i++) {
    const wall = maze.walls[i][0]
    if (!wall) {
      start = { x: i, y: 0}
    }
  }
  return start
}

// Premios
  // posicion

// Bombas
  // posicion