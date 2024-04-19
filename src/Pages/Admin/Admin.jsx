import React from 'react'
import './Admin.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import {Routes, Route} from 'react-router-dom'
import ListProduct from '../../Components/ListProduct/ListProduct'
import AddProductAdmin from '../../Components/AddProduct/AddProductAdmin'




const Admin = () => {
  return (
    <div className='admin'>
        <Sidebar />
        <Routes>
            <Route path='/addproduct' element={<AddProductAdmin />} />
            <Route path='/listproduct' element={<ListProduct />} />
        </Routes>
    </div>
  )
}

export default Admin