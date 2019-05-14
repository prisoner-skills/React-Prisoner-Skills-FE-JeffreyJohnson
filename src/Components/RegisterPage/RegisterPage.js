import React from 'react';
import RegisterForm from './RegisterForm';
import NavBar from '../NavBar/NavBar';

class RegisterPage extends React.Component{
    render(){
        return(
            <div className='row'>
                <div className='offset'>
                
                <RegisterForm/>
                </div>
            </div>
        );
    }
}
export default RegisterPage;