import React from "react"
import {
  Box,
  Flex,
  Heading,
  Text,
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
  AccordionIcon,
  ThemeProvider
} from "@chakra-ui/core"

export default function SeekerCard(props) {
  const {name, email, password, location, resume} = props.seeker
  
  return (
    <ThemeProvider>
    {props.seeker ? (
      <Box
        margin="2% auto"
        width="70%"
        border="2px"
        borderRadius="md"
        borderColor="gray.200"
        padding="3%"
      >
        <Flex direction="column" wrap="wrap" align="center">
          <Heading size="lg" whiteSpace="pre-line" wordBreak="break-word">
            {name}
          </Heading>
          <Text whiteSpace="pre-line" wordBreak="break-word">
            {email}
          </Text>
          <Text whiteSpace="pre-line" wordBreak="break-word">
            {location}
          </Text>
        </Flex>
        <Accordion defaultIndex={[0]} allowMultiple>
          <AccordionItem>
            <AccordionHeader justifyContent="center">
              <Box>Resume</Box>
              <AccordionIcon />
            </AccordionHeader>
            <AccordionPanel>
              <Text whiteSpace="pre-line" wordBreak="break-word">
                {resume}
              </Text>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    ) : (<p>Loading...</p>)} 
    </ThemeProvider>
    
  )
}
