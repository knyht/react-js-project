import { INPUT_CHANGE, STATE_LOAD } from '../actions/tasks_projects'
import normalizeState from '../normalizeState'

const initialState = []

export const tasks_projectsReducer = (state=normalizeState(initialState), action) => {
    switch(action.type) {
        case STATE_LOAD: {
          return {
            ...state,
            projectsById: action.payload.projectsById,
            tasksById: action.payload.tasksById
          }
        }
        case INPUT_CHANGE: {
            const { value, name } = action.payload
            return {
                ...state,
                [name]: value
            }
        }
        default:
            return state
    }
}
