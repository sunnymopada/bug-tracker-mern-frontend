import styled from 'styled-components'

import { Navbar } from 'react-bootstrap'

export const NavBarContainer = styled(Navbar)`
   background: white;
   box-shadow: 0 2px 2px 0 rgba(31, 45, 61, 0.15);
`
export const NavBarBrand = styled(Navbar.Brand)`
   padding-bottom: 0px;
   padding-top: 0px;
   display: flex;
   align-items: center;
`
export const NavLogo = styled.img`
   margin-right: 5px;
`
