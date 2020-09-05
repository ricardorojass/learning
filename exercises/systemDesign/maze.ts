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
  battery
  finishPosition
  robotPosition
  walls: boolean[][]
  rewards: any

  constructor(walls: boolean[][], rewardPos: any, start: Position, finish: Position) {
    this.battery = 5
    this.robotPosition = start
    this.finishPosition = finish
    this.walls = walls
    this.rewards = rewardPos
  }

  move(direction: string) {
    const nextRobotPosition: Position = this.calculateNextPosition(direction, this.robotPosition)
    nextRobotPosition
    if (JSON.stringify(nextRobotPosition) === JSON.stringify(this.finishPosition)) {
      throw new Error(`You are finished in position: ${JSON.stringify(this.finishPosition)}`)
    }
    switch (direction) {
      case Direction.Up:
        if (this.isThereWall(direction, this.robotPosition)) {
          throw new Error('Wrong movement')
        } else {
          if (this.isThereReward(nextRobotPosition, this.rewards)) this.battery += 1
          this.robotPosition.x -= 1
        }
        break
      case "down":
        if (this.isThereWall(direction, this.robotPosition)) {
          throw new Error('Wrong movement')
        } else {
          if (this.isThereReward(nextRobotPosition, this.rewards)) this.battery += 1
          this.robotPosition.x += 1
        }
        break
      case "left":
        if (this.isThereWall(direction, this.robotPosition)) {
          throw new Error('Wrong movement')
        } else {
          if (this.isThereReward(nextRobotPosition, this.rewards)) this.battery += 1
          this.robotPosition.y -= 1
        }
        break
      default:
        if (this.isThereWall(direction, this.robotPosition)) {
          throw new Error('Wrong movement')
        } else {

          if (this.isThereReward(nextRobotPosition, this.rewards)) this.battery += 1
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
    for (let i = 0; i < rewardPositions.length; i++) {
      const position = rewardPositions[i]
      if (JSON.stringify(position) === JSON.stringify(nextRobotPosition)) return true
    }
    return false
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
  // Todo: Made this dinamically
  const finish = { x: 1, y: 8 }
  // Todo: initialize reward
  const rewardPositions = [ { x: 5, y: 2 }, { x: 4, y: 2 } ]
  const robot = new Robot(maze.walls, rewardPositions, start, finish)

  robot.move('right')
  robot.move('right')
  robot.move('up')
  robot.move('up')
  robot.move('left')
  robot.move('up')
  robot.move('up')
  robot.move('right')
  robot.move('right')
  robot.move('right')
  robot.move('right')
  robot.move('right')
  robot.move('right')
  robot.move('right')

  console.log(robot.robotPosition)
  console.log(robot.battery)
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