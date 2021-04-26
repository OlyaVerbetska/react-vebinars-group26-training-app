import styles from "./Counter.module.css";

const Value = ({value}) => (
    <span className={styles.CounterValue}> {value} </span>

)

export default Value;
