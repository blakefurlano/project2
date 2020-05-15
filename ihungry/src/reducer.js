import { Action } from "./actions";
const initialState = {
    isWaiting: false,
    restaurants: [],
        
}
function reducer(state = initialState, action){
    switch (action.type){
        case Action.LoadRestaurants:
            return {
                ...state,
                restaurants: action.payload,
            }
        default:
            return state;
    }
    
}
export default reducer;