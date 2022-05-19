import React ,{useState, useEffect} from 'react';
import './App.css';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search'
import ChatListItem from './components/ChatListItem';
import ErrorIcon from '@material-ui/icons/Error';
import ChatIntro from './components/ChatIntro';


const App = () =>{

  const [chatList, setChatList] = useState([{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}])
  const [activeChat, setActiveChat] = useState({});
  
  return(
    <div className='app-window'>
      <div className='sidebar'>
        <header>
          <img className="header-avatar" src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
          <div className='header-buttons'>
            <div className='header-btn'>
              <DonutLargeIcon style={{color: '#919191'}} />
            </div>
            <div className='header-btn'>
              <ChatIcon style={{color: '#919191'}} />
            </div>
            <div className='header-btn'>
              <MoreVertIcon style={{color: '#919191'}} />
            </div>
          </div>
        </header>
        <div className='barra'>
            <ErrorIcon fontSize='large' style={{color: '#53BDEB'}} />
          <div className='barra-text'>
            <p>Projeto Clone App Whatsapp<br /> <a href="">Ativar notificações na átrea de trabalho</a></p>
            
          </div>
        </div>
        <div className='search'>
          <div className='search-input'>
            <SearchIcon fontSize='small' style={{color: '#919191'}}/>
            <input type="search" placeholder="Procurar ou começar uma nova conversa" />
          </div>
        </div>
        <div className='chatList'>
          {chatList.map((item, key)=>(
            <ChatListItem key={key} />
          ))}
        </div>
      </div>
      <div className='contentarea'>
        <ChatIntro />
      </div>
    </div>
  )
}

export default App;