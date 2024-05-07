interface Duo {
  id?: string
  duoName: string
  players: Player[]
  win: number
  loses: number
  pointsMade: number
  pointsReceive: number
  stagePoints: number
}

interface Game {
  id?: string
  name: string
  doubles: Duo[]
  pointsA: number
  pointsB: number
  field: number
  groupName: string
}

interface Group {
  id?: string
  name: string
  stageId?: string

  doubles?: Duo[]
  games?: Game[]
}

interface Stage {
  id?: string
  name: string
  groups: Group[]
  games: Game[]
  doubles: Duo[]
}
