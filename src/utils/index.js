export const generateRounds = (brackets) => {
  const rounds = Object.keys(brackets)
  const totalRounds = rounds.length
  let currentRound = []
  let previousRound = []

  for (let i = 0; i < totalRounds; i++) {
    currentRound = brackets[rounds[i]].map((game) => {
      const gameKey = (Object.keys(game) || [])[0]

      return {
        title: rounds[i],
        team: Array.isArray(game[gameKey]) ? game[gameKey] : [],
        teamNo: gameKey,
        teams: [],
        hasParent: !!brackets[rounds[i + 1]],
      }
    })

    if (previousRound.length === 0) {
      previousRound = currentRound
      continue
    }

    for (let j = 0; j < previousRound.length; j++) {
      const matchForCurrentGame = Math.floor(j / 2)
      currentRound[matchForCurrentGame].teams.push(previousRound[j])
    }

    previousRound = currentRound
  }

  return currentRound[0] || null
}

export const convertJSON = (data) => {
  return JSON.parse(JSON.stringify(data))
}
