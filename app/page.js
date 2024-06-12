"use client";
import React, { useRef, useState } from "react";
import Spline from "@splinetool/react-spline";

export default function Home() {
  return (
    <main>
      <Section />
    </main>
  );
}

function Section() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="h-screen w-screen relative">
        <Spline
          scene="https://prod.spline.design/FqZ7hOttzUCfDJ34/scene.splinecode"
          className="scale-125"
        />
        <div className="absolute flex flex-col items-center justify-center text-neutral-200 z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1 className=" text-7xl text-center font-bold">HI, I AM ARPIT</h1>{" "}
          <p className=" text-4xl text-center font-bold">
            I am a Web Developer
          </p>
        </div>
      </div>
    </div>
  );
}
