import {Button,Container,Stack,Text} from "@chakra-ui/react";
import Navbar from "./components/Navbar";

function App(){
    return (
        <Stack minH = {"100vh"}>
            <Navbar/>
            <Container maxW={"1200px"} my={4}>

            <Text
            fontWeight={"bold"}
            letterSpacing={"2px"}
            textTransform={"uppercase"}
            textAlign={"center"}
            mb={8}
            ></Text>
            </Container>
        </Stack>
    )
}

export default App;