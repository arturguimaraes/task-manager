import { useState } from "react";
import Cronometer from "../components/Cronometer";
import Form from "../components/Form";
import List from "../components/List";
import { ITask } from "../types/ITask";
import classes from "./App.module.scss";

export default function App() {
  const [tasks, setTasks] = useState<ITask[] | []>([]);
  const [selected, setSelected] = useState<ITask>();

  function selectTaskHandler(selectedTask: ITask) {
    setSelected(selectedTask);
    setTasks((previousTasks) =>
      previousTasks.map((task) => ({
        ...task,
        selected: task.id === selectedTask.id ? true : false,
      }))
    );
  }

  function finishTask() {
    if (selected) {
      setSelected(undefined);
      setTasks((previousTasks) =>
        previousTasks.map((task) => {
          if (task.id === selected.id) {
            return {
              ...task,
              selected: false,
              completed: true,
            };
          } else return task;
        })
      );
    }
  }

  return (
    <div className={classes.AppStyle}>
      <Form setTasks={setTasks} />
      <List tasks={tasks} selectTask={selectTaskHandler} />
      <Cronometer selected={selected} finishTask={finishTask} />
    </div>
  );
}
