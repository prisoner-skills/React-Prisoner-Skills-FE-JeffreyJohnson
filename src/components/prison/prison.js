import React, { Component } from 'react'
import { DATA } from '../../data'
import axios from 'axios'
import PrisonPage from './prisonpage'
import NoWorkers from './noworkers'
import{ Link }from 'react-router-dom'

export default class Prison extends Component {

  state = {
    prisons: [],
    prisoners:[]
  }
componentDidMount() {
  axios.all([
    axios.get(`${DATA}/prisoners`),
    axios.get(`${DATA}/prisons`)
  ])

  .then(axios.spread((prisons,prisoners)=>{
    this.setState({
      
      prisons:prisons.data,
      prisoners:prisoners.data,
    })
    console.log(this.state.prisoners)
    console.log(this.state.prisons)
  }));
  
 
    
}
 
  render() {
    const {prisoners}=this.state
    const{prisons}=this.state
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
      
        ) 
  }
}
}