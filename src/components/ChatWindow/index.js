import React from "react";
import './styles.css';
import SearchIcon from '@material-ui/icons/Search';
import { AttachFile } from "@material-ui/icons";
import { MoreVert } from "@material-ui/icons";

const ChatWindow = () =>{
    return(
        <div className="chatWindow">
            <div className="chatWindow-header">
                <div className="chatWindow-headerInfo">
                    <img src="https://www.w3schools.com/howto/img_avatar2.png" className="chatWindow-img"  />
                    <div className="chatWindow-name">Gaby</div>
                </div>
                <div className="chatWindow-headerbuttons">
                    <div className="chatWindow-btn">
                        <SearchIcon style={{color:' #919191'}}/>
                    </div>
                    <div className="chatWindow-btn">
                        <AttachFile style={{color:' #919191'}}/>
                    </div>
                    <div className="chatWindow-btn">
                        <MoreVert style={{color:' #919191'}}/>
                    </div>
                </div>
            </div>
            <div className="chatWindow-body"></div>
            <div className="chtWindow-footer"></div>
        </div>
    )
}

export default ChatWindow;