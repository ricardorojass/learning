require 'minitest/autorun'

def get_middle(s)
  return s if s.length == 1

  middle_index = s.length / 2
  if s.length.even?
    s[middle_index - 1..middle_index]
  else
    s[middle_index]
  end

end

class GetMiddleTest < MiniTest::Test
  def test_basic_test
    assert_equal 'es', get_middle('test')
    assert_equal 't', get_middle('testing')
    assert_equal 'dd', get_middle('middle')
    assert_equal 'A', get_middle('A')
    assert_equal 'of', get_middle('of')
  end
end