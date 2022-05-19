import React from "react";
import './styles.css';
import introImg from '../../introImg.jpeg'

const ChatIntro = () =>{
    return(
       <div className="chatIntro">
           <img src={introImg}/>
           <h1>Whatsapp Web</h1>
           <h2>Agora você pode enviar e receber mensagens sem precisar manter seu celular conectado á internet.<br />Use o Whatsapp em até quatro aparelhos conectados e um celular ao mesmo tempo.</h2>
       </div>
    )
}
export default ChatIntro;