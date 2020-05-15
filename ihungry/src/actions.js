export const Action = Object.freeze({
   LoadRestaurants: 'LoadRestaurants', 
});

export function loadRestaurants(restaurants){
    return{
        type: Action.LoadRestaurants,
        payload: restaurants,
    };
}
function checkForErrors(response){
    if(!response.ok){
        throw Error(`${response.status}: ${response.statusText}`);
    }
    return response;
}
const host = "https://restaurantpicker.duckdns.org:8442";

export function loadLocation(id){
  return dispatch =>{
    fetch(`${host}/restraunt/${id}`)
    .then(checkForErrors)
    .then(response => response.json())
    .then(data => {
        if(data.ok){
            dispatch(loadRestaurants(data.restraunt));
        }
    })
    .catch(e => console.error(e));
  }
}