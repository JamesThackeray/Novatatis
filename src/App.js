import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Projects from './Pages/Projects';
import Questionnaire from './Pages/Questionnaire';
import Profile from './Pages/Profile';

function App() {
  return (
    <>
    <Router>
      <NavBar/>
      <Switch>
        <Route path="/" exact component={Projects}/>
        <Route path="/questionnaire" component={Questionnaire}/>
        <Route path="/profile" component={Profile}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
