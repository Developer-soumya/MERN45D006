import React from 'react'
import { Outlet } from 'react-router'

function Course() {
  return (
    <div>Course
        <Outlet/>
    </div>
  )
}

export default Course