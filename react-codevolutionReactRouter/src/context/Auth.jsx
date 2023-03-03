import React, {useState, useContext} from 'react'

const AuthContext = React.createContext(null)


function Auth({children}) {
    const [user, setUser] = useState()

    function logIn(user){
        setUser(user)
    }

    function logOut(){
        setUser(null)
    }

  return (
    <AuthContext.Provider  value={{user, login: logIn, logout: logOut }}>
        {children}
        </AuthContext.Provider>
  )
}

export const useAuth = () =>{
    return useContext(AuthContext)
}


export default Auth