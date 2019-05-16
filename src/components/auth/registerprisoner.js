import {DATA } from '../../data'
import React, { Component } from 'react'
import axios from 'axios'

export default class RegisterPrisoner extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      prison_id: '',
      canHaveWorkLeave:''
    }
  }
  
  addPrisoner = e => {
    e.preventDefault()

    const { name,prison_id,canHaveWorkLeave } = this.state

    axios.post(`${DATA}/auth/register`, {
      name,
      prison_id,
      canHaveWorkLeave,

    })
    this.setState({
      name:'',
      prison_id:'',
      canHaveWorkLeave:''
    })
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    const { name,prison_id,canHaveWorkLeave } = this.state
    return (
      <form onSubmit={this.addPrisoner}>
        <input name='name'type='text'placeholder='Prisoner Name'value={name}onChange={this.handleChange}/>
        <input prison_id='prison_id'type='nunmber'placeholder='Prison Id'value={prison_id}onChange={this.handleChange}/>
        <input canHaveWorkLeave='canHaveWorkLeave'type='text'placeholder='canHaveWorkLeave?'value={canHaveWorkLeave}onChange={this.handleChange}/>
        
        <button type='submit'>Register New Prisoner</button>
      </form>
    )
  }
}