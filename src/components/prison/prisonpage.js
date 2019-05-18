import React, { Component } from 'react'
import { DATA } from '../../data'
import axios from 'axios'
import {Link} from 'react-router-dom'
import '../prisonlist.css'

export default class PrisonPage extends Component {
  constructor(){
    super();
    this.state={
      prisons:[],
      prisoners:[]
    };
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
    const {prisoners} =this.state
    const {prisons}=this.state
   
    
    if(this.state.prison_id===this.state.id){
    return (
      <div><h1>this should only be prisoners who belong to a specific prison =/</h1>
        <ul>
          {prisoners.map((prisoners, i) => (
              <div className='PrisonGroup' key={i}>
              <h1>name:</h1>
              <Link className='PrisonList' to={`/prisoner/${prisoners.id}`}>{}</Link>
              <h1>id:</h1>
              <Link className='PrisonList' to={`/prisoner/${prisoners.id}`}>{prisons.id}</Link>
              <h1>prison id:</h1>
              <Link className='PrisonList' to={`/prisoner/${prisoners.id}`}>{prisoners.name}</Link>
            </div>
          ))}
        </ul>
      </div>
    )}
  }
}