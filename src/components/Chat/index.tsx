import React, { useEffect, useState } from 'react'
import queryString from 'query-string'
import io, { Socket } from 'socket.io-client'
import { DefaultEventsMap } from 'socket.io-client/build/typed-events'
import { useHistory } from 'react-router-dom'

import InputBox from './InputBox'
import MessagesBox from './MessagesBox'
import MembersBox from './MembersBox'

import { ChatContainer, Main, Content } from './styles'

interface Props {
  location: {
    search: string
  }
}

interface IMessage {
  user: string
  text: string
}

interface IUsers {
  name: string
  id: string
}

let socket: Socket<DefaultEventsMap>

const Chat = ({ location }: Props): React.ReactElement => {
  const [name, setName] = useState<string>('')
  const [room, setRoom] = useState<string>('')
  const [message, setMessage] = useState<string>('')
  const [messages, setMessages] = useState<IMessage[]>([])
  const [users, setUsers] = useState<IUsers[]>([])

  const history = useHistory()

  const ENDPOINT = 'localhost:5000'

  useEffect(() => {
    const { name, room } = queryString.parse(location.search)

    socket = io(ENDPOINT)

    setName(String(name))
    setRoom(String(room))

    socket.emit('join', { name, room }, (error: string) => {
      if (error) {
        alert(error) // replace with toast
        history.push('/')
      }
    })
  }, [ENDPOINT, history, location.search])

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages((messages) => [...messages, message])
    })

    socket.on('roomData', (room) => {
      setUsers(room.users)
    })
  }, [])

  const sendMessage = (
    event:
      | React.KeyboardEvent<HTMLInputElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault()

    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''))
    }
  }

  console.log(message, messages)

  return (
    <div className='wrapper medium'>
      <ChatContainer>
        <h1>{room}</h1>
        <Main>
          <MembersBox users={users} />
          <Content>
            <MessagesBox messages={messages} user={name} />
            <InputBox
              message={message}
              setMessage={setMessage}
              sendMessage={sendMessage}
            />
          </Content>
        </Main>
      </ChatContainer>
    </div>
  )
}

export default Chat
