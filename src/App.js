import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

import PrisonContainer from './components/PrisonContainer/PrisonContainer'



class App extends React.Component {
 
 
  render() {
    console.log(this.props.prisons)
    return (
     <div className="WholeApp">
       <PrisonContainer/>
       
      </div>
      
       );
       
  }
}
export default App;