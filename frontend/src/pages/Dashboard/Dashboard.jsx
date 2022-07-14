import React, { useEffect } from "react";
import { styled } from "@mui/system";
import { AppBar, FriendsSideBar, Messenger, SideBar } from "../../components";
import { logout } from "../../utils/auth";
import { connect } from "react-redux";
import { getActions } from "../../store/actions/authActions";
import { connectWithSocketServer } from "../../RTC/socketConnection";
const Wrapper = styled("div")({
  width: "100%",
  height: "100vh",
  display: "flex",
});
function Dashboard({ setUserDetails }) {
  useEffect(() => {
    const userDetails = localStorage.getItem("user");
    if (!userDetails) {
      logout();
    } else {
      setUserDetails = JSON.parse(userDetails);
      connectWithSocketServer();
    }
  }, []);
  return (
    <Wrapper>
      <SideBar />
      <FriendsSideBar />
      <Messenger />
      <AppBar />
    </Wrapper>
  );
}
const mapActionsToProps = (dispatch) => {
  return { ...getActions(dispatch) };
};
export default connect(null, mapActionsToProps)(Dashboard);
