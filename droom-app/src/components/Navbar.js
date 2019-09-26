import React from "react"
import { connect } from "react-redux"
import { logout } from "../store/actions"
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
} from "@chakra-ui/core"

import { Link as RouterLink } from "react-router-dom"
import { Link } from "@chakra-ui/core"
import styled from "styled-components"
import { Image } from "@chakra-ui/core"

function NavBar(props) {
  const ContainNav = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    /* margin: 0 auto; */
    padding: 0 0 40px;
    background: white;
    height: 15vh;
    border-bottom: 1px solid #50514f;
  `

  const ImgCont = styled.div``
  /* conditional, what you are to display correct navbar, which we'll get from the state.  */

  const logout = () => {
    props.logout()
  }

  return (
    <ContainNav>
      <ImgCont>
        <Image
          size="130px"
          objectFit="cover"
          src="https://trello-attachments.s3.amazonaws.com/5d84f15f96af3e57f163ac23/5d8912e25b9b4611ab2e7d9f/96d61df1c18110078a6578764af62d3c/DroomLogo.png"
          alt="Droom Logo"
        />
      </ImgCont>
      <Menu size="100px">
        <MenuButton as={Button} rightIcon="chevron-down" size="sm">
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

          {props.user.type === "company" && <Link as={RouterLink} to="/jobs">
            <MenuItem>
              <Icon name="briefcase" />
              &ensp;Jobs
            </MenuItem>
          </Link>}

          {props.isLoggedIn ? (
            <Link as={RouterLink} onClick={logout} to="/login">
              <MenuItem>
                  <Icon name="triangle-down" />
                  &ensp;Log Out
              </MenuItem>
            </Link>
          ) : (
            <Link as={RouterLink} to="/login">
              <MenuItem>
                <Icon name="triangle-down" />
                &ensp;Log In
              </MenuItem>
            </Link>
          )}
        </MenuList>
      </Menu>
    </ContainNav>
  )
}

/* import {Link as RouterLink} from "react-router-dom"
import {Link} from "@chakra-ui/core"
 then use it like this
 <Link as={ RouterLink } to="/home"> Home </Link> */

const mapStateToProps = state => {
  return {
    isLoggedIn: state.isLoggedIn,
    user: state.user
  }
}

export default connect(
  mapStateToProps,
  { logout }
)(NavBar)
