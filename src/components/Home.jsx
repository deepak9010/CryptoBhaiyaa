import { Box, Heading,Text, Image, VStack} from "@chakra-ui/react";
import React from "react";


import avatar1 from '../assets/avatar1.jpg'


const Home = () => {
  const myStyle={
       fontFamily: "'Kalam', cursive",
  };

  return (

    <Box w={"full"} h={['130vh','90vh']}>

   
    <VStack pl={'16'} pr={'16'} pb={'8'}>

      <Image  src={avatar1} w={"44"} h={"auto"} mt={'14'} objectFit={'cover'} borderRadius={'80'}  />
      
      <Heading  color={'pink.400'} size={'3xl'} pt={'6'} mb={'4'}
         style={{fontFamily: "'Kalam', cursive"}} >

        CryptoBhaiya
      </Heading>  
      
      <Text fontSize={['2xl','x-large']} flexWrap={'wrap'} justifyContent={'center'} textAlign={'center'} pt={'4'} style={myStyle}>
      Best partner for learn about Crypto-Currency.  This platform provides the information about the coins like Market cap,All time low,All time high and their rank. It also provides information about the top 100 exachanges.
      </Text>
    

     </VStack>

    

      
       
      
     </Box>
  );
};




export default Home;