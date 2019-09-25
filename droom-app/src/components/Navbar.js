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
    margin: 0 95px 0 95px;
    /* align-items: flex-end; */
    
    
    
  
  `;
  const ImgCont = styled.div`
  `
  //conditional, what you are to display correct navbar, which we'll get from the state.
  return (
    <ContainNav>
      {/* <Image
        size="100px"
        objectFit="cover"
        src="https://trello-attachments.s3.amazonaws.com/5d84f15f96af3e57f163ac23/5d8912e25b9b4611ab2e7d9f/96d61df1c18110078a6578764af62d3c/DroomLogo.png"
        alt="Segun Adebayo"
      />

      <Stack spacing={4} isInline>
        <Tag variantColor="cyan">
          <TagLabel>
            <Link as={RouterLink} to="/home">
              Home
            </Link>
          </TagLabel>
          <TagIcon icon="check" size="12px" />
        </Tag>

        {/* You can also use custom svg icons */}
      {/* <Tag variantColor="teal">
          <TagLabel>
            <Link as={RouterLink} to="/login">
              Jobs
            </Link>
          </TagLabel>
          <TagIcon icon="triangle-down" />
        </Tag>

        <Tag variantColor="red">
          <TagLabel>
            <Link as={RouterLink} to="/profile">
              Profile
            </Link>
          </TagLabel>
          <TagIcon icon="view" />
        </Tag>

        <Tag variantColor="purple">
          <TagLabel>
            <a href="/login">Log Out</a>
          </TagLabel>
          <TagIcon icon="triangle-up" />
        </Tag>
      </Stack> */}
<Image
        size="100px"
        objectFit="cover"
        src="https://trello-attachments.s3.amazonaws.com/5d84f15f96af3e57f163ac23/5d8912e25b9b4611ab2e7d9f/96d61df1c18110078a6578764af62d3c/DroomLogo.png"
        alt="Segun Adebayo"
      />
      <Menu>
        
        <MenuButton as={Button} rightIcon="chevron-down">
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

// import {Link as RouterLink} from "react-router-dom"
// import {Link} from "@chakra-ui/core"
// // then use it like this
// <Link as={ RouterLink } to="/home"> Home </Link>
