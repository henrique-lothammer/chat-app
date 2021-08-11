import React from 'react'

import { Box } from './styles'

interface IUsers {
  name: string
  id: string
}

interface Props {
  users: IUsers[]
}

const MembersBox = ({ users }: Props): React.ReactElement => {
  return (
    <Box>
      <ul>
        {users.map((user) => (
          <li key={user.id}> {user.name} </li>
        ))}
      </ul>
    </Box>
  )
}

export default MembersBox
