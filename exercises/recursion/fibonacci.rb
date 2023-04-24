def F(memo, n)
  if (memo[n])
    return memo[n]
  end

  memo[n-1] = F(memo, n-1)
  memo[n-2] = F(memo, n-2)
  return memo[n-1] + memo[n-2]
end

p F( { 0 => 1, 1 => 1 }, 100)