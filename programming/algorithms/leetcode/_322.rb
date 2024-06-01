# @param {Integer[]} coins
# @param {Integer} amount
# @return {Integer}

# O(n * k) time | O(n) space
def coin_change(coins, amount)
  dp = Array.new(amount + 1, Float::INFINITY)
  dp[0] = 0

  for coin in coins do
    (coin..amount).each do |i|
      dp[i] = [dp[i], dp[i - coin] + 1].min
    end
  end

  if dp[amount] == Float::INFINITY
    return -1
  else
    return dp[amount]
  end
end

p coin_change([1,2,5], 11)