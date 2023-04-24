def reverse_string(s)
  left = 0
  right = s.length - 1
  while left < right
    s[left], s[right] = s[right], s[left]
    left += 1
    right -= 1
  end

  return s
end

p reverse_string(["h","e","l","l","o"])
