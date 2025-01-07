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
            <Text as={"span"} bgGradient={"linear(to-r, cyan.400, blue.500)"} bgClip={"text"}>
						My Besties
					</Text>
                    <UserGrid users={users} setUsers={setUsers} />
            </Container>
        </Stack>
    )
}

export default App;