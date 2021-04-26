import { Component } from "react";
import "./ColorPicker.css";

class ColorPicker extends Component {
  state = {
    activeColorIdx: 1,
  };

  setActiveIdx = (index) => {
    this.setState({
      activeColorIdx: index,
    });
  };

  makeClassName = (index) => {
    const optionClasses = ["ColorPicker__option"];
    if (index === this.state.activeColorIdx) {
      optionClasses.push("ColorPicker__option--active");
    }
    return optionClasses.join(" ");
  };

  render() {
    // деструктуризация пропов и стейтов  методе рендер
    const { options } = this.props;
    const { activeColorIdx } = this.state;
    const { label } = options[activeColorIdx];

    return (
      <div className="ColorPicker">
        <h2 className="ColorPicker__title">Color Picker</h2>
        <p>Select color: {label} </p>
        <div>
          {options.map(({ label, color }, index) => (
            <button
              key={label}
              className={this.makeClassName(index)}
              // style={{ backgroundColor: color,
              // border: index === this.state.activeColorIdx ? '3px solid black' : "none", }}
              style={{ backgroundColor: color }}
              onClick={() => this.setActiveIdx(index)}
            ></button>
          ))}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
