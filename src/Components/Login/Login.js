import React from 'react';
import {connect} from 'react-redux';
import {login} from '../../actions';
import {Route,Link} from 'react-router-dom';
import Loader from 'react-loader-spinner';

import {
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    FormText
} from 'reactstrap';

class Login extends React.Component{
    state={
        credentials:{
            username:'',
            password:''
        },
        isLoggedIn:false
    }
    handleChange=e=>{
        this.setState({
            credentials:{
                ...this.state.credentials,[e.target.name]:e.target.value
            }
        });
    };
    handleSubmit=e=>{
        e.preventDefault();
        console.log(this.state.credentials);
        this.props.login(this.state.credentials).then(()=>this.props.history.push('/'));
    };
    render(){
        return(
            <div className='LoginWhole'>
         <Form onSubmit={this.handleSubmit}>
                    <Label htmlFor="username">Account</Label>
                    <Input
                        type="text"
                        name="username"
                        placeholder="Username..."
                        value={this.state.credentials.username}
                        onChange={this.handleChange}/>
                    <Label htmlFor="password">Password</Label>
                    <Input
                        type="text"
                        name="password"
                        placeholder="Password..."
                        onChange={this.handleChange}
                        value={this.state.credentials.password}/>

                    <Button type='submit'>{this.props.loggingIn
                            ? (<div>loading</div>)
                            : ('Login')}</Button>
        </Form>
            </div>
        )
    };

};

const mapStateToProps=({loggingIn})=>({loggingIn});
export default connect(mapStateToProps,{login})(Login)