import React, { FC } from 'react';
import styled from 'styled-components';

const StyledContainer = styled.main`
  display: flex;
  height: 100%;
`;

export const Container: FC = ({ children, ...props }) => {
  return <StyledContainer>{children}</StyledContainer>;
};
