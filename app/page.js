"use client";
import React, { useRef, useState } from "react";
import Spline from "@splinetool/react-spline";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { Spotlight } from "@/components/ui/spotlight";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FlipWords } from "@/components/ui/flip-words";
import { Highlight } from "@/components/ui/hero-highlight";
import { cn } from "@/utils/cn";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useGSAP(() => {
    let targets = document.querySelectorAll(".words .word");
    let numberOfTargets = targets.length;
    let duration = 0.8; //change this
    let pause = 3; // change this
    let stagger = duration + pause;
    let repeatDelay = stagger * (numberOfTargets - 1) + pause;

    if (loaded) {
      gsap.set(".highlighted", {
        autoAlpha: 1,
      });
      gsap.to(".buttonparent", {
        autoAlpha: 1,
        scale: 1.2,
        yPercent: 10,
        duration: 2.5,
        ease: "power2.inOut",
      });
      gsap.to(".fadeout", {
        autoAlpha: 1,
        duration: 2.5,
        ease: "power2.inOut",
        stagger: 0.2,
      });
      gsap.from(".highlighted", {
        width: 0,
        duration: 2.5,
        ease: "power2.inOut",
      });
    }
  }, [loaded]);
  const navItems = [
    {
      name: "About",
      link: "/",
    },
    ,
    {
      name: "Services",
      link: "/contact",
    },
    {
      name: "Projects",
      link: "/about",
    },
    {
      name: "Testimonials",
      link: "/contact",
    },
  ];
  return (
    <main className="w-screen h-screen overflow-hidden bg-[#000000]">
      {loaded && <FloatingNav navItems={navItems} className="z-30" />}
      {loaded && (
        <Spotlight
          className="-top-40 left-0 md:left-52 md:-top-10 z-30"
          fill="#e066ff"
        />
      )}

      <div className="relative flex flex-col h-screen w-screen items-center justify-center transition-bg text-slate-200 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-[2px] scale-[100%]">
          <Spline
            scene="https://prod.spline.design/z3Voqbp798Bw4BWZ/scene.splinecode"
            onLoad={() => setLoaded(true)}
          />
        </div>
        <Section />
        <div className=" buttonparent absolute left-0 right-0 bottom-24 max-w-sm mx-auto w-full flex items-center justify-between invisible scale-75">
          <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-xl font-medium text-white backdrop-blur-3xl font-titi tracking-widest">
              Book a Call
            </span>
          </button>
          <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-xl font-medium text-white backdrop-blur-3xl font-titi tracking-widest">
              Explore More
            </span>
          </button>
        </div>
      </div>
    </main>
  );
}

function Section() {
  const words = ["SLEEK WEBSITE", "WEB APP", "MOBILE APP"];
  return (
    <>
      <div className="textparent relative flex flex-col gap-4 items-center justify-center px-4 z-20 ">
        <h1 className="fadeout invisible text-6xl text-center font-bold bg-clip-text bg-gradient-to-br from-[#fa70e6] from-[20%] to-[80%] to-[#6b1af6] text-transparent font-titi tracking-widest">
          TRANSFORM YOUR VISION INTO REALITY
        </h1>{" "}
        <p className="fadeout invisible text-4xl text-center font-bold font-titi text-[#dbdbdb]">
          WITH
        </p>{" "}
        <Highlight className="text-7xl text-center font-bold font-titi text-[#dbdbdb] overflow-hidden relative highlighted invisible flex-nowrap flex">
          <p className=" text-nowrap">3D ANIMATED WEBSITE</p>
        </Highlight>
        <h1 className="text-5xl text-center font-bold font-titi text-[#000000] overflow-hidden relative m-0 p-0">
          <div className="relative inline-block">
            {/* <span className="word inline-block">SLEEK WEBSITE</span>
            <span className="word inline-block">SLEEK WEBSITE</span>
            <span className="word inline-block">SLEEK WEBSITE</span> */}
            {/* <FlipWords words={words} /> */}
          </div>
        </h1>
      </div>
    </>
  );
}
