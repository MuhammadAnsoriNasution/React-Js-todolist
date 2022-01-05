import { Provider } from 'react-redux';
import './App.css';
import TodoList from './pages/Todolist';
import store from './store';
function App() {

  return (
    <Provider store={store}>
      <TodoList/>
    </Provider>
  );
}

export default App;
