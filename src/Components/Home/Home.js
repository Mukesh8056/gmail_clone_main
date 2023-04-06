import React from 'react'
import Navbar  from '../Navbar/Navbar';
import Sidbar from '../Sidebar/Sidbar';
import TopBar from '../TopBar/TopBar';
import Message from '../Message/Message';


function Home() {
  return (<div>
    <Navbar />
    <Sidbar />
    <TopBar />
    <Message />
    </div>
  )
}

export default Home;


