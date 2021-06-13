import { loadProjects } from '../api'

export const INPUT_CHANGE = 'INPUT_CHANGE'
export const PROJECTS_DATA = 'PROJECTS_DATA'
export const TASK_ADD = 'TASK_ADD'
export const PROJECT_ADD = 'PROJECT_ADD'
export const TASK_COMPLETED = 'TASK_COMPLETED'

export const handleInputChange = (input) => ({
    type: INPUT_CHANGE,
    payload: input
})

export const fetchLoadProjects = () => (dispatch, getState) => {
    return loadProjects().then((projects) => {
        dispatch({
            type: PROJECTS_DATA,
            payload: projects
        })
    })
}

export const handleClickTaskAdd = (project_id) => ({
    type: TASK_ADD,
    payload: project_id
})

export const handleClickProjectAdd = (event) => ({
    type: PROJECT_ADD,
    payload: event
})

export const handleClickTaskCompleted = (task_id) => ({
    type: TASK_COMPLETED,
    payload: task_id
})
