
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import SignIn from './SignIn'
import SignUP from './SignUp'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/' element={<SignIn></SignIn>}></Route>
          <Route path='/signup' element={<SignUP></SignUP>}></Route>
          

        </Routes>

      </BrowserRouter>

    </>
  )


}

export default App
