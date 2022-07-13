import React from "react";
import { styled } from "@mui/system";
import { AppBar, FriendsSideBar, Messenger, SideBar } from "../../components";

const Wrapper = styled("div")({
  width: "100%",
  height: "100vh",
  display: "flex",
});
function Dashboard() {
  return (
    <Wrapper>
      <SideBar />
      <FriendsSideBar />
      <Messenger />
      <AppBar />
    </Wrapper>
  );
}

export default Dashboard;
