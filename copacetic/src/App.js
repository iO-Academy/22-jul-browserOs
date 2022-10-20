import './App.css';
import MainPage from './Components/MainPage';
import ThemeContext from './Contexts/ThemeContext';
import { useState } from 'react';


function App() {

  const [theme, setTheme] = useState('cuttle')

  return (
    <ThemeContext.Provider value={{theme: theme, setTheme: setTheme}}>
      <MainPage />
    </ThemeContext.Provider>
  );
}

export default App;
