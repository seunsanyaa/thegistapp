import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
// import styles from '../../styles/Home.module.css'
// import navstyles from './navbar.module.scss'
import herostyles from './hero.module.scss'


import {useEffect, useRef, useState} from "react";


import navstyles from "../Navbar/navbar.module.scss";
import { gsap } from 'gsap'

import { ExpoScaleEase } from "gsap/dist/EasePack";
import CustomEase from 'gsap/dist/CustomEase'
gsap.registerPlugin(ExpoScaleEase,CustomEase);
export default function Hero( ) {
    let headText = useRef();
    let q = gsap.utils.selector(headText);
    // const tl = useRef();


    useEffect(() => {


        gsap.from([headText.current], 1,{
            y:"100%",
            autoAlpha:0,

            ease: CustomEase.create("custom", "M0,0 C0.11,0.494 0.192,0.726 0.318,0.852 0.45,0.984 0.504,1 1,1")

            ,delay:1.4
            //         css:{
            //         visibility: "visible"
            // }
        })



    },[]);















    return (


<div className={herostyles.container}>


    <div className={herostyles.hideTextDiv}>




    <h3 className={herostyles.header} ref={headText}>
        Gist is the social network that’s all about your voice
    </h3>

    </div>
    <div className={herostyles.middle}>

        <a className={herostyles.store}>
            <img className={herostyles.logo} src="data:image/svg+xml,%3Csvg width='19' height='25' viewBox='0 0 19 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_577_8279)'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M9.39626 5.56595C9.39626 5.56595 9.05049 4.04233 10.4031 2.26034C11.9229 0.25798 14.0355 0.246582 14.0355 0.246582C14.0355 0.246582 14.3509 2.13116 12.8386 3.94354C11.2276 5.88511 9.39626 5.56595 9.39626 5.56595ZM15.7377 12.5077C15.7377 9.40348 18.2379 8.12684 18.2379 8.12684C18.2379 8.12684 16.9574 5.81292 13.7088 5.81292C11.8204 5.81292 10.3689 6.88819 9.58629 6.88819C8.67437 6.88819 7.31793 5.87751 5.56253 5.87751C2.87246 5.87751 0 8.29023 0 12.8877C0 17.5611 3.39299 23.3783 6.07927 23.3783C7.01776 23.3783 8.45779 22.4321 9.90926 22.4321C11.3341 22.4321 12.3827 23.3441 13.7354 23.3441C16.6762 23.3441 18.8571 17.2115 18.8571 17.2115C18.8571 17.2115 15.7377 16.0071 15.7377 12.5077Z' fill='white'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_577_8279'%3E%3Crect width='18.8571' height='24' fill='white' transform='translate(0 0.142944)'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A"/>
        </a>

        <img className={herostyles.store} src="data:image/svg+xml,%3Csvg width='2' height='22' viewBox='0 0 2 22' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 0.714355V21.2858' stroke='white' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A"/>
        <a className={herostyles.storeLast}>
            <img className={herostyles.logo} src="data:image/svg+xml,%3Csvg width='28' height='17' viewBox='0 0 28 17' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_577_8277)'%3E%3Cpath d='M7.66157 5.03947L5.45726 1.08602C5.33229 0.863019 5.4094 0.582204 5.61946 0.452808C5.82951 0.323412 6.10605 0.397745 6.2257 0.620746L8.45927 4.62651C10.1637 3.81985 12.0809 3.37109 14.1443 3.37109C16.2076 3.37109 18.1248 3.81985 19.8292 4.62651L22.0627 0.620746C22.1877 0.397745 22.4589 0.323412 22.6743 0.452808C22.8897 0.582204 22.9615 0.863019 22.8365 1.08602L20.6322 5.03947C24.4293 7.17037 27.0032 11.1541 27.4286 15.8178H0.857178C1.28262 11.1541 3.85653 7.17037 7.66157 5.03947ZM20.2439 11.9553C20.8608 11.9553 21.3581 11.4376 21.3581 10.8017C21.3581 10.163 20.8582 9.64818 20.2439 9.64818C19.6271 9.64818 19.1298 10.1657 19.1298 10.8017C19.1272 11.4349 19.6271 11.9553 20.2439 11.9553ZM8.04447 11.9553C8.66135 11.9553 9.15859 11.4376 9.15859 10.8017C9.15859 10.163 8.65869 9.64818 8.04447 9.64818C7.42758 9.64818 6.93034 10.1657 6.93034 10.8017C6.92769 11.4349 7.43024 11.9553 8.04447 11.9553Z' fill='white'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_577_8277'%3E%3Crect width='26.5714' height='16.2857' fill='white' transform='translate(0.857178 0.285645)'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A"/>
        </a>

    </div>


    <div className={herostyles.bottom}>

        <div className={herostyles.division}>

            <img className={herostyles.bottomIcon} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1642874576/Group_1591_hrgomq.png"/>

            <h3 className={herostyles.infoText}>
                Gist with random people
            </h3>

        </div>
        <div className={herostyles.division}>

            <img className={herostyles.bottomIcon}  src="https://res.cloudinary.com/seunsanyaa/image/upload/v1642874849/Group_1595_fidqal.png"/>

            <h3 className={herostyles.infoText}>
                Match with strangers
            </h3>

        </div>
        <div className={herostyles.division}>

            <img className={herostyles.bottomIcon}  src="https://res.cloudinary.com/seunsanyaa/image/upload/v1642874892/Group_1593_is1jdo.png"/>

            <h3 className={herostyles.infoText}>
                Join social rooms
            </h3>

        </div>

    </div>

</div>
    )
}
