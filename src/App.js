import Header from './Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Home'
import AboutUs from './Aboutus'
import Settings from './Settings'
import Resources from './Resources';
import LoginRegister from './LoginRegister';
import Rules from './Rules';

function App() {
  return (
    <Router>
      <Header>
        <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/aboutUs">
              <AboutUs />
            </Route>
            <Route exact path="/login-register">
              <LoginRegister />
            </Route>
            <Route exact path="/settings">
              <Settings />
            </Route>
            <Route exact path="/resources">
              <Resources />
            </Route>
            <Route exact path="/rules">
              <Rules />
            </Route>
        </Switch>
      </Header>
    </Router>
  );
}

export default App;
