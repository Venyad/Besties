import { Card, CardHeader, Flex,Avatar,Box,Heading } from "@chakra-ui/react"
import {BiTrash} from 'react-icons/bi'
const UserCard = ({user}) => {
    return (
        <Card>
            <CardHeader>
                <Flex gap={4}>
                    <Flex flex={"1"} gap={"4"} alignItems={"center"}><Avatar src={user.imgUrl} />

                        <Box>
                            <Heading size='sm'>{user.name}</Heading>
                            <Text>{user.role}</Text>
                        </Box></Flex>
                    <Flex>
                        {/* <EditModal ></EditModal> */}
                        <IconButton
							variant='ghost'
							colorScheme='red'
							size={"sm"}
							aria-label='See menu'
							icon={<BiTrash size={20} />}
							onClick={handleDeleteUser}
						/>
                    </Flex>
                </Flex>
            </CardHeader>
        </Card>
    )
}

export default UserCard
