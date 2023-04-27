import React from 'react'
import { BrowserRouter as Router,  } from 'react-router-dom'
import Header from './Components/Header/Header'
import Content from './Components/Content/Content'
import Footer from './Components/Footer/Footer'


const App : React.FC = ( ) => {
  return (
      <div className="App">
        <Router>
            <Header/>
            <Content/>  
            <Footer/>
        </Router>
      </div>
  )
}

export default App;