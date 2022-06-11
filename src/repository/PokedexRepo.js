import { API_URL } from "@env"

export async function getPokemonsApi(endPointUrl) {
    try{
        const url = `${API_URL}/pokemon?limit=20&offset=0`
        const response = await fetch(endPointUrl || url)
        const result = await response.json()
        return result;
    }catch(e){
        throw(e)
    }
}

export async function getPokemonDetailsByUrlApi(url) {
    try {
        const response = await fetch(url)
        const result = await response.json()
        return result
    } catch (e) {
        throw(e)
    }
}

export async function getPokemonDetailsApi(id){

    try {
        const url = `${API_URL}/pokemon/${id}`
        const response = await fetch(url)
        const result = await response.json()
        return result
    } catch (e) {
        throw(e)
    }

}