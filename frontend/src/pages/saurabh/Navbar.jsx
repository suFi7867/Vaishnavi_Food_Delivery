import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    ChakraProvider,
    Image,
    HStack,
    Input,
    useColorMode,
    VStack,
  } from '@chakra-ui/react';
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
  } from '@chakra-ui/icons';
  
  import React from 'react'
  
 import logo from './assets/logo.png'
  import { useEffect } from 'react';
  import { useNavigate } from 'react-router-dom';
   
  
  const Navbar = () => {
    const name=localStorage.getItem("email")
    const handleclear=()=>{
       localStorage.clear()
       Navigate('/')
     }
     
  
     const Navigate=useNavigate()
    const { isOpen, onToggle } = useDisclosure();
    const DesktopNav = () => {
      const linkColor = useColorModeValue('gray.600', 'gray.200');
      const linkHoverColor = useColorModeValue('gray.800', 'white');
      const popoverContentBgColor = useColorModeValue('white', 'gray.800');
      const { colorMode, toggleColorMode } = useColorMode()
      
      return (
        <Stack direction={'row'} spacing={10} w="100%" >
          {NAV_ITEMS.map((navItem) => (
            <VStack justifyContent={"center"} alignContent={"center"}  key={navItem.label}>
            
                  <Link
                    p={2}
                    href={navItem.href ?? '#'}
                    fontSize={'lg'}
                    fontWeight={500}
                    color={navItem.label == "Order Now" ?  "red.500" : "black" }
                    _hover={{
                      textDecoration: 'none',
                      color: 'blackAlpha.800',
                    }}>
                    {navItem.label }
                  </Link>
             
    
              
            </VStack>
          ))}
        </Stack>
      );
    };
    
    const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
      return (
        <Link 
          href={href}
          role={'group'}
          display={'block'}
          p={2}
          rounded={'md'}
          _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
          <Stack direction={'row'} align={'center'}>
            <Box>
              <Text
                transition={'all .3s ease'}
                _groupHover={{ color: 'pink.400' }}
                fontWeight={500}>
                {label}
              </Text>
              <Text fontSize={'sm'}>{subLabel}</Text>
            </Box>
            <Flex
              transition={'all .3s ease'}
              transform={'translateX(-10px)'}
              opacity={0}
              _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
              justify={'flex-end'}
              align={'center'}
              flex={1}>
              <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
            </Flex>
          </Stack>
        </Link>
      );
    };
    
    const MobileNav = () => {
      return (
        <Stack
          bg={useColorModeValue('white', 'gray.800')}
          p={4} 
          display={{ md: 'none' }}>
          {NAV_ITEMS.map((navItem) => (
            <MobileNavItem key={navItem.label} {...navItem} />
          ))}
        </Stack>
      );
    };
    
    const MobileNavItem = ({ label, children, href }: NavItem) => {
      const { isOpen, onToggle } = useDisclosure();
    
      return (
        <Stack  spacing={4} onClick={children && onToggle}>
          <Flex
            py={2}
            as={Link}
            href={href ?? '#'}
            justify={'space-between'}
            align={'center'}
            _hover={{
              textDecoration: 'none',
            }}>
            <Text
              fontWeight={600}
              color={useColorModeValue('gray.600', 'gray.200')}>
              {label}
            </Text>
            {children && (
              <Icon
                as={ChevronDownIcon}
                transition={'all .25s ease-in-out'}
                transform={isOpen ? 'rotate(180deg)' : ''}
                w={6}
                h={6}
              />
            )}
          </Flex>
    
          <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
            <Stack
              mt={2}
              pl={4}
              borderLeft={1}
              borderStyle={'solid'}
              borderColor={useColorModeValue('gray.200', 'gray.700')}
              align={'start'}>
              {children &&
                children.map((child) => (
                  <Link key={child.label} py={2} href={child.href}>
                    {child.label}
                  </Link>
                ))}
            </Stack>
          </Collapse>
        </Stack>
      );
    };
    
    interface NavItem {
      label: string;
      subLabel?: string;
      children?: Array<NavItem>;
      href?: string;
    }
    
    const NAV_ITEMS: Array<NavItem> = [
      {
        label: 'Home',
        href: '#',
      },
      {
        label: 'Plans',
        href: '#',
      },
      {
        label: 'Order Now',
        href: '#',
      },

      {
        label: 'Contact Us',
        href: '#',
      },
    
    ];
    return (
     <ChakraProvider>
      <Box  w="full" position={"sticky"} top="0" zIndex={999}>
        <Flex 
          bg={useColorModeValue('linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(237,242,247,1) 100%)', 'gray.800')}
          color={useColorModeValue('whiteAlpha.900', 'white')}
          minH={'40px'}
          p={{base:"0px 10px", md:"0px 50px"}}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.900')}
          align={'center'}>
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon color={"#385898"} w={4} h={4} /> : <HamburgerIcon color={"#385898"}   w={7} h={7}  />
              }
              variant={'ghost'}
              
              aria-label={'Toggle Navigation'}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
            <Box borderRadius={{base:10, md:"0"}}
           h={{base:"90%", md:"100%"}}
              // textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              fontFamily={'heading'}
              color={useColorModeValue('gray.800', 'white')}>
              <Image p={1} color='white' h={{base:"70px" ,  md:"70px"}} minW="150px" src={logo}/>
            </Box>
  
            <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>
        
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}>
           {  name? <> <Text ml={3} fontSize={'0.8rem'} fontWeight={"semibold"} textAlign={'center'} color={'white'}>{name}</Text> <Button onClick={handleclear} colorScheme={'red'} size={'xs'}>Logout</Button></> : <>
            <Button
              display={{ base: 'none', md: 'flex' }}
              fontSize={'sm'}
              borderRadius="full"
              fontWeight={400}
            
              colorScheme="facebook"
             
              href={'#'}
              _hover={{
                bg: 'facebook.300',
              }}>
              Sign In
            </Button>
            <Button
              display={{ base: 'flex', md: 'none' }}
              fontSize={'sm'}
              fontWeight={400}
              borderRadius="full"
              colorScheme="orange"
              href={'#'}
              _hover={{
                bg: 'orange.300',
              }}
             >
              Order Now
            </Button> </>}
        
          </Stack>
        </Flex>
  
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
     </ChakraProvider>
    )
  
            }
  
  export default Navbar
  