import React from "react";
import { BeatLoader } from "react-spinners";
import { StyledStatusInfo } from "../style/StatusInfo.style";

const Loading = () => {
  return (
    <StyledStatusInfo>
      <div>Loading</div>
      <BeatLoader color="black" />
    </StyledStatusInfo>
  );
};

export default Loading;
