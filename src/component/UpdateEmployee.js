import React, { Component } from "react";
import { Icon, Header, Form, Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { updateEmployee } from "../actions/employeeActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class UpdateEmployee extends Component {
  constructor() {
    super();
    this.state = {
      employee: [],
      empId: null,
      newEmployeeName: "",
      newEmployeeHiredate: "",
      newEmployeeJob: "",
      newEmployeeSalary: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillMount() {
    document.body.style.backgroundColor = "#333333";
    this.setState({
      employee: this.props.location.state,
      empId: this.props.location.state.employee.empId,
    });
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  onSubmit(e) {
    const empId = this.state.empId;
    const newEmployee = {
      name: this.state.newEmployeeName,
      hiredate: this.state.newEmployeeHiredate,
      job: this.state.newEmployeeJob,
      salary: this.state.newEmployeeSalary,
    };
    if (
      newEmployee.name &&
      newEmployee.hiredate &&
      newEmployee.job &&
      newEmployee.salary
    ) {
      this.props.updateEmployee(empId, newEmployee, this.props.history);
    }
  }

  render() {
    const { employee } = this.state.employee;
    return (
      <div className="updateEmployee">
        <Header as="h1"></Header>
        <Header as="h1"></Header>
        <Icon name="qq" size="large"></Icon>
        <Header as="h2" textAlign="center" color="grey">
          Update a employee
        </Header>
        <Form inverted onSubmit={this.onSubmit}>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              label="Full name"
              placeholder={employee.name}
              name="newEmployeeName"
              onChange={this.onChange}
            />
            <Form.Input
              fluid
              label="Hire Date"
              placeholder={employee.hiredate}
              name="newEmployeeHiredate"
              onChange={this.onChange}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              label="Job"
              placeholder={employee.job}
              name="newEmployeeJob"
              onChange={this.onChange}
            />
            <Form.Input
              fluid
              label="Salary"
              placeholder={employee.salary}
              name="newEmployeeSalary"
              onChange={this.onChange}
            />
          </Form.Group>
          <Header as="h1"></Header>
          <Button animated="fade">
            <Button.Content visible type="submit">
              <Icon loading name="asterisk" />
              Yes!
            </Button.Content>
            <Button.Content hidden>
              <Icon name="gem"/>
            </Button.Content>
          </Button>
        </Form>
        <Header as="h1"></Header>
      </div>
    );
  }
}

UpdateEmployee.propTypes = {
  updateEmployee: PropTypes.func.isRequired,
};

export default connect(null, { updateEmployee })(UpdateEmployee);
