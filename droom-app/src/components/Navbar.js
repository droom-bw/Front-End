import React from "react"
import {
  Tag,
  TagIcon,
  Icon,
  TagLabel,
  Stack,
  TagCloseButton
} from "@chakra-ui/core"

import { Link as RouterLink } from "react-router-dom"
import { Link } from "@chakra-ui/core"
import styled from "styled-components"
import { Image } from "@chakra-ui/core"

export default function NavBar() {
  const ContainNav = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-right: 50px;
    height: 30px;
    justify-content: baseline;
  `

  return (
    <ContainNav>
      <Image
        size="100px"
        objectFit="cover"
        src="https://trello-attachments.s3.amazonaws.com/5d84f15f96af3e57f163ac23/5d8912e25b9b4611ab2e7d9f/96d61df1c18110078a6578764af62d3c/DroomLogo.png"
        alt="Segun Adebayo"
      />

      <Stack spacing={4} isInline>
        <Tag variantColor="cyan">
          <TagLabel>
            <Link as={RouterLink} to="/">
              {" "}
              Home{" "}
            </Link>
          </TagLabel>
          <TagIcon icon="check" size="12px" />
        </Tag>

        {/* You can also use custom svg icons */}
        <Tag variantColor="teal">
          <TagLabel>
            <Link as={RouterLink} to="/login">
              {" "}
              Log In{" "}
            </Link>
          </TagLabel>
          <TagIcon icon="triangle-down" />
        </Tag>

        <Tag variantColor="red">
          <TagLabel>
            <Link as={RouterLink} to="/profile">
              {" "}
              Profile{" "}
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
      </Stack>
    </ContainNav>
  )
}

// import {Link as RouterLink} from "react-router-dom"
// import {Link} from "@chakra-ui/core"
// // then use it like this
// <Link as={ RouterLink } to="/home"> Home </Link>
