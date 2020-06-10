import React, { Component } from "react";
import "./App.css";
// import "semantic-ui-css/semantic.min.css";
import { Button, Container, Header, Segment, Icon } from "semantic-ui-react";
import GetAllEmployees from "./component/GetAllEmployees";
import CreateEmployee from "./component/CreateEmployee";
import UpdateEmployee from "./component/UpdateEmployee";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
  render() {
    const styleWhite = { color: "white" };
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Segment inverted vertical textAlign="center">
              <Segment inverted vertical as="header">
                Inspired from
                <Icon name="snapchat ghost"></Icon>
                <a style={styleWhite} href="http://semantic-ui.com">
                  Semantic-UI
                </a>
                , by <Icon name="grav"></Icon>
                <a
                  style={styleWhite}
                  href="https://github.com/semantic-ui-forest"
                >
                  @Semantic-UI-Forest
                </a>
                .
              </Segment>
              <Container className="content">
                <Header inverted as="h1">
                  <a style={styleWhite} href="/">
                    Welcome To My App
                  </a>
                </Header>
                <Header as="h1"></Header>
                <Icon name="paw"></Icon>
                <Header as="h1"></Header>
                <p>
                  This is a Single Page Web App using <Icon name="react" />
                  React, Redux, Semantic UI as frontend
                </p>
                <p>+ <Icon name="power off" /> Spring Boot as backend Created by UGGL233</p>
                <Header as="h1"></Header>
                <Header as="h1"></Header>
                <Link to="/getAllEmployees">
                  <Button animated size="huge">
                    <Button.Content visible>Get Employees</Button.Content>
                    <Button.Content hidden>
                      <Icon name="search" />
                    </Button.Content>
                  </Button>
                </Link>
                <Link to="/createEmployee">
                  <Button animated size="huge">
                    <Button.Content visible>Create A Employee</Button.Content>
                    <Button.Content hidden>
                      <Icon name="plus" />
                    </Button.Content>
                  </Button>
                </Link>
                <Route
                  exact
                  path="/getAllEmployees"
                  component={GetAllEmployees}
                />
                <Route
                  exact
                  path="/createEmployee"
                  component={CreateEmployee}
                />
                <Route
                  exact
                  path="/UpdateEmployee"
                  component={UpdateEmployee}
                />
              </Container>
            </Segment>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
