import { useQuery, useMutation, useQueryClient } from 'react-query'
import { request } from '../utils/axios-utils'

const addSuperHero = (newHero) =>{
    return request({
        url:'/superheroes',
        method: 'post',
        data: newHero
    })
}

const useSuperHeroesData = (onSuccess, onError) => {

   return useQuery('superheroes', () => {
        return request({
            url: '/superheroes',

        })
    },{
        onSuccess,
        onError,
        
    })

}

export const useAddSuperHeroData = () => {
    const queryClient = useQueryClient()
    return useMutation(addSuperHero, {
        /*onSuccess: (data) => {
           // queryClient.invalidateQueries('superheroes')
           queryClient.setQueryData('superheroes', (oldQueryData) =>{
            return {
                ...oldQueryData, 
                data: [...oldQueryData.data, data.data]
            }

           })
        }*/
        onMutate: async (newHero) =>{
            await queryClient.cancelQueries('superheroes')
            const previousHeroData = queryClient.getQueryData('superheroes',(oldQueryData) =>{
                return {
                    ...oldQueryData, 
                    data: [...oldQueryData.data, {
                        id: oldQueryData?.data?.length + 1, ...newHero

                    }]
                }
    
               }
            )
            return {
                previousHeroData,
            }

        },
        onError: (_error, _hero, context ) =>{ 
            queryClient.setQueryData('superheroes', context.previousHeroData)
        },
        onSettled:() =>{
            queryClient.invalidateQueries('superheroes')
        }

    })
}

export default useSuperHeroesData