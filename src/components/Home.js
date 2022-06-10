import React from 'react'
import { Container } from 'react-bootstrap'

function Home() {
  return (
    <>
      <div className="container">
        <div className='row'>
          <img src="https://lh3.googleusercontent.com/fYmgEGbSVGF88eyE0XljoO2TqUeNegQrw0aeGLp833L0p0NfCn0zt0WDYWtB3f4KvhhDs4REQgQnAA" height="400px" width="300px"></img>
        </div>
        <br />
        <div className='row align-items-center'>
          Welcome
        </div>
        <br />
        <div className='row'>
        <p>
          Lorem Ipsum is probably the most popular dummy text generator out there. When analyzing a website template or theme, you probably saw the Latin filler text that gave structure to the page. This was almost certainly generated with Lorem Ipsum or a similar tool. It is a simple dummy text generator where you can specify how many words of filler text you need. You can download Lorem Ipsum as an add-on for Firefox, which is quite convenient for web designers.
        </p>
        </div>
      </div>
    </>
    
  )
}

export default Home