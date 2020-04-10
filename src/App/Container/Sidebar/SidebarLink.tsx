import styled from 'styled-components';
import React, { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';

const StyledSidebarLink = styled.div<any>`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-top: var(--base-padding);
`;

const IconWrapper = styled.span`
  padding-right: var(--base-padding);
  line-height: 0;
`;

type Props = {
  icon: JSX.Element;
  children: any;
  onClick?: Function;
  to?: LinkProps['to'];
};

export const SidebarLink: FC<Props> = ({ icon, children, onClick, to }) => (
  <StyledSidebarLink onClick={onClick}>
    <IconWrapper>{icon}</IconWrapper>
    {to ? <Link to={to}>{children}</Link> : children}
  </StyledSidebarLink>
);
