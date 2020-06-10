import React, { Component } from "react";
import { Table, Button, Confirm } from "semantic-ui-react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteEmployee } from "../actions/employeeActions";
import { Link } from "react-router-dom";

class EmployeeItem extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
    };
  }

  handleConfirm(emp_id) {
    this.setState({ open: false });
    this.props.deleteEmployee(emp_id);
    window.location.reload();
  }

  handleCancel() {
    this.setState({ open: false });
  }

  onClickChoice() {
    this.setState({ open: true });
  }

  render() {
    const open = this.state.open;
    const employee = this.props.employee;
    return (
      <div>
        <Table inverted>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell singleLine>Name</Table.HeaderCell>
              <Table.HeaderCell>Hiredate</Table.HeaderCell>
              <Table.HeaderCell>Job</Table.HeaderCell>
              <Table.HeaderCell>Salary</Table.HeaderCell>
              <Table.HeaderCell textAlign="right"></Table.HeaderCell>
              <Table.HeaderCell textAlign="right"></Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell singleLine>{employee.name}</Table.Cell>
              <Table.Cell singleLine>{employee.hiredate}</Table.Cell>
              <Table.Cell singleLine>{employee.job}</Table.Cell>
              <Table.Cell singleLine>{employee.salary}</Table.Cell>
              <Table.Cell textAlign="right">
                <Link to={{
                  pathname: "/UpdateEmployee",
                  state: {
                    employee: employee
                  }
                }}>
                  <Button>Update</Button>
                </Link>
              </Table.Cell>
              <Table.Cell textAlign="right">
                <Button onClick={this.onClickChoice.bind(this)}>Delete</Button>
                <Confirm
                  open={open}
                  onCancel={this.handleCancel.bind(this)}
                  onConfirm={this.handleConfirm.bind(this, employee.empId)}
                />
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    );
  }
}
EmployeeItem.propTypes = {
  deleteEmployee: PropTypes.func.isRequired,
};

export default connect(null, { deleteEmployee })(EmployeeItem);
