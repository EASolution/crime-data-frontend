import React from 'react'
import { Link } from 'react-router'

const Header = () => {
  const active = {
    borderBottom: '5px solid #ff5e50',
    fontWeight: 'bold',
  }

  return (
    <header className='py3 bg-navy white'>
      <div className='md-flex items-center px2 md-px3'>
        <div className='flex-auto'>
          <div className='h6 caps bold gray-blue'>Federal Bureau of Investigation</div>
          <div className='h2 serif line-height-3'>Crime Data Explorer</div>
        </div>
        <div className='mxn1 mt1 md-m0'>
          <Link
            to='/explorer/ohio/murder'
            className='mx1 py-tiny white'
            activeStyle={active}
          >
            Explorer
          </Link>
          <Link
            to='/downloads-and-docs'
            className='mx1 py-tiny white'
            activeStyle={active}
          >
            Downloads & Documentation
          </Link>
          <Link
            to='/about'
            className='mx1 py-tiny white'
            activeStyle={active}
          >
            About
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
