import React from 'react'
import Home from './skcet/Home'
import Login from "./skcet/login"
import Signup from './skcet/Signup'

const func1 = () => {
  if (window.location.pathname=== "/Home")
  {
    return <Home/>
  }
}
const func2 = () => {
  if (window.location.pathname=== "/login")
  {
    return <Login/>
  }
}
const func3 = () => {
  if (window.location.pathname=== "/")
  {
    return <Signup/>
  }
}
const App = () => {
  return (
    <div className='ul container'>
      {func1()}
      {func2()}
      {func3()}
    </div>
  )
}

export default App