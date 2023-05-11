export const CREATE_TASK = 'CREATE_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';

export function createTask(task) {
    return {
        type: 'CREATE_TASK',
        payload: task
    }
}


export function deleteTask(id) {
    return {
        type: 'DELETE_TASK',
        payload: id
    }
}

export function updateTask(task) {
     return {
        type: 'UPDATE_TASK',
        payload:task
     }
}
