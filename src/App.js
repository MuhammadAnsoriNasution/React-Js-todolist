import { Provider } from 'react-redux';
import './App.css';
import TodoList from './pages/Todolist';
import { PersistGate } from 'redux-persist/integration/react'
import configStore from './store';

const { store, persistor } = configStore()
function App() {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <TodoList />
      </PersistGate>
    </Provider>
  );
}

export default App;
