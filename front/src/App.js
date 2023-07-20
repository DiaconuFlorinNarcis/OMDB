import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Detail } from './pages/Detail';
import { Create } from './pages/Create';
import { NotFound } from './pages/NotFound';
import { Footer } from './components/shared/Footer';
import { NavBar } from './components/shared/Navbar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/detail/:movieId' component={Detail} />
            <Route path='/create/' component={Create} />
            <Route component={NotFound} />
          </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
