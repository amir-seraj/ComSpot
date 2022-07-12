import alertActions from "../actions/alertActions";

// import
const initialState = {
  showAlertMsg: false,
  alertMsg: null,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case alertActions.OPEN_ALERT_MESSAGE:
      return {
        ...state,
        showAlertMsg: true,
        alertMsg: action.content,
      };

    case alertActions.CLOSE_ALERT_MESSAGE:
      return {
        ...state,
        showAlertMsg: false,
        alertMsg: null,
      };
    default:
      return state;
  }
};
export default reducer;
