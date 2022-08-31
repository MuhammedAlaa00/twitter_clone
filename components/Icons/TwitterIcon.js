import { Twitter } from "@styled-icons/boxicons-logos/Twitter";
import styled from "styled-components";
import React from "react";

function TwitterIcon({ color, width }) {
  const TwitterIc = styled(Twitter)``;
  return <TwitterIc color={color} width={width} />;
}

export { TwitterIcon };
