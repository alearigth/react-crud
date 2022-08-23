import './App.css';
import { useSelector } from "react-redux";
import TasksForm from './components/TasksForm';
import TasksList from './components/TasksList';

function App() {

  const tasksState = useSelector(state => state.tasks)

  return (
    <div className="App">
     <h1>hello world</h1>
     <TasksForm />
     <TasksList />
    </div>
  );
}

export default App;
