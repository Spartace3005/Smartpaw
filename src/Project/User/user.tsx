import React from 'react';
import Nav from './Navigation/navigation';
import Pomodoro from './Pomodoro/pomodoro';
import '../User/user.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const User: React.FC = () => {
  return (
    <div className="back-ground-user">
      <Router>
        <div className="top-nav">
          Hello
          <Nav />
          Login
        </div>
        <Switch>
          <Route path="/user/pomodoro">
            <Pomodoro />
          </Route>
          <Route path="/premium">{/* <Premium/> */}</Route>
          <Route path="/user">
            <div> ANYA </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default User;
