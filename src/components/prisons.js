import React, {useState,useEffect, Component } from 'react'
import axios from 'axios'
import {DATA} from '../data';
import {Link} from 'react-router-dom';
import './prisonlist.css';

export default class Prisons extends Component {
   //state = {
       // prisons: [],
      //}
  //componentDidMount() {
    //axios
     // .get(`${DATA}/prisons`)
      //.then(({ data }) => this.setState({ prisons: data }))
  //}
    //render() {
    //return <div>{JSON.stringify(this.state)}</div>
  //}
  render() {
    //const { prisons } = this.state

    return (
     <div>
        {/*<div className='WholeList'  >
          {prisons.map((prison, i) => (
            <div key={i} className='PrisonGroup' >
            
            <li className='PrisonLink'>
            <Link className='PrisonList' to={`/prison/${prison.id}`}>{prison.name}</Link>
            </li>
            
            <Link className='PrisonList' to={`/prison/${prison.id}`}>
            <li className='PrisonLink'>{prison.address}</li>
            </Link>
            </div>
            
          ))}
          </div>*/}{this.props.prisons}
      </div>
 )
  }
}