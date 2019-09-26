import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import CompanyCard from "./CompanyCard"
import SeekerCard from "./SeekerCard"
import { ThemeProvider, Flex } from "@chakra-ui/core"
import MatchButton from "./MatchButton"
import DenyButton from "./DenyButton"
import { axiosWithAuth } from "../../utils/axiosWithAuth"

import { companies, seekers } from "../../data"

const HomePage = props => {
  const [items, setItems] = useState([])

  useEffect(() => {
    let dataString = ""
    props.user.seeker ? (dataString = "seekers") : (dataString = "companies")

    axiosWithAuth()
      .get(`/${dataString}`)
      .then(res => {
        setItems(res.data)
      })
      .catch(error => console.log(error))
  }, [])

  const buttonHandler = e => {
    //move item from front of items to the end
    console.log(items)
    console.log(e.target)
    const firstItem = items[0]
    setItems([...items.slice(1), firstItem])
  }

  return (
    <div className="HomePage">
      <button onClick={buttonHandler}>test</button>
      {props.isLoading && <p>Loading...</p>}
      {!props.user.seeker ? (
        <ThemeProvider>
          <Flex direction="column" justify="center" paddingBottom="20%">
            <Flex alignItems="center" justify="center">
              <CompanyCard data={companies[0]} />
            </Flex>
            <Flex
              alignItems="center"
              justify="space-evenly"
              margin="3%"
              padding="2%"
            >
              <MatchButton buttonHandler={buttonHandler}></MatchButton>
              <DenyButton buttonHandler={buttonHandler}></DenyButton>
            </Flex>
          </Flex>
        </ThemeProvider>
      ) : (
        <ThemeProvider>
          <Flex direction="column" justify="center" paddingBottom="20%">
            <Flex alignItems="center" justify="center">
              <SeekerCard data={seekers[0]} />
            </Flex>
            <Flex
              alignItems="center"
              justify="space-evenly"
              margin="3%"
              padding="2%"
            >
              <MatchButton buttonHandler={buttonHandler}></MatchButton>
              <DenyButton buttonHandler={buttonHandler}></DenyButton>
            </Flex>
          </Flex>
        </ThemeProvider>
      )}
    </div>
  ) //end return
} //end function

//connect with redux to get state, this will determine if the user is a seeker of company
const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    user: state.user
  }
}

export default connect(
  mapStateToProps,
  {}
)(HomePage)
