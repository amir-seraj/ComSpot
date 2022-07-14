import React, { useState } from "react";
import { styled } from "@mui/system";
import { Typography } from "@mui/material";
import {
  AddFriendDialog,
  FriendsList,
  InvitationList,
  CustomPrimaryButton,
} from ".";

const MainContainer = styled("div")({
  width: "224px",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#2f3136",
});
const additionalStyles = styled("button")({
  marginTop: "10px",
  marginLeft: "5px",
  width: "80%",
  height: "30px",
  backgroundColor: "#3ba55d",
});

function FriendsSideBar() {
  const [showDialog, setShowDialog] = useState(false);
  const handleShowDialog = () => {
    setShowDialog(!showDialog);
  };
  return (
    <MainContainer>
      <CustomPrimaryButton
        additionalStyles={{ additionalStyles }}
        label="Add Friend"
        onClick={handleShowDialog}
      />
      <AddFriendDialog
        showDialogProp={showDialog}
        setShowDialogProp={setShowDialog}
      />
      <Typography
        sx={{
          textTransform: "uppercase",
          color: "#8e9297",
          fontSize: "14px",
          marginTop: "10px",
        }}
      >
        Private Messages
      </Typography>
      <FriendsList />
      <Typography
        sx={{
          textTransform: "uppercase",
          color: "#8e9297",
          fontSize: "14px",
          marginTop: "10px",
        }}
      >
        Invitations
      </Typography>
      <InvitationList />
    </MainContainer>
  );
}

export default FriendsSideBar;
