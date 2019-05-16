import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Register from './components/auth/register';
import Prisons from './components/prisons';
import Prisoners from './components/prisoners';
import Navigation from './components/navigation.js';
import HomePage from './components/HomePage/Home';
import Prison from './components/prison';
import LoginControl from './components/login/LoginControl';

class App extends React.Component {
 
  render() {
    return (
      <div className='App'>
        <Navigation />
        <Register />
        <LoginControl/>
        <Switch>
        <Route exact path='/prisons'component={Prisons} />
        <Route exact path='/prisoners'component={Prisoners} />
        <Route path='/prisons/:id'component={Prison}/>
        </Switch>
      </div>
    );
  }
};

export default App;
