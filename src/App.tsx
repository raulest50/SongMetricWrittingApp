import HomePage from "./HomePage.tsx";
import './App.css';


import {ChakraProvider} from '@chakra-ui/react';

function App() {

  return (
    
    <ChakraProvider>
      <HomePage/>
    </ChakraProvider>
  )
}

export default App
