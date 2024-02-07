import React from "react";
import { students } from "./mock.data";

class State extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      data: students,
      name: "Ismoil",
      surname: "Karimov",
    };
  }
  render() {
   
    const onChangeInputValues = (event) => {
      console.log(event);
      this.setState({ [event.target.name]: event.target.value });
    };

    const onFilter = (event) => {
      console.log(event.target.value);
      let response = students.filter( value => value.name.includes(event.target.value))
      this.setState({
        data: response
      })
    }
    return (
      <div>
        <h2>{this.state.title}</h2>
        <h1>name: {this.state.name}</h1>
        <h1>surname: {this.state.surname}</h1>
        <input type="text" name="name" onChange={onChangeInputValues} placeholder="name" />
        <input type="text" name="surname" onChange={onChangeInputValues} placeholder="surname" />
        <hr />
        <input type="text" name="filter" onChange={onFilter} placeholder="filter" />
        <br /><br />
        {this.state.data.map(student => {
          return(
            <div key={student.id}>
              {student.id} {student.name} { student.surname} { student.job}
            </div>
          )
        })}
        
      </div>
    );
  }
}

export default State;
