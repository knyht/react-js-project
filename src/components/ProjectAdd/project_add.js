import ProjectAddButton from '../ProjectAddButton/project_add_button'
import classnames from 'classnames/bind'
import styles from './project_add.module.scss'

const cx = classnames.bind(styles)

const ProjectAdd = ( {project_name, handleChange, handleClickProjectAdd} ) => {
    return (
        <div className={cx('project_add')}>
            <div>
                <input className={cx('input')} value={project_name} onChange={handleChange} placeholder='Название проекта' name='project_name' />
            </div>
            <div>
                <ProjectAddButton handleClickProjectAdd={handleClickProjectAdd} />
            </div>    
        </div>
    )
}

export default ProjectAdd;
