import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import '../src/assets/sass/app.scss';
import Home from './pages/Home'
import Activists from './pages/Activists'

function App() {
  return (
    <BrowserRouter>
      <div className='App-container'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/activists' component={Activists} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App;
