import Header from './Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Home'
import AboutUs from './Aboutus'
import Profile from './Profile'
import Settings from './Settings'
import Lectures from './Lectures';
import Notes from './Notes';
import Registration from './Registration';
import analytics from './firebase-config';
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
            <Route exact path="/registration">
              <Registration />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
            <Route exact path="/settings">
              <Settings />
            </Route>
            <Route exact path="/lectures">
              <Lectures />
            </Route>
            <Route exact path="/notes">
              <Notes />
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
