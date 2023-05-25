import { Header } from "./components/Header"
import { Legendaries } from "./components/Legendaries"
import { ChakraProvider } from '@chakra-ui/react'



function App() {
  return (
    <>
    <ChakraProvider>
      <Header />
      <Legendaries/>
    </ChakraProvider>
    </>
  )
}

export default App
