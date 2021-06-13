import { INPUT_CHANGE, TASK_ADD, PROJECT_ADD, TASK_COMPLETED, PROJECTS_DATA } from '../actions/tasks_projects'
import normalizeState from '../normalizeState'

// const projects = [
//     {
//       id: 1,
//       name: 'Вышка',
//       tasks: [
//         {
//           id: 1,
//           name: 'сделать домашку-7 по реакту',
//           description: '',
//           completed: false
//         },
//         {
//           id: 2,
//           name: 'написать курсач',
//           description: 'рекомендательная система',
//           completed: true
//         }
//       ]  
//     },
//     {
//       id: 2,
//       name: 'Все остальное',
//       tasks: [
//         {
//           id: 3,
//           name: 'забрать почту',
//           description: 'ozon',
//           completed: true
//         },
//         {
//           id: 4,
//           name: 'пробежка',
//           description: '',
//           completed: false
//         }
//       ]
//     }
// ]

// const initialState = normalizeState(projects)

const initialStatte = []

export const tasks_projectsReducer = (state=normalizeState(initialStatte), action) => {
    switch(action.type) {
        case PROJECTS_DATA: {
          console.log(state)
          return {
            ...state,
            projectsById: action.payload
          }
        }
        case INPUT_CHANGE: {
            const { value, name } = action.payload
            return {
                ...state,
                [name]: value
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
                return {
                    ...state,
                    tasksById: {
                        ...state.tasksById,
                        [new_id]: newTask
                    }
                }
            } else {
                const newTasksById = {...state.tasksById}
                newTasksById[new_id] = newTask
                const newProjectsById = {...state.projectsById}
                newProjectsById[project_id] = {...newProjectsById[project_id]}
                newProjectsById[project_id].tasksIds = [...newProjectsById[project_id].tasksIds, new_id]
          
                return {
                    ...state,
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
                ...state,
                projectsById: newProjectsById
            }
        }
        case TASK_COMPLETED: {
            let task_id = action.payload
            const newTasks = {...state.tasksById}
            newTasks[task_id] = {...newTasks[task_id], completed: true}
        
            return {
                ...state,
                tasksById: newTasks
            }
        }
        default:
            return state
    }
}
