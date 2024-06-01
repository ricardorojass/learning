require 'minitest/autorun'

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

class RpsTest < MiniTest::Test
  def test_player_1_win
    assert_equal 'Player 1 won!', rps('rock', 'scissors')
    assert_equal 'Player 1 won!', rps('scissors', 'paper')
    assert_equal 'Player 1 won!', rps('paper', 'rock')
  end
  def test_player_2_win
    assert_equal 'Player 2 won!', rps('scissors', 'rock')
    assert_equal 'Player 2 won!', rps('scissors', 'paper')
    assert_equal 'Player 2 won!', rps('rock', 'paper')
  end
  def test_draw
    assert_equal 'Draw!', rps('rock', 'rock')
    assert_equal 'Draw!', rps('scissors', 'scissors')
    assert_equal 'Draw!', rps('paper', 'paper')
  end

end