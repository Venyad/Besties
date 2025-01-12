import { Grid } from "@chakra-ui/react"
import UserCard from "./UserCard"
import { USERS } from "@/dummy/dummy"
import { useState } from "react"

const UserGrid = ({users}) => {
  return (
    <Grid templateColumns={{
      base:"1fr",
      md: "repeat(2, 1fr)",
					lg: "repeat(3, 1fr)",
				
    }}
    gap={4}>
      {users.map((user) => (
					<UserCard key={user.id} user={user} />
				))}

    </Grid>
  )
}

export default UserGrid
