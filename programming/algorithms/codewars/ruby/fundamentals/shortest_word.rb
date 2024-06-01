require 'minitest/autorun'

def find_short(s)
  l = s.split.min_by(&:length).length
  return l # l: length of the shortest word
end

class FindShortTest < MiniTest::Test
  def test_basic_test
    assert_equal 3, find_short("bitcoin take over the world maybe who knows perhaps")
    assert_equal 3, find_short("turns out random test cases are easier than writing out basic ones")
    assert_equal 3, find_short("lets talk about javascript the best language")
    assert_equal 1, find_short("i want to travel the world writing code one day")
    assert_equal 2, find_short("Lets all go on holiday somewhere very cold")
    assert_equal 2, find_short("Let's travel abroad shall we")
  end
end