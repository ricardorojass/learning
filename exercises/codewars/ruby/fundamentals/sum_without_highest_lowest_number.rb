require 'minitest/autorun'

def sum_array(arr)
  return 0 if arr.nil? || arr.empty?

  return 0 if arr.length <= 2

  sum = 0
  highest = nil
  lowest = nil

  arr.each do |num|
    sum += num
    highest = num if highest.nil? || num > highest
    lowest = num if lowest.nil? || num < lowest
  end

  sum - highest - lowest
end

class SumArrayTest < MiniTest::Test
  def test_empty_array
    assert_equal 0, sum_array(nil)
    assert_equal 0, sum_array([])
  end

  def test_one_elements
    assert_equal 0, sum_array([3])
  end

  def test_two_elements
    assert_equal 0, sum_array([1, 2])
    assert_equal 0, sum_array([-3, -5])
  end

  def test_multiple_elements
    assert_equal 16, sum_array([6, 2, 1, 8, 10])
    assert_equal 17, sum_array([6, 0, 1, 10, 10])
    assert_equal -28, sum_array([-6, -20, -1, -10, -12])
    assert_equal 3, sum_array([-6, 20, -1, 10, -12])
  end
end