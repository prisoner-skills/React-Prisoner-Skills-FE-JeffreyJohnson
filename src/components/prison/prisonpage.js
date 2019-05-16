import React, { Component } from 'react'
import { DATA } from '../../data'
import axios from 'axios'
import {Link} from 'react-router-dom'
import '../prisonlist.css'

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
      <div><h1>this should only be prisoners who belong to a specific prison =/</h1>
        <ul>
          {prisoners.map((prisoners, i) => (
              <div className='PrisonGroup' key={i}>
              <h1>name:</h1>
              <Link className='PrisonList' to={`/prisoner/${prisoners.id}`}>{prisoners.name}</Link>
              <h1>id:</h1>
              <Link className='PrisonList' to={`/prisoner/${prisoners.id}`}>{prisoners.id}</Link>
              <h1>prison id:</h1>
              <Link className='PrisonList' to={`/prisoner/${prisoners.id}`}>{prisoners.prison_id}</Link>
            </div>
          ))}
        </ul>
      </div>
    )}
  }
}