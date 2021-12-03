import * as React from "react";
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import "../Artists.css";
import {
  useLocation,
  NavLink,
  Outlet,
  useSearchParams,
  useParams,
} from "react-router-dom";
import { getInvoices } from "../data";
import userEvent from "@testing-library/user-event";
 import artists from './ex.json'

export default function Artists() {
  const { id } = useParams();
  const [ls, setLs] = useState([]);
  const [artist, setArtist] = useState({});

  useEffect(() => {


    const list = artists.feeds;
    setLs(list)
    const ar = list.find(re=> re.id === id)
    setArtist(ar)
    console.log(ar.url)
  //   fetch("/ex.json", {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //   })
  //     .then((res) => {
  //       console.log(res);
  //       return res.json();
  //     })
  //     .then((js) => {
  //       setLs(js.feeds);
  //       console.log(ls);
  //        const ar = ls.find((ar) => {
  //   console.log(typeof ar.id);
  //   return ar.id === parseInt(id);
  // });

  // setArtist(ar);
  // console.log(artist)
  //     });
  }, [id]);
 
  // const artist = artist.feeds.find(ar => ar.id === parseInt(id))

  return (
   
      <div className="art_contaienr">
        <div className="card">
          <span>{artist.name}</span>
          <img src={artist.profilePicture} alt="" />
        </div>
        <span className="desc">{artist.description}</span>
        <div className="artist">{artist.location}</div>
        <video src={artist.url}></video>
      </div>
    
  );
}
