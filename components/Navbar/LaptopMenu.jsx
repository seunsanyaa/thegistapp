import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import {useEffect, useRef, useState} from "react";
// import { gsap } from 'gsap'
// import NavBarModal from "./mobilemodal";

// import Modal from "./modal";
// import navstylemobile from "./navbarmobile.module.scss";
import laptopmenustyles from "./laptopmenu.module.scss"
import navstyles from "./navbar.module.scss";


export default function LaptopMenu( ) {

    // let el = useRef();
    // let q = gsap.utils.selector(el);
    // const tl = useRef();
    //
    //
    //
    // useEffect(() => {
    //
    //     const GSAP = require("gsap/dist/CSSRulePlugin");
    //     const { CSSRulePlugin } = GSAP;
    //     gsap.registerPlugin(CSSRulePlugin);
    //     // do whatever you want to do with the plugin, its Working now...
    //     // for example
    //     let cont = CSSRulePlugin.getRule(".hidden");
    //
    //
    //     // uses el.current.querySelectorAll() internally
    //
    //     tl.current = gsap.timeline();
    //         gsap.to(cont,1,{
    //
    //                 visibility:"visible"
    //
    //
    //         });
    //
    //         gsap.from([el.current], {
    //             y:25,
    //             autoAlpha:0,
    //     //         css:{
    //     //         visibility: "visible"
    //     // }
    //         })
    //
    //
    //         // .to(q(".circle"), {
    //         //     x: 100
    //         // });
    // },[]);

    // const [showModal, setShowModal] = useState(false);
    return (
        // "uk-offcanvas-close"


        <div className={laptopmenustyles.container}>
            <button className= "uk-offcanvas-close" type="button" >
                <img className={navstyles.menuIcon} src="data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='0.100464' y='17' width='24' height='4' rx='2' transform='rotate(-45 0.100464 17)' fill='white'/%3E%3Crect width='24' height='4' rx='2' transform='matrix(-0.707107 -0.707107 -0.707107 0.707107 19.799 17)' fill='white'/%3E%3C/svg%3E%0A"/>

                <span className={navstyles.menuText}> Close</span>
            </button>


            <div className={laptopmenustyles.singleGrid}>

                <h3 className={laptopmenustyles.headerLink}>
                    Company
                </h3>

                <h3 className={laptopmenustyles.links}>
                    About Us
                </h3>
                <h3 className={laptopmenustyles.links}>
                    Support
                </h3>
                <h3 className={laptopmenustyles.links}>
                    Newsroom
                </h3>
                <h3 className={laptopmenustyles.links}>
                    Careers
                </h3>

                <h3 className={laptopmenustyles.links}>
                    Contact Us
                </h3>

            </div>
            <div className={laptopmenustyles.singleGrid}>

                <h3 className={laptopmenustyles.headerLink}>
                    Community
                </h3>

                <h3 className={laptopmenustyles.links}>
                    Safety Hub
                </h3>
                <h3 className={laptopmenustyles.links}>
                    Community Guidelines
                </h3>


            </div>
            <div className={laptopmenustyles.singleGrid}>

                <h3 className={laptopmenustyles.headerLink}>
                    Legal
                </h3>

                <h3 className={laptopmenustyles.links}>
                    Terms of service
                </h3>
                <h3 className={laptopmenustyles.links}>
                    Privacy Policy
                </h3>


            </div>




        </div>
    )
}