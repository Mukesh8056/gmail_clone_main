import React,{useState} from 'react'
import InboxOutlinedIcon from '@material-ui/icons/InboxOutlined';
import StarOutlinedIcon from '@material-ui/icons/StarOutlined';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import SendIcon from '@material-ui/icons/Send';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import LabelImportantSharpIcon from '@material-ui/icons/LabelImportantSharp';
import VideocamIcon from '@material-ui/icons/Videocam';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import { IconButton } from '@material-ui/core';
import '../Sidebar/Sidebar.css'
import Modal from 'react-modal'
import TextFormatIcon from '@material-ui/icons/TextFormat';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import CloseIcon from '@material-ui/icons/Close';
import LinkIcon from '@material-ui/icons/Link';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import PhotoIcon from '@material-ui/icons/Photo';
import ScreenLockRotationIcon from '@material-ui/icons/ScreenLockRotation';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DeleteIcon from '@material-ui/icons/Delete';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Sidbar() {
    let navigate = useNavigate()
    const [modalOpen, setModalOpen] = useState(false)
    const [focus, setFocus] = useState(false)

    const [data, setData] = useState({
        topic:"",
        description:"",
        mailId:" "

    })

   const sendMail = async (e) => {
        e.preventDefault()
        const url = "http://localhost:7000/api/mail/";
        const { data: res } = await axios.post(url, data);
        navigate("/home");
        console.log(res.message);

    }


    function openModal(){
        setModalOpen(true)
    }
    function closeModal(){
        setModalOpen(false)
    }
    const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};


  return (
    <div className = " mx-2 flex flex-col p-1 bg-white ml-2 w-8 shadow-xl  ">
    <div >
        <div 
        className = "  bg-red-500 rounded-full my-7 cursor-pointer hover:scale-150 duration-700  ">
           <img 
                        onClick = {openModal}
                        src = "https://www.gstatic.com/images/icons/material/colored_icons/1x/create_32dp.png"
                        alt = "compose"
                        
                    />
                    <Modal
                        isOpen={modalOpen}
                        onRequestClose = {() => setModalOpen(false)}
                        shouldCloseOnOverlayClick={false}
                        style={{
                        overlay: {
                        width: 680,
                        height: "auto",
                        backgroundColor: "rgba(0,0,0,0.8)",
                        zIndex: "1000",
                        top: "50%",
                        left: "50%",
                        marginTop: "-250px",
                        marginLeft: "-350px",
                        borderRadius: "none"
                    },
                    content: {
                        margin: 0,
                        padding: 0,
                        border: "none"
                    }
                    }}
              >
                  <div className = "modalContainer">
                      <div className = "modalContainerTop">
                            <div className = "modalHeader">
                      <p className=' text-2xl pl-5 flex-row'>New Message</p>
                      <div 
                      className = "modalHeaderIcons">  
                          <IconButton 
                          onClick = {closeModal}
                          className='rounded-full hover:bg-white   '
                          >
                              <CloseIcon  />
                          </IconButton>
                      </div>
                  </div>
                  <div onClick = {() => setFocus(true)} className = "modalRecipient">
                      <input
                        style = {{
                            display: "none"
                        }} 
                      />
                      <p>{focus ? "To" : "Recipients"}</p>
                      <input 
                       value={data.mailId}
						required
                        name='mailId'
                         onChange={handleChange}
                        type = "text"
                      />
                  </div>
                  <div className = "modalRecipient">
                      <input 
                      name='topic'
                        onChange={handleChange}
						value={data.topic}
                        type = "text"
                        placeholder = "Title"
                      />
                  </div>
                  <div className = "modalRecipient">
                      <input 
                      name='description'
                        onChange={handleChange}
						value={data.description}
                        type = "text"
                        placeholder = "Description"
                      />
                  </div>
                </div>
                    <div className = "modalContainerBottom">
                        <div className = "modalBottom">
                        <button
                         onClick = {sendMail}
                         >Send</button>
                        <TextFormatIcon />
                        <AttachFileIcon />
                        <LinkIcon />
                        <SentimentSatisfiedIcon />
                        <PhotoIcon />
                        <ScreenLockRotationIcon />
                        <div className = "modalBottomLast">
                            <MoreVertIcon />
                            <DeleteIcon />
                        </div>
                      </div>
                    </div>
                  
                  </div>
                  
              </Modal>
        </div>
        <div className = " my-3 rounded-full hover:bg-gray-500  ">
            <InboxOutlinedIcon fontSize='medium' />
        </div>
        <div className = " my-3 rounded-full hover:bg-gray-500 ">
            <StarOutlinedIcon  fontSize='medium' />
        </div>
        <div className = "my-3 rounded-full hover:bg-gray-500 ">
            <WatchLaterIcon  fontSize='medium' />
        </div>
        <div className = "my-3 rounded-full hover:bg-gray-500 ">
            <SendIcon  fontSize='medium' onClick = {openModal} />
        </div>
        <div className = "my-3 rounded-full hover:bg-gray-500 ">
            <InsertDriveFileIcon  fontSize='medium'/>
        </div>
        <div className = "my-3 rounded-full hover:bg-gray-500 ">
            <LabelImportantSharpIcon  fontSize='medium' />
        </div>
    </div>
    <div className = " my-24">
        <div className = "sidebarOptions">
            
                <div  className = "rounded-full hover:bg-gray-500 ">
                <VideocamIcon fontSize='medium'  />
            </div>
            <div className = " rounded-full hover:bg-gray-500">
                <KeyboardIcon  fontSize='medium' />
            </div>
    </div>
    <div className = "sidebarBottomLast">
        <div className = "sidebarOptions">
           
            
        </div>
    </div>
</div>
</div>
  )
}

export default Sidbar