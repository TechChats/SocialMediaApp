import { Box } from "@mui/material";
import { styled } from "@mui/system";


//flex the things
//Use Box when you want to group several items and control how they look on the page. 
const FlexBetween = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export default FlexBetween;