"use client";

import { use, useEffect, useRef,  } from "react";
import * as THREE from "three";
import FOG from "vanta/dist/vanta.fog.min.js";
import {
    MessageCircleQuestionMark,
    Zap,
    Users
    } from "lucide-react";

export default function Hero() {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    if (!vantaEffect.current) {
      vantaEffect.current = FOG({
        el: vantaRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        highlightColor: "#e23636",
        midtoneColor: "#518cca",
        lowlightColor: "#f78f3f",
        baseColor: "#000000",
        blurFactor: 0.65,
        speed: 0.8,
        zoom: 0.6,
      });
    }

    return () => {
      if (vantaEffect.current) {
        (vantaEffect.current as any).destroy();
        vantaEffect.current = null;
      }
    };
  }, []);

  return (
    <div ref={vantaRef} className="px-10 z-0 h-screen flex flex-col items-center justify-center select-none">
        <h1 className="
        
            /*Global*/ font-bold text-white text-center
            /*Mobile*/ text-4xl
            /*Medium*/ sm:text-5xl
            /*Large*/  md:text-6xl
            /*Desktop*/ lg:text-6xl
            ">Chat with your favorite Marvel Heroes</h1>
        <p className=" 
            /*Global*/ text-center text-[#d1d5db] p-4 max-w-200 text-[18px]
            /*Mobile*/ text-sm mt-2
            ">Select a Marvel character and dive into conversations about their expertise, adventures, and unique perspectives. Learn from the greatest heroes in the universe!</p>
        <div className="flex items-center flex-wrap justify-center gap-2 select-none">
            <div className="flex items-center justify-center cursor-pointer gap-1">
                <MessageCircleQuestionMark className="text-[#a686ff] w-6 h-6" />
                <span className="text-[#a686ff] text-md">Interactive Conversations</span>
            </div>
            <div className="flex items-center justify-center cursor-pointer gap-1">
                <Zap className="text-[#a686ff] w-6 h-6" />
                <span className="text-[#a686ff] text-md">Character Expertise</span>
            </div>
            <div className="flex items-center justify-center  cursor-pointer gap-1">
                <Users className="text-[#a686ff] w-6 h-6" />
                <span className="text-[#a686ff] text-md">Multiple Teams</span>
            </div>
        </div>
        <div className="mt-10 btn-container">
            <a href="#" className="button type--C">
                <div className="button__line"></div>
                <div className="button__line"></div>
                <span className="button__text">Get Started</span>
                <div className="button__drow1"></div>
                <div className="button__drow2"></div>
            </a>
        </div>
    </div>
  );
}
