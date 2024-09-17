import React from 'react';
import { IoIosCloseCircleOutline } from "react-icons/io";
import './App.css'

const ChatBox = ({ onClose }) => {
    return (
        <div className='app'>
            <div className="chatBox">
                <button onClick={onClose}>
                    <IoIosCloseCircleOutline />
                </button>
                <h2>Chat Box</h2>
                {/* Add your chat box content here */}
            </div>
        </div>
    );
};

export default ChatBox;