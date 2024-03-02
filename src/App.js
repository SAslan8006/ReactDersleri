import './App.css';
import Button from './componenets/Context/Button';
import Container from './componenets/Context/Container';
import Header from './componenets/Context/Header';
import { ThemeProvider } from './componenets/Context/context/ThemeContext';
import { UserProvider } from './componenets/Context/context/UserContext';

function App() {

  return (
    <ThemeProvider>
      <UserProvider>
        <Container />
      </UserProvider>
    </ThemeProvider>
  )
}

export default App;
