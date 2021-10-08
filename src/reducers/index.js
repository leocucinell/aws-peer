import { combineReducers } from "redux";


//Create a reducer for each piece of state you will need in the app

//NOTE: The Current User Reducer -> Holds the information about the current user of the app
const currentUserReducer = (currentUser = null, action) => {
    if(action.type === "USER_LOGGED"){
        return action.payload
    }
    return currentUser
}


/*
    Store Contains:
        - Current User: 
*/
export default combineReducers({
    currentUser: currentUserReducer,
})