import React from "react"
import { IconButton, ThemeProvider } from "@chakra-ui/core"

const DenyButton = () => {
  return (
    <ThemeProvider>
      <IconButton icon="close" />
    </ThemeProvider>
  )
}

export default DenyButton
