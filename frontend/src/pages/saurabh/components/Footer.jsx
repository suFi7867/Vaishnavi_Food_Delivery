
import { Box, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import { FcCallback } from 'react-icons/fc';
import { ImWhatsapp } from 'react-icons/im';
const Footer = () => {
  return (
    <SimpleGrid bg={"gray.100"} padding={{base:5,md:12}}  columns={{base:"2",sm:"4"}} spacing={10}>
      <Box display={{base:"none",md:"block"}} justifyContent={'flex-start'} >

<Text fontSize={15} fontWeight={"bold"} color='#f58521'>Contact US</Text>
<Box justifyContent={'center'} textAlign={'center'} display={'flex'}>

<Text><FcCallback  style={{fontSize:"30px",marginRight:"20px"}} /> </Text>
 <Text><ImWhatsapp style={{fontSize:"25px",color:"green"}}/> </Text>
</Box>
</Box>

  <Box  justifyContent={'flex-start'} textAlign='left'>
    <Text fontSize={15}  fontWeight={"bold"} color='#f58521'>Vaishnavi Tiffin Service</Text>
    <Text fontSize={13}>Near Kothari Hospital</Text>
    <Text fontSize={13}>Jaihind Chowk, Old City</Text>
    <Text fontSize={13}>Akola, Maharashtra 444002</Text>
   </Box>

  <Box justifyContent={'flex-start'} textAlign='left' >

    <Text  fontSize={15}fontWeight={"bold"} color='#f58521'>Order Timings</Text>
    <Text fontSize={13}>One Day Prior or</Text>
    <Text fontSize={13}>Lunch: Before 11:00 A.M.</Text>
    <Text fontSize={13}>Dinner: Before 7:00 P.M.</Text>
   </Box>

  <Box justifyContent={'flex-start'} textAlign='left' >
    <Text fontSize={15} fontWeight={"bold"} color='#f58521'>Delivery Timings</Text>
    <Text fontSize={13}>Lunch: Between 12.30 P.M. to 2 P.M.</Text>
    <Text fontSize={13}>Dinner: Between 7.30 P.M. to 9.30 P.M.</Text>
   </Box>

   <Box display={{base:"block",md:"none"}} justifyContent={'flex-start'} >

<Text fontSize={15} fontWeight={"bold"} color='#f58521'>Contact US</Text>
<Box justifyContent={'center'} textAlign={'center'} display={'flex'}>

<Text><FcCallback  style={{fontSize:"30px",marginRight:"20px"}} /> </Text>
 <Text><ImWhatsapp style={{fontSize:"25px",color:"green"}}/> </Text>
</Box>
</Box>
 

</SimpleGrid>
  )
}

export default Footer
