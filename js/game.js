

export class Game{
    constructor(category){
        this.category = category;
     }


     async getGames() {
         const options = {
             method: 'GET',
             headers: {
                 'x-rapidapi-key': '781eae6474mshc616a6c449d9887p1f28e7jsn86c13e9a5a23',
                 'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
             }
         };
         let api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${this.category}` , options)

         let games = await api.json()
        //  document.getElementById("overlay").classList.add('d-none')

        
         return games;
         
        
        
     }
}