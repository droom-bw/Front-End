import React from "react";
import styled from "styled-components";
import { Stack, Box, Heading, Text } from "@chakra-ui/core";

function Feature({ title, desc, ...rest }) {
  return (
    <Box p={5} shadow="md" borderWidth="1px" flex="1" rounded="md" {...rest}>
              <Heading fontSize="xl">{title}</Heading>
              <Text mt={4}>{desc}</Text>
            
    </Box>
  );
}
 function StackEx(props) {


  return (
    
      <Stack isInline spacing={8} align="center">
                
        <Feature
          title={"Matches"}
        
          desc= {props.name}

          

        />
               
         
      </Stack>
            
    
  );
}
export default StackEx;
