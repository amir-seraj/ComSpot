import { Box, IconButton, Toolbar, Typography } from "@mui/material";
import { Check, Clear } from "@mui/icons-material";
import React, { useState } from "react";
import { Avatar } from "./";

function InvitationListItem({
  id,
  username,
  email,
  acceptInvitation = () => {},
  rejectInvitation = () => {},
}) {
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const handleAcceptInvitation = () => {
    acceptInvitation({ id: id });
    setButtonDisabled(true);
  };
  const handleRejectInvitation = () => {
    rejectInvitation({ id: id });
    setButtonDisabled(true);
  };
  return (
    <Toolbar
      title={email}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "42px",
          marginTop: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Avatar username={username} />
        <Typography
          sx={{
            fontWeight: 700,
            color: "#8e9297",
            flexGrow: 1,
          }}
          variant="subtitle1"
        >
          {username}
        </Typography>
        <Box>
          <IconButton
            style={{ color: "white" }}
            disabled={buttonDisabled}
            onClick={handleAcceptInvitation}
          >
            <Check />
          </IconButton>
          <IconButton
            style={{ color: "white" }}
            disabled={buttonDisabled}
            onClick={handleRejectInvitation}
          >
            <Clear />
          </IconButton>
        </Box>
      </Box>
    </Toolbar>
  );
}

export default InvitationListItem;
