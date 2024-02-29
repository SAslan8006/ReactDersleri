import './App.css';
import Button from './componenets/Context/Button';
import Header from './componenets/Context/Header';
import { ThemeProvider } from './context/ThemeContext';

function App() {

  return (
    <ThemeProvider>
      <Header />
      <hr />
      <Button />
    </ThemeProvider>
  )
}

export default App;
