import React, {useState, useEffect} from "react"
import CompanyCard from "./CompanyCard"
import { ThemeProvider, Flex } from "@chakra-ui/core"
import MatchButton from "./MatchButton"
import DenyButton from "./DenyButton"

import { companies } from "../../data"

export default function HomePage() {

 const [card, setCard] = useState(''); 


  

  return (
    <div className="HomePage">

    <Flex direction="column" justify="center" paddingTop="20%">
        <Flex  alignItems="center" justify="center">
          <ThemeProvider>
            <CompanyCard data={companies[0]} />
          </ThemeProvider>
        </Flex>
        <Flex alignItems="center" justify="space-evenly" margin="3%" padding="2%">
          <MatchButton />
          <DenyButton />
        </Flex>
    </Flex>
    </div>
  )
}



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