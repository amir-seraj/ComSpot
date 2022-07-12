const alertActions = {
  OPEN_ALERT_MESSAGE: "ALERT.OPEN_ALERT_MESSAGE",
  CLOSE_ALERT_MESSAGE: "ALERT.CLOSE_ALERT_MESSAGE",
};

export const getActions = (dispatch) => {
  return {
    openAlertMsg: (content) => dispatch(openAlertMsg(content)),
    closeAlertMsg: () => dispatch(closeAlertMsg()),
  };
};

export const openAlertMsg = (content) => {
  return {
    type: alertActions.OPEN_ALERT_MESSAGE,
    content,
  };
};
export const closeAlertMsg = (content) => {
  return {
    type: alertActions.CLOSE_ALERT_MESSAGE,
    content,
  };
};
export default alertActions;
