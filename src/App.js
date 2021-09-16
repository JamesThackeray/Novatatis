import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Projects from './Pages/Projects';
import Questionnaire from './Pages/Questionnaire';
import Profile from './Pages/Profile';
import Amplify from "aws-amplify";
import {AmplifyAuthContainer,AmplifyAuthenticator} from "@aws-amplify/ui-react";
import awsconfig from "./aws-exports";

Amplify.configure(awsconfig);

function App() {
  return (
    <AmplifyAuthContainer>
    <AmplifyAuthenticator>
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
    </AmplifyAuthenticator>
    </AmplifyAuthContainer>
  );
}

export default App;
