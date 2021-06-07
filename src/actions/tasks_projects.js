export const INPUT_CHANGE = 'INPUT_CHANGE'
export const TASK_ADD = 'TASK_ADD'
export const PROJECT_ADD = 'PROJECT_ADD'
export const TASK_COMPLETED = 'TASK_COMPLETED'

export const handleInputChange = (input) => ({
    type: INPUT_CHANGE,
    payload: input
})

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
