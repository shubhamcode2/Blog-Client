import React from 'react'

const Login = () => {
  return (
    <div>

      <h2>Login</h2>
      <form action="" method="post">
        <input type="email" name="email" id="email" placeholder='Enter email' />
        <input type="password" name="password" id="password" placeholder='enter password' />

        <button type="submit">Submit</button>
      </form>

    </div>
  )
}

export default Login