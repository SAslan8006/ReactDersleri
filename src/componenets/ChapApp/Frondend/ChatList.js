import styles from "./styles.module.css";
import ScrollableFeed from "react-scrollable-feed";
import ChatItem from "./ChatItem";
import { useChat } from "./context/ChatContext";

function ChatList() {
    const { messages } = useChat();

    return (
        <div className={styles.chatlist}>
            {messages.map((item, key) => (
                <ChatItem key={key} item={item} />
            ))}
        </div>
    );
}

export default ChatList;