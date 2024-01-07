import { useEffect, useRef, useState } from "react";
import Message from "./Message";
import SendMessage from "./SendMessage";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";

const style = {
  main: `flex flex-col p-[10px]`,
};

const Chats = () => {
  const [messages, setMessages] = useState([]);
  const scroll = useRef();

  console.log(messages);
  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (querySnapShot) => {
      let _messages = [];
      querySnapShot.forEach((doc) => {
        _messages.push({ ...doc.data(), id: doc.id });
      });

      setMessages(_messages);
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <main className={style.main}>
        {messages &&
          messages.map((message) => (
            <Message key={message?.id} message={message} />
          ))}
      </main>
      <SendMessage scroll={scroll} />
      <span ref={scroll}></span>
    </>
  );
};
export default Chats;
