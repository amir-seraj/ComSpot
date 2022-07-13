import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import { validateEmail } from "../utils/validators";
import { InputComp, CustomPrimaryButton } from ".";

function AddFriendDialog({
  showDialogProp,
  setShowDialogProp,
  sendFriendInvitation = () => {},
}) {
  const [email, setEmail] = useState("");
  const [isFormValid, SetIsFormValid] = useState(false);
  const handleSendInvitation = () => {};
  const handleShowDialog = () => {
    setShowDialogProp(!showDialogProp);
    setEmail("");
  };
  useEffect(() => {
    SetIsFormValid(validateEmail(email));
  }, [email, SetIsFormValid]);
  return (
    <div>
      <Dialog open={showDialogProp} onClose={handleShowDialog}>
        <DialogTitle>
          <Typography>Invite a Friend</Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Typography>Enter your friend's Email</Typography>
          </DialogContentText>
          <InputComp
            label="Email"
            type="text"
            value={email}
            setValue={setEmail}
            placeholder="Enter Email Address"
          />
        </DialogContent>
        <DialogActions>
          <CustomPrimaryButton
            onClick={handleSendInvitation}
            disabled={!isFormValid}
            label="Send"
            additionalStyles={{
              marginLeft: "15px",
              marginRight: "15px",
              marginBottom: "10px",
            }}
          />
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AddFriendDialog;
