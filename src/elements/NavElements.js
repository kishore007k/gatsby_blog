import styled from "styled-components"

export const NavWrapper = styled.nav`
  grid-column: 2 / span12;
  grid-row: 1 / 2;
  display: flex;
  align-items: center;

  & img {
    height: 60px;
  }

  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
  }
`
