import * as actionTypes from "../actions/actionTypes";

const initialState = {
  data : [
    { month: "Jan", categories: [] },
    {
      month: "Feb",
      categories: [{ id: 5, title: "NAD", status: 2, date: "Feb" }],
    },
    { month: "Mar", categories: [] },
    {
      month: "Apr",
      categories: [
        { id: 6, title: "Hormone replacement therapy", status: 3, date: "Apr" },
      ],
    },
    { month: "May", categories: [] },
    {
      month: "Jun",
      categories: [
        { id: 1, title: "Hormone replacement therapy", status: 1, date: "Jun" },
        { id: 2, title: "Ozone therapy", status: 1, date: "Jun" },
        { id: 3, title: "NAD", status: 1, date: "Jun" },
        { id: 4, title: "Hormone replacement therapy", status: 1, date: "Jun" },
      ],
    },
    { month: "Jul", categories: [] },
    { month: "Aug", categories: [] },
    { month: "Sep", categories: [] },
    { month: "Oct", categories: [] },
    { month: "Nov", categories: [] },
    { month: "Dec", categories: [] },
  ],
  hasChanges : 0,
};

const MainReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REMOVE_CATEGORIES:
      return {
        ...state,
        data: action.payload,
      };
      case actionTypes.UPDATE_DATA:
      return {
        ...state,
        hasChanges: action.payload,
      };
    default:
      return state;
  }
};

export default MainReducer;
