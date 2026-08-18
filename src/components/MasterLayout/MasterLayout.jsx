import React from 'react'
import { Outlet } from 'react-router-dom';
import './Master.css'
import SideBar from '../SideBar/SideBar';
export default function MasterLayout() {
  return (
    <>
    <div className='container-fluid'>
      <div className="row">
        <div className="col-2 min-vh-100 p-3 d-flex justify-content-center text-center">
          <SideBar/>
        </div>
        <div className="col-10">
          <Outlet/>
          </div>
      </div>
    </div>
    </>
  )
}
