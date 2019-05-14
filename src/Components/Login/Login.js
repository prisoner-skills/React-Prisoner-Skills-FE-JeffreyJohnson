import React from 'react';
import LoginForm from './LoginForm';
import NavBar from '../NavBar/NavBar';

class Login extends React.Component{
    render(){
        return(
            <div className='row'>
                <div className='offset'>
                
                <LoginForm/>
                </div>
            </div>
        );
    }
}
export default LoginForm;