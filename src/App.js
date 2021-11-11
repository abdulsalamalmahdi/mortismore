import logo from './logo.svg';
import './App.css';
import { Outlet, Link } from 'react-router-dom';
import Menu from './routes/dropdown'
import { useRef, useState } from 'react';

function App() {

  const [toggle, setToggle]= useState(false)
  const menu = useRef(null);
  const options = [
    'one', 'two', 'three'
  ];
  const defaultOption = options[0];
  return (
    <div className="App">
       <Link className='logo_link' to="/home">
       <img className="logo" src={'./logo512.png'} alt="this is car image" /> 
       </Link>
       <nav className="nav" >
        <Link className='link' to="/exibtions">EXIBITIONS</Link> |{' '}
        <Link className='link list' onClick={()=> setToggle(!toggle)} to="/artist">Artists
        {toggle? <Menu ref={menu}/>:null}
        </Link>
        <Link className='link' to="/crafts">Crafts</Link>
        <Link className='link' to="/links">Links</Link>
      </nav>
      <Outlet/>
    </div>
  );
}

export default App;
