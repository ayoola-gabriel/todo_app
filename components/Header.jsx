'use client'

import React from 'react'
import { BookCheck } from 'lucide-react'

const Header = () => {
  return (
    <div className='header'>
        <BookCheck size={50} />
        <h1>TODO</h1>
    </div>
  )
}

export default Header