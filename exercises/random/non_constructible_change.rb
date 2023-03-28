# O(n log n) time | O(1) space
def non_constructible_change(coins)
  coins.sort()

  current_change_created = 0
  for coin in coins
    if coin > current_change_created + 1
      return current_change_created + 1
    end

    current_change_created += coin
  end

  return current_change_created + 1
end

p non_constructible_change([1, 1, 2, 3, 5, 7, 22])