import {USER_LIST_RECIEVED} from "./auth.actions"

const initState = {
    usersList:[]
}


const authReducer = (state = initState, action) => {

    switch (action.type) {

        case USER_LIST_RECIEVED:{
            return{
                ...state,
                usersList: action.payload.userList
            }
        }


        default: {
            return state
        }
    }
}

export default authReducer