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
                isWaiting: false,
                restaurants: action.payload,
            }
            case Action.StartWaiting:
                return{
                    ...state,
                    isWaiting: true,
                }

        default:
            return state;
    }
    
}
export default reducer;