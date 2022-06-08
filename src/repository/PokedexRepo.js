import { API_URL } from "@env"

export async function getPokemonsApi() {
    try{
        const url = `${API_URL}/pokemon?limit=20&offset=0`
        const response = await fetch(url)
        const result = await response.json()
        return result;
    }catch(e){
        throw(e)
    }
}

export async function getPokemonDetailsApi(url) {
    try {
        const response = await fetch(url)
        const result = await response.json()
        return result
    } catch (e) {
        throw(e)
    }
}