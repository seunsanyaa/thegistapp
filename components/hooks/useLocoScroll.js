import {useEffect, useRef, useState} from "react";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
//
gsap.registerPlugin(ScrollTrigger);
export default function useLocoScroll(start){



    useEffect(()=>{




        if (!start) return ;
        const scrollEl = document.querySelector('#main-container');

        import("locomotive-scroll").then(( locomotiveModule) => {
           let locoScroll = new locomotiveModule.default({

                el:scrollEl,
                smooth: true,
                multiplier:0.5,
               repeat:false,

                class:'is-reveal',






            })




            return () => locoScroll.destroy();


        });
















    },[start]);
}



