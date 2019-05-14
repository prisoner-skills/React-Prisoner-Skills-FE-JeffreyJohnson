import React from 'react';
import {BrowserRouter as Router,Route,withRouter,Redirect,Switch} from 'react-router-dom';
import {connect} from 'react-redux';
//COMPONENTS NEEDED STILL
import HomePage from './components/HomePage/HomePage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import Login from './components/Login/Login';

class App extends React.Component{
  constructor(props){
    super(props);

    this.toggle=this.toggle.bind(this);
    this.state={
      isOpen: false,
      isLoggedIn: false,
    };
  }
  componentDidMount=()=>{
    if(!localStorage.getItem('isLoggedIn')){
        this.setState({isLoggedIn:false})
    }
    else{
      this.setState({isLoggedIn:true})
    }
  }
  toggle=()=>{
    this.setState({
      isOpen:!this.state.isOpen
    });
  }
  render(){
    return(
      <div className='Whole'>
        
        <Route exact path="/HomePage" component={HomePage}/>
        <Route path="/login" component={Login}/>
        <Route exact path="/registerpage" component={RegisterPage}/>
      </div> 
    );
  }
};
const mapStateToProps=({isLoggedIn})=>({isLoggedIn})
export default App;
