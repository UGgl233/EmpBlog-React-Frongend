import { GET_EMPLOYEES, DELETE_EMPLOYEES } from "../actions/types";

const initialState = {
  all_employees: [],
  employee: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_EMPLOYEES:
      return {
        ...state,
        all_employees: action.payload,
      };
    case DELETE_EMPLOYEES:
      return {
        ...state,
      };
    default:
      return state;
  }
}
