import React from 'react';
import axios from 'axios';
import APIService from "../../APIService.js"

export default class Table extends React.Component {
  state = {
    name: '',
    startdate: '',
    enddate: '',
    table : {
        'negativity':0,
        'neutrality':0,
        'positivity':0,
        'predictedClose':0
    },
    showInfo: false
  }


  handleChange = event => {
    this.setState({ name: event.target.value });
    this.setState({ startdate: event.target.value})
    this.setState({ enddate: event.target.value})
  }


  handleSubmit = event => {
    event.preventDefault();

    APIService.webScrapping(this.state.name).then(data=>{
        this.setState({table:data})
        this.setState({showInfo:true})
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
        {this.state.showInfo?
        <p>{this.state.table.negativity}</p>:<p></p>}
      </div>
    )
  }
}