import internal from "stream";

export interface ITask {
  task: string,
  time: string,
  selected: boolean,
  completed: boolean,
  id: string,
}
