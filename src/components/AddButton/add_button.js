// import './add_button.css'
import classnames from 'classnames/bind'
import styles from './add_button.module.scss'

const cx = classnames.bind(styles)

const AddButton = ({ handleClickAdd }) => {
    return (
      <button className={cx('button_add')} onClick={handleClickAdd}>Добавить задачу</button>
    )
  }

export default AddButton;
