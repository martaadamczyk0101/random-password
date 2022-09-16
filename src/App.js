import './App.css';
import './Password.css'
import './Navbar.css'
import './info.css'
import './slider.css'
import './options.css'
import Password from './Password';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
        <Navbar></Navbar>
        <Password></Password>
    </div>
  );
}

export default App;
