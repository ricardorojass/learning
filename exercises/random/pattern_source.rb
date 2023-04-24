def solution(pattern, source)
  vowels = "aeiouy"
  count = 0
  (0..source.length - pattern.length).each do |i|
    substring = source[i, pattern.length]
    if pattern.length == substring.length
      pattern.chars.zip(substring.chars).all? { |p, s| puts "#{p == "0"}, #{vowels.include?(s)}"}
      if pattern.chars.zip(substring.chars).all? { |p, s| (p == "0") == vowels.include?(s) }
          count += 1
      end
    end
  end
  count
end



p solution("010", "amazing")
# p solution("100", "codesignal")