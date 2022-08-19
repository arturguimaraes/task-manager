import { ITask } from "../../types/ITask";
import Item from "./Item";
import classes from "./List.module.scss";

interface Props {
  tasks: ITask[];
  selectTask: (selectedTask: ITask) => void;
}

export default function List({ tasks, selectTask }: Props) {
  return (
    <aside className={classes.listaTarefas}>
      <h2>Tasks of the day</h2>
      <ul>
        {tasks.map((item) => (
          <Item key={item.id} {...item} selectTask={selectTask} />
        ))}
      </ul>
    </aside>
  );
}
