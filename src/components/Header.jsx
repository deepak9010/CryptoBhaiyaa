import { Button, HStack } from '@chakra-ui/react';
import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {

  return (
    <HStack p={"4"} shadow={"base"} background={"blackAlpha.400"}>
      
      <Button variant={"unstyled"} color={'pink.400'} size={'lg'}
           css={{
          "&:hover": {
            color: 'purple',
             }, 
           }}>
        <Link to="/">Home</Link>
      </Button>

      <Button variant={"unstyled"} color={'pink.400'} size={'lg'}
          css={{
          "&:hover": {
           color: 'purple',
             }, 
          }}>
        <Link to="/exchanges">Exchanges</Link>
      </Button>

      <Button variant={"unstyled"} color={'pink.400'} size={'lg'}
           css={{
            "&:hover": {
            color: 'purple',
                }, 
            }}>
        <Link to="/coins">Coins</Link>
      </Button>

    </HStack>
  )
}

export default Header;