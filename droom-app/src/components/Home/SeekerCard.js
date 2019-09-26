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
import { logValidationWarning } from "jest-validate/build/utils";

export default function SeekerCard(props) {
  console.log(`SeekerData: `, props);
  
  return (
    <ThemeProvider>
    {props.data !== undefined ? (
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
            {props.data.name}
          </Heading>
          <Text whiteSpace="pre-line" wordBreak="break-word">
            {props.data.email}
          </Text>
        </Flex>
        <Accordion defaultIndex={[0]} allowMultiple>
          <AccordionItem>
            <AccordionHeader justifyContent="center">
              <Box>Applicant</Box>
              <AccordionIcon />
            </AccordionHeader>
            <AccordionPanel>{props.data.name}</AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader justifyContent="center">
              <Box>Location</Box>
              <AccordionIcon />
            </AccordionHeader>
            <AccordionPanel whiteSpace="pre-line" wordBreak="break-word">
              {props.data.location}
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader justifyContent="center">
              <Box>Email</Box>
              <AccordionIcon />
            </AccordionHeader>
            <AccordionPanel>
              <Text whiteSpace="pre-line" wordBreak="break-word">
                {props.data.email}
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader justifyContent="center">
              <Box>Resume</Box>
              <AccordionIcon />
            </AccordionHeader>
            <AccordionPanel>
              <Text whiteSpace="pre-line" wordBreak="break-word">
                {props.data.resume}
              </Text>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    ) : (<p>Loading...</p>)} 
    </ThemeProvider>
    
  )
}
