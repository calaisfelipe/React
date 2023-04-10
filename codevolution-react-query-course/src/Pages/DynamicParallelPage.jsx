import { useQueries } from "react-query"
import axios from 'axios'

const fetchSuperhero = (heroId) => {
    return axios.get(`http://localhost:5000/superheroes/${heroId}`)
}

function DynamicParallelPage({ heroIds }) {

   const queryResults = useQueries(
        heroIds.map((id) => {
            return {
                queryKey: ['super-hero', id],
                queryFn: () => fetchSuperhero(id)
            }
        }
        )

    )

    return (
        <div>

            {queryResults.map((result) => <p key={result.data?.data.id}>{result.data?.data.name}</p>)}




        </div>
    )
}

export default DynamicParallelPage