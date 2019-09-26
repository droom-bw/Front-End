import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { pageReload } from "../../store/actions"
import CompanyCard from "./CompanyCard"
import SeekerCard from "./SeekerCard"
import { ThemeProvider, Flex } from "@chakra-ui/core"
import MatchButton from "./MatchButton"
import DenyButton from "./DenyButton"
import { axiosWithAuth } from "../../utils/axiosWithAuth"

import { companies, seekers } from "../../data"

const HomePage = props => {
  const [items, setItems] = useState([])

  //DO WE WANT TO SHOW JOBS OR COMPANIES HERE???????????????????
  useEffect(() => {
    let dataString = ""
    props.user.type === "seeker"
      ? (dataString = "companies")
      : (dataString = "seekers/all")

    axiosWithAuth()
      .get(`/${dataString}`)
      .then(res => {
        console.log(dataString);
        console.log("home page props are ", props);
        console.log("home page resonse from get request", res);
        setItems(res.data)
      })
      .catch(error => console.log(error))
    }, [])

  if (!props.user.type) {
    props.pageReload()
  }

  const buttonHandler = (value) => {
    //move item from front of items to the end
    console.log(items)
    console.log(value);
    const firstItem = items[0]
    setItems([...items.slice(1), firstItem])

    //post to matches
  }

  return (
    <div className="HomePage">
      {props.isLoading && <p>Loading...</p>}
      {!props.user.type === "seeker" ? (
        <ThemeProvider>
          <Flex direction="column" justify="center" paddingBottom="20%">
            <Flex alignItems="center" justify="center">
              <CompanyCard data={items[0]} />
            </Flex>
            <Flex
              alignItems="center"
              justify="space-evenly"
              margin="3%"
              padding="2%"
            >
              <MatchButton buttonHandler={buttonHandler} variantColor="green"></MatchButton>
              <DenyButton buttonHandler={buttonHandler} variantColor="red"></DenyButton>
            </Flex>
          </Flex>
        </ThemeProvider>
      ) : (
        <ThemeProvider>
          <Flex direction="column" justify="center" paddingBottom="20%">
            <Flex alignItems="center" justify="center">
              <SeekerCard data={items[0]} />
            </Flex>
            <Flex
              alignItems="center"
              justify="space-evenly"
              margin="3%"
              padding="2%"
            >
              <MatchButton buttonHandler={buttonHandler} variantColor="green"></MatchButton>
              <DenyButton buttonHandler={buttonHandler} variantColor="red"></DenyButton>
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
  { pageReload }
)(HomePage)
