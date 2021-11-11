import * as React from "react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ReactComponent as SceneSvg } from "../assets/girl.svg";
import "../Home.css";

// import { useParams, useNavigate } from 'react-router-dom';
// import { getInvoice, deleteInvoice } from '../data';

export default function Home() {
  //   let navigate = useNavigate();
  //   let params = useParams();
  //   let invoice = getInvoice(parseInt(params.invoiceId, 10));

  const wrapperRef = useRef(null);
  const img1 = useRef(null);
  const img2 = useRef(null);
  const img3 = useRef(null);
  const img4 = useRef(null);

  useEffect(() => {
    // const imgs = wrapperRef.current.children;
    // console.log(imgs);
    const tl = gsap.timeline({ repeat: -1 });
    tl.to(img4.current, { duration: 2, x: 2000 }, "+=2");
    tl.to(img3.current, { duration: 2, x: 2000 }, "+=2");
    tl.to(img2.current, { duration: 2, x: 2000 }, "+=2");
    //tl.to(img1.current, { duration: 2, x: 2000 },);

    // tl.from(img1.current, 2,{ease: "power3.out"}, {duration:1, scaleX: 0, transformOrigin: "left" });
    // tl.from(img2.current, 2,{ease: "power3.out"}, {duration:1, scaleX: 0, transformOrigin: "left" });
    // tl.from(img3.current, 2,{ease: "power3.out"}, {duration:1, scaleX: 0, transformOrigin: "left" });
    // tl.from(img4.current, 2,{ease: "power3.out"}, {duration:1, scaleX: 0, transformOrigin: "left" });

    //    let  imgArr=[];
    //     Array.prototype.map.call(imgs, im=>{
    // //       const t1 = gsap.timeline({repeat: -1, repeatDelay: 1});
    // //    t1.from(im, {x: -1000}, {duration: 3, x: 1000, opacity:1,delay: 2});
    // imgArr.push(im)

    //         })
    //         imgArr.map(im=>{
    //     const t1 = gsap.timeline({repeat: -1, repeatDelay: 1});
    //     t1.from(im, {x: -1000}, {duration: 3, x: 1000, opacity:1,delay: 2});
    //         })
    //         console.log(imgArr)
  }, []);
  return (
    // <main style={{ padding: "1rem" }}>
    <>
    
      <div className="wrapper-container">
        <div className="carousel-container" id="wrapper">
          <div className="carousel-items" ref={wrapperRef}>
            <div ref={img1} className="carousel-item">
              <img src={"./01.jpg"} alt="" />
            </div>
            <div ref={img2} className="carousel-item">
              <img src={"./02.jpg"} alt="" />
            </div>
            <div ref={img3} className="carousel-item">
              <img src={"./03.jpg"} alt="" />
            </div>
            <div ref={img4} className="carousel-item">
              <img src={"./04.jpg"} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
    // </main>
  );
}
