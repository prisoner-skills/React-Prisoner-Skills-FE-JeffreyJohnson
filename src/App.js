import React from 'react';
import {BrowserRouter as Router,Route,withRouter,Redirect,Switch} from 'react-router-dom';
import {connect} from 'react-redux';
//COMPONENTS NEEDED STILL
import HomePage from './Components/HomePage/HomePage';
import RegisterPage from './Components/RegisterPage/RegisterPage';

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
        <div className='Nav'>
          <Switch>
            <Route
              path=''
              render={()=>(this.state.isLoggedIn===true ? (<Redirect to ='/'/>)
              :(<RegisterPage/>))}/>
            <Route path='/register'
              render={()=>(this.state.isLoggedIn ?(<Redirect to='/'/>):(<HomePage/>))} /> 
            </Switch>
        </div>
        {this.props.isLoggedIn && <HomePage/>}

        <Route exact path="/" component={HomePage}/>
        <Route exact path="/registerpage" component={RegisterPage}/>
      </div> 
    );
  }
};
const mapStateToProps=({isLoggedIn})=>({isLoggedIn})
export default App;
