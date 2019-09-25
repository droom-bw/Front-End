import React from "react"
import { IconButton, ThemeProvider } from "@chakra-ui/core"

const DenyButton = props => {
  return (
    <IconButton onClick={props.buttonHandler} value="close" icon="close" />
  )
}

export default DenyButton
