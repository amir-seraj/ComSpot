import React from "react";
import { styled } from "@mui/system";

const MainContainer = styled("div")({
  width: "100%",
  height: "22%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  overflow: "auto",
});
function PendingList() {
  return <MainContainer>PendingList</MainContainer>;
}

export default PendingList;
