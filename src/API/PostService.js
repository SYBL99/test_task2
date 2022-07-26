class GetInfo {
    async getEpisodes() {
        let allEpisodes = []
        try {
            for (let i = 0; i < 3; i++) {
                const response = await fetch(`https://rickandmortyapi.com/api/episode?page=${i+1}`)
                const data = await response.json()
                allEpisodes = [...allEpisodes, ...data.results]
                
            }
        return allEpisodes
        } catch (error) {
            console.log(error)
        }
    }    
    async getCharacters(episode) {
        let allCharactersInEpisode = []
        try {
            const response = await fetch(`https://rickandmortyapi.com/api/episode/${episode}`)
            const data = await response.json()
            allCharactersInEpisode = data.characters
            console.log(allCharactersInEpisode)
        } catch (error) {
            console.log(error)
        }
    }    
}


export default GetInfo;