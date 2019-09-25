import React from "react";
import {
  Tag,
  TagIcon,
  Icon,
  TagLabel,
  Stack,
  TagCloseButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
  MenuOptionGroup,
  MenuItemOption,
  Button
} from "@chakra-ui/core";

import { Link as RouterLink } from "react-router-dom";
import { Link } from "@chakra-ui/core";
import styled from "styled-components";
import { Image } from "@chakra-ui/core";

export default function NavBar() {
  const ContainNav = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    /* margin: 0 auto; */
    padding: 0 0 40px;
  
  `;
  const ImgCont = styled.div`

    padding-top: 11px;

    

  `
 /* conditional, what you are to display correct navbar, which we'll get from the state.  */
  return (
    <ContainNav>
      

      <ImgCont>
<Image
        
        objectFit="cover"
        src="https://trello-attachments.s3.amazonaws.com/5d84f15f96af3e57f163ac23/5d8912e25b9b4611ab2e7d9f/96d61df1c18110078a6578764af62d3c/DroomLogo.png"
        alt="Droom Logo"
      />
      </ImgCont>
      <Menu size="100px">
        
        <MenuButton  as={Button} rightIcon="chevron-down">
          <Icon name="settings" />
          &ensp;Menu
        </MenuButton>

        <MenuList>
          <Link as={RouterLink} to="/home">
            <MenuItem>
              <Icon name="check" />
              &ensp;Home
            </MenuItem>
          </Link>
          <Link as={RouterLink} to="/profile">
            <MenuItem>
              <Icon name="view" />
              &ensp;Profile
            </MenuItem>
          </Link>
          <Link as={RouterLink} to="/matches">
            <MenuItem>
              <Icon name="bell" />
              &ensp;Matches
            </MenuItem>
          </Link>
          <Link as={RouterLink} to="/login">
            <MenuItem>
              <Icon name="triangle-down" />
              &ensp;Log In
            </MenuItem>
          </Link>
        </MenuList>
      </Menu>
    </ContainNav>
  );
}

 /* import {Link as RouterLink} from "react-router-dom"
import {Link} from "@chakra-ui/core"
 then use it like this
 <Link as={ RouterLink } to="/home"> Home </Link> */
