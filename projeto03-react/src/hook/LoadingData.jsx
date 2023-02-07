
const LoadingData = async(setLoading, setTodos) => {
  const API = 'http://localhost:5000'

        setLoading(true)
    
        await fetch(`${API}/tasks`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'}
      })
      .then((response) => response.json())
      .then((data) =>{
    
          console.log('fetch rolando')    
          setTodos(data)
          
          
        
      })
      .catch((err) => console.log(err))

      return 

    }

export default LoadingData