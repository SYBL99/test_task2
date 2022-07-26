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
    async getAllLocations() {
        let allLocations = []
        try {
            let response = await fetch(`https://rickandmortyapi.com/api/location`)
            let data = await response.json()
            allLocations = data.results
            while (data.info.next !== null) {
                response = await fetch(`${data.info.next}`)
                data = await response.json()
                allLocations = [...allLocations, ...data.results]
            }
            return allLocations
        } catch (error) {
            console.log(error)
        }
    }
}

export default GetInfo;