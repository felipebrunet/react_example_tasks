import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);
  const [counter, setCounter] = useState(data.length);

  function createTask(task) {
    const newTask = {
      id: counter,
      title: task.title,
      description: task.description,
    };
    setTasks([...tasks, newTask]);
    setCounter(counter + 1);
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        deleteTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
