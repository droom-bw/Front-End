import React from "react"
import { IconButton, ThemeProvider } from "@chakra-ui/core"

const DenyButton = props => {
  return (
    <IconButton onClick={() => props.buttonHandler("deny")} icon="close" />
  )
}

export default DenyButton
