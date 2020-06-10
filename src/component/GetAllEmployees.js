import React, { Component } from "react";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";
// import {fetchAllEmployees} from "../actions/employeeActions";
import EmployeeItem from "./EmployeeItem";
import axios from "axios";
import "../App.css";
import "semantic-ui-css/semantic.min.css";
import { Loader, Icon, Header } from "semantic-ui-react";

class GetAllEmployees extends Component {
  constructor() {
    super();
    this.state = {
      employees: [],
    };
  }

  componentDidMount() {
    document.body.style.backgroundColor = "#333333";
    axios.get("/app/employees").then((res) => {
      console.log(res);
      this.setState({
        employees: res.data.slice(0),
      });
    });
  }

  render() {
    // this.setState({employees: axios.get("/app/employees").data});
    // if (this.props.all_employees) {
    // const { all_employees } = this.props.all_employees;

    const { employees } = this.state;
    const empContent =
      employees && employees.length ? (
        employees.map((employee) => {
          return <EmployeeItem key={employee.id} employee={employee} />;
        })
      ) : (
        <Loader active inline="centered" />
      );

    // console.log(empContent);

    // const empAlgorithm = all_employees => {
    //   const emps = all_employees.map(employeeE => (
    //     <EmployeeItem key={employeeE.id} employeeE={employeeE} />
    //   ));

    //   return (
    //     <React.Fragment>
    //       <div className="container">
    //         {
    //           emps
    //         }
    //       </div>
    //     </React.Fragment>
    //   );
    // };

    // empContent = empAlgorithm(all_employees);

    return (
      <div className="Employees">
        <Header as="h1"></Header>
        <Header as="h1"></Header>
        <Icon name="chess rock" size="large"></Icon>
        <Header as="h2" textAlign="center" color="grey">
          All Employees Info
        </Header>
        {empContent}
      </div>
    );
  }
  // }
}

// GetAllEmployees.propTypes = {
//   fetchAllEmployees: PropTypes.func.isRequired,
//   all_employees: PropTypes.object.isRequired
// }

// const mapStateToProps = state => ({
//   all_employees: state.all_employees
// });

// export default connect(
//   mapStateToProps,
//   {fetchAllEmployees}
// )(GetAllEmployees);
export default GetAllEmployees;
