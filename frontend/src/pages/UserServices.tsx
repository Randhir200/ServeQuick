import React from 'react';
import {
  Grid,
  GridItem,
  Flex,
  Box,
  Heading,
  Stack,
  Text,
} from '@chakra-ui/react';
import { ArrowForwardIcon, InfoIcon } from '@chakra-ui/icons';

import ServicesBox from '../components/ServicesBox';
type Props = {};

const UserServices = (props: Props) => {
  return (
    <>
      <Grid
        mt='5'
        h='100vh'
        templateRows='repeat(2, 1fr)'
        templateColumns='repeat(6, 1fr)'
        gap={2}
      >
        <GridItem colSpan={4} rowSpan={2}>
          <Box borderRadius='0.5rem' bg='#1D2226' h='375px'>
            <ServicesBox />
          </Box>
        </GridItem>
        <GridItem rowSpan={2} colSpan={2}>
          <Box
            color='white'
            bg='#1D2226'
            m='8px'
            maxW='100%'
            h='375px'
            p='10px'
            borderRadius='0.5rem'
          >
            <Flex justify='space-between'>
              <Heading textAlign='center'> Total Items</Heading>
              <Heading>0</Heading>
            </Flex>
            <Box maxW='100px' h='2px' color='white'></Box>
            <Stack mt='10px' px='5px'>
              <Text fontSize='18px'>on 12th Sep 2022 at 11:30</Text>

              <Flex justify='space-between'>
                <Text fontSize='15px'>
                  <ArrowForwardIcon mr='5px' />
                  AC Installing
                </Text>
                <Text fontSize='15px'>
                  
                  window typed
                </Text>
                <Text fontSize='15px'> qwt-2 </Text>
                <Text fontSize='15px'>600₹</Text>
              </Flex>
              <Flex justify='space-between'>
                <Text fontSize='15px'>
                  <ArrowForwardIcon mr='5px' />
                  Home Wiring
                </Text>
                <Text fontSize='15px'>
                  
                  20X20 ft
                </Text>
                <Text fontSize='15px'>4-Rooms </Text>
                <Text fontSize='15px'>700₹</Text>
              </Flex>
            </Stack>
          </Box>
        </GridItem>
      </Grid>
    </>
  );
};

export default UserServices;
