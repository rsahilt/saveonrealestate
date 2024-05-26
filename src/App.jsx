import React from 'react'


import Background from './Components/Background/Background'
import Header from './Components/Header/Header'
import Content from './Components/Content/Content'


const App = () => {
  return (
    <>
      <Header />

      <Background />

      <div>
        <Content />
      </div>
      
    </>
    
  )
}

export default App