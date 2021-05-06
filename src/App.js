import './App.css';
import React from 'react';

const TaskButton = ({ task_id, task_completed }) => {
  const handleClick = () => {
    const console_message = 'Task ' + task_id + ' completed status = ' + task_completed
    console.log(console_message)
  }

  return (
    <button className='button' onClick={handleClick}>Выполнена</button>
  )
}

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
    ]
  }

  Task = ({ id, name, description, completed }) => {
    name = 'Задача: ' + name
    description = 'Описание: ' + description
    completed = 'Статус: ' + completed
    return (
      <div className='task'>
        <div>{name}</div>
        <div>{description}</div>
        <div>{completed}</div>
        <TaskButton task_id={id} task_completed={completed}/>
      </div>
    )
  }

  List = () => {
    return (
      <div>
        {
          this.state.tasks.map(it => <this.Task id={it.id} name={it.name} description={it.description} completed={it.completed} key={it.id}/>)
        }
      </div>
    )
  }

  render() {
    return (
      <div className='wrapper'>
        <h1 className='header'>Список задач</h1>
        <this.List/>
      </div>
    )
  }
}

// --- 1 ---
// const Inner = ({ name }) => {
//   const greeting = 'Hello ' + name
//   return (
//     <div>{greeting}</div>
//   )
// }

// const Outer = () => {
//   return (
//     <div>
//       <div>This is my first functional component</div>
//       <Inner name='Kirill'/>
//     </div>
//   )
// }
// --- 1 ---

// --- 2 ---
// const Inner = ({ name, onClick }) => {
//   // const handleClick = () => {
//   //   console.log("Button was clicked")
//   // }

//   return (
//     <div>
//       <button onClick={onClick}>{name}</button>
//     </div>
//   )
// }

// class Outer extends React.Component {
//   state = {
//     message: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'
//   }

//   changeStateMessage = () => {
//     this.setState({ message: 'Hello! I am a new message.' })
//   }

//   render() {
//     return (
//       <div>
//         <Inner name='Click me' onClick={this.changeStateMessage}/>
//         <div>{this.state.message}</div>
//       </div>
//     )
//   }
// }
// --- 2 ---

// --- 3 ---
// const Inner = ({ onClick }) => {
//   return (
//     <div>
//       <button onClick={onClick}>Кнопочка</button>
//     </div>
//   )
// }

// class Counter extends React.Component {
//   state = {
//     counter: 0
//   }
//   // --- неправильно ---
//   buttonCounter = () => { // обработчик
//     this.setState(state => {
//       state.counter ++

//       return state
//     })
//   }
//   // --- неправильно ---

//   buttonCounter = () => { // обработчик
//     this.setState(state => {
//       return {
//         counter: state.counter + 1
//       }
//     })
//   }

//   render() {
//     return (
//       <div>
//         <Inner onClick={this.buttonCounter}/>
//         <div>{this.state.counter}</div>
//       </div>
//     )
//   }
// }
// --- 3 ---

const App = () => {
  return (
    <MyTodoList/>
  )
}

export default App;
