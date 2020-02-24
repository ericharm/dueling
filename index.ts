import Application from './src/Application.ts'
import GameState from './src/states/GameState.ts'

const app: Application = new Application()
const game: GameState = new GameState()
app.stateStack.push(game)
app.init({ frameRate: 60 })
