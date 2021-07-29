import ToDoList from './pages/TodoList'
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ToDoList/>
      </Provider>
    </div>
  );
}

export default App;
