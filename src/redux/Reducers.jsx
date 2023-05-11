import { combineReducers } from "redux";
import { CREATE_TASK, DELETE_TASK, UPDATE_TASK } from "./Actions";

const initialState = { 
    tasks: []
};

const taskReducer = (state = initialState, action) => {
    switch (action.type) { 
        case CREATE_TASK:
            return{
                ...state,
                tasks: [...state.tasks, action.payload]
            };
        
        case DELETE_TASK:
            return{
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload)
            };

        case UPDATE_TASK:
            return{
                ...state,
                tasks: state.tasks.map(task => {
                    if(task.id === action.payload.id){
                        return {
                            ...task,
                            title: action.payload.title,
                            completed: action.payload.completed
                        };
                    }
                    return task;
                })
            };

        default:
            return state;

    }
};

const rootReducer = combineReducers({
    tasks: taskReducer
})

export default rootReducer