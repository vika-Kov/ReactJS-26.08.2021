import { useState, useEffect, useCallback, useMemo } from "react";
import {
  useParams,
  useRouteMatch,
  useHistory,
  useLocation,
  Redirect,
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { Message } from "../Message";
import { AUTHORS } from "../../utils/constants";
import { Form } from "../Form";
import { ChatList } from "../ChatList";
import { addChat, deleteChat } from "../../store/chats/actions";
import { addMessageWithReply } from "../../store/messages/actions";
import { selectIfChatExists } from "../../store/chats/selectors";

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

console.log("Initial messages: ", initialMessages);

function Chats(props) {
  const { chatId } = useParams();
  // const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();

  // console.log(location);
  // const [messages, setMessages] = useState(initialMessages);
  // const [chats, setChats] = useState(initialChats);

  const messages = useSelector((state) => state.messages.messages);
  const chats = useSelector((state) => state.chats.chats);

  const selectChatExists = useMemo(() => selectIfChatExists(chatId), [chatId]);

  const chatExists = useSelector(selectChatExists);

  const sendMessage = useCallback(
    (text, author) => {
      console.log("chatId ", chatId);
      console.log("text ", text);
      console.log("author ", author);
      dispatch(addMessageWithReply(chatId, text, author));
    },
    [chatId]
  );

  const handleAddMessage = useCallback(
    (text) => {
      sendMessage(text, AUTHORS.HUMAN);
    },
    [sendMessage]
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
      <ChatList
        chats={chats}
        onAddChat={handleAddChat}
        onDeleteChat={handleDeleteChat}
      />
      {!!chatId && chatExists && (
        <>
          {(messages[chatId] || []).map((message) => (
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
