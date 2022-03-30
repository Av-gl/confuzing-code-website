import Header from './Header';
import { BrowserRouter as Router, Switch, Route,Redirect } from 'react-router-dom'
import Home from './Home'
import AboutUs from './Aboutus'
import Settings from './Settings'
import Resources from './Resources';
import LoginRegister from './LoginRegister';
import Rules from './Rules';
import Syllabus from './Syllabus'
import Notes from './Notes'
import Loops from './Loops';
import PastPapers from './Pastpapers';
import Lectures from './Lectures';
import Error from "./Error"
import Details from "./Details"

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
            <Route exact path="/resources/syllabus">
              <Syllabus />
            </Route>
            <Route exact path="/resources/notes">
              <Notes />
            </Route>
            <Route exact path="/resources/notes/loops">
              <Loops />
            </Route>
            <Route exact path="/resources/past-papers">
              <PastPapers />
            </Route>
            <Route exact path="/resources/lectures">
              <Lectures />
            </Route>
            <Route exact path="/login-register/details">
              <Details />
            </Route>
            <Route>
            <Error />
            </Route>
        </Switch>
      </Header>
    </Router>
  );
}

export default App;
