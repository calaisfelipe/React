//create store
const redux = require('redux')  
const createStore = redux.createStore 

//Bind Action
const bindActionCreators = redux.bindActionCreators

//Multiple Reducers
const combineReducers = redux.combineReducers

// Midleware  - extende as funcionalidades do redux
const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()
const applyMiddleWare = redux.applyMiddleware




const CAKE_ORDERED = 'CAKE_ORDERED'
const CAKE_RESTOCKED = 'CAKE_RESTOCKED'
const ICECREAM_ORDERED = 'ICECREAM_ORDERED'
const ICECREAM_RESTOCKED = 'ICECREAM_RESTOCKED'

/*const initialState ={
    numOfCakes: 10,
    numOfIceCreams: 20
}*/

const initialCakeState = {
    numOfCakes: 10
}

const initialIceCreamState = {
    numOfIceCreams: 20
}

function cakeReducer(state = initialCakeState, action){
    switch(action.type){
        case CAKE_ORDERED:
            return{...state,
                numOfCakes: state.numOfCakes - action.quantity

            }

        case CAKE_RESTOCKED:
            return{...state,
                numOfCakes: state.numOfCakes + action.quantity

            }  

            default:
            return state
    }

}

function iceCreamReducer(state = initialIceCreamState, action){
    switch(action.type){
    
        case ICECREAM_ORDERED:
            return{...state,
                numOfIceCreams: state.numOfIceCreams - action.payload

            }

        case ICECREAM_RESTOCKED:
            return{...state,
                numOfIceCreams: state.numOfIceCreams + action.payload

            }     

            default:
            return state
    }

}

function restockCake(qtd = 1){
    return{
        type: CAKE_RESTOCKED,
        quantity: qtd
        
    }
}

function orderCake(qtd = 1){
    return {
        type: CAKE_ORDERED,
        quantity: qtd
    }
}

function restockIceCream(qtd = 1){
    return{
        type: ICECREAM_RESTOCKED,
        payload: qtd
        
    }
}

function orderIceCream(qtd = 1){
    return {
        type: ICECREAM_ORDERED,
        payload: qtd
    }
}

const rootReducer = combineReducers({
    cake:cakeReducer,
    iceCream: iceCreamReducer
})

const store = createStore(rootReducer, applyMiddleWare(logger) )  //creating a store

console.log('Initial state' , store.getState())

const unsubcribe = store.subscribe( () => {})

/*
store.dispatch(orderCake())
store.dispatch(restockCake(5))
store.dispatch(orderCake())*/


//bind action
const actions = bindActionCreators({ orderCake, restockCake, orderIceCream, restockIceCream}, store.dispatch)

actions.orderCake()
actions.orderCake()
actions.orderCake()
actions.restockCake(4)
actions.orderIceCream(4)
actions.orderIceCream(4)
actions.orderIceCream(4)
actions.restockIceCream(10)

unsubcribe()
