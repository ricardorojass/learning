# def sorted_squared_array(arr)
#   first = 0
#   last = arr.length - 1
#   squared_array = []
#   while (squared_array.length < arr.length)
#     if (arr[first].abs > arr[last].abs)
#       squared_array.push(arr[last] ** 2)
#     else
#       squared_array.push(arr[first] ** 2)
#     end
#     first += 1
#     last -+ 1
#   end
#   squared_array
# end

# O(nlogn) time | O(n) space
# def sorted_squared_array(arr)
#   sorted_squares = arr.map { 0 }

#   arr.each_index do |i|
#     value = arr[i]
#     sorted_squares[i] = value * value
#   end
#   sorted_squares.sort()
# end

# O(n) time | O(n) space
# def sorted_squared_array(arr)
#   sorted_squares = arr.map { 0 }
#   smaller_value_idx = 0
#   larger_value_idx = arr.length - 1

#   arr.each_index.reverse_each do |i|
#     smaller_value = arr[smaller_value_idx]
#     larger_value = arr[larger_value_idx]

#     if smaller_value.abs > larger_value.abs
#       sorted_squares[i] = smaller_value * smaller_value
#       smaller_value_idx += 1
#     else
#       sorted_squares[i] = larger_value * larger_value
#       larger_value_idx -= 1
#     end
#   end

#   sorted_squares
# end

# O(n) time | O(n) space
def sorted_squared_array(arr)
  n = arr.length
  sorted_squares = Array.new(n, 0)

  left = 0
  right = n - 1
  i = n - 1
  while left <= right
    if arr[left] * arr[left] > arr[right] * arr[right]
      sorted_squares[i] = arr[left] * arr[left]
      left += 1
    else
      sorted_squares[i] = arr[right] * arr[right]
      right -= 1
    end
    i -= 1
  end

  return sorted_squares
end

p sorted_squared_array([-7,-5,-4,3,6,8,9])