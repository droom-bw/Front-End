import React from 'react'
import { Box, Flex, Heading, Text, Accordion, AccordionItem, AccordionHeader, AccordionPanel, AccordionIcon} from "@chakra-ui/core";



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
            <Heading>{data.name}</Heading>
            <p>{data.description}</p>
        </Flex>
        <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem>
                <AccordionHeader justifyContent="center">
                    <Box>
                        Hiring Company
                    </Box>
                    <AccordionIcon />
                </AccordionHeader>
                <AccordionPanel>{data.job.company}</AccordionPanel>
            </AccordionItem>
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
                <AccordionPanel>${data.job.salary}</AccordionPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionHeader justifyContent="center">
                    <Box>
                        Job Description
                    </Box>
                    <AccordionIcon />
                </AccordionHeader>
                <AccordionPanel><Flex wrap="wrap" justify="center"><Text>{data.job.description}</Text></Flex></AccordionPanel>
            </AccordionItem>
        </Accordion>
    </Box>
);
}
export default CompanyCard


//    <section> 
//             <div>
//                 <h1>{data.name}</h1>
//                 <h4>{data.description}</h4>
//             </div>
//             <Accordion>
//                 <AccordionItem>
//                     <AccordionHeader><Box>Company Name</Box></AccordionHeader>
//                     <h2>{data.job.company}</h2>
//                 </AccordionItem>
//                     <h3>{data.job.title}</h3>
//                     <h3>${data.job.salary}</h3>
//                     <p>{data.job.description}</p>
//             </Accordion>
//         </section>


