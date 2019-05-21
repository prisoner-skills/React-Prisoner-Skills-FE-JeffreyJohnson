import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Register from './components/auth/register';
import Prisons from './components/prisons';
import Prisoners from './components/prisoners/prisoners';
import Navigation from './components/navigation/navigation.js';
import HomePage from './components/HomePage/Home';
import Prison from './components/prison/prison';
import LoginControl from './components/login/LoginControl';
import Prisoner from './components/prisoners/prisoner';
import RegisterPrisoner from './components/auth/registerprisoner';
import PrisonPage from './components/prison/prisonpage';
class App extends React.Component {
 
  render() {
    return (
      <div className='App'>
        <Navigation />
        <Register />
        <RegisterPrisoner/>
        <LoginControl/>
        
        <Route exact path='/'component={Prisons} />
        <Route exact path='/prisons'component={Prisons} />
        <Route exact path='/prisoners'component={Prisoners} />
        <Route path='/prison/:id'component={PrisonPage}/>
        <Route path='/prisoner/:id'component={Prisoner}/>
        
      </div>
    );
  }
};

export default App;
