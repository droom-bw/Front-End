import React from "react"
import connect from "react-redux";
import CompanyCard from "./CompanyCard"
import SeekerCard from "./SeekerCard"
import { ThemeProvider, Flex } from "@chakra-ui/core"
import MatchButton from "./MatchButton"
import DenyButton from "./DenyButton"

import { companies, seekers } from "../../data"

export default function HomePage() {
  const fakeState = {isSeeker: false};
  console.log(companies);
  console.log(seekers);
  
  return(
      
    <div className="HomePage">
        {fakeState.isSeeker ?
          ( 
            <ThemeProvider>
            <Flex direction="column" justify="center" paddingBottom="20%">
                <Flex  alignItems="center" justify="center">
                  <CompanyCard data={companies[0]} />
                </Flex>
                <Flex alignItems="center" justify="space-evenly" margin="3%" padding="2%">
                  <MatchButton />
                  <DenyButton />
                </Flex>
            </Flex>
            </ThemeProvider>
          ) : (
            <ThemeProvider>
            <Flex direction="column" justify="center" paddingBottom="20%">
                  <Flex  alignItems="center" justify="center">
                      
                      <SeekerCard data={seekers[0]} />      
                  </Flex>
                  <Flex alignItems="center" justify="space-evenly" margin="3%" padding="2%">
                    <MatchButton />
                    <DenyButton />
                  </Flex>
              </Flex>
              </ThemeProvider>
          )}
         </div> 
   ) //end return 

}//end function




//connect with redux to get state, this will determine if the user is a seeker of company
const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    isLoggedIn: state.isLoggedIn
  }
}

export default connect(mapStateToProps, {login})(LoginComponent)






 // )
  // } else if (fakeState.isCompany) {
  //   return (
  //     <ThemeProvider>
  //       <div className="HomePage">
        // <Flex direction="column" justify="center" paddingTop="20%">
        //     <Flex  alignItems="center" justify="center">
        //         <CompanyCard data={companies[0]} />      
        //     </Flex>
        //     <Flex alignItems="center" justify="space-evenly" margin="3%" padding="2%">
        //       <MatchButton />
        //       <DenyButton />
        //     </Flex>
        // </Flex>
  //       </div>
  //     </ThemeProvider>
  //   )
  // }
  //Based on state, render map either seekers or companies etc
  




// return (
//   <div className="HomePage">

//   <Flex direction="column" justify="center" paddingTop="20%">
//       <Flex  alignItems="center" justify="center">
//         <ThemeProvider>
//           <CompanyCard data={companies[0]} />
//         </ThemeProvider>
//       </Flex>
//       <Flex alignItems="center" justify="space-evenly" margin="3%" padding="2%">
//         <MatchButton />
//         <DenyButton />
//       </Flex>
//   </Flex>
//   </div>
// )
// }



//v2

// export default function HomePage() {
//   return (
//     <div className="HomePage">

//     <Flex>
//         <Flex alignItems="center" justify="center" w="25%">
//           <DenyButton />
//         </Flex>
//         <ThemeProvider>
//           <CompanyCard data={companies[0]} />
//         </ThemeProvider>
//         <Flex alignItems="center" justify="center" w="25%">
//           <MatchButton />
//         </Flex>
//       </Flex>
//     </div>
//   )
// }













