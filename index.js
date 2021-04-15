const redux= require('redux')
const createStore= redux.createStore

const BUY_CAKE="BUY_CAKE"


// Action creator which return actions
function buyCake(){
    return {
        type: BUY_CAKE,
        info: "First redux action"
    }
}

// Reducers
// (prevState, actions) => newState

const initialState={
    numberOfCakes: 10
}

const reducers=(state= initialState, action)=>{
    switch(action.type){
        case BUY_CAKE:
            return {
                ...state,
                numberOfCakes: state.numberOfCakes -1
            }

        default: return state
    }
}

// Store
const store= createStore(reducers) //redux store holding the application state

console.log("Initial state", store.getState()) // using getState()

const unsubscribe=store.subscribe(()=> console.log("Updated state", store.getState())) // using subscribe()

store.dispatch(buyCake()) // dispatching an action
store.dispatch(buyCake())
store.dispatch(buyCake())

unsubscribe()
