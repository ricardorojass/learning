require 'minitest/autorun'

def bmi(weight, height)
  case weight / (height ** 2)
  when 0..18.5
    "Underweight"
  when 18.5..25.0
    "Normal"
  when 25.0..30.0
    "Overweight"
  else
    "Obese"
  end
end

class BmiTest < MiniTest::Test
  def test_basic_test
    assert_equal 'Underweight', bmi(50, 1.80)
    assert_equal 'Normal', bmi(80, 1.80)
    assert_equal 'Overweight', bmi(90, 1.80)
    assert_equal 'Obese', bmi(110, 1.80)
    assert_equal 'Normal', bmi(50, 1.50)
  end
end