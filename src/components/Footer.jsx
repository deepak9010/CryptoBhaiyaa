
import {Avatar, Box, Button, HStack, Heading, Stack, VStack, Input, Text } from '@chakra-ui/react';
import React from 'react'
import {AiOutlineSend} from 'react-icons/ai'
import {AiFillYoutube, AiFillInstagram,AiFillGithub} from "react-icons/ai"

const Footer = () => {
  return (
   <Box bgColor={'blackAlpha.400'} 
     minH={'40'} p="16" mt={['30', '0']} color={'white'}>
   
      <Stack direction={['column', 'row']}>

        <VStack alignItems={'strech'} w={'full'} px = {'4'}>

            <Heading size ="md" textTransform={'uppercase'} textAlign={['center','left']}>
            Subscribe to get updates
            </Heading>

          <HStack borderBottom = {'2px solid white'} py="2">

            <Input 
             placeholder= "Enter Email here..."
             border={'none'}
             borderRadius="none"
             outline={'none'}
             focusBorderColor= "none" />

            <Button
            p={'0'}
            colorScheme='purple'
            variant={'ghost'}
            borderRadius={'0 20px 20px 0'}
             >

                <AiOutlineSend size={20}/>
             </Button>
         </HStack>

    </VStack>

    <VStack w={'full'}
       borderLeft={['none', '1px solid white']}
       borderRight={['none', '1px solid white']}>
    
     
       <Avatar boxSize={"16"} mt={["4", "0"]}  />
       <Text>All rights reserved </Text>

    </VStack>

    <VStack w={'full'}>

        <Heading size={'md'} textTransform={'uppercase'}>
            Social Media
        </Heading>

        <HStack>
         <Button variant={'link'} colorScheme='white'>
            <a target={'blank'} href='https://youtube.com'>Youtube</a>
         </Button>
         <AiFillYoutube />
        </HStack>

        <HStack>
        <Button variant={'link'} colorScheme='white'>
            <a target={'blank'} href='https://instagram.com'>Instagram</a>
        </Button>
        <AiFillInstagram />
        </HStack>

        <HStack>
        <Button variant={'link'} colorScheme='white'>
            <a target={'blank'} href='https://github.com'>Github</a>
        </Button>
        <AiFillGithub />
        </HStack>

    </VStack>

  </Stack>

   </Box>
  )
}

export default Footer;
