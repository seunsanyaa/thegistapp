import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
// import styles from '../../styles/Home.module.css'
// import navstyles from './navbar.module.scss'
import audiostyles from './audiochats.module.scss'

import { useInView } from 'react-intersection-observer';


import {useEffect, useRef, useState} from "react";
import {gsap, Linear} from 'gsap';
import { ExpoScaleEase } from "gsap/dist/EasePack";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import CustomEase from 'gsap/dist/CustomEase'

gsap.registerPlugin(ExpoScaleEase,CustomEase, Linear,ScrollTrigger);



export default function AudioCharts( ) {
    const [ref, inView] = useInView({
        threshold: 0.5,
        triggerOnce:true
    })


    // const [setRef, visible] = useOnScreen({threshold:0.4})

    // if setRef(true)

    let redimage = useRef();
    let blackimage = useRef();
    let bigCont = useRef();


    if(inView===true){

        let tline= gsap.timeline()
           .fromTo([blackimage.current],
            0.7, {scale:0.5, autoAlpha:0},
            {scale:1,
                autoAlpha:1,



                ease:ExpoScaleEase.config(1, 0.5, CustomEase.create("custom", "M0,0 C0,0 0.06612,-0.00069 0.105,0.00463 0.13557,0.00882 0.15735,0.01361 0.185,0.02533 0.21427,0.03773 0.23495,0.05027 0.26,0.0703 0.28674,0.0917 0.30294,0.10989 0.325,0.13731 0.34837,0.16636 0.36089,0.1866 0.38,0.21949 0.40135,0.25624 0.41346,0.27844 0.43,0.31803 0.497,0.47845 0.52752,0.57771 0.595,0.73428 0.61144,0.77243 0.62657,0.79424 0.65,0.8285 0.67045,0.85841 0.68506,0.87712 0.71,0.90244 0.73103,0.9238 0.74749,0.93696 0.7725,0.95289 0.79397,0.96656 0.81073,0.97423 0.835,0.98203 0.86192,0.99069 0.88118,0.99395 0.91,0.99708 0.94392,1.00078 1,1 1,1 "))
            })
            .fromTo([redimage.current],
            0.7, {scale:0.5, autoAlpha:0},
            {scale:1,autoAlpha:1, ease:ExpoScaleEase.config(1, 0.5, CustomEase.create("custom", "M0,0 C0,0 0.06612,-0.00069 0.105,0.00463 0.13557,0.00882 0.15735,0.01361 0.185,0.02533 0.21427,0.03773 0.23495,0.05027 0.26,0.0703 0.28674,0.0917 0.30294,0.10989 0.325,0.13731 0.34837,0.16636 0.36089,0.1866 0.38,0.21949 0.40135,0.25624 0.41346,0.27844 0.43,0.31803 0.497,0.47845 0.52752,0.57771 0.595,0.73428 0.61144,0.77243 0.62657,0.79424 0.65,0.8285 0.67045,0.85841 0.68506,0.87712 0.71,0.90244 0.73103,0.9238 0.74749,0.93696 0.7725,0.95289 0.79397,0.96656 0.81073,0.97423 0.835,0.98203 0.86192,0.99069 0.88118,0.99395 0.91,0.99708 0.94392,1.00078 1,1 1,1 "))

            },"-=0.3");




    }






















    // const intersection = useIntersection(blackimage, {
    //     root:null,
    //     rootMargin:"0px",
    //
    //     threshold:1
    // })
    //
    //
    //
    // const blackFadeIn = element =>{
    //
    //     gsap.from(element,1,{
    //
    //         x:300
    //     })
    //
    // }
    //
    //
    // intersection && intersection.intersectionRatio<1
    //     ?blackFadeIn(".fadeIn"):null


//     useEffect(() => {
//
//         const GSAP = require("gsap/dist/CSSRulePlugin");
//         const { CSSRulePlugin } = GSAP;
//         gsap.registerPlugin(CSSRulePlugin);
//
//         // let blackImageReveal = CSSRulePlugin.getRule('.main-container')
//
//             //

//             //
//     // gsap.fromTo([redimage.current],
//     //         0.8, {scale:0.5, autoAlpha:0},
//     //         {scale:1, delay:0.4,autoAlpha:1,scrollTrigger:redimage.current, ease:ExpoScaleEase.config(1, 0.5, CustomEase.create("custom", "M0,0 C0,0 0.06612,-0.00069 0.105,0.00463 0.13557,0.00882 0.15735,0.01361 0.185,0.02533 0.21427,0.03773 0.23495,0.05027 0.26,0.0703 0.28674,0.0917 0.30294,0.10989 0.325,0.13731 0.34837,0.16636 0.36089,0.1866 0.38,0.21949 0.40135,0.25624 0.41346,0.27844 0.43,0.31803 0.497,0.47845 0.52752,0.57771 0.595,0.73428 0.61144,0.77243 0.62657,0.79424 0.65,0.8285 0.67045,0.85841 0.68506,0.87712 0.71,0.90244 0.73103,0.9238 0.74749,0.93696 0.7725,0.95289 0.79397,0.96656 0.81073,0.97423 0.835,0.98203 0.86192,0.99069 0.88118,0.99395 0.91,0.99708 0.94392,1.00078 1,1 1,1 "))});
//
//

//
//
//     },[]);


    return (

        <div className={audiostyles.containerOutside} data-scroll-section>
        <div className={audiostyles.container} inView={inView}>


            <div className={audiostyles.textSide} ref={ref}>

                <h3 className={audiostyles.text}>
                    A whole new experience to audio chats <img className={audiostyles.emoji} width={50} src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/126/speech-balloon_1f4ac.png"/>.
                </h3>


                <div className={audiostyles.appstoreSection}>

                  <img className={audiostyles.store1} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1642878698/app_store_icon_1_yzumum.png"/>


                  <img className={audiostyles.store} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1642878754/google_play_store_icon_1_yrpsbb.png"/>

                </div>

            </div>


<div className={audiostyles.bigImageContainer} ref={bigCont}>

    <img className={audiostyles.bigImage} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1643214955/Rectangle_6_nnt8f9.png" />





        <img className={audiostyles.blackplayer} ref={blackimage} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1643216135/Frame_49_1_dehvfb.png" />




<img className={audiostyles.redplayer} ref={redimage} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1643216129/Frame_50_2_zieqhw.png"/>

</div>


            <div className={audiostyles.appstoreSectionMobile}>

                <img className={audiostyles.store1Mobile} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1643028977/app_store_icon_1_b9wczf.png"/>


                <img className={audiostyles.storeMobile} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1643029047/google_play_store_icon_1_htdh3f.png"/>
                <div id="fixed"> </div>

            </div>

        </div>


        </div>


    )
}
