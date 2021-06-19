import { Link } from 'react-router-dom'
import classnames from 'classnames/bind'
import styles from '../MyTodoList/my_todo_list.module.scss'
import { connect } from 'react-redux'

const cx = classnames.bind(styles)

const mapStateToProps = (state) => ({
    theme: state.theme.theme
})

const ProjectComponent = ({ theme, id, name }) => {
    const project_path = `/projects/${id}/`
    const project_row = `- ${name}`
    return (
        <div>
            <Link className={cx('header', `header-theme-${theme}`)} to={project_path} style={{ textDecoration: 'none' }}>{project_row}</Link>
        </div>
    )
}

export const Project = connect(mapStateToProps)(ProjectComponent);
