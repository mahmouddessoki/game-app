import { UI } from './ui.js'
import { Game } from './game.js'
export let gamesInfo;
let game;
let ui = new UI()
document.getElementById('nav').addEventListener("click", async function (e) {
    if (e.target.tagName == "A") {
        e.preventDefault()
        game = new Game(e.target.innerHTML)
        gamesInfo = await game.getGames()
        ui.displayGamesData()

        document.querySelector(".active").classList.remove("active")
        e.target.classList.add("active")
    }

})
async function getGamesAtReload() {

    game = new Game('mmorpg')
    document.getElementById("overlay").classList.replace('d-none' , 'd-flex')
    gamesInfo = await game.getGames()
    ui.displayGamesData()

}
getGamesAtReload()


