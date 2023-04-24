def sorted_squares(nums)
  result = []

  nums.each do |n|
    result.push(n * n)
  end

  return result.sort
end

p sorted_squares([-4,-1,0,3,10])