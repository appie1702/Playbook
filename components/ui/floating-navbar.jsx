"use client";
import React, { useRef, useState } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const FloatingNav = ({ navItems, className, loaded = false }) => {
  const container = useRef(null);
  useGSAP(
    () => {
      gsap.to(".left", {
        duration: 2.8,
        xPercent: -100,
        ease: "circ.inOut",
      });
      gsap.to(".right", {
        duration: 2.8,
        xPercent: 100,
        ease: "circ.inOut",
      });
    },
    { scope: container }
  );
  return (
    <div ref={container}>
      <div
        className={cn(
          "flex max-w-xl fixed top-8 inset-x-0 mx-auto border border-transparent backdrop-blur-sm dark:border-white/[0.2] rounded-full dark:bg-black/10 bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-30 pr-2 pl-8 py-2  items-center justify-evenly space-x-4",
          className
        )}
      >
        {navItems.map((navItem, idx) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
            )}
          >
            <span className="text-md">{navItem.name}</span>
          </Link>
        ))}
      </div>
      <div
        className={cn(
          "flex max-w-xl fixed top-8 inset-x-0 mx-auto w-full z-40 h-20 overflow-hidden bg-transparent"
        )}
      >
        <div className="left w-full bg-black"></div>
        <div className="right w-full bg-black"></div>
      </div>
    </div>
  );
};
