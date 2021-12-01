

import * as React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Menu.css'
import $ from 'jquery'
import { FaSkull } from "react-icons/fa";

export default function Menu() {

  const [ls, setLs] = useState([]);

  const getData =async ()=>{
   await fetch('./ex.json',{
      headers:{
        "Content-Type": "application/json",
        Accept: "application/json",
      }
    }).then((res)=>{
      console.log(res);
      return res.json();

    }).then(js=>{
      setLs(js.feeds);
      console.log(ls)
    })
  }

  useEffect(()=>{
    getData() 
    let maxHeight = 600;
$(function(){
   
  $(".drop").hover(function() {
  
       const $container = $(this),
           $list = $container.find("ul"),
           $anchor = $container.find("a"),
           height = $list.height() * 1.1,       
           multiplier = height / maxHeight;   

           $container.data("origHeight", $container.height());
      

           $anchor.addClass("hover");
      

           $list
          .show()
          .css({
              paddingTop: $container.data("origHeight")
          });
      

          if (multiplier > 1) {
          $container
              .css({
                  height: maxHeight,
                  overflow: "hidden"
              })
              .mousemove(function(e) {
                  var offset = $container.offset();
                  var relativeY = ((e.pageY - offset.top) * multiplier) - ($container.data("origHeight") * multiplier);
                  if (relativeY > $container.data("origHeight")) {
                      $list.css("top", -relativeY + $container.data("origHeight"));
                  };
              });
      }
      
  }, function() {
  
      const $el = $(this);
      
      $el
          .height($(this).data("origHeight"))
          .find("ul")
          .css({ top: 0 })
          .hide()
          .end()
          .find("a")
          .removeClass("hover");
  
  });  
  
});
  }, [])

 

  return (
  
   
    <div className="drop"><FaSkull></FaSkull>
    <ul className="subItems">
      <div className="label">artists</div>
    {ls.map((it, i)=>{
      return <li key={i} className="sub_item"><Link to={`/artist/${it.id}`}>{it.title}</Link></li>
    })}

    </ul>
    </div>
  
  
    
  );
}
