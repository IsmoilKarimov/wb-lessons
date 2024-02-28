import React from "react";
import { students } from "../mock.data";

class State extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      data: students,
      name: "",
      status: "",
      search: "id",
      active: null,
    };
  }

  render() {
    const onChange = (event) => {
      this.setState({ [event.target.name]: event.target.value });
    };

    // DELETE TATA FROM TABLE
    const onDelete = (id) => {
      let filteredData = this.state.data.filter((item) => item.id !== id);
      this.setState({
        data: filteredData,
      });
    };

    // ADD DATA TO TABLE
    const onAdd = () => {
      let user = {
        id: Date.now(),
        name: this.state.name,
        status: this.state.status,
      };
      this.setState({
        data: [...this.state.data, user],
        name: "",
        status: "",
      });
    };

    // FILTER
    const onFilter = (e) => {
      const { value } = e.target;
      let filteredData = students.filter((item) =>
        `${item[this.state.search]}`.toLowerCase().includes(value.toLowerCase())
      );
      console.log(filteredData, "filteredData");
      this.setState({ data: filteredData });
    };

    const onSelect = (e) => {
      this.setState({ search: e.target.value });
    };

    const onEdit = ({ id, name, status }, isSave) => {
      if (isSave) {
        let res = this.state.data.map((value) =>
          value.id === this.state.active.id
            ? { ...value, name: this.state.name, status: this.state.status }
            : value
        );
        this.setState({
          active: null,
          data: res,
        });
      } else {
        this.setState({
          name: name,
          status: status,
          active: { id, name, status },
        });
      }
    };

    return (
      <div>
        <h2>{this.state.title}</h2>
        <h1>name: {this.state.name}</h1>
        <h1>status: {this.state.status}</h1>
        <input
          type="text"
          value={this.state.name}
          name="name"
          onChange={onChange}
          placeholder="name"
        />
        <input
          type="text"
          value={this.state.status}
          name="status"
          onChange={onChange}
          placeholder="status"
        />
        <button onClick={onAdd}>add</button>
        <hr />

        <select onChange={onSelect} name="" id="">
          <option value="id">Id</option>
          <option value="name">Name</option>
          <option value="status">Status</option>
        </select>

        <input
          name="filter"
          onChange={onFilter}
          type="text"
          placeholder="search"
        />

        <br />
        <br />
        <table
          border={1}
          width={"80%"}
          style={{
            borderCollapse: "collapse",
            textAlign: "center",
          }}
        >
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Status</th>
              <th>Delete</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.length ? (
              this.state.data.map(({ id, name, status }) => {
                return (
                  <tr key={id}>
                    <td>{id}</td>
                    <td>
                      {this.state.active?.id === id ? (
                        <input
                          onChange={onChange}
                          name="name"
                          value={this.state.name}
                          type="text"
                        />
                      ) : (
                        name
                      )}
                    </td>
                    <td>
                      {this.state.active?.id === id ? (
                        <input
                          onChange={onChange}
                          name="status"
                          value={this.state.status}
                          type="text"
                        />
                      ) : (
                        status
                      )}
                    </td>
                    <td>
                      <button onClick={() => onDelete(id)}>delete</button>
                    </td>
                    <td>
                      <button
                        onClick={() =>
                          onEdit(
                            { id, name, status },
                            this.state.active?.id === id
                          )
                        }
                      >
                        {this.state.active?.id === id ? "save" : "edit"}
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <th colSpan={6}>
                  <h1>No Data</h1>
                </th>
              </tr>
            )}
            <tr></tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default State;
