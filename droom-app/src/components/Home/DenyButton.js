import React from "react"
import { IconButton, ThemeProvider } from "@chakra-ui/core"

const MatchButton = () => {
  return (
    <ThemeProvider>
      <IconButton icon="close" />
    </ThemeProvider>
  )
}

export default MatchButton
