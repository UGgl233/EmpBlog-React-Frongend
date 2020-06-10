import React, { Component } from "react";
import { Form, Button, Icon, Header } from "semantic-ui-react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "../App.css";
import "semantic-ui-css/semantic.min.css";
import { createNewEmployee } from "../actions/employeeActions";

class CreateEmployee extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      hiredate: "",
      job: "",
      salary: "",
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

  onSubmit(e) {
    const newEmployee = {
      name: this.state.name,
      hiredate: this.state.hiredate,
      job: this.state.job,
      salary: this.state.salary,
    };
    if (
      newEmployee.name &&
      newEmployee.hiredate &&
      newEmployee.job &&
      newEmployee.salary
    ) {
      this.props.createNewEmployee(newEmployee, this.props.history);
    }
  }

  render() {
    return (
      <div className="createEmployee">
        <Header as="h1"></Header>
        <Header as="h1"></Header>
        <Icon name="github alternate" size="large"></Icon>
        <Header as="h2" textAlign="center" color="grey">
          Create a new employee
        </Header>
        <Form inverted onSubmit={this.onSubmit}>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              label="Full name"
              placeholder="Full name"
              name="name"
              onChange={this.onChange}
            />
            <Form.Input
              fluid
              label="Hire Date"
              placeholder="Format has to be yyyy-mm-dd: 1991-08-30"
              name="hiredate"
              onChange={this.onChange}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              label="Job"
              placeholder="Job"
              name="job"
              onChange={this.onChange}
            />
            <Form.Input
              fluid
              label="Salary"
              placeholder="Salary"
              name="salary"
              onChange={this.onChange}
            />
          </Form.Group>
          <Header as="h1"></Header>

          <Button animated="fade">
            <Button.Content visible type="submit">
              <Icon loading name="certificate" />
              Submit
            </Button.Content>
            <Button.Content hidden>
              <Icon name="paper plane"/>
            </Button.Content>
          </Button>
        </Form>
        <Header as="h1"></Header>
      </div>
    );
  }
}

CreateEmployee.propTypes = {
  createNewEmployee: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { createNewEmployee })(CreateEmployee);
