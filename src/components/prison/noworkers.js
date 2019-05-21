import React, { Component } from 'react'
import { DATA } from '../../data'
import axios from 'axios'

export default class NoWorkers extends Component {
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
       noworkers
      </div>
    )
  }
}