import React, { useState } from "react";
import { ITask } from "../../types/ITask";
import Button from "../Button";
import classes from "./Form.module.scss";
import { v4 as uuidv4 } from "uuid";

export default function Form(props: any) {
  const [task, setTask] = useState("");
  const [time, setTime] = useState("00:00");

  function addTaskHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    props.setTasks((oldTasks: ITask[]) => [
      ...oldTasks,
      {
        task,
        time,
        selected: false,
        completed: false,
        id: uuidv4(),
      },
    ]);
    setTask("");
    setTime("00:00");
  }

  return (
    <form className={classes.novaTarefa} onSubmit={addTaskHandler}>
      <div className={classes.inputContainer}>
        <label htmlFor="task">Add a new task</label>
        <input
          type="text"
          name="task"
          value={task}
          onChange={(event) => setTask(event.target.value)}
          id="task"
          placeholder="Describe your task"
          required
        />
      </div>
      <div className={classes.inputContainer}>
        <label htmlFor="time">Time</label>
        <input
          type="time"
          step="1"
          name="time"
          value={time}
          onChange={(event) => setTime(event.target.value)}
          id="time"
          min="00:00:00"
          max="10:00:00"
          required
        />
      </div>
      <Button type="submit">Add</Button>
    </form>
  );
}
