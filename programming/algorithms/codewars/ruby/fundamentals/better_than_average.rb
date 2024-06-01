def better_than_average(arr, points)
  arr.sum / arr.length < points
end

p better_than_average([2,3], 5)
