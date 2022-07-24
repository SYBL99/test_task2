class GetInfo {
    async getEpisodes() {
        let allEpisodes = []
        try {
            for (let i = 0; i < 3; i++) {
                let response = await fetch(`https://rickandmortyapi.com/api/episode?page=${i+1}`)
                let data = await response.json()
                allEpisodes = [...allEpisodes, ...data.results]
                
            }
        return allEpisodes
        } catch (error) {
            console.log(error)
        }

    }
}

export default GetInfo;