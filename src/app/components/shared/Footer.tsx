import React from "react";
import styled from "react-emotion";

import OwnerContext, {
  OwnerContextValueInterface
} from "app/context/OwnerContext";

import { StyledLink } from "app/styled-components";
import GithubLogo from "public/github-brands.svg";
import LinkedinLogo from "public/linkedin-in-brands.svg";
import TwitterLogo from "public/twitter-brands.svg";

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    padding: 0 48px;
  }
`;

const Footer: React.SFC<{
  OwnerContext: OwnerContextValueInterface;
}> = props => (
  <StyledFooter>
    <StyledLink href={props.OwnerContext.socials.github}>
      <GithubLogo width="25px" height="25px" />
    </StyledLink>
    <StyledLink href={props.OwnerContext.socials.linkedin}>
      <LinkedinLogo width="25px" height="25px" />
    </StyledLink>
    <StyledLink href={props.OwnerContext.socials.twitter}>
      <TwitterLogo width="25px" height="25px" />
    </StyledLink>
  </StyledFooter>
);

export default OwnerContext.connect(Footer);
