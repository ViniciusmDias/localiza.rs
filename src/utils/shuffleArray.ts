export function shuffleArray(players: any[]) {
  return players.sort(() => Math.random() - 0.5)
}

export function createDoubles(leftPlayers: Player[], rightPlayers: Player[]) {
  return Array.from({ length: 16 }, (_, i) => ({
    duoName: leftPlayers[i].name + ' e ' + rightPlayers[i].name,
    leftPlayer: leftPlayers[i],
    rightPlayer: rightPlayers[i],
    win: 0,
    loses: 0,
    pointsMade: 0,
    pointsReceive: 0,
  }))
}
