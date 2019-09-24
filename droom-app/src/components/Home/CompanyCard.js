import React from 'react'
import { Box, Flex, Heading, Text, Accordion, AccordionItem, AccordionHeader, AccordionPanel, AccordionIcon} from "@chakra-ui/core";
import styled from 'styled-components';


// const Container = styled.div`
//     display:flex;
//     flex-wrap: wrap;
//     justify-content:center;
//     border: 1px solid black;
//     width:30%;
//     margin:0 auto;
//     align-content: center;
//     white-space:pre-line;
// `;

// const StyledH1 = styled.h1`
//     width:100%;
// `;

// const StyleP = styled.p`
//     width:100%;
//     flex-wrap:wrap;
//     word-wrap:break-word;

// `;

// const StyledRow = styled.div`
//     flex-wrap:wrap;
//     width:100%;

// `;


const CompanyCard = (props) => {
    const data = {
      id: 0,
      name: 'Lambda School',
      email: 'lambda@email.com',
      description: 'Lambda School is an immersive bootcamp offering a variety of courses and such',
      job: {
        id: 11,
        company: "Lambda School",
        title: "Developer",
        description: "Lambda School needs a fullstack developer to perform alchemy",
        salary: 1000000
      }
    };


    return (

                <Box 
                margin="2% auto"
                width="50%" 
                border="2px" 
                borderRadius="md" 
                borderColor="gray.200"
                padding="3%"
                >
                <Flex direction="column" wrap='wrap' align='center'>        
                    <Heading size="lg" whiteSpace="pre-line" wordBreak="break-word">{data.name}</Heading>
                    <Text whiteSpace="pre-line" wordBreak="break-word">{data.description}</Text>
                </Flex>
                <Accordion defaultIndex={[0]} allowMultiple>
                    <AccordionItem>
                        <AccordionHeader justifyContent="center">
                            <Box>
                                Job Title
                            </Box>
                            <AccordionIcon />
                        </AccordionHeader>
                        <AccordionPanel>{data.job.title}</AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionHeader justifyContent="center">
                            <Box>
                                Salary
                            </Box>
                            <AccordionIcon />
                        </AccordionHeader>
                        <AccordionPanel whiteSpace="pre-line" wordBreak="break-word">${data.job.salary}</AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionHeader justifyContent="center">
                            <Box>
                                Job Description
                            </Box>
                            <AccordionIcon />
                        </AccordionHeader>
                        <AccordionPanel><Text whiteSpace="pre-line" wordBreak="break-word">{data.job.description}</Text></AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </Box>
);
}
export default CompanyCard



    //    <Container> 
    //         <StyledRow>
    //             <StyledH1>{data.name}</StyledH1>
    //             <StyleP>{data.description}</StyleP>
    //         </StyledRow>    
    //         <div>
    //             <h2>{data.job.company}</h2>
    //             <h3>{data.job.title}</h3>
    //             <h3>${data.job.salary}</h3>
    //             <p>{data.job.description}</p>
    //         </div>    
    //     </Container>