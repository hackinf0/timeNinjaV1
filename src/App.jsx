import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/shared/Layout'
import Dashboard from './pages/Dashboard'
import CreateTask from './pages/CreateTask'
import TaskList from './pages/TaskList'
import { TaskProvider } from './context/TaskContext'


function App() {
    return (
      <TaskProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Dashboard />} />
              <Route path="create-task" element={<CreateTask />} />
              <Route path="task-list" element={<TaskList />} />
            </Route>
          </Routes>
        </Router>
      </TaskProvider>
    );
  }
  
export default App
