def fn(i)
  if i > 3
    return
  end

  puts i
  fn(i + 1)
  puts "End of call where i = #{i}"
  return
end

fn(1)
