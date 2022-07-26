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

    async getAboutEpisode(episode) {
        try {
            const response = await fetch(`https://rickandmortyapi.com/api/episode/${episode}`)
            const data = await response.json()
            return data
        } catch (error) {
            console.log(error)
        }
    }

    async getAboutCharacters(idArr) {
        try {
            const id = idArr.join(',')
            const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
            const data = await response.json()
            const currentCharacters = data
            return currentCharacters
        } catch (error) {
            console.log(error)
        }
    }
}

export default GetInfo;