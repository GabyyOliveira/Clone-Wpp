import React from "react";
import './styles.css'

export default () =>{
    return(
        <div className="chatListItem">
            <img className="chatListItem-avatar" src='https://www.w3schools.com/howto/img_avatar2.png'/>
            <div className="chatListItem-lines">
                <div className="chatListItem-line">
                    <div className="chatListItem-name">Gaby</div>
                    <div className="chatListItem-date">19:00</div>
                </div>
                <div className="chatListItem-line">
                    <div className="chatListItem-lastMsg">
                        <p>Opa, tudo bem? quero flara com voce urgentemente meu amor</p>
                    </div>
                </div>
            </div>
        </div>
    )
}