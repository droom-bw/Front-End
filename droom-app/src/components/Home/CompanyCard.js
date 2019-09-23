import React from 'react'
import { Box, Flex, Heading, Text, Image, Badge} from "@chakra-ui/core";





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

const property = {
    imageUrl: "http://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Modern home in city center in the heart of historic Los Angeles",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4,
  };

    return (
    <Box maxW="sm" border="black" rounded="lg">
         <Box> 
            <Flex justifyContent='center'>
                <Heading>{data.name}</Heading>
            </Flex>  
            <Flex wrap="wrap">
                <Text>{data.description}</Text>
            </Flex>
         </Box>
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


