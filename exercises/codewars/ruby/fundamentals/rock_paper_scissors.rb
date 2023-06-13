def rps(p1, p2)
  return 'Draw!' if p1 == p2

  winning_moves = {
    'rock' => 'scissors',
    'scissors' => 'paper',
    'paper' => 'rock'
  }

  return 'Player 1 won!' if winning_moves[p1] == p2
  'Player 2 won!'

end