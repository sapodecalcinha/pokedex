import { Header } from "./components/Header"
import { Pokedex } from "./components/Pokedex"
import { ChakraProvider } from '@chakra-ui/react'



function App() {
  return (
    <>
    <ChakraProvider>
      <Header />
      <Pokedex/>
    </ChakraProvider>
    </>
  )
}

export default App

