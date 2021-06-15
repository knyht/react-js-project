import { loadState, uploadProject, uploadTask, uploadCompletedStatusTask } from '../api'

export const INPUT_CHANGE = 'INPUT_CHANGE'
export const STATE_LOAD = 'STATE_LOAD'

export const handleInputChange = (input) => ({
    type: INPUT_CHANGE,
    payload: input
})

export const fetchStateLoad = () => (dispatch) => {
    return loadState().then((state) => {
        dispatch({
            type: STATE_LOAD,
            payload: state
        })
    })
}

export const fetchClickProjectAddUpload = () => (dispatch, getState) => {
    const get_state = getState()
    const project_name = get_state.tasks_projects.project_name
    uploadProject(project_name).then(() => {
        dispatch(fetchStateLoad())
    })
}

export const fetchClickTaskAddUpload = (project_id) => (dispatch, getState) => {
    const get_state = getState()
    const task_name = get_state.tasks_projects.task_name
    const task_description = get_state.tasks_projects.task_description
    uploadTask(project_id, task_name, task_description).then(() => {
        dispatch(fetchStateLoad())
    })
}

export const fetchClickTaskCompletedUpload = (completed) => (dispatch, getState) => {
    const get_state = getState()
    const project_id = completed.dataset.projectId
    const task_id = completed.dataset.taskId
    const task_name = get_state.tasks_projects.tasksById[task_id].name
    const task_description = get_state.tasks_projects.tasksById[task_id].description
    uploadCompletedStatusTask(project_id, task_id, task_name, task_description).then(() => {
        dispatch(fetchStateLoad())
    })
}
