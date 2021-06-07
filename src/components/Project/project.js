import { Link } from 'react-router-dom'
import classnames from 'classnames/bind'
import styles from '../MyTodoList/my_todo_list.module.scss'
// import { ThemeContext } from '../MyTodoList/theme_context'
import { connect } from 'react-redux'

const cx = classnames.bind(styles)

const mapStateToProps = (state) => ({
    theme: state.theme.theme
})

const ProjectComponent = ({ theme, id, name }) => {
    const project_path = `/projects/${id}/`
    return (
        // <ThemeContext.Consumer>
        //     {(theme) => (
        //         <div>
        //             <Link className={cx('header', `header-theme-${theme}`)} to={project_path}>{name}</Link>
        //         </div>
        //     )}
        // </ThemeContext.Consumer>
        <div>
            <Link className={cx('header', `header-theme-${theme}`)} to={project_path}>{name}</Link>
        </div>
    )
}

export const Project = connect(mapStateToProps)(ProjectComponent);
