const { createContext, useState, useContext } = require("react");

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
    const [messages, setMessages] = useState([
        { message: "selam", fromMe: true },
        { message: "naber", fromMe: false },
    ]);
    const values = {
        messages,
        setMessages,
    }
    return <ChatContext.Provider value={values}>{children}</ChatContext.Provider>
}

export const useChat = () => {
    useContext(ChatContext);
}