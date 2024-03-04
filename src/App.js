import { useEffect, useState } from 'react';
import './App.css';
import { ChatProvider } from './componenets/ChapApp/Frondend/context/ChatContext';
import Container from './componenets/ChapApp/Frondend/Container';

function App() {

  return (
    <ChatProvider>
      <Container />
    </ChatProvider>
  )
}

export default App;
