import React, { Component } from "react";
import {
  Button,
  Form,
  Header,
  Icon,
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    document.body.style.backgroundColor = "#333333";
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  onSubmit(e) {}

  render() {
    return (
      <div className="signIn">
        <Header as="h1"></Header>
        <Header as="h1"></Header>
        <Icon name="fighter jet" size="large"></Icon>
        <Header as="h2" textAlign="center" color="grey">
          Sign In Page
        </Header>
        <Form inverted onSubmit={this.onSubmit}>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              label="UserName"
              placeholder="User name: should be email format"
              name="username"
              onChange={this.onChange}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              label="Password"
              placeholder="Password"
              name="password"
              type="password"
              onChange={this.onChange}
            />
          </Form.Group>
          <Header as="h1"></Header>

          <Button animated="fade" size="large">
            <Button.Content visible type="submit">
              <Icon loading name="certificate" />
              Sign In
            </Button.Content>
            <Button.Content hidden>
              <Icon name="paper plane" />
            </Button.Content>
          </Button>
        </Form>
        <Header as="h1"></Header>
      </div>
    );
  }
}

export default SignIn;
