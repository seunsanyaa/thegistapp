import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import navstyles from './navbar.module.scss'
import {useEffect, useRef, useState} from "react";
// import { gsap } from 'gsap'
// import NavBarModal from "./mobilemodal";

// import Modal from "./modal";
import navstylemobile from "./navbarmobile.module.scss";
import LaptopMenu from "./LaptopMenu";
import laptopmenustyles from "./laptopmenu.module.scss";
import {gsap} from "gsap";


export default function NavBar( ) {

    useEffect(() => {

        const GSAP = require("gsap/dist/CSSRulePlugin");
        const { CSSRulePlugin } = GSAP;
        gsap.registerPlugin(CSSRulePlugin);
        // do whatever you want to do with the plugin, its Working now...
        // for example
        let cont = CSSRulePlugin.getRule(".hidden");


        // uses el.current.querySelectorAll() internally

        gsap.to(cont,1,{

            visibility:"visible",
            duration:3


        });





    },[]);

    // const [showModal, setShowModal] = useState(false);
    return (

        <div className={navstyles.container}>

            <div className={navstyles.left}>
                <button className={navstyles.menuButton} type="button" data-uk-toggle="target: #offcanvas-usage">
                    <img className={navstyles.menuIcon} src="data:image/svg+xml,%3Csvg width='24' height='16' viewBox='0 0 24 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='24' height='4' rx='2' fill='white'/%3E%3Crect y='12' width='24' height='4' rx='2' fill='white'/%3E%3C/svg%3E%0A"/>

                    <span className={navstyles.menuText}> Menu</span>
                </button>


                <div id="offcanvas-usage" data-uk-offcanvas className={navstyles.offcanvas}>
                    <div className="uk-offcanvas-bar">


                        <LaptopMenu/>



                    </div>
                </div>

            </div>


            <div className={navstyles.center}>

                <img src="https://res.cloudinary.com/seunsanyaa/image/upload/v1642870478/Group_1460_2_sdovvo.png"/>

            </div>

            <div className={navstyles.right}>

                <a className={navstyles.store}>
                    <img className={navstyles.logo} src="data:image/svg+xml,%3Csvg width='19' height='25' viewBox='0 0 19 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_577_8279)'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M9.39626 5.56595C9.39626 5.56595 9.05049 4.04233 10.4031 2.26034C11.9229 0.25798 14.0355 0.246582 14.0355 0.246582C14.0355 0.246582 14.3509 2.13116 12.8386 3.94354C11.2276 5.88511 9.39626 5.56595 9.39626 5.56595ZM15.7377 12.5077C15.7377 9.40348 18.2379 8.12684 18.2379 8.12684C18.2379 8.12684 16.9574 5.81292 13.7088 5.81292C11.8204 5.81292 10.3689 6.88819 9.58629 6.88819C8.67437 6.88819 7.31793 5.87751 5.56253 5.87751C2.87246 5.87751 0 8.29023 0 12.8877C0 17.5611 3.39299 23.3783 6.07927 23.3783C7.01776 23.3783 8.45779 22.4321 9.90926 22.4321C11.3341 22.4321 12.3827 23.3441 13.7354 23.3441C16.6762 23.3441 18.8571 17.2115 18.8571 17.2115C18.8571 17.2115 15.7377 16.0071 15.7377 12.5077Z' fill='white'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_577_8279'%3E%3Crect width='18.8571' height='24' fill='white' transform='translate(0 0.142944)'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A"/>
                </a>

                <img className={navstyles.store} src="data:image/svg+xml,%3Csvg width='2' height='22' viewBox='0 0 2 22' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 0.714355V21.2858' stroke='white' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A"/>
                <a className={navstyles.storeLast}>
                    <img className={navstyles.logo} src="data:image/svg+xml,%3Csvg width='28' height='17' viewBox='0 0 28 17' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_577_8277)'%3E%3Cpath d='M7.66157 5.03947L5.45726 1.08602C5.33229 0.863019 5.4094 0.582204 5.61946 0.452808C5.82951 0.323412 6.10605 0.397745 6.2257 0.620746L8.45927 4.62651C10.1637 3.81985 12.0809 3.37109 14.1443 3.37109C16.2076 3.37109 18.1248 3.81985 19.8292 4.62651L22.0627 0.620746C22.1877 0.397745 22.4589 0.323412 22.6743 0.452808C22.8897 0.582204 22.9615 0.863019 22.8365 1.08602L20.6322 5.03947C24.4293 7.17037 27.0032 11.1541 27.4286 15.8178H0.857178C1.28262 11.1541 3.85653 7.17037 7.66157 5.03947ZM20.2439 11.9553C20.8608 11.9553 21.3581 11.4376 21.3581 10.8017C21.3581 10.163 20.8582 9.64818 20.2439 9.64818C19.6271 9.64818 19.1298 10.1657 19.1298 10.8017C19.1272 11.4349 19.6271 11.9553 20.2439 11.9553ZM8.04447 11.9553C8.66135 11.9553 9.15859 11.4376 9.15859 10.8017C9.15859 10.163 8.65869 9.64818 8.04447 9.64818C7.42758 9.64818 6.93034 10.1657 6.93034 10.8017C6.92769 11.4349 7.43024 11.9553 8.04447 11.9553Z' fill='white'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_577_8277'%3E%3Crect width='26.5714' height='16.2857' fill='white' transform='translate(0.857178 0.285645)'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A"/>
                </a>

            </div>






            <div className={navstyles.mobile}>

                <div>



                    <img src="data:image/svg+xml,%3Csvg width='51' height='32' viewBox='0 0 51 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M45.7998 3.81408V5.91278e-05H43.0988V3.81408H34.4183H34.3294C30.7577 3.84866 28.4522 5.87381 28.4522 8.33765C28.4522 14.3694 38.0693 12.2701 38.0693 15.8771C38.0693 17.2078 36.8821 18.2723 34.7449 18.2723C32.4595 18.2723 31.0643 17.0895 30.9158 15.5224H28.1259C28.304 18.4793 30.9753 20.5488 34.7746 20.5488C38.366 20.5488 40.711 18.5381 40.711 15.8771C40.5922 10.0821 31.1535 12.1815 31.1535 8.33765C31.1535 7.03669 32.3407 6.09063 34.3294 6.09063H39.6325H40.9915H43.0988V15.8478C43.0988 19.1 44.7312 20.2828 47.6106 20.2828H50.0445V18.0062H48.0558C46.3935 18.0062 45.7998 17.4444 45.7998 15.8478V6.09063H50.0445V4.08013V3.81408H45.7998Z' fill='white'/%3E%3Cpath d='M23.1028 20.0916H25.8426V3.65254H23.1028V20.0916Z' fill='white'/%3E%3Cpath d='M5.15165 10.9457C4.1291 10.4494 3.36119 9.58494 2.98915 8.51097C2.61686 7.43725 2.68535 6.28274 3.18132 5.2602C4.20587 3.14963 6.75646 2.26607 8.86678 3.29012L15.775 6.64249C17.8855 7.66679 18.7693 10.2174 17.745 12.3282C16.7207 14.439 14.1704 15.3228 12.0596 14.2983L5.15165 10.9457ZM14.3505 17.46C16.7887 17.3047 19.0789 15.8795 20.2199 13.5291C21.9065 10.0541 20.4514 5.85426 16.9759 4.16766L10.0677 0.815296C6.59314 -0.871803 2.39334 0.58399 0.706742 4.05928C-0.11034 5.74287 -0.22298 7.64371 0.389894 9.41184C1.00252 11.18 2.2669 12.6037 3.95048 13.4205L10.8587 16.7731C11.1211 16.9003 11.3875 17.0084 11.6567 17.1005V17.7866V19.6975C11.6567 21.3033 12.9602 22.6111 14.5705 22.6111C16.3924 22.6111 17.9309 23.9633 18.0641 25.6923C18.1424 26.6676 17.7849 27.6262 17.0928 28.3224C16.4558 28.9531 15.6202 29.3063 14.7271 29.3063H11.4367C9.6106 29.3063 8.07227 27.9498 7.94106 26.2254C7.86279 25.2457 8.21401 24.2914 8.91018 23.5952C9.03712 23.4681 9.17886 23.3517 9.33114 23.2375L7.53265 21.225C7.3465 21.3733 7.1709 21.5298 7.00984 21.6906C5.75524 22.939 5.11402 24.668 5.25149 26.4368C5.49709 29.5559 8.21401 32.0001 11.4367 32.0001H14.7271C16.3394 32.0001 17.8524 31.3674 18.9994 30.2267C20.248 28.9741 20.8889 27.2454 20.7515 25.4868C20.5081 22.3615 17.7932 19.9175 14.5705 19.9175C14.4499 19.9175 14.3505 19.8159 14.3505 19.6975V17.7866V17.46Z' fill='white'/%3E%3Cpath d='M17.2052 12.0657C16.9003 12.6899 16.4265 13.2064 15.853 13.5639C15.2795 13.9217 14.6066 14.1246 13.9105 14.1246C13.3581 14.1246 12.8227 14.002 12.3212 13.7586L5.41253 10.4067C4.53424 9.97926 3.87621 9.23669 3.5566 8.31399C3.23699 7.39155 3.29419 6.40111 3.72168 5.52307C4.32903 4.27249 5.62201 3.46418 7.01635 3.46418C7.56876 3.46418 8.10411 3.58686 8.6056 3.8302L15.5123 7.18182C17.3258 8.06237 18.0855 10.2525 17.2052 12.0657Z' fill='%23ED1D24'/%3E%3C/svg%3E%0A"/>


                </div>

                <div>


                    <button className={navstyles.mobileButton}type="button" uk-toggle="target: #offcanvas-flip">
                        <img src="data:image/svg+xml,%3Csvg width='24' height='16' viewBox='0 0 24 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='24' height='4' rx='2' fill='white'/%3E%3Crect y='12' width='24' height='4' rx='2' fill='white'/%3E%3C/svg%3E%0A"/>
                    </button>

                    <div id="offcanvas-flip" uk-offcanvas="flip: true; overlay: true">
                        <div className="uk-offcanvas-bar">
                            <div className={laptopmenustyles.container}>
                                <div className={navstylemobile.top}>


                                    <img
                                        src="data:image/svg+xml,%3Csvg width='51' height='32' viewBox='0 0 51 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M45.7998 3.81408V5.91278e-05H43.0988V3.81408H34.4183H34.3294C30.7577 3.84866 28.4522 5.87381 28.4522 8.33765C28.4522 14.3694 38.0693 12.2701 38.0693 15.8771C38.0693 17.2078 36.8821 18.2723 34.7449 18.2723C32.4595 18.2723 31.0643 17.0895 30.9158 15.5224H28.1259C28.304 18.4793 30.9753 20.5488 34.7746 20.5488C38.366 20.5488 40.711 18.5381 40.711 15.8771C40.5922 10.0821 31.1535 12.1815 31.1535 8.33765C31.1535 7.03669 32.3407 6.09063 34.3294 6.09063H39.6325H40.9915H43.0988V15.8478C43.0988 19.1 44.7312 20.2828 47.6106 20.2828H50.0445V18.0062H48.0558C46.3935 18.0062 45.7998 17.4444 45.7998 15.8478V6.09063H50.0445V4.08013V3.81408H45.7998Z' fill='white'/%3E%3Cpath d='M23.1028 20.0916H25.8426V3.65254H23.1028V20.0916Z' fill='white'/%3E%3Cpath d='M5.15165 10.9457C4.1291 10.4494 3.36119 9.58494 2.98915 8.51097C2.61686 7.43725 2.68535 6.28274 3.18132 5.2602C4.20587 3.14963 6.75646 2.26607 8.86678 3.29012L15.775 6.64249C17.8855 7.66679 18.7693 10.2174 17.745 12.3282C16.7207 14.439 14.1704 15.3228 12.0596 14.2983L5.15165 10.9457ZM14.3505 17.46C16.7887 17.3047 19.0789 15.8795 20.2199 13.5291C21.9065 10.0541 20.4514 5.85426 16.9759 4.16766L10.0677 0.815296C6.59314 -0.871803 2.39334 0.58399 0.706742 4.05928C-0.11034 5.74287 -0.22298 7.64371 0.389894 9.41184C1.00252 11.18 2.2669 12.6037 3.95048 13.4205L10.8587 16.7731C11.1211 16.9003 11.3875 17.0084 11.6567 17.1005V17.7866V19.6975C11.6567 21.3033 12.9602 22.6111 14.5705 22.6111C16.3924 22.6111 17.9309 23.9633 18.0641 25.6923C18.1424 26.6676 17.7849 27.6262 17.0928 28.3224C16.4558 28.9531 15.6202 29.3063 14.7271 29.3063H11.4367C9.6106 29.3063 8.07227 27.9498 7.94106 26.2254C7.86279 25.2457 8.21401 24.2914 8.91018 23.5952C9.03712 23.4681 9.17886 23.3517 9.33114 23.2375L7.53265 21.225C7.3465 21.3733 7.1709 21.5298 7.00984 21.6906C5.75524 22.939 5.11402 24.668 5.25149 26.4368C5.49709 29.5559 8.21401 32.0001 11.4367 32.0001H14.7271C16.3394 32.0001 17.8524 31.3674 18.9994 30.2267C20.248 28.9741 20.8889 27.2454 20.7515 25.4868C20.5081 22.3615 17.7932 19.9175 14.5705 19.9175C14.4499 19.9175 14.3505 19.8159 14.3505 19.6975V17.7866V17.46Z' fill='white'/%3E%3Cpath d='M17.2052 12.0657C16.9003 12.6899 16.4265 13.2064 15.853 13.5639C15.2795 13.9217 14.6066 14.1246 13.9105 14.1246C13.3581 14.1246 12.8227 14.002 12.3212 13.7586L5.41253 10.4067C4.53424 9.97926 3.87621 9.23669 3.5566 8.31399C3.23699 7.39155 3.29419 6.40111 3.72168 5.52307C4.32903 4.27249 5.62201 3.46418 7.01635 3.46418C7.56876 3.46418 8.10411 3.58686 8.6056 3.8302L15.5123 7.18182C17.3258 8.06237 18.0855 10.2525 17.2052 12.0657Z' fill='%23ED1D24'/%3E%3C/svg%3E%0A"/>






                                    <button className= "uk-offcanvas-close" type="button" >
                                        <img className={navstyles.menuIcon} src="data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='0.100464' y='16.9706' width='24' height='4' rx='2' transform='rotate(-45 0.100464 16.9706)' fill='white'/%3E%3Crect width='24' height='4' rx='2' transform='matrix(-0.707107 -0.707107 -0.707107 0.707107 19.799 16.9706)' fill='white'/%3E%3C/svg%3E%0A"/>

                                    </button>

                                </div>
                                {/*<button className="uk-offcanvas-close" type="button" uk-close></button>*/}

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

                        </div>
                    </div>
                </div>



            </div>




        </div>
    )
}