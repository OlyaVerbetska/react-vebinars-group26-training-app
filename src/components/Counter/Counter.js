import React, { Component } from "react";
// Стили нужно выносить в отдельные файлы
import styles from "./Counter.module.css";
import Controls from "./Controls";
import Value from "./Value";

class Counter extends Component {
  static defaultProps = {
    initialValue: 33,
  };
  static propTypes = {
    //
  };
  state = {
    // value: 100,
    value: this.props.initialValue,
  };
  handleIncrement = () => {
    // Обновление независимо от предыдущего - объект =============================
    //    this.setState ({
    //        value: 200,
    //    })
    // Обновление от предыдущего - функция=============================
    // стрелка = возвращает выражение, внутри которого объект
    this.setState((prevState) => ({
      value: prevState.value + 1,
    }));
  };
  handleDecrement = () => {
    this.setState((prevState) => ({
      value: prevState.value - 1,
    }));
  };
  render() {
    const {value} = this.state;
    return (
      <div className={styles.Counter}>
        <Value value={value} />
        <Controls
          onDecrement={this.handleDecrement}
          onIncrement={this.handleIncrement}
        />
      </div>
    );
  }
}
export default Counter;
