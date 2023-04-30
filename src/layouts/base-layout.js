import React from 'react'
import { Outlet } from 'react-router-dom';
import "./base-layout.css";

export default function BaseLayout() {
  return (
    <>
      <div className="header">
        <h4>Alpha MU</h4>
      </div>
      <div className='content'>
        <Outlet />
      </div>
    </>
  )
}
