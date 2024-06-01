require 'minitest/autorun'

def count_positives_sum_negatives(lst)
  return [] if lst.empty?

  positive_count = lst.count(&:positive?)
  negative_sum = lst.select(&:negative?).sum

  [positive_count, negative_sum]
end

class CountPositivesSumNegativesTest < MiniTest::Test
  def test_return_next_square_for_perfect_squares
    assert_equal [10,-65], count_positives_sum_negatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])
    assert_equal [8,-50], count_positives_sum_negatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14])
    assert_equal [1,0], count_positives_sum_negatives([1])
    assert_equal [0,-1], count_positives_sum_negatives([-1])
    assert_equal [0,0], count_positives_sum_negatives([0,0,0,0,0,0,0,0,0])
    assert_equal [], count_positives_sum_negatives([])
  end
end