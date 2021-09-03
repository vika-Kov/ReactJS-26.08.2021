import React, {
    useState, useEffect
} from 'react';
import {
    Button, 
    TextField, 
    List, 
    ListItem,
    ListItemText ,
} from '@material-ui/core';



export default function MessageList(){
    const [input, setInput]=useState("");
    const [name, setName] = useState("");
    const [messageList, setMessageList] = useState([{text:"Text", author:"Vika"}]);
    const [botMessage, setMessage]=useState(`Hello, Vika! I'm a Bot!`);
    const [chatList, setChatList]=useState([{id:1, name:"default"}, {id:2, name:"chat 2"}])

    const loadBotMessage = ()=>{
        setMessageList([...messageList, {text: botMessage, author: "Bot"}])
    };


    useEffect(() => {
        setTimeout(loadBotMessage,1500);
    },[botMessage])

    const handleChange = (event) => {
        setInput(event.target.value);
    }

    const handleAuthorChange = (event) => {
        setName(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setMessage(`Hello ,${name} I'm a Bot!`)
        setMessageList([...messageList, {text: input, author: name}])

    }



    return ( 
    <div>
        <form onSubmit={handleSubmit}>
            <div class="form_f"><TextField id="outlined-basic" autoFocus label="Your text" variant="outlined" value={input} onChange={handleChange}/></div>
            <div class="form_f"><TextField id="outlined-basic"  label="Author" variant="outlined" value={name} onChange={handleAuthorChange}/></div>
            <Button variant="contained" color="secondary" type="submit">Send message</Button>
        </form>
        <div class="form_ul">
            <div class="form_ul_list">
                <List >
                    {chatList.map((item, index)=>(
                                        <ListItem key={index}>
                                        <ListItemText primary={item.name} secondary={item.id} />
                                    </ListItem> 
                    ))}          
            
                </List>
            </div>
            <div class="form_ul_list">
                <ul>
                    {messageList.map((item,index)=>(
                        <li key={index}>{item.text}, author: {item.author}</li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
    )

}