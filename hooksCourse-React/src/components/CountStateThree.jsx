import React, {useState} from 'react'

function CountStateThree() {
    const [items,setItems] = useState([])


function addItem() {

setItems([...items, {
    id: items.length,
    value: Math.floor(Math.random() * 10) +1
}] )

}

function removeItem(){
    
   if(items.length == 0) {return}
    
    let lastElement = items[items.length -1]

    let newItems = items.filter((item) => item.id != lastElement.id)
    
    setItems(newItems)
   
}

  return (
    <div>

        <button type='button' onClick={addItem}>Add Item</button>
        <button type='button' onClick={removeItem}>Remove Last Item</button>
        <p>{JSON.stringify(items)}</p>
        <ul>

            {items.map((item) => <li key={item.id}>{item.value}</li>)}

        </ul>

    </div>
  )
}

export default CountStateThree