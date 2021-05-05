import React from 'react';
import axios from 'axios';
import './table.css';
import APIService from "../../APIService.js"


export default class Predictions extends React.Component {
    state = {
        name: '',
        negativity:0,
        neutrality:0,
        positivity:0,
        predictedClose:0,
        showInfo: false
      }
      handleChange = event => {
        this.setState({ name: event.target.value });
      }
    
      handleSubmit = event => {
        event.preventDefault();
    
        APIService.webScrapping(this.state.name).then(data=>{
            console.log(data)
            const renderData = {
                        'name':this.state.name,
                            'negativity':data.Negativity,
                          'neutrality':data.Neutrality,
                          'positivity':data.Positivity,
                          'predictedClose':data.predictedClose,
                          'showInfo':true
                        }
            this.setState(renderData)
            // this.setState({negativity:data.Negativity})
            // this.setState({neutrality:data.Neutrality})
            // this.setState({positivity:data.Positivity})
            // this.setState({predictedClose:data.predictedClose})
         })
      }

        render() {
            return (
               <div class ="jumbotron temp2">
                        <form>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Ticker</label>
                                <input type="text" class="form-control w-25 p-3" placeholder="Enter ticker" name = "ticker" onChange = { this.handleChange }/>
                            </div>         
                            <button type="submit" class="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
                        </form>
                        <br></br>
                        {this.state.showInfo?
                            <table>
                            <tr>
                                <th>Positivity</th>
                                <th>Negativity</th>
                                <th>Neutrality</th>
                                <th>Predicted close</th>
                            </tr>
                            <tr>
                                <td>{this.state.positivity}</td>
                                <td>{this.state.negativity}</td>
                                <td>{this.state.neutrality}</td>
                                <td>{this.state.predictedClose}</td>
                            </tr>
                        </table>:
                        <p></p>
                        }
                        
                </div>
                );
        }
}                
