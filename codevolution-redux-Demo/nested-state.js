const redux = require('redux')    //import redux
const produce = require('immer').produce
const createStore = redux.createStore 

const initialState = {
    name: 'Felipe',
    address: {
        street: 'alemanha 234',
        city: 'belo horizonte',
        state: 'MG'
    }
}

const STREET_UPDATED = 'STREET_UPDATED'

const updateStreet = (street) =>{

    return {
    type: 'STREET_UPDATED',
    payload: street

    }

}

function reducer(state = initialState, action){
        switch(action.type){
            case STREET_UPDATED:
                /*return{...state,
                    address: {
                        ...state.address,
                        street: action.payload
                    }}*/
              return produce(state, (draft) =>{
                    draft.address.street = action.payload
              })      
            default:
                return state

        }
}

const store = createStore(reducer)  //creating a store
console.log('Initial state' , store.getState())

const unsubcribe = store.subscribe( () => console.log('update state' , store.getState()))


store.dispatch(updateStreet('Rua graça'))
unsubcribe()
