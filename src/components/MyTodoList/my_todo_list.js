import React from 'react';
import List from '../List/list';
import TaskInput from '../TaskInput/task_input'
import './my_todo_list.css'

class MyTodoList extends React.Component {
  state = {
    tasks: [
      {
        id: 1,
        name: 'сделать домашку-3 по реакту',
        description: 'необходимо реализовать отображение задач в TaskTracker',
        completed: false
      },
      {
        id: 2,
        name: 'сделать домашку по рекомендательным система',
        description: 'персональная рекомендация статей',
        completed: true
      },
      {
        id: 3,
        name: 'найти научника для диплома',
        description: 'написать преподу с курса по ИТ в музееях',
        completed: true
      },
      {
        id: 4,
        name: 'найти хороший сервисный центр',
        description: 'быстро разряжается ноутбук asus',
        completed: false
      },
      {
        id: 5,
        name: 'забронировать бар',
        description: '29 мая челси-мс',
        completed: false
      }
    ],
    name: '',
    description: ''
  }

  handleClickCompleted = (event) => {
    let { value: task_id } = event.currentTarget
    task_id = Number.parseInt(task_id)
    const task_index = this.state.tasks.findIndex(it => it.id === task_id)
    this.setState(state => {
      const newTasks = [...state.tasks]
      newTasks[task_index] = {...newTasks[task_index], completed: true}

      return {
        tasks: newTasks
      }
    })
  }

  handleClickAdd = () => {
    const newTask = {
      id: this.state.tasks[Object.keys(this.state.tasks)[Object.keys(this.state.tasks).length - 1]].id + 1,
      name: this.state.name,
      description: this.state.description,
      completed: false
    }
    const newTasks = [...this.state.tasks, newTask]

    this.setState(state => {
      return {
        tasks: newTasks
      }
    })
  }

  handleChange = (event) => {
    const { value, name } = event.currentTarget

    this.setState({ [name]: value })
  }

  render() {
    return (
      <div className='page'>
        <h1 className='header'>Список задач</h1>
        <div>
          <h2 className='header_to_add_task'>Добавить новую задачу</h2>
          <TaskInput name={this.state.name} description={this.state.description} handleChange={this.handleChange} handleClickAdd={this.handleClickAdd} />
        </div>
        <List tasks={this.state.tasks} handleClickCompleted={this.handleClickCompleted} />
      </div>
    )
  }
}

export default MyTodoList;
