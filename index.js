import App from './src/App.js'
import TitleScreen from './src/states/TitleScreen.js'

const app = App()
const game = TitleScreen()
app.stateStack.push(game)
app.init()
