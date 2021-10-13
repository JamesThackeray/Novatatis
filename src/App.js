import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Project from "./Pages/Project";
import AdminProjects from "./Pages/AdminProjects";
import Questionnaire from "./Pages/Questionnaire";
import Profile from "./Pages/Profile";
import Clients from "./Pages/Clients";
import Report from "./Pages/Report";
import Amplify, { Auth } from "aws-amplify";
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";
import {
  AmplifyAuthContainer,
  AmplifyAuthenticator,
} from "@aws-amplify/ui-react";
import awsconfig from "./aws-exports";
import React from "react";

Amplify.configure(awsconfig);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Auth: "",
      AuthData: "",
      nextAuthState: "",
    };
  }
  getData = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      const groups =
        user.signInUserSession.accessToken.payload["cognito:groups"];
      console.log("Admin", groups.includes("Admin"));
      if (groups.includes("Admin")) {
        this.setState({ Auth: "Admin" });
        return "Admin";
      } else {
        this.setState({ Auth: "Client" });
        return "Client";
      }
    } catch (err) {
      console.log(err);
    }
  };

  componentDidMount() {
    const result = this.getData();
    console.log(result);
  }

  usertype = () => {
    return this.state.Auth === "Admin" ? (
      <>
        <Router>
          <NavBar />
          <Switch>
            <Route path="/" exact component={AdminProjects} />
            <Route path="/clients" exact component={Clients} />
            <Route path="/reports" exact component={Report} />
          </Switch>
        </Router>
      </>
    ) : (
      <>
        <Router>
          <NavBar />
          <Switch>
            <Route path="/" exact component={Project} />
            <Route path="/questionnaire" exact component={Questionnaire} />
            <Route path="/profile" exact component={Profile} />
          </Switch>
        </Router>
      </>
    );
  };

  handleAuthStateChange = () => {
    return onAuthUIStateChange((nextAuthState, authData) => {
      this.setState({ nextAuthState, AuthData: authData });
    });
  };

  render() {
    return this.state.nextAuthState === AuthState.SignedIn ? (
      <>{this.usertype()}</>
    ) : (
      <>
        <AmplifyAuthContainer>
          <AmplifyAuthenticator
            usernameAlias="email"
            handleAuthStateChange={this.handleAuthStateChange()}
          ></AmplifyAuthenticator>
        </AmplifyAuthContainer>
      </>
    );
  }
}

export default App;
