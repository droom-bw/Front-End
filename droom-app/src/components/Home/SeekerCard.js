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
<<<<<<< HEAD
    console.log("props", props);
    return (
        <ThemeProvider>
        <Box 
=======
  console.log("props", props)
  return (
    <ThemeProvider>
      <Box
>>>>>>> b2142eb54d6548b40f9ea91c62f0278033b10d22
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
<<<<<<< HEAD
    </Box>
</ThemeProvider>
  );
};

{/* <div>
<h2>Applicant: {props.item.name}</h2>
<p>Location: {}</p>
<p>Email: {}</p>
<p>Resume: {}</p>
</div>
); */}
=======
      </Box>
    </ThemeProvider>
  )
}
>>>>>>> b2142eb54d6548b40f9ea91c62f0278033b10d22
