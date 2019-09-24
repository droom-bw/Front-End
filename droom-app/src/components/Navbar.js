
import React from "react";
import { Tag, TagIcon,Icon, TagLabel,Stack ,TagCloseButton } from "@chakra-ui/core";

import {Link as RouterLink} from "react-router-dom"
import {Link} from "@chakra-ui/core"
import styled from "styled-components";


export default function NavBar(){

const ContainNav = styled.div`

display:flex;
flex-direction:row;
justify-content:flex-end;
margin-right: 50px;
`

return (
<ContainNav>
<Stack spacing={4} isInline>
  <Tag variantColor="cyan">
    <TagLabel><Link as={ RouterLink } to="/"> Home </Link></TagLabel>
    <TagIcon icon="check" size="12px" />
  </Tag>

  {/* You can also use custom svg icons */}
  <Tag variantColor="teal">
  <TagLabel><Link as={ RouterLink } to="/LoginForm"> Log In </Link></TagLabel>
    <TagIcon icon="triangle-down" />
  </Tag>

  <Tag variantColor="teal">
  <TagLabel><Link as={ RouterLink } to="/SigninForm"> Sign in </Link></TagLabel>
    <TagIcon icon="add" />
  </Tag>
</Stack>
</ContainNav>
)
}

// import {Link as RouterLink} from "react-router-dom"
// import {Link} from "@chakra-ui/core"
// // then use it like this
// <Link as={ RouterLink } to="/home"> Home </Link>