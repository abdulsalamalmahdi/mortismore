import * as React from "react";
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import "../Artists.css";
import {
  useLocation,
  NavLink,
  Outlet,
  useSearchParams,
  useParams
} from "react-router-dom";
import { getInvoices } from "../data";
import userEvent from "@testing-library/user-event";
import artists from '../assets/ex.json'




export default function Artists() {
 const {id} = useParams();
 console.log(typeof id)
  const artist = artists.feeds.find((ar)=> {
    console.log(typeof ar.id)
    return ar.id === parseInt(id);
  })
  console.log(artist)

 return (
   <div className="art_contaienr">
   <div className="card">
     <span>{artist.name}</span>
     <img src='1.jpg' alt="" />
     </div>
     <span className="desc">{artist.description}</span>
   <div className="artist">{artist.location}</div>
  </div>
 )
 

}