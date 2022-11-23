import logo from './logo.svg';
import './App.css';
import Navbar from './pages/saurabh/Navbar';
import AllRoutes from './routes/AllRoutes';
import { Box, HStack, Stack } from '@chakra-ui/react';
import Orders from './pages/sufiyan/Orders';



function App() {
  return (
  <HStack w={"100%"}  border={"1px solid"}>
    <Box w={"100%"} className="App">
      <Navbar/>
      <AllRoutes/>
    </Box>

    <Orders/>
 
 
  </HStack>
    
  
  );
}

export default App;
