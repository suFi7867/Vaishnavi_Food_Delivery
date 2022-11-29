import logo from './logo.svg';
import './App.css';
import Navbar from './pages/saurabh/Navbar';
import AllRoutes from './routes/AllRoutes';
import { Box, Flex, HStack, Stack } from '@chakra-ui/react';
import Orders from './pages/sufiyan/Orders';
import Footer from './pages/saurabh/components/Footer'



function App() {
  return (
    <Flex w={"100%"}  border={"1px solid"}>
    <Box w={"100%"} className="App">
      <Navbar/>
      <AllRoutes/>
      
    <Footer/>
    </Box>

     <Orders/> 
 
 
  </Flex>
    
  
  );
}

export default App;
