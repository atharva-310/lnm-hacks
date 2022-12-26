import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
// import "./styles.css";

import logoW from "../assets/logo-white.png";
import { Center } from "@chakra-ui/react";

export default function Loader() {
  const root = useRef();
  const title = useRef();
  const bar = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap
        .timeline()
        .from(bar.current, {
          rotate: "100",
          x: "100"
        })
        .from("#images", {
          x: "200",
          opacity: "0",
          scale: 0
        })
        .to("#images", {
          x: "-100",
          opacity: 1,
          scale: 1
        })
        .from(title.current, {
          opacity: "0",
          ease: "bounce.inOut",
          duration: 3
        })
        .from("#pop-1", {
          y: "-10",
          opacity: "0"
        })
        .to("#pop-1", {
          opacity: "0",
          y: "10"
        })
        .from("#pop-2", {
          y: "-10",
          opacity: "0"
        })
        .to("#pop-2", {
          opacity: "0",
          y: "10"
        })
        .from("#pop-3", {
          y: "-10",
          opacity: "0"
        })
        .to("#pop-3", {
          opacity: "0",
          y: "10"
        })
        ;
    }, root); // <- scopes all selector text to the root element

    return () => ctx.revert();
  }, []);

  return (
    <div ref={root} style={{
        width:"100vw",
        height: "100vh",
        backgroundColor:"black",
        color: "white",
        display: "flex",
        flexDirection: "row",
        justifyContent: "Center",
        alignItems: "center"
    }}>
       <img
        id="images"
        src={logoW}
        style={{
          width: "40%",
          maxWidth: "400px",
          position: "relative"
        }}
      />
      <h1
        ref={title}
        style={{
          margin: "10px",
          position: "absolute"
        }}
      >
        Plinth
      </h1>
      <div
        ref={bar}
        style={{
          width: "3px",
          height: "100px",
          backgroundColor: "white",
          position: "absolute"
        }}
      ></div>
      <h1
        id="pop-1"
        style={{
          margin: "10px",
          position: "absolute"
        }}
      >
        Web 3.0
      </h1>
      
    </div>
  );
}
