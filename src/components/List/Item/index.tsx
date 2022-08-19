import { ITask } from "../../../types/ITask";
import classes from "./Item.module.scss";

interface Props extends ITask {
  selectTask: (selectedTask: ITask) => void;
}

export default function Item({
  task,
  time,
  selected,
  completed,
  id,
  selectTask,
}: Props) {
  return (
    <li
      className={`${classes.item} ${selected ? classes.itemSelecionado : ""} ${completed ? classes.itemCompletado : ''}`}
      onClick={() => !completed &&
        selectTask({
          task,
          time,
          selected,
          completed,
          id,
        })
      }
    >
      <h3>{task}</h3>
      <span>{time}</span>
      {completed && <span className={classes.concluido} aria-label="task completed"></span>}
    </li>
  );
}
