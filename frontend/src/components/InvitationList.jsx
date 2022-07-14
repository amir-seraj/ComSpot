import React from "react";
import { styled } from "@mui/system";
import { InvitationListItem } from ".";
const DUMMY_INVITATIONS = [
  {
    _id: "1",
    senderId: {
      username: "Mark",
      email: "dummy@ad.com",
    },
  },
  {
    _id: "2",
    senderId: {
      username: "John",
      email: "John@ad.com",
    },
  },
];
const MainContainer = styled("div")({
  width: "100%",
  height: "22%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  overflow: "auto",
});
function InvitationList() {
  return (
    <MainContainer>
      {DUMMY_INVITATIONS.map((inv) => (
        <InvitationListItem
          key={inv._id}
          id={inv._id}
          username={inv.senderId.username}
          email={inv.senderId.email}
        />
      ))}
    </MainContainer>
  );
}

export default InvitationList;
