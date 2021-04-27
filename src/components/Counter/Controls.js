import styles from "./Counter.module.css";

const Controls = ({step, onDecrement, onIncrement }) => (
  <div className={styles.CounterControls}>
    <button type="button" onClick={onDecrement}>
      Уменьшить на {step}
    </button>
    <button type="button" onClick={onIncrement}>
      Увеличить на {step}
    </button>
  </div>
);

export default Controls;
