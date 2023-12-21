// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const inputRef = React.useRef()
  const [username, setUsername] = React.useState('')

  const handleSubmit = e => {
    e.preventDefault()
    onSubmitUsername(username)
  }

  const handleChange = e => {
    const value = e.target.value
    setUsername(value.toLowerCase())
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          onChange={handleChange}
          ref={inputRef}
          id="username"
          name="username"
          type="text"
          value={username}
        />
      </div>
      <button id="submit" type="submit">
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
