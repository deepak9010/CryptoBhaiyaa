import React, {useEffect, useState} from "react";
import axios from "axios";
import { server } from "../index";
import { Container, HStack,Image, Heading, Text } from "@chakra-ui/react";
import Loader from "./Loader";
import ErrorComponent from "./ErrorComponent";


const Exchanges = () => {

  const [exchanges,setExchanges] = useState([]);
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState(false);

  useEffect(() => {
     const fetchExchanges = async()=>{
     
      try {
       const { data } = await axios.get(`${server}/exchanges`);
       setExchanges(data);
       setLoading(false);
      } catch (error) {
         setError(true);
         setLoading(false);
      }
    
    };

    fetchExchanges();
 
  }, []);
  
  if(error) return <ErrorComponent message={"Error While Fetching Exchanges"} />

  return (
     <Container maxW={"container.lg"}  >
       
      {loading ? (<Loader />) : (
      <>
   
      <HStack  wrap={"wrap"} justifyContent={"space-evenly"}  >

          {exchanges.map((i) => (
             <ExchangeCard 
             key={i.id}
             name={i.name} 
             img={i.image} 
             rank={i.trust_score_rank} 
             url ={i.url} />
          ))}

       </HStack>

      </> )}

     </Container>
  )
}



const ExchangeCard = ({name,img,rank,url}) =>(
  <a href={url} target ={"blank"}>


  <HStack w={['80','96']} shadow={"lg"} p={'4'}   mt={"4"} mb={"4"}
  borderRadius={"lg"} transition={"all 0.3s"}
       css={{
         boxShadow: '2px 2px 12px #F4AAB9',
       "&:hover": {
        transform: "scale(1.1)",
     },
     
    }}
   
    >
     
     <Heading size={"md"} mr={'6'} pr={'6'}>
        {rank}
       </Heading>

      <Image 
      src={img} w={"10"} pr={'2'} h={"8"} 
      alt={"Exchange" } 
       />

     
     <Text pl={'12'}>{name}</Text> 

   </HStack>
  </a>
)

export default Exchanges;
