import React from "react"
import { IconButton, ThemeProvider } from "@chakra-ui/core"
import { connect } from "react-redux"

import { addMatch } from "../../store/actions"

const MatchButton = props => {
  const clickHandler = event => {}

  return (
    <ThemeProvider>
      <IconButton onClick={clickHandler} icon="check" />
    </ThemeProvider>
  )
}

const mapStateToProps = state => {
  return {
    state: state
  }
}

export default connect(
  mapStateToProps,
  { addMatch }
)(MatchButton)
