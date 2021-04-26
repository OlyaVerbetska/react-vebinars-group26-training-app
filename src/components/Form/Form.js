import { Component } from "react";

class Form extends Component {
  state = {
    name: "",
    tag: "",
    experience: "middle",
  };

  handleChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onFormSubmit(this.state);
      this.reset();
  };
  reset = () => {
    this.setState({
      name: "",
      tag: "",
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            value={this.state.name}
            name="name"
            onChange={this.handleChange}
          />
        </label>
        <label>
          Surname
          <input
            type="text"
            value={this.state.tag}
            name="tag"
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">Send</button>
        <p>Your level:</p>
        <label>
          <input type="radio" name="experience" value="junior" onChange = {this.handleChange} checked = {this.state.experience === 'junior'} />
          junior
        </label>
         <label>
          <input type="radio" name="experience" value="middle" onChange = {this.handleChange} checked = {this.state.experience === 'middle'}/>
          middle
        </label>
         <label>
          <input type="radio" name="experience" value="senior"  onChange = {this.handleChange} checked = {this.state.experience === 'senior'}/>
          senior
        </label>
      </form>
    );
  }
}

export default Form;

// handleNameChange =(e) => {
//   this.setState ({
//     name:e.currentTarget.value,
//   })
// }
// handleTagChange =(e) => {
//   this.setState ({
//     tag:e.currentTarget.value,
//   })
// }
