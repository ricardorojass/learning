require 'minitest/autorun'
require 'pry'

def find_next_square(sq)
  sqr = Math.sqrt(sq)
  value = sqr.to_i
  if (value == sqr)
    next_perfect_sq = value + 1
    return next_perfect_sq * next_perfect_sq
  end
  -1
end

class FindNextSquareTest < MiniTest::Test
  def test_return_next_square_for_perfect_squares
    assert_equal 144, find_next_square(121)
    assert_equal 676, find_next_square(625)
    assert_equal 320356, find_next_square(319225)
    assert_equal 15241630849, find_next_square(15241383936)
  end
end