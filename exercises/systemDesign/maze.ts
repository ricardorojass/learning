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
  robotPosition
  walls: boolean[][]
  rewards: any

  constructor(walls: boolean[][], rewardPos: any, position: Position) {
    this.energy = 5
    this.robotPosition = position
    this.walls = walls
    this.rewards = rewardPos
  }

  move(direction: string) {
    const nextRobotPosition: Position = this.calculateNextPosition(direction, this.robotPosition)
    switch (direction) {
      case Direction.Up:
        if (this.isThereWall(direction, this.robotPosition)) {
          console.log('Attention, there is a wall!');
        } else {
          if (this.isThereReward(nextRobotPosition, this.rewards)) {
            this.energy += 1
          }
          this.robotPosition.x -= 1
        }
        break
      case "down":
        if (this.isThereWall(direction, this.robotPosition)) {
          console.log('Attention, there is a wall!');
        } else {
          if (this.isThereReward(nextRobotPosition, this.rewards)) {
            this.energy += 1
          }
          this.robotPosition.x += 1
        }
        break
      case "left":
        if (this.isThereWall(direction, this.robotPosition)) {
          console.log('Attention, there is a wall!');
        } else {
          if (this.isThereReward(nextRobotPosition, this.rewards)) {
            this.energy += 1
          }
          this.robotPosition.y -= 1
        }
        break
      default:
        if (this.isThereWall(direction, this.robotPosition)) {
          console.log('Attention, there is a wall!');
        } else {
          if (this.isThereReward(nextRobotPosition, this.rewards)) {
            this.energy += 1
          }
          this.robotPosition.y += 1
        }
        break
    }
  }

  calculateNextPosition(direction: string, robotPosition: Position): Position {
    let nextPosition: Position
    switch (direction) {
      case Direction.Up:
        nextPosition = { x: robotPosition.x-1, y: robotPosition.y }
        break
      case Direction.Down:
        nextPosition = { x: robotPosition.x+1, y: robotPosition.y }
        break
      case Direction.Left:
        nextPosition = { x: robotPosition.x, y:robotPosition.y-1 }
        break

      default:
        nextPosition = { x: robotPosition.x, y: robotPosition.y+1 }
        break
    }
    return nextPosition
  }

  isThereWall(direction: string, position: Position): boolean {
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

  isThereReward(nextRobotPosition: Position, rewardPositions: any): boolean {
    // iterar por las posiciones de los premios y verificar que la nueva
    // posicion del robot sea la del premio
    // si es la del premio el robot debe aumentar su energia.
    for (let i = 0; i < rewardPositions.length; i++) {
      const position = rewardPositions[i];
      return JSON.stringify(position) === JSON.stringify(nextRobotPosition)
    }
  }

}

function start() {
  const board = [
    [true, true, true, true, true, true, true, true],
    [true, false, false, false, false, false, false, false],
    [true, false, true, true, true, true, true, true],
    [true, false, false, true, true, true, true, true],
    [true, true, false, true, true, true, true, true],
    [false, false, false, true, true, true, true, true],
    [true, true, true, true, true, true, true, true],
  ]
  const maze = new Maze(board)
  const start = findStarterPoint(maze.walls)
  // Todo: initialize reward
  let rewardPositions = []
  const firstRewardPosition = putObjectInMaze(maze.walls)
  const secondRewardPosition = putObjectInMaze(maze.walls)
  rewardPositions.push(firstRewardPosition, secondRewardPosition)
  rewardPositions
  const robot = new Robot(maze.walls, rewardPositions, start)

  robot.move('right')
  robot.move('right')

  console.log(robot.robotPosition)
  console.log(robot.energy)
}

start()

function findStarterPoint(walls: boolean[][]) {
  let start
  for (let i = 0; i < walls.length; i++) {
    const wall = walls[i][0]
    if (!wall) {
      start = { x: i, y: 0}
    }
  }
  return start
}


// Return {Position}
function putObjectInMaze(walls) {
  let position: Position

  for (let i = 0; i < walls.length; i++) {
    for (let j = 0; j < walls[i].length; j++) {
      const wall = walls[i][j]
      if (!wall) {
        position = { x: i, y: j}
      }
    }
  }
  return position
}

// Premios
  // posicion

class Reward {
  position: Position

  constructor(position: Position) {
    this.position = position
  }
}

// Bombas
  // posicion