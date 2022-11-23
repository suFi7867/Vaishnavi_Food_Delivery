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
        <Stack direction={'row'} spacing={10}>
          {NAV_ITEMS.map((navItem) => (
            <VStack justifyContent={"center"} alignContent={"center"}  key={navItem.label}>
              <Popover trigger={'hover'} placement={'bottom-start'}>
                <PopoverTrigger>
                  <Link
                    p={2}
                    href={navItem.href ?? '#'}
                    fontSize={'sm'}
                    fontWeight={500}
                    color={'white'}
                    _hover={{
                      textDecoration: 'none',
                      color: 'blackAlpha.800',
                    }}>
                    {navItem.label}
                  </Link>
                </PopoverTrigger>
    
                {navItem.children && (
                  <PopoverContent
                    border={0}
                    boxShadow={'xl'}
                    bg={popoverContentBgColor}
                    p={4}
                    rounded={'xl'}
                    minW={'sm'}>
                    <Stack>
                      {navItem.children.map((child) => (
                        <DesktopSubNav key={child.label} {...child} />
                      ))}
                    </Stack>
                  </PopoverContent>
                )}
              </Popover>
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
        <Stack spacing={4} onClick={children && onToggle}>
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
        label: 'Categories',
        children: [
          {
            label: 'Airpdopes True Wireless',
            subLabel: 'Trending Design to inspire you',
            href: '#',
          },
          {
            label: 'SmartWatches',
            subLabel: 'Best Designes',
            href: '#',
          },
        ],
      },
      {
        label: 'Daily Deals',
        href: '#',
      },
      {
        label: 'Shop',
        href: '#',
      },
      {
        label: 'More',
        href: '#',
      },
    ];
    return (
     <ChakraProvider>
      <Box >
        <Flex 
          bg={useColorModeValue('#ef7f1a', 'gray.800')}
          color={useColorModeValue('whiteAlpha.900', 'white')}
          minH={'40px'}
       
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
                isOpen ? <CloseIcon color={"white"} w={8} h={8} /> : <HamburgerIcon color={"white"} w={8} h={8} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
            <Box
            bg={"white"} h="100%"
              // textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              fontFamily={'heading'}
              color={useColorModeValue('gray.800', 'white')}>
              <Image p={2}  color='white' h={{base:"50px" , sm:"60px" , md:"70px"}}  src={logo}/>
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
            <Button ml={{base:"10px"}}
             padding='2px 10px'
              color={'white'}
              bg={'red.500'}
              fontSize={'sm'}
              fontWeight={400}
              variant={'link'}
              href={'/login'} 
              onClick={()=>Navigate('/login')}
              >
              Sign In
            </Button>
            <Button
              display={{ base: 'inline-flex', md: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={400}
              color={'white'}
              bg={'red.500'}
              href={'#'}
              _hover={{
                bg: 'red.300',
              }}>
              Sign Up
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
  