import classnames from 'classnames/bind'
import styles from '../MyTodoList/my_todo_list.module.scss'
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

const ProjectTasksComponent = ({ tasksById, projectsById, theme }) => {
    const { projectId } = useParams()
    if (projectId in projectsById) {
        const project_name = projectsById[projectId].name
        const project_task_ids = projectsById[projectId].tasksIds.map(id => String(id)) // перевожу в String, так как получаю ключи типа стринг,
        // когда делаю фильтрацию по массиву Object.keys(tasksById)
        const project_tasks = Object.keys(tasksById).filter(key => project_task_ids.includes(key)).reduce((object, key) => {
            return {
                ...object,
                [key]: tasksById[key]
            }
        }, {})

        return (
            <div className={cx('tasks')}>
                {/* <h1 className={cx('header', `header-theme-${theme}`)}>{project_name}</h1> */}
                <h1 className={cx('header', `header-theme-${theme}`)}>{project_name}</h1>
                <div className={cx('new_task')}>
                    <TaskAdd project_id={projectId} />
                </div>
                <TasksList project_id={projectId} tasksById={project_tasks} />
            </div>
        )
    } else {
        return (
            <Redirect to='/' />
        )
    }
}

export const ProjectTasks = connect(mapStateToProps)(ProjectTasksComponent);
