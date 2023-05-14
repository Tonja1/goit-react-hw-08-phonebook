import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 300px;
  align-items: center;
`;

export const Title = styled.h2`
  font-weight: 400;
`;

export const StyledLink = styled(NavLink)`
  color: grey;
  text-decoration: none;
  &.active {
    color: black;
  }
`;