import './App.css'
import React from 'react'
import { MyTodoList } from './components/MyTodoList/my_todo_list'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { rootReducer } from './reducers/index'

const store = createStore(rootReducer)

const App = () => {
  return (
    <Provider store={store}>
      <div className='app'>
        <MyTodoList />
      </div>
    </Provider>
  )
}

export default App;
