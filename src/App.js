import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import {getPrisons,getPrisoners} from './actions';
import PrisonContainer from './components/PrisonContainer/PrisonContainer'
import { connect } from 'react-redux';



class App extends React.Component {
 
 
  render() {
    return (
     <div className="WholeApp">
       <PrisonContainer/>
      </div>
       );
  }
}
export default App;