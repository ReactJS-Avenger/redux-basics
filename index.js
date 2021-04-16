const redux= require('redux')
const reduxLogger= require('redux-logger')
const createStore= redux.createStore
const combineReducer= redux.combineReducers
const applyMiddleware= redux.applyMiddleware
const logger= reduxLogger.createLogger()

const BUY_CAKE="BUY_CAKE";
const BUY_ICECREAM= "BUY_ICECREAM"


// Action creator which return actions
function buyCake(){
    return {
        type: BUY_CAKE,
        info: "First redux action"
    }
}

function buyIceCream(){
    return {
        type: BUY_ICECREAM
    }
}

// Reducers
// (prevState, actions) => newState

// const initialState={
//     numberOfCakes: 10,
//     numberOfIceCream: 20
// }

const initialCakeState={
    numberOfCakes: 10
}

const initialIcecreamState={
    numberOfIceCream: 20
}

// const reducers=(state= initialState, action)=>{
//     switch(action.type){
//         case BUY_CAKE:
//             return {
//                 ...state,
//                 numberOfCakes: state.numberOfCakes -1
//             }
//         case BUY_ICECREAM:
//             return {
//                 ...state,
//                 numberOfIceCream: state.numberOfIceCream -1
//             }
//         default: return state
//     }
// }

const cakeReducers=(state= initialCakeState, action)=>{
    switch(action.type){
        case BUY_CAKE:
            return {
                ...state,
                numberOfCakes: state.numberOfCakes -1
            }
        default: return state
    }
}

const iceCreamReducers=(state= initialIcecreamState, action)=>{
    switch(action.type){
        case BUY_ICECREAM:
            return {
                ...state,
                numberOfIceCream: state.numberOfIceCream -1
            }
        default: return state
    }
}

// combine reducer
const rootReducer= combineReducer({
    cake: cakeReducers,
    iceCream: iceCreamReducers
})

// Store
const store= createStore(rootReducer, applyMiddleware(logger)) //redux store holding the application state

console.log("Initial state", store.getState()) // using getState()

const unsubscribe=store.subscribe(()=> {}) // using subscribe()

store.dispatch(buyCake()) // dispatching an action
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())

unsubscribe()
