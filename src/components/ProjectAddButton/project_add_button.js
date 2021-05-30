import classnames from 'classnames/bind'
import styles from './project_add_button.module.scss'

const cx = classnames.bind(styles)

const ProjectAddButton = ( {handleClickProjectAdd} ) => {
    return (
        <div>
            <button className={cx('project_add_button')} onClick={handleClickProjectAdd}>+</button>
        </div>
    )
}

export default ProjectAddButton;
