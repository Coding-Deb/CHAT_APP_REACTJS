import { getDatabase,onChildAdded,push,ref,set } from "firebase/database";
import './App.css';
import { useEffect, useState } from 'react'
import SendIcon from '@mui/icons-material/Send';


function App() {
  const [Name, setName] = useState("")
  const [Chats, setChats] = useState([

  ]);
  const [msg, setmsg] = useState('');

  const db = getDatabase();
  const ChatListRef = ref(db, 'chats');

  const updateheight=()=>{
    const el=document.getElementById("chat");
    if (el) {
      el.scrollTop=el.scrollHeight;      
    }
  }

  useEffect(() => {
    onChildAdded(ChatListRef, (data) => {
       setChats(Chats=>[...Chats,data.val()]);
      setTimeout(() => {
        updateheight();
      },100);
  });
  }, [])  

  const sendChat = () => {
    const chatRef = push(ChatListRef);
    set(chatRef, {
       Name, message: msg 
    });
    setmsg('');
  }
  return (
    <div>
      {Name ? null : <div className="mainuser">
        <h1>
          Please Enter UserName
        </h1>
        <input type="text" placeholder="Enter Username" onBlur={e => setName(e.target.value)} className="nameinp"/>
      </div>}
      {Name ? <div>
        <h1>
          User: {Name}
        </h1>
        <div id="chat" className="chat-container">
          {Chats.map((c,i)=> (<div key={i} className={`container ${c.Name === Name ? 'me' : ""}`}>
            <p className="chatbox">
              <h3>
                {c.Name} <br />
              </h3> 
              <b>
                {c.message}
              </b>
            </p>
          </div>))}
        </div>
        <div className="btn">
          <input type="text" placeholder="Enter Your Chat" onInput={e => setmsg(e.target.value)} value={msg} />
          <button onClick={e => sendChat()}>
          <SendIcon fontSize="large" className="icon"/>
          </button>
        </div>
      </div> : null}
    </div>
  );
}

export default App;
