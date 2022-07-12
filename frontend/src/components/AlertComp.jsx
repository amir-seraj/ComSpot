import React from "react";
import { Snackbar, Alert } from "@mui/material";
import { connect } from "react-redux";
import { getActions } from "../store/actions/alertActions";

function AlertComp({ showAlertMsg, closeAlertMsg, alertMsg }) {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      open={showAlertMsg}
      onClose={closeAlertMsg}
      // autoHideDuration={6000}
    >
      <Alert severity="info">{alertMsg}</Alert>
    </Snackbar>
  );
}
const mapStoreStateToProps = (state) => {
  return { ...state.alert };
};
const mapActionsToProps = (dispatch) => {
  return { ...getActions(dispatch) };
};
export default connect(mapStoreStateToProps, mapActionsToProps)(AlertComp);
