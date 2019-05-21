import React, { Component } from 'react'
import { DATA } from '../../data'
import axios from 'axios'
import PrisonPage from '../prison/prisonpage'
import NoWorkers from '../prison/noworkers'

export default class Prisoner extends Component {
    state = {
        prisoners: [],
      }
    
      componentDidMount() {
        axios
          .get(`${DATA}/prisoners`)
          .then(({ data }) => this.setState({ prisoners: data }))
      }
  
 render(){
     const {prisoners}=this.state
     return (
        <div>
            <h1>this should only be prisoner at a specific id=/ </h1>
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
 /* render() {
    let page;
    const { prisoners } = this.state
    const {prisons}=this.state
if(prisoners.prison_id===prisons.id){
    page=<PrisonPage/>
}else{
    page=<NoWorkers/>
}
return (
    <div>{page}</div>
      
        ) 
  }*/
}