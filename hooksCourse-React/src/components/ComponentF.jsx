import React, {useContext} from 'react'
import { userContext, ChannelContext } from '../App'

function ComponentF() {

    const user = useContext(userContext)
    const channel = useContext(ChannelContext)

  return (
    <div>
        ComponentF {user} {channel}

    </div>
  )
}

export default ComponentF