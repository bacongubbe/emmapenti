import Link from 'next/link'
import React from 'react'
import MenuBar from './MenuBar'

const Navigation = () => {
  return (
    <nav className='flex justify-between'>
        <Link href={'/'} ><h1>Emma Penti</h1></Link>
    <MenuBar />
    </nav>
  )
}

export default Navigation