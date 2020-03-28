import {TASKS_LIST_RECIEVED} from './task.actions'

const initState = {
    tasksList: [],
}


const taskReducer = (state = initState, action) => {
    switch (action.type) {
        case TASKS_LIST_RECIEVED:{
            return{
                ...state,
                tasksList: action.payload.taskList
            }
        }
        default: {
            return state
        }
    }

}

export default taskReducer