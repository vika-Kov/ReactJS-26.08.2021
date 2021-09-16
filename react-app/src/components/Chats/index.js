import {  useEffect, useCallback } from "react";
import {
  useParams,
  useHistory,
  useLocation,
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Message } from "../Message";
import { AUTHORS } from "../../utils/constants";
import { Form } from "../Form";
import { ChatList } from "../ChatList";
import { addChat, deleteChat } from "../../store/chats/actions";
import { addMessage } from "../../store/messages/actions";
// import { selectIfChatExists } from "../../store/chats/selectors";

// const initialMessages = {
//   "chat-1": [
//     { text: "First message", author: "human", id: "mess-2" },
//     { text: "Second message", author: "human", id: "mess-1" },
//   ],
//   "chat-2": [],
// };

const initialChats = [
  { name: "Chat1", id: "chat-1" },
  { name: "Chat2", id: "chat-2" },
];
const initialMessages = initialChats.reduce((acc, chat) => {
  acc[chat.id] = [];

  return acc;
}, {});

console.log(initialMessages);

function Chats(props) {
  console.log(props);
  const { chatId } = useParams();
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();

  console.log(location);

  // const [messages, setMessages] = useState(initialMessages);
  // const [chats, setChats] = useState(initialChats);

  const messages = useSelector((state) => state.messages.messages);
  const chats = useSelector((state) => state.chats.chats);

  // const selectChatExists = useMemo(() => selectIfChatExists(chatId), [chatId]);

  // const chatExists = useSelector(selectChatExists);

  const sendMessage = useCallback(
    (text, author) => {
      dispatch(addMessage(chatId, text, author));
    },
    [chatId]
  );

  // const sendMessage = useCallback(
  //   (message) => {
  //     setMessages((prevMess) => ({
  //       ...prevMess,
  //       [chatId]: [...prevMess[chatId], message],
  //     }));
  //   },
  //   [chatId]
  // );

  useEffect(() => {
    let timeout;
    const curMess = messages[chatId];

    if (!!chatId && curMess?.[curMess.length - 1]?.author === AUTHORS.HUMAN) {
      timeout = setTimeout(() => {
        sendMessage({
          text: "I am bot",
          author: AUTHORS.bot,
          id: `mess-${Date.now()}`,
        });
      }, 3000);
    }

    return () => clearTimeout(timeout);
  }, [messages]);

  const handleAddMessage = useCallback(
    (text) => {
      sendMessage({
        text,
        author: AUTHORS.HUMAN,
        id: `mess-${Date.now()}`,
      });
    },
    [chatId, sendMessage]
  );
  const handleAddChat = useCallback(
    (name) => {
      dispatch(addChat(name));
    },
    [dispatch]
  );

  const handleDeleteChat = useCallback(
    (id) => {
      dispatch(deleteChat(id));

      if (chatId !== id) {
        return;
      }

      if (chats.length === 1) {
        history.push(`/chats/${chats[0].id}`);
      } else {
        history.push(`/chats`);
      }
    },
    [chatId, dispatch, chats, history]
  );


  return (
    <div className="App">
      <ChatList chats={chats} 
        onAddChat={handleAddChat}
        onDeleteChat={handleDeleteChat} />
      {!!chatId && (
        <>
          {messages[chatId].map((message) => (
            <Message
              key={message.id}
              text={message.text}
              author={message.author}
              id={message.id}
            />
          ))}
          <Form onSubmit={handleAddMessage} />
        </>
      )}
    </div>
  );
}

export default Chats;
