import {useEffect, useRef, useState} from "react";
// import LocomotiveScroll from "locomotive-scroll";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
//
// import CustomEase from 'gsap/dist/CustomEase'
gsap.registerPlugin(ScrollTrigger);
export default function useLocoScroll(start){



    useEffect(()=>{

// import LocomotiveScroll from "locomotive-scroll";


        if (!start) return ;
        const scrollEl = document.querySelector('#main-container');

        import("locomotive-scroll").then(( locomotiveModule) => {
           let locoScroll = new locomotiveModule.default({

                el:scrollEl,
                smooth: true,
                multiplier:0.5,

                class:'is-reveal',






            })

            // locoScroll.on("scroll", ScrollTrigger.update);
            //
            // // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
            // ScrollTrigger.scrollerProxy(scrollEl.current, {
            //     scrollTop(value) {
            //         console.log(locoScroll.scroll.instance.scroll.y);
            //         return arguments.length
            //             ? locoScroll.scrollTo(value, 0, 0)
            //             : locoScroll.scroll.instance.scroll.y;
            //     }, // we don't have to define a scrollLeft because we're only scrolling vertically.
            //     getBoundingClientRect() {
            //         return {
            //             top: 0,
            //             left: 0,
            //             width: window.innerWidth,
            //             height: window.innerHeight
            //         };
            //     },
            //     // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
            //     pinType: scrollEl.style.transform
            //         ? "transform"
            //         : "fixed"
            // });
            //
            // ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
            //
            // ScrollTrigger.refresh();


            return () => locoScroll.destroy();


        });
















    },[start]);
}



//scrolltigger

//
//             locoScroll.on("scroll", ScrollTrigger.update);
//
// // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
//             ScrollTrigger.scrollerProxy(".main-container", {
//                 scrollTop(value) {
//                     return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//                 }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//                 getBoundingClientRect() {
//                     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//                 },
//                 // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//                 pinType: document.querySelector(".main-container").style.transform ? "transform" : "fixed"
//             });
//
//             ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
//
// // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
//             ScrollTrigger.refresh();

//