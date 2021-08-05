import React, { useEffect, useState } from 'react'
import queryString from 'query-string'
import io, { Socket } from 'socket.io-client'
import { DefaultEventsMap } from 'socket.io-client/build/typed-events'

interface Props {
  location: {
    search: string
  }
}

interface IMessage {
  user: string
  text: string
}
let socket: Socket<DefaultEventsMap>

const Chat = ({ location }: Props): React.ReactElement => {
  const [name, setName] = useState<string>('')
  const [room, setRoom] = useState<string>('')
  const [message, setMessage] = useState<string>('')
  const [messages, setMessages] = useState<IMessage[]>([])

  const ENDPOINT = 'localhost:5000'

  useEffect(() => {
    const { name, room } = queryString.parse(location.search)

    socket = io(ENDPOINT)

    setName(String(name))
    setRoom(String(room))

    console.log('emit join')
    socket.emit('join', { name, room }, (error: any) => {
      if (error) {
        alert(error)
      }
    })
  }, [ENDPOINT, location.search])

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages((messages) => [...messages, message])
    })
  }, [])

  const sendMessage = (event: React.KeyboardEvent<HTMLInputElement>) => {
    event.preventDefault()

    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''))
    }
  }

  console.log(message, messages)

  return (
    <div>
      <div>
        <ul>
          {messages.map((msg, index) => (
            <li key={index}>
              <strong>{msg.user}</strong>
              {`: ${msg.text}`}
            </li>
          ))}
        </ul>
        <input
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          onKeyPress={(event) =>
            event.key === 'Enter' ? sendMessage(event) : null
          }
        />
      </div>
    </div>
  )
}

export default Chat
