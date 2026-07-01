import { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import * as taskApi from "./api/taskApi";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const res = await taskApi.getAllTasks();
      setTasks(res.data);
      setError(null);
    } catch (err) {
      setError(
        "Could not connect to the backend. Make sure the Spring Boot server is running on port 8080."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleAddOrUpdate = async (taskData) => {
    try {
      if (editingTask) {
        await taskApi.updateTask(editingTask.id, taskData);
        setEditingTask(null);
      } else {
        await taskApi.createTask(taskData);
      }
      fetchTasks();
    } catch (err) {
      setError("Failed to save task.");
    }
  };

  const handleToggleComplete = async (task) => {
    try {
      await taskApi.updateTask(task.id, { ...task, completed: !task.completed });
      fetchTasks();
    } catch (err) {
      setError("Failed to update task.");
    }
  };

  const handleDelete = async (id) => {
    try {
      await taskApi.deleteTask(id);
      fetchTasks();
    } catch (err) {
      setError("Failed to delete task.");
    }
  };

  const handleEdit = (task) => setEditingTask(task);
  const handleCancelEdit = () => setEditingTask(null);

  return (
    <div className="app">
      <header>
        <h1>Task Manager</h1>
        <p className="subtitle">Spring Boot + React</p>
      </header>

      {error && <div className="error-banner">{error}</div>}

      <main>
        <TaskForm
          onSubmit={handleAddOrUpdate}
          editingTask={editingTask}
          onCancel={handleCancelEdit}
        />

        {loading ? (
          <p className="loading">Loading tasks...</p>
        ) : (
          <TaskList
            tasks={tasks}
            onToggleComplete={handleToggleComplete}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        )}
      </main>
    </div>
  );
}

export default App;
