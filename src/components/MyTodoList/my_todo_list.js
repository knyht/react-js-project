import React from 'react'
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom'
import TasksList from '../TasksList/tasks_list'
import { TaskAdd } from '../TaskAdd/task_add'
import ProjectsList from '../ProjectsList/projects_list'
import { ProjectAdd } from '../ProjectAdd/project_add'
import { ProjectTasks } from '../ProjectTasks/project_tasks'
// import './my_todo_list.css'
import classnames from 'classnames/bind'
import styles from './my_todo_list.module.scss'
import { DEFAULT_THEME, ThemeContext } from './theme_context'
import { connect } from 'react-redux'
import { handleThemeChange } from '../../actions/theme'

const cx = classnames.bind(styles)

// const projects = [
//   {
//     id: 1,
//     name: 'Вышка',
//     tasks: [
//       {
//         id: 1,
//         name: 'сделать домашку-6 по реакту',
//         description: '',
//         completed: false
//       },
//       {
//         id: 2,
//         name: 'написать курсач',
//         description: 'рекомендательная система',
//         completed: true
//       }
//     ]  
//   },
//   {
//     id: 2,
//     name: 'Все остальное',
//     tasks: [
//       {
//         id: 3,
//         name: 'найти хороший сервисный центр',
//         description: 'быстро разряжается ноутбук asus',
//         completed: false
//       },
//       {
//         id: 4,
//         name: 'забронировать бар',
//         description: '29 мая челси-мс',
//         completed: false
//       }
//     ]
//   }
// ]

const normalizeState = (projects) => {
  const normalizeBy = (key) => {
    return (data, item) => {
      data[item[key]] = item
      return data
    }
  }
  
  const normalizedTasks = projects.map(project => project.tasks).flat().reduce(normalizeBy('id'), {})

  const normalizedProjects = projects.map(project => ({
    ...project,
    tasksIds: project.tasks.map(task => task.id)
  })).reduce(normalizeBy('id'), {})

  const normalizedState = {
    projectsById: normalizedProjects,
    tasksById: normalizedTasks,
    name: '',
    description: '',
    project_name: '',
    theme: DEFAULT_THEME
  }

  return normalizedState
}

const mapStateToProps = (state) => ({
  tasksById: state.tasks_projects.tasksById,
  projectsById: state.tasks_projects.projectsById,
  theme: state.theme.theme
})

const mapDispatchToProps = (dispatch) => ({
  dispatchOnThemeChange: (theme) => dispatch(handleThemeChange(theme))
})

const MyTodoListComponent = ({ tasksById, projectsById, theme, dispatchOnThemeChange }) => {
  // class MyTodoListComponent extends React.Component {
  // state = {
  //   tasks: [
  //     {
  //       id: 1,
  //       name: 'сделать домашку-3 по реакту',
  //       description: 'необходимо реализовать отображение задач в TaskTracker',
  //       completed: false
  //     },
  //     {
  //       id: 2,
  //       name: 'сделать домашку по рекомендательным система',
  //       description: 'персональная рекомендация статей',
  //       completed: true
  //     },
  //     {
  //       id: 3,
  //       name: 'найти научника для диплома',
  //       description: 'написать преподу с курса по ИТ в музееях',
  //       completed: true
  //     },
  //     {
  //       id: 4,
  //       name: 'найти хороший сервисный центр',
  //       description: 'быстро разряжается ноутбук asus',
  //       completed: false
  //     },
  //     {
  //       id: 5,
  //       name: 'забронировать бар',
  //       description: '29 мая челси-мс',
  //       completed: false
  //     }
  //   ],
  //   name: '',
  //   description: '',
  //   theme: DEFAULT_THEME
  // }
  // state = normalizeState(projects)
  
  // handleClickCompleted = (event) => {
  //   let { value: task_id } = event.currentTarget
  //   this.setState(state => {
  //     const newTasks = {
  //       ...state.tasksById
  //     }
  //     newTasks[task_id] = {...newTasks[task_id], completed: true}

  //     return {
  //       tasksById: newTasks
  //     }
  //   })
  // }

  // handleClickAdd = (event) => {
  //   const { value: project_id } = event.currentTarget
  //   const new_id = Object.keys(this.state.tasksById).length + 1
  //   const newTask = {
  //     id: new_id,
  //     name: this.state.name,
  //     description: this.state.description,
  //     completed: false
  //   }

  //   if (project_id === 'no_project') {
  //     this.setState(state => {
  //       const newTasksById = {...state.tasksById}
  //       newTasksById[new_id] = newTask

  //       return {
  //         tasksById: newTasksById
  //       }
  //     })
  //   } else {
  //     this.setState(state => {
  //       const newTasksById = {...state.tasksById}
  //       newTasksById[new_id] = newTask
  //       const newProjectsById = {...state.projectsById}
  //       newProjectsById[project_id] = {...newProjectsById[project_id]}
  //       newProjectsById[project_id].tasksIds = [...newProjectsById[project_id].tasksIds, new_id]
  
  //       return {
  //         tasksById: newTasksById,
  //         projectsById: newProjectsById
  //       }
  //     })
  //   }
  // }

  // handleClickProjectAdd = () =>{
  //   const new_id = Object.keys(this.state.projectsById).length + 1
  //   const newProject = {
  //     id: new_id,
  //     name: this.state.project_name,
  //     tasksIds: []
  //   }

  //   this.setState(state => {
  //     const newProjectsById = {...state.projectsById}
  //     newProjectsById[new_id] = newProject

  //     return {
  //       projectsById: newProjectsById
  //     }
  //   })
  // }

  // handleChange = (event) => {
  //   const { value, name } = event.currentTarget

  //   this.setState({ [name]: value })
  // }

  const onThemeChange = (event) => {
    dispatchOnThemeChange(event.target.value)
  }

  console.log()
  return (
    <BrowserRouter>
      <div className={cx('page', `page-theme-${theme}`)}>
        <div className={cx('radios', `radios-theme-${theme}`)}>
          <div>
            <input
              type='radio'
              name='theme'
              id='light'
              value='light'
              checked={theme === 'light'}
              onChange={onThemeChange}
            />
            <label htmlFor='light'>Светлая</label>
          </div>

          <div>
          <input
              type='radio'
              name='theme'
              id='dark'
              value='dark'
              checked={theme === 'dark'}
              onChange={onThemeChange}
            />
            <label htmlFor='light'>Темная</label>
          </div>
        </div>
        <div className={cx('projects_and_tasks')}>
          <Route path='/'>
            <div className={cx('projects')}>
              <h1>
                <Link className={cx('header', `header-theme-${theme}`)} to='/'>Список задач</Link>
              </h1>
              <h1 className={cx('header', `header-theme-${theme}`)}>Список проектов</h1>
              {/* <ThemeContext.Provider value={this.state.theme}> */}
              <ProjectsList projectsById={projectsById} />
              {/* </ThemeContext.Provider> */}
              <ProjectAdd />
            </div>
          </Route>
          <Switch>
            <Route exact path='/'>
              <div className={cx('tasks')}>
                <h1 className={cx('header_tasks', `header_tasks-theme-${theme}`)}>Список задач</h1>
                {/* <ThemeContext.Provider value={this.state.theme}> */}
                <div className={cx('new_task')}>
                  <TaskAdd project_id={'no_project'} />
                </div>
                <TasksList tasksById={tasksById} />
                {/* </ThemeContext.Provider> */}
              </div>
            </Route>
            <Route path='/projects/:projectId/'>
              {/* <ThemeContext.Provider value={this.props.state.theme}> */}
              <ProjectTasks />
              {/* </ThemeContext.Provider> */}
            </Route>
            <Redirect to='/' />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  )
}


export const MyTodoList = connect(mapStateToProps, mapDispatchToProps)(MyTodoListComponent);
