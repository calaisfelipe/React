import React, { useState } from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'
import { Stack, List, ListItem, ListItemText, CircularProgress, Typography, Button } from '@mui/material'


function PaginatedPages() {
    const [pageNumber, setPageNumber] = useState(1)

    const fetchColors = (page) => {
        return axios.get(`http://localhost:5000/colors?_limit=2&_page=${page}`)
    }


    const { data, isLoading, isError, error, isFetching } = useQuery(['fetch-colors', pageNumber], () => fetchColors(pageNumber),{
        keepPreviousData: true,
    })


    return (
        <Stack p={2}>
            <List>
                {isLoading ? <CircularProgress /> : null}
                {isError ? <Typography variant='h5'>Something went wrong : {error}</Typography> : null}

                {data?.data.map((color) =>
                    <ListItem key={color.id}>
                        <ListItemText>{color.label}</ListItemText>
                    </ListItem>)}

            </List>

            <Stack spacing={2} direction='row'>

                <Button 
                variant='outlined' 
                onClick={() => setPageNumber(page => page - 1)} disabled={pageNumber === 1}
                >Prev Page</Button>

                <Button 
                variant='outlined' 
                onClick={() => setPageNumber(page => page + 1)} disabled={pageNumber === 3}
                >Next Page</Button>

            </Stack>
            {isFetching && <h4>Fetching,...</h4>}
        </Stack>
    )
}

export default PaginatedPages