import React from 'react'
import Sidebar from './Sidebar'
import Calenderbox from './Calenderbox'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Add from './Add';
import RightSidebar from './RightSidebar';


export default function Dashboard() {
  return (
    <div>
      <Sidebar />
      {/* <Calenderbox /> */}
      <Add/>
      <RightSidebar/>
    </div>
  )
}
