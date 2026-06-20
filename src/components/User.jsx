import React from 'react'

const User = (props) => {
  console.log(props.user)
  return (
    <div>
      {props.user.company}
    </div>
  )
}

export default User
