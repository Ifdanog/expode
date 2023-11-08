import Home from '../src/pages/Home'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import AccountTypes from './pages/AccountTypes'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/account-types' element={<AccountTypes />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App