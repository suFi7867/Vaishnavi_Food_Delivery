import React,{useEffect, useState} from 'react'


import banner1 from './images/banner1.png'
import mobilebanner from './images/mobilebanner1.png'
import Dailymenu from './images/Dailymenuchange.png'
import easycancel from './images/easycancellation.png'
import easyorder from './images/easyordering.png'
import homemade from './images/homemadefood.png'
import { Box, Flex, HStack, Image, SimpleGrid, Text, VStack } from '@chakra-ui/react';
const Hero = () => {
    const arrowStyles = {
        cursor: "pointer",
        pos: "absolute",
        top: "50%",
        w: "auto",
        mt: "-22px",
        p: "16px",
        color: "white",
        fontWeight: "bold",
        fontSize: "18px",
        transition: "0.6s ease",
        borderRadius: "0 3px 3px 0",
        userSelect: "none",
        _hover: {
          opacity: 0.8,
          bg: "black",
        },
      };
      const slides = [
        {
          img: banner1,
        },
        {
            img: banner1,
          },
          {
            img: banner1,
          },
          {
            img: banner1,
          },
          {
            img: banner1,
          },
          {
            img: banner1,
          },
       
      ];

      const mobileslides = [
        {
          img: mobilebanner,
        },
        {
            img:mobilebanner,
          },
          {
            img: mobilebanner,
          },
          {
            img: banner1,
          },
          {
            img: banner1,
          },
          {
            img: banner1,
          },
       
      ];

      const SLIDES_INTERVAL_TIME = 6000;
      const ANIMATION_DIRECTION = "right";
      const [currentSlide, setCurrentSlide] = useState(0);
      const slidesCount = slides.length;
    
      const prevSlide = () => {
        setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
      };
    
      const nextSlide = () => {
        setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
      };
    
      const setSlide = (slide) => {
        setCurrentSlide(slide);
      };
    
      const carouselStyle = {
        transition: "all .5s",
        ml: `-${currentSlide * 100}%`,
      };
      useEffect(() => {
        const prevSlide = () => {
          setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
        };
    
        const nextSlide = () => {
          setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
        };
    
        const automatedSlide = setInterval(() => {
          ANIMATION_DIRECTION.toLowerCase() === "left" ? prevSlide() : nextSlide();
        }, SLIDES_INTERVAL_TIME);
        return () => clearInterval(automatedSlide);
      }, [slidesCount]);
  return (
    <>
    <Flex
    w="full"
    // bg="#edf3f8"
    _dark={{
      bg: "#3e3e3e",
    }}
    p={{base:1,sm:10}}
    alignItems="center"
    justifyContent="center"
  >
    <Flex w="full" overflow="hidden" pos="relative">
      <Flex display={{base:"none",lg:"flex"}}   w="full" {...carouselStyle}>
        {slides.map((slide, sid) => (
          <Box key={`slide-${sid}`} boxSize="full" shadow="md" flex="none">
           
            <Image
              src={slide.img}
              alt="carousel image"
              boxSize="full"
              backgroundSize="cover"
              h={{base:"100%",sm:"80%"}}
            />
          </Box>
        ))}
      </Flex>
      <Flex  display={{base:"flex",lg:"none"}} w="full" {...carouselStyle}>
        {mobileslides.map((slide, sid) => (
          <Box key={`slide-${sid}`} boxSize="full" shadow="md" flex="none">
           
            <Image
              src={slide.img}
              alt="carousel image"
              boxSize="full"
              backgroundSize="cover"
              w={{base:"100%",sm:"80%"}}
            />
          </Box>
        ))}
      </Flex>
     
      <HStack justify="center" pos="absolute" bottom="8px" w="full">
        {Array.from({
          length: slidesCount,
        }).map((_, slide) => (
          <Box
            key={`dots-${slide}`}
            cursor="pointer"
            boxSize={["4px", null, "6px"]}
            m="0 2px"
            bg={currentSlide === slide ? "blackAlpha.800" : "blackAlpha.500"}
            rounded="50%"
            display="inline-block"
            transition="background-color 0.6s ease"
            _hover={{
              bg: "blackAlpha.800",
            }}
            onClick={() => setSlide(slide)}
          ></Box>
        ))}
      </HStack>
    </Flex>
  </Flex>
    <VStack   spacing={3}>
     <Text color={'red.500'} fontSize={"1.3rem"} fontWeight={'semi-bold'}>Why Us</Text>
     <Text  fontSize={"1.5rem"} fontWeight='bold'>We Create Delicious Memory</Text>
    </VStack>
  <SimpleGrid mt={20}  textAlign={'center'} m='auto' columns={{base:2,sm:4}} spacing={{base:10,md:20}}>
  <Box spacing={3} >     
  <Image w={{base:"70%",md:"80%"}} margin={'auto'} src={homemade} mb={2}   alt='error'/>
  <Text fontSize={{base:"12px" ,sm:"16px"}}>Home made food</Text>
  </Box>
  <Box spacing={3} ><Image w={{base:"70%",md:"80%"}}  margin={'auto'} mb={2}   src={Dailymenu} alt='err'/>
  <Text fontSize={{base:"12px" ,sm:"16px"}}>Daily Menu Change</Text>
   </Box>
  <Box spacing={3} ><Image w={{base:"70%",md:"80%"}} margin={'auto'} mb={2} src={easyorder}/>
  <Text fontSize={{base:"12px" ,sm:"16px"}}>Easy Ordering</Text>
    </Box>
  <Box  spacing={3}> <Image w={{base:"70%",md:"80%"}} margin={'auto'} mb={2}  src={easycancel}/>
  <Text fontSize={{base:"12px" ,sm:"16px"}}>Easy Cancellation</Text>
  </Box>
 
</SimpleGrid>
</>
  )
}

export default Hero
