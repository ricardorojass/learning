// Debemos modelar un laberinto utilizando OOP.
// El laberinto tiene obstáculos: paredes, bombas y premios:

// Hay un robot que inicia en alguna posición del laberinto
// y su objetivo es llegar a la meta.

// El robot va a tener energía. Si se queda sin energía por las
// bombas pierde. Los premios le dan energía.

// Laberinto (tablero)
  // inicio
  // meta

// Todo create classes for this objects.
// Premios
  // posicion

// Bombas
  // posicion

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

interface ObstacleInterface {
  x: number,
  y: number
}

interface RobotInterface {
  move(direction: string): void
  calculateNextPosition(direction: string, robotPosition: Position): Position
  isThereWall(direction: string, robotPosition: Position): boolean
  isThereReward(nextRobotPosition: Position, rewards: ObstacleInterface[]): boolean
  isThereBomb(nextRobotPosition: Position, bombs: ObstacleInterface[]): boolean
}

class Robot implements RobotInterface{
  battery: number
  finishPosition: Position
  robotPosition: Position
  walls: boolean[][]
  rewards: ObstacleInterface[]
  bombs: ObstacleInterface[]

  constructor(walls: boolean[][], rewardPos: ObstacleInterface[], bombPos: ObstacleInterface[], start: Position, finish: Position) {
    this.battery = 5
    this.robotPosition = start
    this.finishPosition = finish
    this.walls = walls
    this.rewards = rewardPos
    this.bombs = bombPos
  }

  move(direction: string) {
    const nextRobotPosition: Position = this.calculateNextPosition(direction, this.robotPosition)

    if (this.battery == 0) {
      // Refactorizar para separar la interfaz, idea, lanzar un error.
      console.log(`Game over! Your battery percentage is: ${this.battery} %`)
      return
    }
    // Validate if the robot is in the finish point
    if (JSON.stringify(nextRobotPosition) === JSON.stringify(this.finishPosition)) {
      console.log(`You are the winner! ${JSON.stringify(this.finishPosition)}`)
      return
    }

    switch (direction) {
      case Direction.Up:
        if (this.isThereWall(direction, this.robotPosition)) {
          throw new Error('Wrong movement')
        } else {
          if (this.isThereReward(nextRobotPosition, this.rewards)) this.battery += 1
          if (this.isThereBomb(nextRobotPosition, this.bombs)) this.battery -= 1
          this.robotPosition.x -= 1
        }
        break
      case "down":
        if (this.isThereWall(direction, this.robotPosition)) {
          throw new Error('Wrong movement')
        } else {
          if (this.isThereReward(nextRobotPosition, this.rewards)) this.battery += 1
          if (this.isThereBomb(nextRobotPosition, this.bombs)) this.battery -= 1
          this.robotPosition.x += 1
        }
        break
      case "left":
        if (this.isThereWall(direction, this.robotPosition)) {
          throw new Error('Wrong movement')
        } else {
          if (this.isThereReward(nextRobotPosition, this.rewards)) this.battery += 1
          if (this.isThereBomb(nextRobotPosition, this.bombs)) this.battery -= 1
          this.robotPosition.y -= 1
        }
        break
      default:
        if (this.isThereWall(direction, this.robotPosition)) {
          throw new Error('Wrong movement')
        } else {

          if (this.isThereReward(nextRobotPosition, this.rewards)) this.battery += 1
          if (this.isThereBomb(nextRobotPosition, this.bombs)) this.battery -= 1
          this.robotPosition.y += 1
        }
        break
    }
  }

  private calculateNextPosition(direction: string, robotPosition: Position): Position {
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

  isThereReward(nextRobotPosition: Position, rewardPositions: ObstacleInterface[]): boolean {
    // iterar por las posiciones de los premios y verificar que la nueva
    // posicion del robot sea la del premio
    for (let i = 0; i < rewardPositions.length; i++) {
      const position = rewardPositions[i]
      if (JSON.stringify(position) === JSON.stringify(nextRobotPosition)) return true
    }
    return false
  }

  isThereBomb(nextRobotPosition: Position, bombPositions: ObstacleInterface[]): boolean {
    // iterar por las posiciones de los premios y verificar que la nueva
    // posicion del robot sea la del premio
    for (let i = 0; i < bombPositions.length; i++) {
      const position = bombPositions[i]
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
  // Eliminar la clase maze, no se esta usando.
  const maze = new Maze(board)
  const start = findStarterPoint(maze.walls)
  // Todo: Made finish position dinamically
  const finish = { x: 1, y: 8 }
  const rewardPositions: ObstacleInterface[] = [ { x: 5, y: 2 }, { x: 4, y: 2 } ]
  const bombPositions = [ { x: 2, y: 1 }, { x: 1, y: 3 }, { x: 1, y: 5 } ]
  const robot = new Robot(maze.walls, rewardPositions, bombPositions, start, finish)

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
