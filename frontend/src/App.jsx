import React from 'react'
import Home from './pages/Home'
import { Routes , Route } from 'react-router-dom'
import Namkeen from './pages/Namkeen'
import Fryums from './pages/Fryums'
import Chips from './pages/Chips'
import Aboutus from './pages/Aboutus'
import Contactus from './pages/Contactus'
import Register from './pages/Register'
import Login from './pages/Login'
import Retailer from './components/Retailer'
import ProductDetails from './pages/ProductDetails'
import ApplyJob from './pages/ApplyJob'
import EmployeeList from './pages/EmployeeList'
import EmployeeDetail from './pages/EmployeeDetail'
import ApplicantList from './pages/ApplicantList'
import ApplicantDetail from './pages/ApplicantDetail'
import ProductDescription from './pages/ProductDescription'

const App = () => {
  return (
    <div>
     <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/namkeen' element={<Namkeen/>}/>
      <Route exact path='/fryums' element={<Fryums/>}/>
      <Route exact path='/chips' element={<Chips/>}/>
      <Route exact path='/aboutus' element={<Aboutus/>}/>
      <Route exact path='/contact' element={<Contactus/>}/>
      <Route exact path='/register' element={<Register/>}/>
      <Route exact path='/login' element={<Login/>}/>
      <Route exact path='/retailer' element={<Retailer/>}/>
      <Route path="/product/:slug" element={<ProductDetails/>} />
      <Route path="/product/detail/:slug" element={<ProductDescription/>} />
      <Route exact path='/job' element={<ApplyJob/>}/>
      <Route path="/employee" element={<EmployeeList />} />
      <Route path="/employee/:id" element={<EmployeeDetail />} />
      <Route path="/applicant" element={<ApplicantList />} />
      <Route path="/applicant/:id" element={<ApplicantDetail />} />
     </Routes>
    </div>
  )
}

export default App
