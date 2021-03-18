import logo from './logo.svg';
import './App.css';
import { Button } from '@material-ui/core';
import green from '@material-ui/core/colors/green';

function App() {
  const grn = green['A400'];
  return (
    <div className="App">
      <header className="App-header">
        <Button variant="contained" color="grn">Connect with Spotify</Button>
      </header>
    </div>
  );
}

export default App;
