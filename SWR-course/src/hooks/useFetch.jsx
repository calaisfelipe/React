import useSWR from 'swr'
import api from '../services/api'


export const useFetch = (url) => {

    const { data, error , isLoading, mutate } = useSWR(url, async () => {
            return api.get(url)
          
       
      
        
    },{
        onErrorRetry: true,  //devo tentar uma nova requisição se der errado?
        errorRetryCount: 3, // quantas vezes?
        errorRetryCount: 30000, // tempo de duração entre cada tentativa?


    })

    return {data, error, isLoading, mutate}

}