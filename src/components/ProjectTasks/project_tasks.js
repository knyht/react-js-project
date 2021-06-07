import classnames from 'classnames/bind'
import styles from '../MyTodoList/my_todo_list.module.scss'
import { ThemeContext } from '../MyTodoList/theme_context'
import TasksList from '../TasksList/tasks_list'
import { TaskAdd } from '../TaskAdd/task_add'
import { useParams, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const cx = classnames.bind(styles)

const mapStateToProps = (state) => ({
    tasksById: state.tasks_projects.tasksById,
    projectsById: state.tasks_projects.projectsById,
    theme: state.theme.theme
})

const ProjectTasksComponent = ({tasksById, projectsById, theme}) => {
    const { projectId } = useParams()
    if (projectId in projectsById) {
        const project_name = projectsById[projectId].name
        const project_task_ids = projectsById[projectId].tasksIds.map(id => String(id))
        const project_tasks = Object.keys(tasksById).filter(key => project_task_ids.includes(key)).reduce((obj, key) => {
            return {
                ...obj,
                [key]: tasksById[key]
            }
        }, {})

        return (
            <div className={cx('tasks')}>
                {/* <ThemeContext.Consumer>
                    {(theme) => (
                        <h1 className={cx('header', `header-theme-${theme}`)}>{project_name}</h1>
                    )}
                </ThemeContext.Consumer> */}
                <h1 className={cx('header', `header-theme-${theme}`)}>{project_name}</h1>
                <div className={cx('new_task')}>
                    <TaskAdd project_id={projectId} />
                </div>
                <TasksList tasksById={project_tasks} />
            </div>
        )
    } else {
        return (
            <Redirect to='/' />
        )
    }
}

export const ProjectTasks = connect(mapStateToProps)(ProjectTasksComponent);
