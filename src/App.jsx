import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { IoGameControllerOutline } from "react-icons/io5";
import { BiMessageDetail } from "react-icons/bi";
import { MdPeopleAlt } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { MdGrain } from "react-icons/md";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { IoCallOutline } from "react-icons/io5";
import ChatBox from './chatbox';
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [isChatBoxVisible, setChatBoxVisible] = useState(false);

  const toggleChatBox = () => {
    setChatBoxVisible(!isChatBoxVisible);
  };


  return (
    <div className='app'>
      {isChatBoxVisible && <ChatBox onClose={toggleChatBox} />} {/* Render ChatBox conditionally */}
      <div className='appContainer'>
      <section className="sidebar">
          <div className="sidebarHeader" onClick={toggleChatBox}>
            <MdGrain />

            <div className="sidebarHeaderText">
              <p>
                CLICK & LET AI HELP YOU!
              </p>
            </div>
          </div>
          <div className="sidebarIcons">
            <div className="sidebarIcon">
              <IoGameControllerOutline />
            </div>
            <div className="sidebarIcon">
              <BiMessageDetail />
            </div>
            <div className="sidebarIcon">
              <MdPeopleAlt />
            </div>
            <div className="sidebarIcon">
              <IoSettingsOutline />
            </div>
            <div className="sidebarIcon">
              <IoIosHelpCircleOutline />
            </div>
            <div className="sidebarIcon">
              <IoCallOutline />
            </div>
          </div>
        </section>
        <section className="homeContainer"></section>
      </div>

    </div>
  )
}

export default App
