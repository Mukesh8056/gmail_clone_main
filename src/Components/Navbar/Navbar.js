import React from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import DialpadOutlinedIcon from '@material-ui/icons/DialpadOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Gmail from '../img/gmail.png'
import {Link} from 'react-router-dom'


function Navbar() {
  return (
    <container className="  w-full  mt-10 h-10">
     <div className='flex justify-between item-center w-full md:w-full  mt-4 shadow-2xl '>

<div className = " flex justify-start mx-2 mr-4 ">
               <div><MenuIcon fontSize='large' className='  my-3 cursor-pointer rounded-full hover:bg-gray-500 ' />
            </div> <img src = {Gmail} 
                alt = "logo"
                className=' w-44 h-10 '
                /></div> 
            <div className = "headerMiddle">
                <div className = "header__SearchContainer bg-gray-200">
                    <SearchIcon className=' mx-2 cursor-pointer' fontSize='large' />
                    <input 
                        type = "text"
                        placeholder = "   Search"
                        className=' h-9 w-96 bg-gray-200 border-none'
                    />
                    <ArrowDropDownIcon cursor-pointer />
                </div>
            </div>
            <div className = " w-30 ">
                <div className = "headerRightIcons">
                    <HelpOutlineOutlinedIcon  className=' mx-3 cursor-pointer rounded-full hover:bg-gray-500 ' fontSize='medium' />
                    <SettingsOutlinedIcon  className=' mx-3 cursor-pointer rounded-full hover:bg-gray-500 ' fontSize='medium' />
                    <DialpadOutlinedIcon   className=' mx-3 cursor-pointer rounded-full hover:bg-gray-500 ' fontSize='medium'/>   
                    <Link to="/">
                    <AccountCircleIcon className=' mx-3 cursor-pointer rounded-full hover:bg-gray-500 ' fontSize='medium'/> 
                    </Link></div> 
                
            </div>
      </div></container>
  )
}

export default Navbar