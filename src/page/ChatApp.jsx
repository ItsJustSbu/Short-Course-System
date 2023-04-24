import { useState, useEffect } from "react";
import axios  from "axios";

function ChatApp(){

    const [messages, setMessages] = useState([]);
    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');

    useEffect(()=>{
            (async () =>{
                const response = axios.get('http://localhost:3000/message');
                setMessages((await response).data);
            })()
            
            
        },[]);

        async function handleSubmit(event){
            event.preventDefault();
            
            try{
                await axios.post('http://localhost:3000/message',{username, message});

                setUsername('');
                setMessage('');

                const response = await axios.get('http://localhost:3000/message');
                setMessages(response);
            }catch(e){
                console.log(e)
            }
        }

        return(
            <div>
      <h1>Chat App</h1>
      <ul>
        {messages.map((message) => (
          <li key={message._id}>
            {message.username}: {message.message}
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <input
          type="text"
          placeholder="Message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
        );

    }



export default ChatApp;