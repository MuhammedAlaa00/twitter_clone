import React from "react";
import styled from "styled-components";
import { Twitter } from "@styled-icons/boxicons-logos/Twitter";
function TwitterIcon({ color, width }) {
  const TwitterIc = styled(Twitter)``;
  return <TwitterIc color={color} width={width} />;
}

export { TwitterIcon };
