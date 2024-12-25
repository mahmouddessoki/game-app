export class Details {

    constructor(id) {
        this.id = id;
    }

    async getDetails(){
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '781eae6474mshc616a6c449d9887p1f28e7jsn86c13e9a5a23',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };

        let api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${this.id}`, options)
        let gameDetails = await api.json()
        return gameDetails;
        
    }

}