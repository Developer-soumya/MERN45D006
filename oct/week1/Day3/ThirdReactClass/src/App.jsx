
import { Route, Routes } from 'react-router'
import './App.css'
import Home from './component/Home'
import About from './component/About'
import GetId from './component/GetId'
import Java from './component/Java'
import Course from './component/Course'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/:id' element={<GetId />}></Route>
        <Route path='/course' element={<Course/>}>
            <Route path='java' element={<Java/>}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
