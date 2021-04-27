//import React, { Component } from "react";
// Стили нужно выносить в отдельные файлы
import styles from "./Counter.module.css";
import Controls from "./Controls";
import Value from "./Value";
import { connect } from "react-redux";
import * as actions from "../../redux/actions";

// console.log("from counter", store.getState());

const Counter = ({ value, step, onDecrement, onIncrement }) => {
  return (
    <div className={styles.Counter}>
      <h3>Counter</h3>
      <Value value={value} />
      <Controls
        onDecrement={() => onDecrement (step)}
        onIncrement={() => onIncrement (step)}
        step={step}
      />
    </div>
  );
};
const mapStateToProps = (state) => ( {
    value: state.counter.value,
    step: state.counter.step,
  });


const mapDispatchToProps = (dispatch) => ( {
  onIncrement: (value) => dispatch(actions.increment(value)),
  onDecrement: (value) => dispatch(actions.decrement(value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
