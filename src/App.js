import './App.css'
import React from 'react'
import MyTodoList from './components/MyTodoList/my_todo_list'

const App = () => {
  return (
    <div className='app'>
      <main>
        <MyTodoList />
      </main>
    </div>
  )
}

export default App;
