import { Scroll, ScrollControls, useScroll } from "@react-three/drei";
import { Crystal } from "../../public/model/Crystal";
import Background from "./Background";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";

export default function MyScene() {
  const [scrollMsg, setScrollMsg] = useState(true);

  return (
    <>
      <ScrollMessage />
      <Crystal />
      <Background />
    </>
  );
}

const ScrollMessage = () => {
  const scroll = useScroll();
  const [scrollOpacity, setScrollOpacity] = useState(1);
  const scrollRef = useRef();
  const tl = useRef();

  useFrame(() => {
    setScrollOpacity(1 - scroll.range(0, 1 / 64));
  });

  return (
    <Scroll html ref={scrollRef} style={{ opacity: scrollOpacity }}>
      <div className="scroll_msg">
        <div className="bar">
          <div></div>
        </div>
        <h1>to scroll</h1>
      </div>
    </Scroll>
  );
};
