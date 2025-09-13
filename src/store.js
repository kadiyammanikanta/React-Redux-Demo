import { createStore,combineReducers } from "redux";

const initalstate = {
    balance: 0,
    name: 'mani',
    phonenumber: 8978415475

}

function redux(state = initalstate, action) {
    switch (action.type) {
        case 'deposit':
            return { ...state, balance: state.balance + +action.payload }
        case 'withdraw':
            return { ...state, balance: state.balance - +action.payload }
        case 'name':
            return { ...state, name: action.payload }    
        default:
            return state;
    }
}
function trancasationReduces(state=[],action){
    switch (action.type) {
        case 'ADD_Trancastion':
            return [...state,{id:action.payload.id,amount:action.payload.amount,date:action.payload.date,type:action.payload.type}];
        default:
          return  state;
    }

}
let dataReduces= combineReducers({
    account:redux,
    trancationsDetails:trancasationReduces
})
const store = createStore(dataReduces);
export default store;

// console.log(store.getState());
// store.dispatch({ type: 'depagit', pyload: 1000 })
// console.log(store.getState());
// store.dispatch({ type: 'withdra', pyload: 10 })
// console.log(store.getState());