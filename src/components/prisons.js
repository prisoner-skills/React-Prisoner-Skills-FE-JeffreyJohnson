import React, {useState,useEffect, Component } from 'react'
import axios from 'axios'
import {DATA} from '../data';
import {Link} from 'react-router-dom';
import './prison/prisonlist.css';

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
    console.log(prisons);
    return (
      
     <div> 
        <div className='WholeList'  >
          {prisons.map((prison, i) => (
            <div key={i} className='PrisonGroup' >
             
            <li className='PrisonLink'>
            <Link className='PrisonList' to={`/prison/${prison.id}`}>{prison.name}</Link>
            </li>
            <li className='PrisonLink'>
            <Link className='PrisonList' to={`/prison/${prison.id}`}>{prison.address}</Link>
            </li>
          </div>
          
          ))}
          </div>
       
      </div>
      
 )
 console.log(this.props.data)
  }
}