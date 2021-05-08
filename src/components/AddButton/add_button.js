import './add_button.css';

const AddButton = ({ handleClickAdd }) => {
    return (
      <button className='button_add' onClick={handleClickAdd}>Добавить задачу</button>
    )
  }

export default AddButton;
