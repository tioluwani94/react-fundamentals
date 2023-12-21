// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const inputRef = React.useRef()
  const [error, setError] = React.useState(null)
  const [disabled, setDisabled] = React.useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    const username = inputRef.current.value
    onSubmitUsername(username)
  }

  const handleChange = e => {
    const value = e.target.value
    const isValid = value === value.toLowerCase()

    setError(isValid ? null : 'Username must be lower case')
    setDisabled(isValid ? false : true)
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
        />
      </div>
      <div role="alert">{error}</div>
      <button disabled={disabled} id="submit" type="submit">
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
