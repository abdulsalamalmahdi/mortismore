

import * as React from 'react';
import '../Menu.css'
export default function Menu(props) {
console.log(props)
    
  return (
  
      <ul className="ul_list">
         {props.ls.map(it=>{
           return <li className="ul_item">{it.Name}</li>
         })}
      </ul>
    
  );
}
