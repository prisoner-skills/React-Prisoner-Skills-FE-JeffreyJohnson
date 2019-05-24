import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import {getPrisons} from './actions';
import PrisonContainer from './components/PrisonContainer/PrisonContainer'
import { connect } from 'react-redux';



class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      prisonsData:[]

    }
  }
  componentDidMount(){
    this.props.getPrisons()
  }
 
  render() {
    return (
     <div className="WholeApp">
       <PrisonContainer {...this.props}/>
      </div>
       );
  }
}
const mapStateToProps=(state)=>{
  return{
  
    prisons:state.prisons,

  }
}

export default connect(
  mapStateToProps,
  {getPrisons}
)(App);
