import App from './src/App.js'
// import TitleScreen from './src/states/TitleScreen.js'
import Game from './src/states/Game.js'

const app = App()
const game = Game()
app.stateStack.push(game)
app.init()
