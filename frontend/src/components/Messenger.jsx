import React from "react";
import { styled } from "@mui/system";

const MainContainer = styled("div")({
  flexGrow: 1,
  display: "flex",
  backgroundColor: "#30363f",
  marginTop: "48px",
});
function Messenger() {
  return <MainContainer>Messenger</MainContainer>;
}

export default Messenger;
