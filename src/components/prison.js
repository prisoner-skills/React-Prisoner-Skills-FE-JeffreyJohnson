import React, { Component } from 'react'
import { DATA } from '../data'
import axios from 'axios'
import PrisonPage from './prison/prisonpage'
import NoWorkers from './prison/noworkers'

export default class Prison extends Component {
  state = {
    prisoners: [],
  }

  componentDidMount() {
    axios
      .get(`${DATA}/prisoners`)
      .then(({ data }) => this.setState({ prisoners: data }))
  }
  
 
  render() {
    let page;
    const { prisoners } = this.state
    const {prisons}=this.state
if(prisoners.prison_id==='/:id'){
    page=<PrisonPage/>
}else{
    page=<NoWorkers/>
}
return (
    <div>{page}</div>
      
        ) 
  }
}