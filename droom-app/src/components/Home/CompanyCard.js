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

const CompanyCard = ({company}) => {
  const { name, email, location } = company;
  const { title, salary, description} = company.jobs
  console.log("Company Card", company);
  return (
    <ThemeProvider>
      {company ? (
      <Box
        margin="2% auto"
        width="70%"
        border="2px"
        borderRadius="md"
        borderColor="gray.200"
        padding="3%"
        backgroundColor="gray.200"
      >
        <Flex direction="column" wrap="wrap" align="center">
          <Heading size="lg" whiteSpace="pre-line" wordBreak="break-word">
            {name}
          </Heading>
          <Text whiteSpace="pre-line" wordBreak="break-word">
            {description}
          </Text>
        </Flex>
        <Accordion defaultIndex={[0]} allowMultiple>
          <AccordionItem>
            <AccordionHeader justifyContent="center">
              <Box>Job Title</Box>
              <AccordionIcon />
            </AccordionHeader>
            <AccordionPanel>{title}</AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader justifyContent="center">
              <Box>Salary</Box>
              <AccordionIcon />
            </AccordionHeader>
            <AccordionPanel whiteSpace="pre-line" wordBreak="break-word">
              ${salary}
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader justifyContent="center">
              <Box>Job Description</Box>
              <AccordionIcon />
            </AccordionHeader>
            <AccordionPanel>
              <Text whiteSpace="pre-line" wordBreak="break-word">
                {description}
              </Text>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
      ) : (<p>Loading...</p>)}
    </ThemeProvider>
  )
}
export default CompanyCard
