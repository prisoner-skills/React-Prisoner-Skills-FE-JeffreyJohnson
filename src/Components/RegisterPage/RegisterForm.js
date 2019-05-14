import React from 'react';
import NavBar from '../NavBar/NavBar';

class RegisterForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',
            isLoading:false
        };
        this.onSubmit=this.onSubmit.bind(this);
        this.onChange=this.onChange.bind(this);
    }
    onSubmit(e){
        e.preventDefault();
    }
    onChange(e){
        this.setState({[e.target.name]:e.target.value});
    }    
    
    render(){
        const{username,password,isLoading}=this.state;
        return(
            
            <form>
                <div><NavBar/></div>
                <h1>Register</h1>
                <input onSubmit={this.onSubmit} type='text'name='username'className='RegisterInput'/>
                <input type='password'className='PasswordRegInput'/>
            </form>
            
        )
    }
}
export default RegisterForm;