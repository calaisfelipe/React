import {useQuery, useQueryClient} from 'react-query'
import axios from 'axios'


export const useSuperhero = (heroId) => {
  const queryClient = useQueryClient()

  return useQuery(['super-hero', heroId], () => {
    return axios.get(`http://localhost:5000/superheroes/${heroId}`)

  }, {
    initialData: () => {
      const hero = queryClient.getQueryData('superheroes')?.data?.find(hero => hero.id === parseInt(heroId))

      if(hero) {
        return {
          data: hero
        }
      } else{
        return undefined
      }


    }
  })
}


