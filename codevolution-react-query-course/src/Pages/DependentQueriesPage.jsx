import { useQuery } from "react-query"
import axios from 'axios'

const fetchUserByEmail = (email) =>{
    return axios.get(`http://localhost:5000/users/${email}`)
}

const fetchChannelsById = (channel) =>{
    return axios.get(`http://localhost:5000/channels/${channel}`)
}

function DependentQueriesPage({email}) {

   const {data: user} = useQuery(['fetch-user', email] , () => fetchUserByEmail(email))
       
    const channelId = user?.data.channelId

    const {data: channel} = useQuery(['fetch-courses', channelId], () => fetchChannelsById(channelId), {
        enabled: !!channelId
    })

  return (
    <div>
        {channel?.data.courses.map((course) => <p key={course}>{course}</p>)}

    </div>
  )
}

export default DependentQueriesPage