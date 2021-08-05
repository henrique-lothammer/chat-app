import React from 'react'

import { Form } from './styles'

interface Props {
  message: string
  setMessage(event: string): void
  sendMessage(
    event:
      | React.KeyboardEvent<HTMLInputElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void
}

const InputBox = ({
  message,
  setMessage,
  sendMessage,
}: Props): React.ReactElement => {
  return (
    <Form>
      <input
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        onKeyPress={(event) =>
          event.key === 'Enter' ? sendMessage(event) : null
        }
      />
      <button type='submit' onClick={(event) => sendMessage(event)}>
        send
      </button>
    </Form>
  )
}

export default InputBox
