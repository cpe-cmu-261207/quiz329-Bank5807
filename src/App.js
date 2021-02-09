import ItemTable from "./ItemTable";
import { useState, useEffect } from "react";

function App() {
  //add useState for all state variables
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      gender: '',
      age: '',
    }
  }

  handleGenderChange = (event) => {
    this.setState({
      gender: target.event.value
    })
  }
  handleAgeChange = (event) => {
    this.setState({
      age: target.event.value
    })
  }
  //load locationStorage
  useEffect(() => {
    const items = localStorage.getItem("items");
    }
  , []);
  return (
    <div className="card" style={{ width: 400 }}>
      <div className="card-content">
        <p className="is-4 title has-text-centered">Add Person</p>
        <div className="field">
          <label className="label">Name</label>
          <input
            className="input"
            type="text"
            placeholder="e.q John Smith"
            //update related state based on event
            value={this.state.name}
            onChange={this.handleNameChange}
          ></input>
        </div>

        <div className="field">
          <label className="label">Gender</label>
          <select 
            className="input" 
              type="text" 
                placeholder="Please select .."
                value={this.state.gender}
                onChange={this.handleGenderChange}>
            <option value="" disabled selected hidden>
              -- Select Gender --
            </option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>

        <div className="field">
          <label className="label">Age</label>
          <input 
            className="input" 
            type="number" 
            placeholder="e.q 30" 
            value={this.state.Age} 
            onChange={this.handleUseState}>
          </input>
        </div>

        <button className="button is-primary is-fullwidth">Submit</button>

        <div className="mb-4"></div>

        {/* display tables for all persons */}
        <p className="is-4 title has-text-centered">Person List</p>
        {/* sample table */}
        <ItemTable name={"Bob"} gender={"Male"} age={"50"} />
        <ItemTable name={this.name.value} gender={this.gender.value} age={this.age.value} />
        <p>Tanat Wipasakunden 620610787</p>
      </div>
    </div>
  );
}

export default App;
