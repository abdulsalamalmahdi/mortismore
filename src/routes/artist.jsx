import * as React from "react";
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import "../Artists.css";
import {
  useLocation,
  NavLink,
  Outlet,
  useSearchParams,
} from "react-router-dom";
import { getInvoices } from "../data";

// function QueryNavLink({ to, ...props }) {
//   let location = useLocation();
//   return <NavLink to={to + location.search} {...props} />;
// }

export default function Artists() {
  //   let [searchParams, setSearchParams] = useSearchParams({ replace: true });
const sliderRef = useRef(null)
const frs = useRef(null)
const scd = useRef(null)
const trd = useRef(null)
const one = useRef(null)
const btn = useRef(null)
 
const [pause, setPause] = useState(true);
useEffect(()=>{

 
const tl = gsap.timeline({ repeat: 2, repeatDelay: 1, yoyo: true});
console.log(pause)

 if (pause){ 
   
  tl.kill();
    }
    if(!pause){
     tl.resume()
    }
     tl.to(one.current, { duration: 4,ease: "power3.outout", y: -150 },);
    tl.to(frs.current, { duration: 3,ease: "power3.outout", y:- 500 }, );
    tl.to(scd.current, { duration: 7,ease: "power3.outout", y: -1400 }, );
    tl.to(trd.current, { duration: 9,ease: "power3.outout", y: -2600 },'<3' );
   
}, [pause])


  return (
    <div style={{ display: "flex" }}>
      <div className="wrapper-container">
        <button className="btn"  ref={btn} onClick={() => setPause(!pause)}><span>Pause</span></button>
        <div className="credit-container" id="wrapper">
          <div className="credit-items" ref={sliderRef}>
            <div className="credit-item" ref={one}>
              22.10.21 ->> 23.11.2021 de 15h à 20h le samedi et dimanche sur
              demande au +33623907535 en semaine!
            </div>
            <div className="credit-item" ref={frs}>
              22.10 : OPENING 25-29.10 : Workshop avec la Cambre / Marie Douel
              16.11 : Performance par Nino André 20.11 : CLOSING?
            </div>
            <div className="credit-item" ref={scd}>
              "Mort is More" présentera un panel de pratiques funéraires
              anciennes et contemporaines, des artisans, conseillers, marbriers,
              ou artistes qui font leur propre deuil à travers leur art, aux
              documentations de cimetières ou de pratiques funéraires en Europe.
              Il nous faut partager un nécromantisme positif, faire parler les
              ancêtres, créer de nouveaux rituels pendant ces périodes où il
              faut cacher les morts, alors que parfois les funérailles sont
              interdites quand les gens ont le covid... Workshop organisé avec
              les étudiants en Typographie et Architecture d'Intérieur de la
              Cambre, du 25 au 29 octobre, dont le résultat sera présenté pour
              la Toussaint. "Mort is More" will present a panel of old and
              contemporary funeral pratices, from craftmens, engravers, artists
              that make their own mourning through their art, to documentations
              of cemeteries or funeral practices in Europe. We have to share
              some positive necromantism, make the ancestors speak, and find new
              rituals in those periods where we have to hide the dead, and where
              funerals are forbidden when people got the covid...
            </div>
            <div className="credit-item" ref={trd}>
              En hommage à Pierre Aubert (1958-8/12/2020), sépulteur Avec Nino
              Andre (+ Denis André, + Lucasse Berlaud) Zelia Bailly Emile Barret
              (+ Raymond Capdevielle, + Jenna Kaes) Rébecca Bonté C215 Fédérico
              Carpani André Chabot & Anne Fuard Regina Demina Désirée 0100
              Thomas Dittborn (+ Emile Barret) Marie Douel Patrice Elmer Jot Fau
              Antoine de Galbert Holismes Benjamin Husson Andrew Humke Bella
              Hunt & Ddc Abigaël H (+Nino André) HYENAZ & CrazinisT artis.T
              Studio Françoise Jolivet Jenna Kaes Künstler Nekropole Kassel
              Jules Lagrange Loic Le Loët Mélody Lu (Musicfor)Eggplant Jeanne
              Neuveu Erik Nussbicker (+ Abigaël H) George Oswald Eiji Otsuka &
              Housui Yamazaki & Yu Kinutani Marine Pascal Benoit Pieron Melissa
              Pinon Claire de Quénetain Denis Roueche Tristan Savoy Fabrice
              Schneider Réal Siellez The JAMS (ex KLF) Clara Van Der Belen Betsy
              Zbiegiel Workshop La Cambre, section Typographie & Architecture
              d'intérieur Ayoub Ben Amor Baya Bourmeau Dylan Delval Ariel Ruta
              Jade-Ling Deboeck Luna-Carmen Hamamid Guennadi Maes Léo Paillette
              Mutsumi Xu Ikram Bouchikhi Xavier Gupta Jo-Ann Teope Wali Chakir
              Lucille Lechien Alix Meuwly and more.... !
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
