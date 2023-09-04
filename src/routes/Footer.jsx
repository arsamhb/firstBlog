import React from 'react'

const Footer = () => {
  const d = new Date()
    return (
    <footer className='Footer'>
        {d.getFullYear()} Copyright
    </footer>
)
}

export default Footer