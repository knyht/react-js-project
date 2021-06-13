import React from 'react'
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom'
import TasksList from '../TasksList/tasks_list'
import { TaskAdd } from '../TaskAdd/task_add'
import ProjectsList from '../ProjectsList/projects_list'
import { ProjectAdd } from '../ProjectAdd/project_add'
import { ProjectTasks } from '../ProjectTasks/project_tasks'
import classnames from 'classnames/bind'
import styles from './my_todo_list.module.scss'
import { connect } from 'react-redux'
import { handleThemeChange } from '../../actions/theme'
import { fetchLoadProjects } from '../../actions/tasks_projects'

const cx = classnames.bind(styles)

const mapStateToProps = (state) => ({
  projects_test: state.tasks_projects.test,
  tasksById: state.tasks_projects.tasksById,
  projectsById: state.tasks_projects.projectsById,
  theme: state.theme.theme
})

const mapDispatchToProps = (dispatch) => ({
  dispatchOnThemeChange: (theme) => dispatch(handleThemeChange(theme)),
  dispatchFetchLoadProjects: (projects) => dispatch(fetchLoadProjects(projects))
})

class MyTodoListComponent extends React.Component {
  componentDidMount() {
    this.props.dispatchFetchLoadProjects()
  }

  onThemeChange = (event) => {
    this.props.dispatchOnThemeChange(event.target.value)
  }

  render() {
    return (
      <BrowserRouter>
      <div className={cx('page', `page-theme-${this.props.theme}`)}>
        <div className={cx('radios', `radios-theme-${this.props.theme}`)}>
          <div>
            <input
              type='radio'
              name='theme'
              id='light'
              value='light'
              checked={this.props.theme === 'light'}
              onChange={this.onThemeChange}
            />
            <label htmlFor='light'>Светлая</label>
          </div>
          <div>
          <input
              type='radio'
              name='theme'
              id='dark'
              value='dark'
              checked={this.props.theme === 'dark'}
              onChange={this.onThemeChange}
            />
            <label htmlFor='light'>Темная</label>
          </div>
        </div>
        <div className={cx('projects_and_tasks')}>
          <Route path='/'>
            <div className={cx('projects')}>
              <h1>
                <Link className={cx('header', `header-theme-${this.props.theme}`)} to='/'>Все задачи</Link>
              </h1>
              <h1 className={cx('header', `header-theme-${this.props.theme}`)}>Список проектов</h1>
              <ProjectsList projectsById={this.props.projectsById} />
              <ProjectAdd />
            </div>
          </Route>
          <Switch>
            <Route exact path='/'>
              <div className={cx('tasks')}>
                <h1 className={cx('header_tasks', `header_tasks-theme-${this.props.theme}`)}>Все задачи</h1>
                <div className={cx('new_task')}>
                  <TaskAdd project_id={'no_project'} />
                </div>
                <TasksList tasksById={this.props.tasksById} />
              </div>
            </Route>
            <Route path='/projects/:projectId/'>
              <ProjectTasks />
            </Route>
            <Redirect to='/' />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
    )
  }
}

export const MyTodoList = connect(mapStateToProps, mapDispatchToProps)(MyTodoListComponent);
