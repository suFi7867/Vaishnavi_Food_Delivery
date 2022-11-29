import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import { Box, Button, ButtonGroup, Divider, HStack, IconButton, Image, Spacer, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import CallToActionWithIllustration from '../saurabh/xxx'

const Orders = () => {


  const [True, setTrue] = useState(true)

  



  if(True){
    return (
      <VStack bgColor={"blackAlpha.500"} borderLeft={"2px solid white"}  top="0"   position={"sticky"} h="100vh" display={{base:"none", md:"block"}} w={"500px"} justifyContent="center" alignContent={"center"}  >

<Image   h="100vh" opacity={"80%"}   filter= "blur(0.2rem)" borderRadius={10}  fit="cover"  src="https://media.istockphoto.com/id/666204804/photo/indian-vegetarian-office-or-school-lunch-box-or-tiffin-with-north-indian-or-maharashtrian.jpg?s=612x612&w=0&k=20&c=dtgiRE1ZNYBwvTkublRCYlt4QqlbAp0gOomwhXedOnQ=" />
      
<Button shadow={"dark-lg"} colorScheme="orange"  borderRadius={100} h="120px" w="120px" fontWeight={"light"} fontSize="xl" onClick={()=>setTrue(false)} position={"absolute"} top="45%" right="120px" filter="none" display={"block"} > Order <br /> Now</Button>
        
     
  
       
      </VStack>
    )
  }


  return (
    <VStack border={'1px solid'} position={"sticky"} top="0"  bg="#f6f9fb" h="100vh" display={{base:"none", md:"block"}} w={"500px"}  >
    
    <VStack alignItems={"flex-start"} p={5} border="1px solid">
      <Text fontSize={"2xl"} alignSelf={"left"} >My Orders</Text>

    </VStack>

    <VStack  p={3} spacing={2}  borderColor={"gray.300"}>

      <HStack justifyContent={"space-between"} w="90%" p={1}  spacing={3} >

        <Image borderRadius={10} h="80px" w={120} fit="cover"  src="https://t3.ftcdn.net/jpg/02/51/50/58/360_F_251505853_QbaCKyJeNTzjo2uRUfr2JR9qi2lC18EH.jpg" />

        <VStack  alignItems={"flex-start"}  >
          <Text fontSize={"xl"}>Roti</Text>
          <ButtonGroup size='sm' isAttached variant='outline'>
<IconButton aria-label='Add to friends' icon={<MinusIcon/>} />
  <Button variant='outline' >1</Button>
  <IconButton aria-label='Add to friends' icon={<AddIcon />} />
</ButtonGroup>


        </VStack>

  <Spacer/>

        <VStack bg="#eef3f8" alignSelf={"flex-start"} p={1} borderRadius={5} >
          
          <Text fontSize={"xl"}>₹ 1599</Text>

        </VStack>
       



      </HStack>
    <Divider/>

    <HStack justifyContent={"space-between"} w="90%" p={1}  spacing={3} >

<Image borderRadius={10} h="80px" w={120} fit="cover"  src="https://t3.ftcdn.net/jpg/02/51/50/58/360_F_251505853_QbaCKyJeNTzjo2uRUfr2JR9qi2lC18EH.jpg" />

<VStack  alignItems={"flex-start"}  >
  <Text fontSize={"xl"}>Roti</Text>
  <ButtonGroup size='sm' isAttached variant='outline'>
<IconButton aria-label='Add to friends' icon={<MinusIcon/>} />
<Button variant='outline' >1</Button>
<IconButton aria-label='Add to friends' icon={<AddIcon />} />
</ButtonGroup>


</VStack>

<Spacer/>

<VStack bg="#eef3f8" alignSelf={"flex-start"} p={1} borderRadius={5} >
  
  <Text fontSize={"xl"}>₹ 1599</Text>

</VStack>




</HStack>
<Divider/>

<HStack justifyContent={"space-between"} w="90%" p={1}  spacing={3} >

<Image borderRadius={10} h="80px" w={120} fit="cover"  src="https://t3.ftcdn.net/jpg/02/51/50/58/360_F_251505853_QbaCKyJeNTzjo2uRUfr2JR9qi2lC18EH.jpg" />

<VStack  alignItems={"flex-start"}  >
  <Text fontSize={"xl"}>Roti</Text>
  <ButtonGroup size='sm' isAttached variant='outline'>
<IconButton aria-label='Add to friends' icon={<MinusIcon/>} />
<Button variant='outline' >1</Button>
<IconButton aria-label='Add to friends' icon={<AddIcon />} />
</ButtonGroup>


</VStack>

<Spacer/>

<VStack bg="#eef3f8" alignSelf={"flex-start"} p={1} borderRadius={5} >
  
  <Text fontSize={"xl"}>₹ 1599</Text>

</VStack>




</HStack>
<Divider/>

<HStack justifyContent={"space-between"} w="90%" p={1}  spacing={3} >

<Image borderRadius={10} h="80px" w={120} fit="cover"  src="https://t3.ftcdn.net/jpg/02/51/50/58/360_F_251505853_QbaCKyJeNTzjo2uRUfr2JR9qi2lC18EH.jpg" />

<VStack  alignItems={"flex-start"}  >
  <Text fontSize={"xl"}>Roti</Text>
  <ButtonGroup size='sm' isAttached variant='outline'>
<IconButton aria-label='Add to friends' icon={<MinusIcon/>} />
<Button variant='outline' >1</Button>
<IconButton aria-label='Add to friends' icon={<AddIcon />} />
</ButtonGroup>


</VStack>

<Spacer/>

<VStack bg="#eef3f8" alignSelf={"flex-start"} p={1} borderRadius={5} >
  
  <Text fontSize={"xl"}>₹ 1599</Text>

</VStack>




</HStack>

      


      

    </VStack>

    <Spacer/>

    <VStack position={"relative"} top="300px" p={3} spacing={2}  >
        <Button w="100%" colorScheme={"facebook"} size="lg" fontWeight={"light"} >Checkout</Button>
    </VStack>

     
    </VStack>
  )
}

export default Orders
