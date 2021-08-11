import React from 'react'
import ScrollToBottom from 'react-scroll-to-bottom'

import { Box, Message } from './styles'

interface IMessage {
  user: string
  text: string
}

interface Props {
  user: string
  messages: IMessage[]
}

const MessagesBox = ({ messages, user }: Props): React.ReactElement => {
  return (
    <ScrollToBottom>
      <Box>
        {messages.map((msg, index) => (
          <Message key={index} isUser={msg.user === user.toLowerCase()}>
            <div>
              {msg.user !== user && <strong>{msg.user}</strong>}
              {msg.text}
            </div>
          </Message>
        ))}
      </Box>
    </ScrollToBottom>
  )
}

export default MessagesBox
