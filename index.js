import App from './src/App.js'
// import TitleScreen from './src/states/TitleScreen.js'
import GameState from './src/states/GameState.js'

const app = App()
const game = GameState()
app.stateStack.push(game)
app.init()
