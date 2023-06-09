import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    const header = { 
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Arial"
     }
  return (
    <div style={header}>
      <h2>Header</h2>
      <div>
        <Link to="/">Home</Link> &nbsp;
        <Link to="/about">About</Link> &nbsp;
        <Link to="/dashboard">Dashboard</Link> &nbsp;
        <Link to="/stopwatch">Task</Link> &nbsp;
      </div>
    </div>
  )
}

export default Header