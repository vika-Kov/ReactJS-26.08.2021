import React, {
    useState, useEffect
} from 'react'


export default function MessageList(){
    const [input, setInput]=useState("");
    const [name, setName] = useState("");
    const [messageList, setMessageList] = useState([{text:"Text", author:"Vika"}]);
    const [botMessage, setMessage]=useState(`Hello, Vika! I'm a Bot!`)

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
            <input class="placeholder__text" placeholder="Your text" value={input} onChange={handleChange}/>
            <input class="placeholder__text" placeholder="Author" value={name} onChange={handleAuthorChange}/>
            <button class="submit__button" type="submit">Send message</button>
        </form>
        <ul>
            {messageList.map((item,index)=>(
                <li key={index}>{item.text}, author: {item.author}</li>
            ))}
        </ul>
    </div>
    )

}