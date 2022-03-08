import React from 'react'
import './MenuItem.css'

function MenuItem({title}) {
  return (
    <div className='MenuItem'>
        <h4>{title}</h4> 
    </div>
  )
}

export default MenuItem