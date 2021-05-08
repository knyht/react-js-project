import AddButton from '../AddButton/add_button'
import './task_input.css'

const TaskInput = ( {name, description, handleChange, handleClickAdd} ) => { // Инпуты для добавления новой задачи
    return (
      <div className='task_input'>
        <div>
          <input className='input' value={name} onChange={handleChange} placeholder='Название задачи' name='name' />
        </div>
        <div>
          <input className='input' value={description} onChange={handleChange} placeholder='Описание задачи' name='description' />
        </div>
        <AddButton handleClickAdd={handleClickAdd}/>
      </div>
    )
  }

  export default TaskInput;
