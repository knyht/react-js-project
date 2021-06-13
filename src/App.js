import React from 'react'
import { MyTodoList } from './components/MyTodoList/my_todo_list'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { rootReducer } from './reducers/index'
import thunk from 'redux-thunk'

const store = createStore(rootReducer, applyMiddleware(thunk))

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <MyTodoList />
      </div>
    </Provider>
  )
}

export default App;
