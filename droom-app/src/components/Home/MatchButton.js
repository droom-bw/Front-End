import React from "react"
import { IconButton, ThemeProvider } from "@chakra-ui/core"
import { connect } from "react-redux"

import { addMatch } from "../../store/actions"

const MatchButton = props => {
  return (
    <IconButton onClick={props.buttonHandler} icon="check" />
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
