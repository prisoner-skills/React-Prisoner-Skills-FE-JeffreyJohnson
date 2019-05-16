import React, { Component } from 'react'
import { DATA } from '../../data'
import axios from 'axios'

export default class PrisonPage extends Component {
  state = {
    prisoners: [],
    prisons:[]
  }

  componentDidMount() {
    axios
      .get(`${DATA}/prisoners`)
      .then(({ data }) => this.setState({ prisoners: data }))
    axios
      .get(`${DATA}/prisons`)
      .then(({data})=>this.setState({prisons:data}))
  }
 
  render() {
    const { prisoners } = this.state
    const {prisons}=this.state
    if(prisoners.prison_id===prisons.id){
    return (
      <div><h1>rnder</h1>
        <ul>
          {prisoners.map((prisoners, i) => (
              <div key={i}>
              
            <li >{prisoners.name}</li>
            <li >{prisoners.prison_id}</li>
            </div>
          ))}
        </ul>
      </div>
    )}
  }
}