import logo from './logo.svg';
import './App.css';
import { Outlet, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
       <Link className='logo_link' to="/home">
       <img className="logo" src={'./logo512.png'} alt="this is car image" /> 
       </Link>
       <nav className="nav" >
        <Link className='link' to="/exibtions">EXIBITIONS</Link> |{' '}
        <Link className='link' to="/artist">Artists</Link>
        <Link className='link' to="/crafts">Crafts</Link>
        <Link className='link' to="/links">Links</Link>
      </nav>
      <Outlet/>
    </div>
  );
}

export default App;
