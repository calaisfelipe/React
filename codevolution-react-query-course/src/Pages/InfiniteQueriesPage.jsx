import React, {useState} from 'react'
import { useInfiniteQuery } from 'react-query'
import axios from 'axios'
import { Stack,CircularProgress, Typography, Button } from '@mui/material'

const fetchColor = ({pageParam = 1}) =>{
    return axios.get(`http://localhost:5000/colors?_limit=2&_page=${pageParam}`)
}


function InfiniteQueriesPage() {

    const {data, isLoading, isError, error, hasNextPage, fetchNextPage, isFetching, isFetchingNextPage} = useInfiniteQuery(['colors'], fetchColor,
    {
        getNextPageParam: (_lastPage, pages) => {
            if (pages.length < 4){
                return pages.length + 1
            } else{
                return undefined
            }

        }
    })

  return (
    <Stack >

        <Stack>
        {isLoading ? <CircularProgress /> : null}
        {isError ? <Typography>Something went wrong! {error} </Typography> : null}

        {data?.pages.map((group, index) => {
            return (
                <>
                    {group.data.map((color) => (
                        <h2 key={color.id}>{color.id}{color.label}</h2>
                    ))}
                
                </>


            )
        })}
        

        </Stack>

      <Button onClick={fetchNextPage} disabled={!hasNextPage}>Load More</Button>
       {isFetching && <h5>Fetching...</h5>} 
       {isFetchingNextPage && <h5>Fetching NextPage...</h5>} 

    </Stack>
  )
}

export default InfiniteQueriesPage