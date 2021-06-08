import { combineReducers } from 'redux'
import { tasks_projectsReducer } from './tasks_projects'
import { themeReducer } from './theme'

export const rootReducer = combineReducers({
    tasks_projects: tasks_projectsReducer,
    theme: themeReducer
})
