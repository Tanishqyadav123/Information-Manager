import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import HomeForm from './Components/HomeForm'
import Navbar from './Components/Navbar'
import Allusers from './Components/Allusers'
import Edituser from './Components/edituser'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
      
       <Router>
          <Navbar/>
          <Routes>
              <Route  path='/' element= {<HomeForm/>} />
              <Route  path='/allusers' element= {<Allusers/>} />
              <Route  path='/:id'element = {<Edituser/>} />
              <Route  path='*' element= {<h1>Error 404 : page not found</h1>} />
          </Routes>
         
       </Router>


    </>
  )
}

export default App
