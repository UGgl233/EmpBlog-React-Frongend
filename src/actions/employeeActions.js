import axios from "axios";
import { GET_EMPLOYEES, POST_EMPLOYEES, DELETE_EMPLOYEES, PUT_EMPLOYEES } from "./types";

// Unused !
export const fetchAllEmployees = () => (dispatch) => {
  const res = axios.get("/app/employees");
  dispatch({
    type: GET_EMPLOYEES,
    payload: res.data,
  });
};

export const createNewEmployee = (newEmployee, history) => async (dispatch) => {
  await axios.post("/app/employee", newEmployee);
  history.push("/");
  dispatch({
    type: POST_EMPLOYEES,
    payload: {},
  });
};

export const updateEmployee = (emp_id, newEmployee, history) => async (dispatch) => {
  await axios.put(`/app/employee/${emp_id}`, newEmployee);
  history.push("/");
  dispatch({
    type: PUT_EMPLOYEES,
    payload: emp_id,
  });
}

export const deleteEmployee = (emp_id) => async (dispatch) => {
  // if (window.confirm(`You are deleting employee info ${emp_id}, this action cannot be undone`))
  await axios.delete(`/app/employee/${emp_id}`);
  dispatch({
    type: DELETE_EMPLOYEES,
    payload: emp_id,
  });
};
