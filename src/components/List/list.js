import Task from '../Task/task';

const List = ({ tasks, handleClickCompleted }) => { // Рисуте массив задач, находящихся в state
    return (
      <div>
        {
          tasks.map(it => <Task id={it.id} name={it.name} description={it.description} completed={it.completed} handleClickCompleted={handleClickCompleted} key={it.id} />)
        }
      </div>
    )
  }

export default List;
