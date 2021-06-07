import { INPUT_CHANGE, TASK_ADD, PROJECT_ADD, TASK_COMPLETED } from '../actions/tasks_projects'

const initialState = {
    task_name: '',
    task_description: '',
    project_name: '',
    tasksById: {
        1: {
            id: 1,
            name: 'сделать домашку-7 по реакту',
            description: '',
            completed: false
        },
        2: {
            id: 2,
            name: 'написать курсач',
            description: 'рекомендательная система',
            completed: true
        },
        3: {
            id: 3,
            name: 'забрать почту',
            description: 'ozon',
            completed: false
        },
        4: {
            id: 4,
            name: 'пробежка',
            description: '',
            completed: false
        }
    },
    projectsById: {
        1: {
            id: 1,
            name: 'Вышка',
            tasksIds: [1, 2]
        },
        2: {
            id: 2,
            name: 'Все остальное',
            tasksIds: [3, 4]
        }
    }
}

export const tasks_projectsReducer = (state=initialState, action) => {
    console.log(action.type)
    switch(action.type) {
        case INPUT_CHANGE: {
            const { value, name } = action.payload
            const newState = {...state}
            newState[name] = value
            console.log(newState)
            return {
                state: newState
            }
        }
        case TASK_ADD: {
            const project_id = action.payload
            const new_id = Object.keys(state.tasksById).length + 1
            const newTask = {
              id: new_id,
              name: state.task_name,
              description: state.task_description,
              completed: false
            }
        
            if (project_id === 'no_project') {
                const newTasksById = {...state.tasksById}
                newTasksById[new_id] = newTask
        
                return {
                  tasksById: newTasksById
                }
            } else {
                const newTasksById = {...state.tasksById}
                newTasksById[new_id] = newTask
                const newProjectsById = {...state.projectsById}
                newProjectsById[project_id] = {...newProjectsById[project_id]}
                newProjectsById[project_id].tasksIds = [...newProjectsById[project_id].tasksIds, new_id]
          
                return {
                  tasksById: newTasksById,
                  projectsById: newProjectsById
                }
            }
        }
        case PROJECT_ADD: {
            const new_id = Object.keys(state.projectsById).length + 1
            const newProject = {
              id: new_id,
              name: state.project_name,
              tasksIds: []
            }
        
            const newProjectsById = {...state.projectsById}
            newProjectsById[new_id] = newProject
    
            return {
                projectsById: newProjectsById
            }
        }
        case TASK_COMPLETED: {
            let task_id = action.payload
            const newTasks = {...state.tasksById}
            newTasks[task_id] = {...newTasks[task_id], completed: true}
        
            return {
                tasksById: newTasks
            }
        }
        default:
            return state
    }
}
