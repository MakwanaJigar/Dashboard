import React from 'react'
import './style.css'

const Sidebar = () => {
  return (
    <>
    {/* <div className='bg-light sidebar p-2'> */}
      <div className='m-2'>
        <i className='fa fa-bootstrap-fill  me-2 fs-4'></i>
        <span className='brand-name fs-4 '>Sidebar</span>
      </div>
      <hr className='text-dark'/>
      <div className='list-group list-group-flush'>
        <a className='list-group-item py-2  ' >
          <i className='fa fa-gauge fs-4 me-'></i>
          <span>Dashboard</span>
        </a>
         <a className='list-group-item py-2 ' >
          <i className='fa fa-home fs-4 me-2'></i>
          <span className='fs-5'>Home</span>
        </a>
        <a className='list-group-item py-2 ' >
          <i className='fa fa-home fs-4 me-2'></i>
          <span className='fs-5'>Home</span>
        </a>
        <a className='list-group-item py-2 ' >
          <i className='fa fa-home fs-4 me-2'></i>
          <span className='fs-5'>Home</span>
        </a>
        <a className='list-group-item py-2 ' >
          <i className='fa fa-home fs-4 me-2'></i>
          <span className='fs-5'>Home</span>
        </a>
        <a className='list-group-item py-2 ' >
          <i className='fa fa-home fs-4 me-2'></i>
          <span className='fs-5'>Home</span>
        </a>
        <a className='list-group-item py-2 ' >
          <i className='fa fa-home fs-4 me-2'></i>
          <span className='fs-5'>Home</span>
        </a>
      </div>
     
    {/* </div> */}
    </>
  )
}

export default Sidebar
