import './App.css';
import Button from './componenets/Context/Button';
import Container from './componenets/Context/Container';
import Header from './componenets/Context/Header';
import { ThemeProvider } from './context/ThemeContext';

function App() {

  return (
    <ThemeProvider>
      <Container />
    </ThemeProvider>
  )
}

export default App;
