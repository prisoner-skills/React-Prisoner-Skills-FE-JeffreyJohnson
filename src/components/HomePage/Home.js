import React from 'react';
import axios from 'axios';
import {DATA} from '../../data';
import Prisons from '../prisons';

export default class HomePage extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
          username: '',
          address: '',
          name: '',
          password: '',
        }
      }
    render(){
        return <div>
                    {JSON.stringify(this.state)}
                </div>
    }
}