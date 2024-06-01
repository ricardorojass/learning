# O(n) time | O(k) space
def tournament_winner(competitions, results)
  current_best_team = ""
  scores = {current_best_team: 0}

  competitions.each_index do |i|
    winner = results[i] > 0 ? 0 : 1
    winning_team = competitions[i][winner]
    update_scores(winning_team, 3, scores)
    if scores[winning_team] > scores[:current_best_team]
      current_best_team = winning_team
    end
  end
  current_best_team
end

def update_scores(team, points, scores)
  if !scores.include?(team)
    scores[team] = 0
  end

  scores[team] += points
end

competitions = [
  ["html", "c#"],
  ["c#", "python"],
  ["python", "html"]
]
results = [0,0,1]

p tournament_winner(competitions, results)