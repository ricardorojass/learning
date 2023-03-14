# O(n) time | O(1) space
# def validate_subsequence(arr, sequence)
#   # iterate arr
#   arrIdx = 0
#   seqIdx = 0
#   while arrIdx < arr.length && seqIdx < sequence.length
#     if (arr[arrIdx] == sequence[seqIdx])
#       seqIdx += 1
#       # loop sub until nil
#     end
#     arrIdx += 1
#   end
#   return seqIdx == sequence.length

# end

# O(n) time | O(1) space
def validate_subsequence(arr, sequence)
  # iterate arr
  seqIdx = 0
  arr.each do |value|
    break if seqIdx == sequence.length
    if sequence[seqIdx] == value
      seqIdx += 1
    end
  end
  return seqIdx == sequence.length
end

arr = [5,1,22,25,6,-1,8,10]
sub = [1,6,-1,10]
p validate_subsequence(arr, sub)
