import { secondsToMinutesAndSeconds } from "../../../commom/utils/Time";
import classes from "./Clock.module.scss";

export default function Clock(props: any) {
  const time = props.time ? props.time : 0;
  const [minuteFirstChar, minuteSecondChar, secondFirstChar, secondSecondChar] = secondsToMinutesAndSeconds(time);
  return (
    <>
      <span className={classes.relogioNumero}>{minuteFirstChar}</span>
      <span className={classes.relogioNumero}>{minuteSecondChar}</span>
      <span className={classes.relogioDivisao}>:</span>
      <span className={classes.relogioNumero}>{secondFirstChar}</span>
      <span className={classes.relogioNumero}>{secondSecondChar}</span>
    </>
  );
}
