import React from 'react';
import axios from 'axios';
import APIService from "../../APIService.js"

export default class Table extends React.Component {
  state = {
    name: '',
    startdate: '',
    enddate: '',
  }

  handleChange = event => {
    this.setState({ name: event.target.value });
    this.setState({ startdate: event.target.value})
    this.setState({ enddate: event.target.value})
  }


  handleSubmit = event => {
    event.preventDefault();

    APIService.webScrapping(this.state.name).then(data=>{
        console.log(data)
     })
    APIService.predict(this.state.name).then(data=>{
        console.log(data)
     })

  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" onChange={(e)=>this.handleChange(e)}/>
          </label>
          <label>
            Start Date:
            <input type="date" name="startdate" onChange={(e)=>this.handleChange(e)} />
          </label>
          <label>
            End Date:
            <input type="date" name="endddate" onChange={(e)=>this.handleChange(e)} />
          </label>
          <button type="submit" onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    )
  }
}