import './App.css';
import Button from './componenets/Context/Button';
import ThemeContext from './context/ThemeContext';

function App() {

  return (
    <ThemeContext.Provider value="dark">
      <Button />
    </ThemeContext.Provider>
  )
}

export default App;
