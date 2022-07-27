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
            alert(error)
        }
    }
    async getAboutEpisode(episode) {
        try {
            const response = await fetch(`https://rickandmortyapi.com/api/episode/${episode}`)
            const data = await response.json()
            return data
        } catch (error) {
            alert(error)
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
            alert(error)
        }
    }
    async getCharactersByidArr(idArr) {
        try {
            const id = idArr.join(',')
            const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
            const data = await response.json()
            return data
        } catch (error) {
            alert(error)
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
            alert(error)
        }
    }
    async getResidentsByLocation(id) {
        try {
            let response = await fetch(`https://rickandmortyapi.com/api/location/${id}`)
            let data = await response.json()
            return data
        } catch (error) {
            alert(error)
        }
    }
}

export default GetInfo;