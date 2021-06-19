import { Task } from '../Task/task';
import classnames from 'classnames/bind'
import styles from './tasks_list.module.scss'

const cx = classnames.bind(styles)

const TasksList = ({ project_id, tasksById }) => {
    const tasks = Object.values(tasksById)
    return (
      <div className={cx('list_tasks')}>
        {
          tasks.map(it => <Task project_id={project_id} id={it.id} name={it.name} description={it.description} completed={it.completed} key={it.id} />)
        }
      </div>
    )
  }

export default TasksList;
