import React, { Component } from "react";
import EmployeeItem from "./EmployeeItem";
import axios from "axios";
import "../App.css";
import "semantic-ui-css/semantic.min.css";
import { Loader, Icon, Header, Pagination } from "semantic-ui-react";

class GetAllEmployees extends Component {
  constructor() {
    super();
    this.state = {
      employees: [],
      activePage: 1,
      totalPage: null,
    };
  }

  componentDidMount() {
    document.body.style.backgroundColor = "#333333";
    axios.get("/app/employees").then((res) => {
      this.setState({
        totalPage: Math.ceil(res.data.length / 5),
      });
    });
    axios.get("/app/employees/pagination/1").then((res) => {
      this.setState({
        employees: res.data.slice(0),
      });
    });
  }

  // Don't understand why below does not work..
  // handlePaginationChange(activePage) {
  //   this.setState({
  //     activePage,
  //   });
  // }

  handlePaginationChange = (e, { activePage }) => {
    this.setState({ activePage });
    axios.get(`/app/employees/pagination/${activePage}`).then((res) => {
      this.setState({
        employees: res.data.slice(0),
      });
    });
  };

  render() {
    const { employees, activePage, totalPage } = this.state;
    const empContent =
      employees && employees.length ? (
        employees.map((employee) => {
          return <EmployeeItem key={employee.id} employee={employee} />;
        })
      ) : (
        <Loader active inline="centered" />
      );

    return (
      <div className="Employees">
        <Header as="h1"></Header>
        <Header as="h1"></Header>
        <Icon name="chess rock" size="large"></Icon>
        <Header as="h2" textAlign="center" color="grey">
          All Employees Info
        </Header>
        {empContent}
        <Header as="h1"></Header>
        <Pagination
          activePage={activePage}
          totalPages={totalPage}
          onPageChange={this.handlePaginationChange.bind(this)}
          firstItem={null}
          lastItem={null}
          prevItem={null}
          nextItem={null}
        />
      </div>
    );
  }
}

export default GetAllEmployees;
