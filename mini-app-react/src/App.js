import { useEffect } from 'react';
import './App.css';
import { useTelegram } from './hooks/useTelegram';

function App() {
  useEffect(() => {
    tg.ready();
  }, [])

  const {onToggleButton, tg} = useTelegram();

  return (
    <div className="App">
      work
      <button onClick={onToggleButton}>toggle</button>
    </div>
  );
}

export default App;

