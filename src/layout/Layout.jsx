import React from 'react'
import Main from './Main'
import Footer from './Footer'

const Layout = () => {
  return (
    <div className={`overflow-hidden`}>
        <Main className='container min-h-screen'/>
        {/* <Footer/> */}
    </div>
  )
}

export default Layout