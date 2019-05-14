import React from 'react';
import LoginForm from './LoginForm';

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