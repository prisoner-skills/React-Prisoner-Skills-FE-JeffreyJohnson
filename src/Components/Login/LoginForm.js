import React from 'react';

class LoginForm extends React.Component{
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
                <h1>Login</h1>
                <input onSubmit={this.onSubmit} type='text'name='username'className='LogInput'/>
                <input type='password'className='PassInput'/>
            </form>
            
        )
    }
}
export default LoginForm;