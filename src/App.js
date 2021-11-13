import logo from './logo.svg';
import './App.css';
import { Outlet, Link } from 'react-router-dom';
import Menu from './routes/dropdown'
import { useRef, useState, useEffect } from 'react';
import artists from './assets/artist.json'
import{ReactComponent as Zombie} from './assets/zombie2.svg'
import gsap from 'gsap'
function App() {
const ls = artists.ls;
const zWrapper = useRef(null);


  const [toggle, setToggle]= useState(false)
 
 const tl = gsap.timeline({ defaults: { ease: 'power3.inOut' } });
 const tl_2 =  gsap.timeline({ repeat:-1 , defaults: { ease: 'power3.inOut' } });
  useEffect(() => {
    const [svgElements] = zWrapper.current.children;

    const hand = svgElements.getElementById('hand');
    const window_1 = svgElements.getElementById('window_up_1');
    const window_2 = svgElements.getElementById('window_up_2');
    const window_3 = svgElements.getElementById('window_up_3');
    



    gsap.set([hand], {autoAlpha: 0,opacity: 0 });
    console.log(hand)
       tl_2.fromTo(window_1, {autoAlpha:0 }, { duration: 0.5, autoAlpha: 1, opacity: 1 })
       .fromTo(window_2, {autoAlpha:0 }, { duration: 0.6, autoAlpha: 1, opacity: 1 }, '50%')
       .fromTo(window_3, {autoAlpha:0 }, { duration: 0.6, autoAlpha: 1, opacity: 1 }, '50%')

      tl.fromTo(hand, { y: '+=350' }, { duration: 1.5, y: '-=350', autoAlpha: 1, opacity: 1 })
   
  },[]);

  const onEnter = ()=>{
    
    tl.play()
  }
  const onLeave = ()=>{
    tl.reverse()
  }

  const options = [
    'one', 'two', 'three'
  ];
  const defaultOption = options[0];
  return (
    <div className="App">
       <Link className='logo_link' to="/home">
         <div  ref={zWrapper}>
          <Zombie  onMouseEnter={() => onEnter()} onMouseLeave={() => onLeave()}  ></Zombie>
         </div>
         
       {/* <img className="logo" src={'./logo512.png'} alt="this is car image" />  */}
       </Link>
       <nav className="nav" >
        <Link className='link' to="/exibtions">EXIBITIONS</Link> |{' '}
        <Link className='link list' onClick={()=> setToggle(!toggle)} to="/artist">Artists
        {toggle? <Menu ls={ls} />:null}
        </Link>
        <Link className='link' to="/crafts">Crafts</Link>
        <Link className='link' to="/links">Links</Link>
      </nav>
      <Outlet/>
    </div>
  );
}

export default App;
