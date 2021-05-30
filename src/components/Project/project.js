import { Link } from 'react-router-dom'
import classnames from 'classnames/bind'
import styles from '../MyTodoList/my_todo_list.module.scss'
import { ThemeContext } from '../MyTodoList/theme_context'

const cx = classnames.bind(styles)

const Project = ({ id, name }) => {
    const project_path = `/projects/${id}/`
    return (
        <ThemeContext.Consumer>
            {(theme) => (
                <div>
                    <Link className={cx('header', `header-theme-${theme}`)} to={project_path}>{name}</Link>
                </div>
            )}
        </ThemeContext.Consumer>
    )
}

export default Project;
