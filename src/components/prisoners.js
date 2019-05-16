    
import React, { Component } from 'react'
import {DATA } from '../data'
import axios from 'axios'

export default class Prisoners extends Component {
  state = {
    prisoners: [],
  }

  componentDidMount() {
    axios
      .get(`${DATA}/prisoners`)
      .then(({ data }) => this.setState({ prisoners: data }))
  }
 
  render() {
    const { prisoners } = this.state

    return (
      <div>
        <ul>
          {prisoners.map((prisoners, i) => (
              <div key={i}>
            <li >{prisoners.name}</li>
            <li >{prisoners.prison_id}</li>
            </div>
          ))}
        </ul>
      </div>
    )
  }
}