import classes from "./Button.module.scss";

export default function Button(props: any) {
  return (
    <button
      type={props.type ? props.type : "button"}
      onClick={props.onClick}
      className={classes.botao}
    >
      {props.children}
    </button>
  );
}
