import { ProjectAddButton } from '../ProjectAddButton/project_add_button'
import classnames from 'classnames/bind'
import styles from './project_add.module.scss'
import { connect } from 'react-redux'
import { handleInputChange } from '../../actions/tasks_projects'

const cx = classnames.bind(styles)

const mapStateToProps = (state) => ({
    project_name: state.tasks_projects.project_name
})

const mapDispatchToProps = (dispatch) => ({
    dispatchOnInputChange: (input) => dispatch(handleInputChange(input))
})

const ProjectAddComponent = ({ project_name, dispatchOnInputChange, handleClickProjectAdd }) => {
    const onInputChange = (event) => {
        dispatchOnInputChange(event.target)
    }

    return (
        <div className={cx('project_add')}>
            <div>
                <input className={cx('input')} value={project_name} onChange={onInputChange} placeholder='Название проекта' name='project_name' />
            </div>
            <div>
                <ProjectAddButton />
            </div>    
        </div>
    )
}

export const ProjectAdd = connect(mapStateToProps, mapDispatchToProps)(ProjectAddComponent);
