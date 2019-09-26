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

export default function SeekerCard({data}) {
  console.log(`SeekerData: `, data);
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
            {data.name}
          </Heading>
          <Text whiteSpace="pre-line" wordBreak="break-word">
            {data.email}
          </Text>
        </Flex>
        <Accordion defaultIndex={[0]} allowMultiple>
          <AccordionItem>
            <AccordionHeader justifyContent="center">
              <Box>Applicant</Box>
              <AccordionIcon />
            </AccordionHeader>
            <AccordionPanel>{data.name}</AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader justifyContent="center">
              <Box>Location</Box>
              <AccordionIcon />
            </AccordionHeader>
            <AccordionPanel whiteSpace="pre-line" wordBreak="break-word">
              {data.location}
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader justifyContent="center">
              <Box>Email</Box>
              <AccordionIcon />
            </AccordionHeader>
            <AccordionPanel>
              <Text whiteSpace="pre-line" wordBreak="break-word">
                {data.email}
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
                {data.resume}
              </Text>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </ThemeProvider>
  )
}
