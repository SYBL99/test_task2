class GetInfo {
    async getEpisodes() {
        try {
            const response = await fetch("https://rickandmortyapi.com/api/episode")
            const data = await response.json()
            return data.results
        } catch (error) {

            
        }

    }
}

export default GetInfo;