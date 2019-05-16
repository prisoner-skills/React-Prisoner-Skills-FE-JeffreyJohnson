import React, {useState,useEffect, Component } from 'react'
import axios from 'axios'
import {DATA} from '../data';
import {Link} from 'react-router-dom';

export default class Prisons extends Component {
    state = {
        prisons: [],
      }
  componentDidMount() {
    axios
      .get(`${DATA}/prisons`)
      .then(({ data }) => this.setState({ prisons: data }))
  }
    //render() {
    //return <div>{JSON.stringify(this.state)}</div>
  //}
  render() {
    const { prisons } = this.state

    return (
     <div>
        <div >
          {prisons.map((prison, i) => (
            <div key={i}>
            
            <li>
            <Link to={`/prisons/${prison.id}`}>{prison.name}</Link>
            </li>
            
            <Link>
            <li>{prison.address}</li>
            </Link>
            </div>
            
          ))}
     </div>
      </div>
 )
  }
}