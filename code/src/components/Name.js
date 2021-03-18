import React from 'react'

export const UserName = ({name, setName}) => {
  
  const onNameChange = (event) => {
    setName(event.target.value)
  
  }

  return (
    <div>
      <label>What is your name?
      <input 
        type='text'
        value={name}
        onChange={(event) => {onNameChange(event)}}
        required
      />
      </label>
    </div>
  )
}