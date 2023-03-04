# https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/

# @param {Integer[]} nums
# @return {Integer}
def remove_duplicates(nums)
    return 0 if nums.nil? || nums.empty?

    i = 0
    j = 1

    while j < nums.length
        if nums[i] != nums[j]
        i += 1
        nums[i] = nums[j]
        end
        j += 1
    end

    nums.fill('_', i + 1)
    return i + 1
end

k = remove_duplicates([1,1,2])
