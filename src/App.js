import React from "react";

class State extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      title: "This is State",
    };
  }
  render() {
    const plus = () => {
      if (this.state.count < 10) {
        this.setState({ count: this.state.count + 1 });
      }
    };
    const minus = () => {
      if (this.state.count > 0) {
        this.setState({ count: this.state.count - 1 });
      }
    };

    const onChange = (event) => {
      console.log(event.target.value);
      this.setState({ title: event.target.value });
    };

    const onSelect = (e) => {
      console.log(e.target.value);
    };

    const onCheck = (e) => {
      console.log(e.target.checked);
    };

    return (
      <div>
        <h2>{this.state.title}</h2>
        <h1>State {this.state.count}</h1>
        <input type="text" onChange={onChange} placeholder="name" />
        <select onChange={onSelect}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <input type="checkbox" onChange={onCheck} />
        <button onClick={minus}>-</button>
        <button onClick={plus}>+</button>
      </div>
    );
  }
}

export default State;
