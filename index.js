const redux = require('redux')
const createStore = redux.createStore


const BUY_CAKE = 'buy_cake';
const BUY_ICECREAM = 'buy_icecream';
const BUY_BALLOONS = 'buy_balloon';

// Initial State
const initialState = {
    numOfCakes: 10,
    numOfIce: 20,
    numOfBalloons: 50
}

// Action
function buyCake() {
    console.log('1')
    return {
        type: BUY_CAKE,
        info: "First Redux action"
    }
}

function buyIce() {
    console.log('2')
    return {
        type: BUY_ICECREAM,
    }
}

function buyBaloon() {
    console.log('3')
    return {
        type: BUY_BALLOONS
    }
}

// Reducer
// (prevState,action) => newState

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case "buy_cake": return {
            ...state,
            numOfCakes: state.numOfCakes - 1,
        }
        case "buy_icecream": return {
            ...state,
            numOfIce: state.numOfIce - 1
        }
        case "buy_balloon": return {
            ...state,
            numOfBalloons : state.numOfBalloons - 5
        }

        default: return state
    }
}

// Store
const store = createStore(reducer)

console.log('4')
console.log("Initial State : ", store.getState());
const unSub = store.subscribe(() => console.log('Updated State', store.getState()))
console.log('5 ')

store.dispatch(buyCake())
console.log('6')
store.dispatch(buyBaloon())
store.dispatch(buyCake())
store.dispatch(buyBaloon())
store.dispatch(buyCake())
store.dispatch(buyBaloon())

store.dispatch(buyIce())
store.dispatch(buyBaloon())
store.dispatch(buyIce())
unSub()