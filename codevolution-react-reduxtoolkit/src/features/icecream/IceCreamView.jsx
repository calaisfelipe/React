import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from './iceCreamSlice'

function IceCreamView() {
  const [valueRestock, setValueRestock] = useState(1)

  const dispatch = useDispatch()

  const numOfIceCreams = useSelector((state) => state.iceCream.numOfIceCream)

  
  return (
    <div>
        <h2>number of iceCreams: {numOfIceCreams}</h2>
        <button onClick={() => dispatch(ordered())}>Order ice Cream</button><br/>

        <label htmlFor="qtdRestock">
          Restock qtd:
          <input style={{width:'30px'}} type="number" min={1} value={valueRestock} onChange={(e) => setValueRestock(parseInt(e.target.value))} name='qtdRestock'/>
        </label>


        <button onClick={() => dispatch(restocked(valueRestock))}>Restock ice cream</button>
    </div>
  )
}

export default IceCreamView