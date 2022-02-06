import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
// import styles from '../../styles/Home.module.css'
// import navstyles from './navbar.module.scss'


import React, {useEffect, useRef, useState} from "react";
import { Navigation, Scrollbar, A11y } from 'swiper';
import anime from "animejs/lib/anime.es.js"

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Pagination} from 'swiper';
import "swiper/css";
import "swiper/css/pagination"
// install Swiper modules
SwiperCore.use([Pagination]);

import { useInView } from 'react-intersection-observer';

import {gsap, Linear} from "gsap";

// import {gsap} from "gsap";
import { ExpoScaleEase } from "gsap/dist/EasePack";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import CustomEase from 'gsap/dist/CustomEase'
gsap.registerPlugin(ExpoScaleEase,CustomEase,ScrollTrigger);

export default function Line( ) {




    let line= useRef()


    if (typeof window !== "undefined") {


        anime({
            targets: '.path',
            strokeDashoffset:[350, -1900],
            easing: 'easeInOutSine',
            duration: 5000,
            // delay: function(el, i) { return i * 250 },
            direction: 'alternate',
            loop: true
        });

        // anime({
        //     targets: '.path2',
        //     strokeDashoffset:[anime.setDashoffset, 0],
        //     easing: 'easeInOutSine',
        //     duration: 1500,
        //     delay: function(el, i) { return i * 250 },
        //     // direction: 'alternate',
        //     // loop: true
        // });        // anime({
        //     targets: '.path2',
        //     strokeDashoffset:[anime.setDashoffset, 0],
        //     easing: 'easeInOutSine',
        //     duration: 1500,
        //     delay: function(el, i) { return i * 250 },
        //     // direction: 'alternate',
        //     // loop: true
        // });


        // browser code
    }





    // if(inView===true){
    //
    //
    //     // const tl = gsap.timeline({defaults: {duration: 1}, paused: true})
    //     //     .fromTo([gistContainer.current], {
    //     //     x:"100%",
    //     //
    //     //
    //     // },{
    //     //     duration:3,
    //     //
    //     //     x:"0",
    //     //
    //     //
    //     //
    //     //
    //     //     ease: CustomEase.create("custom", "M0,0 C0.11,0.494 0.192,0.726 0.318,0.852 0.45,0.984 0.504,1 1,1")
    //     //
    //     //
    //     // })
    //     //
    //     // const ST = ScrollTrigger.create({
    //     //     trigger:[gistContainer2.current],
    //     //     scrub:true,
    //     //     toggleActions: "restart pause resume none",
    //     //     onUpdate: ({progress}) => tl.progress() < progress ? tl.progress(progress) : null
    //     // });
    //
    //
    //
    //
    // }
    useEffect(() => {
        // const tl = gsap.timeline({defaults: {duration: 1}, paused: true})
        //     .fromTo([gistContainer.current], {
        //     x:"100%",
        //
        //
        // },{
        //     duration:3,
        //
        //     x:"0",
        //
        //
        //
        //
        //     ease: CustomEase.create("custom", "M0,0 C0.11,0.494 0.192,0.726 0.318,0.852 0.45,0.984 0.504,1 1,1")
        //
        //
        // })
        //
        //
        //
        //
        // const ST = ScrollTrigger.create({
        //     trigger:[gistContainer2.current],
        //     scrub:true,
        //     toggleActions: "restart pause resume none",
        //     onUpdate: ({progress}) => tl.progress() < progress ? tl.progress(progress) : null
        // });


    }, []);

    return (


        <div  >

        <div  >
            <svg  width="63" height="40" viewBox="0 0 63 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path ref={line} className="path" stroke="white" stroke-width="0.5"  d="M57.2498 4.7676V7.05719e-05H53.8736V4.7676H43.0229H42.9117C38.4471 4.81082 35.5653 7.34226 35.5653 10.4221C35.5653 17.9618 47.5867 15.3376 47.5867 19.8464C47.5867 21.5098 46.1027 22.8403 43.4312 22.8403C40.5744 22.8403 38.8304 21.3618 38.6448 19.4031H35.1574C35.38 23.0991 38.7192 25.686 43.4683 25.686C47.9576 25.686 50.8888 23.1726 50.8888 19.8464C50.7403 12.6026 38.9419 15.2268 38.9419 10.4221C38.9419 8.79586 40.4259 7.61329 42.9117 7.61329H49.5407H51.2395H53.8736V19.8098C53.8736 23.8749 55.9141 25.3535 59.5133 25.3535H62.5557V22.5078H60.0699C57.992 22.5078 57.2498 21.8054 57.2498 19.8098V7.61329H62.5557V5.10016V4.7676H57.2498Z" fill="none"/>
                <path ref={line}  className="path" stroke="white" stroke-width="0.5"  d="M28.8786 25.1146H32.3034V4.56586H28.8786V25.1146Z" fill="none"/>

                <path ref={line}   className="path" stroke="white" stroke-width="0.5"  d="M6.43956 13.682C5.16138 13.0618 4.20149 11.9811 3.73644 10.6387C3.27108 9.29653 3.35669 7.8534 3.97665 6.57522C5.25734 3.93701 8.44558 2.83256 11.0835 4.11262L19.7187 8.30308C22.3569 9.58346 23.4617 12.7717 22.1813 15.4102C20.9009 18.0487 17.713 19.1535 15.0745 17.8728L6.43956 13.682ZM17.9382 21.8249C20.9859 21.6308 23.8486 19.8494 25.2748 16.9114C27.3831 12.5676 25.5643 7.31779 21.2199 5.20955L12.5846 1.01908C8.24143 -1.08979 2.99167 0.729954 0.883428 5.07407C-0.137925 7.17855 -0.278725 9.55461 0.487367 11.7648C1.25315 13.9749 2.83362 15.7545 4.9381 16.7756L13.5733 20.9663C13.9014 21.1253 14.2344 21.2605 14.5709 21.3756V22.2332V24.6218C14.5709 26.6291 16.2003 28.2638 18.2132 28.2638C20.4904 28.2638 22.4137 29.9541 22.5802 32.1153C22.678 33.3345 22.2312 34.5327 21.366 35.4029C20.5698 36.1913 19.5252 36.6328 18.4089 36.6328H14.2959C12.0133 36.6328 10.0903 34.9373 9.92633 32.7817C9.82849 31.5571 10.2675 30.3642 11.1377 29.494C11.2964 29.335 11.4736 29.1895 11.6639 29.0469L9.41581 26.5313C9.18313 26.7166 8.96362 26.9123 8.7623 27.1133C7.19405 28.6737 6.39252 30.8349 6.56437 33.046C6.87137 36.9448 10.2675 40.0001 14.2959 40.0001H18.4089C20.4243 40.0001 22.3155 39.2093 23.7492 37.7834C25.31 36.2176 26.1112 34.0567 25.9393 31.8585C25.6352 27.9518 22.2415 24.8968 18.2132 24.8968C18.0623 24.8968 17.9382 24.7698 17.9382 24.6218V22.2332V21.8249Z" fill="none"/>
                <path ref={line} className="path" stroke="white" stroke-width="0.1"  d="M21.5065 15.0822C21.1255 15.8624 20.5331 16.508 19.8163 16.9549C19.0994 17.4021 18.2584 17.6558 17.3882 17.6558C16.6977 17.6558 16.0285 17.5024 15.4016 17.1982L6.76574 13.0084C5.66787 12.474 4.84533 11.5458 4.44582 10.3925C4.04631 9.2394 4.11781 8.00136 4.65216 6.90381C5.41136 5.34058 7.02759 4.3302 8.7705 4.3302C9.46102 4.3302 10.1302 4.48354 10.7571 4.78772L19.3904 8.97725C21.6573 10.0779 22.6069 12.8155 21.5065 15.0822Z" fill="#ED1D24"/>


            </svg>









        </div>
        </div>

    )
}
