import { Details } from './detail.js'
import { gamesInfo } from './main.js'
export class UI {
    constructor() { }

    displayGamesData() {

        document.getElementById("games").classList.remove("d-none")
        document.getElementById("games-data").innerHTML = `

         ${gamesInfo.map((game) => {
            return `
         <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">

             <div class="card shadow h-100" game-id='${game.id}' >
                        <div class="p-3">
                            <img src="${game.thumbnail}" class="card-img-top rounded-2" alt="game-img">

                        </div>
                        <div class="card-body p-3">
                            <div class="d-flex align-items-center justify-content-between">
                                <h5 class="card-title text-white mb-0">${game.title}</h5>
                                <span class="badge text-bg-primary text-capitalize type">free</span>

                            </div>
                            <p class="card-text my-2 text-center" id="game-small-description">
                                ${game.short_description.split(' ').slice(0, 9).join(' ')}
                            </p>
                        </div>
                        <div class="card-footer p-2 d-flex justify-content-between">
                            <span class="badge text-bg-secondary" id="game-cat">${game.genre}</span>
                            <span class="badge text-bg-secondary" id="game-platform">${game.platform}</span>


                        </div>
                    </div>
                </div>
            
            
            `

        }).join("")}
        
        
        `

        let allCards = document.querySelectorAll(".card")
       for (let i = 0; i < allCards.length; i++) {
        let gameId = allCards[i].getAttribute('game-id');
        allCards[i].addEventListener('click' , ()=>{
            this.displayGameDetail(gameId)
            document.getElementById("overlay").classList.replace('d-none', 'd-flex')

        })
        
        
       }

        document.getElementById("overlay").classList.replace('d-flex', 'd-none')



    }
    async displayGameDetail(id) {
        
        // document.getElementById("overlay").classList.add('d-none')
        let d = new Details(id)
        let gameDetail = await d.getDetails()

        document.getElementById("overlay").classList.replace('d-flex', 'd-none')

        
        document.getElementById("games").classList.add("d-none")
        document.getElementById("game-detail-section").classList.remove("d-none")
        document.getElementById("game-detail").innerHTML = `
        <div class="col-xl-4 col-12">
                    <div class="game-img">
                        <img src="${gameDetail.thumbnail}" class="w-100" alt="">
                    </div>
                </div>
                <div class="col-xl-8 col-12">
                    <div class="game-detail">
                        <h5 class="text-white mb-2">
                            Title: ${gameDetail.title}
                        </h5>
                        <p class="game-category">
                            <span class="text-white me-1 text-capitalize">category: </span>
                            <span class="badge text-bg-info" id="game-cat">${gameDetail.genre}</span>
                        </p>
                        <p class="game-category">
                            <span class="text-white me-1 text-capitalize">platform: </span>
                            <span class="badge text-bg-info" id="game-cat">${gameDetail.platform}</span>
                        </p>
                        <p class="game-category">
                            <span class="text-white me-1 text-capitalize">Status: </span>
                            <span class="badge text-bg-info" id="game-cat">${gameDetail.status}</span>
                        </p>

                        <p id="game-long-desc" class="text-white">
                            ${gameDetail.description}
                        </p>

                        <a href="${gameDetail.game_url}" target="_blank" class="btn btn-outline-warning text-capitalize text-white">show game</a>

                    </div>
                </div>
        
        
        `
        closeDetail.addEventListener('click', function () {
           document.getElementById("game-detail-section").classList.add("d-none")
            document.getElementById("games").classList.remove("d-none")

        })
    }
}