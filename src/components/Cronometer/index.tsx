import { useEffect, useState } from "react";
import { timeToSeconds } from "../../commom/utils/Time";
import { ITask } from "../../types/ITask";
import Button from "../Button";
import Clock from "./Clock";
import classes from "./Cronometer.module.scss";

interface Props {
  selected: ITask | undefined;
  finishTask: () => void;
}

export default function Cronometer({ selected, finishTask }: Props) {
  const [time, setTime] = useState<number>();
  useEffect(() => {
    if (selected?.time) {
      setTime(timeToSeconds(selected?.time));
    }
  }, [selected]);

  function regressive(counter: number = 0) {
    setTimeout(() => {
      if (counter > 0) {
        setTime(counter - 1);
        return regressive(counter - 1);
      }
      finishTask();
    }, 1000);
  }

  return (
    <div className={classes.cronometro}>
      <p className={classes.titulo}>Choose a card and start the cronometer</p>
      <div className={classes.relogioWrapper}>
        <Clock time={time} />
      </div>
      <Button onClick={() => regressive(time)}>Start!</Button>
    </div>
  );
}
