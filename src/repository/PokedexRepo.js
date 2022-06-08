import { API_URL } from "@env"

export async function getPokemonsApi() {
  
    try{
        const ulr = `${API_URL}/pokemon?limit=20&offset=0`
        const response = await fetch(ulr)
        const result = await response.json()
        return result;
    }catch(e){
        throw(e)
    }

}