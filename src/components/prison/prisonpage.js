import React, { Component } from 'react'
import { DATA } from '../../data'
import axios from 'axios'
import {Link} from 'react-router-dom'
import './prisonlist.css'

export default class PrisonPage extends Component {
  constructor(){
    super();
    this.state={
      prisons:[],
      prisoners:[]
    };
  }

  componentDidMount() {
    axios
      .get(`${DATA}/prisoners`)
      .then(({ data }) => this.setState({ prisoners: data }))
      
    }
 
  render() {
    const {prisoners} =this.state
    const {prisons}=this.state
   
    
    if(prisoners.prison_id===prisons.id){
    return (
      <div><h1>this should only be prisoners who belong to a specific prison =/</h1>
        <ul>
          {prisoners.map((prisoners, i) => (
              <div className='PrisonGroup' key={i}>
              <h1>name:</h1>
              <li className='PrisonLink'>
            <Link className='PrisonList' to={`/prisoner/${prisoners.id}`}>{prisoners.name}</Link>
            </li>
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