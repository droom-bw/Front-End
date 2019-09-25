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
  console.log("props", props)
  return (
    <ThemeProvider>
      <Box
        margin="2% auto"
        width="50%"
        border="2px"
        borderRadius="md"
        borderColor="gray.200"
        padding="3%"
      >
        <Flex direction="column" wrap="wrap" align="center">
          <Heading size="lg" whiteSpace="pre-line" wordBreak="break-word">
            Test
          </Heading>
          <Text whiteSpace="pre-line" wordBreak="break-word">
            Test
          </Text>
        </Flex>
        <Accordion defaultIndex={[0]} allowMultiple>
          <AccordionItem>
            <AccordionHeader justifyContent="center">
              <Box>Applicant</Box>
              <AccordionIcon />
            </AccordionHeader>
            <AccordionPanel>Test</AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader justifyContent="center">
              <Box>Location</Box>
              <AccordionIcon />
            </AccordionHeader>
            <AccordionPanel whiteSpace="pre-line" wordBreak="break-word">
              Test
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader justifyContent="center">
              <Box>Email</Box>
              <AccordionIcon />
            </AccordionHeader>
            <AccordionPanel>
              <Text whiteSpace="pre-line" wordBreak="break-word">
                Test
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
                Test
              </Text>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </ThemeProvider>
  )
}
