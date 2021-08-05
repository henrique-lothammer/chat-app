import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { JoinContainer } from './style'

const Join = (): React.ReactElement => {
  const [name, setName] = useState('')
  const [room, setRoom] = useState('')

  return (
    <div className='wrapper small'>
      <JoinContainer>
        <h1>Join</h1>

        <input
          placeholder='Name'
          className='joinInput'
          type='text'
          onChange={(event) => setName(event.target.value)}
        />

        <input
          placeholder='Room'
          className='joinInput mt-20'
          type='text'
          onChange={(event) => setRoom(event.target.value)}
        />

        <Link
          onClick={(e) => (!name || !room ? e.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button className='button mt-20' type='submit'>
            Sign In
          </button>
        </Link>
      </JoinContainer>
    </div>
  )
}

export default Join
