import React, { Component } from 'react'
import { DATA } from '../data'
import axios from 'axios'
import PrisonPage from './prison/prisonpage'
import NoWorkers from './prison/noworkers'

export default class Prison extends Component {
  state = {
    prisoners: [],
    prisons:[]
  }

  componentDidMount() {
    axios.all([
      axios.get(`${DATA}/prisoners`),
      axios.get(`${DATA}/prisons`)
    ])
  
    .then(axios.spread((prisonRes,prisonersRes)=>{
      this.setState({prisonRes,prisonersRes})
    }));
    console.log(DATA); 
      
  }
  
 
  render() {
    let page;
    const  {prisoners}  = this.state
    const {prisons}=this.state
    
    console.log(prisons)
if(prisons.id===prisoners.id){
    page=<PrisonPage/>
}else{
    page=<NoWorkers/>
}
return (
    <div>{page}</div>
      
        ) 
  }
}