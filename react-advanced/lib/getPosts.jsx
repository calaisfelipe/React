
export default async function getPostsByUser(id) {
  
    if(!id){
        return 
    }
  
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
  
    const data = await res.json()
  
    return data
    
  
}
