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
    import { Tag, TagIcon, TagLabel, TagCloseButton } from "@chakra-ui/core"


 function StackEx(props) {


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
                {props.name}
              </Heading>
              <Text whiteSpace="pre-line" wordBreak="break-word">
                {props.description}
              </Text>
            </Flex>
            <Accordion defaultIndex={[0]} allowMultiple>
              <AccordionItem>
                <AccordionHeader justifyContent="center">
                  <Box>Job Title</Box>
                  <AccordionIcon />
                </AccordionHeader>
                <AccordionPanel>{props.title}</AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionHeader justifyContent="center">
                  <Box>Salary</Box>
                  <AccordionIcon />
                </AccordionHeader>
                <AccordionPanel whiteSpace="pre-line" wordBreak="break-word">
                  ${props.salary}
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionHeader justifyContent="center">
                  <Box>Job Description</Box>
                  <AccordionIcon />
                </AccordionHeader>
                <AccordionPanel>
                  <Text whiteSpace="pre-line" wordBreak="break-word">
                    {props.description}
                  </Text>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
        </ThemeProvider>
      )
    }
            
    
  

export default StackEx;
