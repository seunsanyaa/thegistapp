import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
// import styles from '../../styles/Home.module.css'
// import navstyles from './navbar.module.scss'
import listenstyles from './listen.module.scss'

import {useEffect, useRef, useState} from "react";
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

export default function Listen( ) {

    // const [ref, inView] = useInView({
    //     threshold: 0.2,
    //     triggerOnce:true
    // })
    //
    // const [ref2, inView2] = useInView({
    //     threshold: 0.4,
    //     triggerOnce:true
    // })


    let gistContainer= useRef()
    let gistContainer2= useRef()
    let mainContainer= useRef()













//     if(inView===true){
//         // let animation = anime({
//         //
//         //     targets:gistContainer.current,
//         //
//         //
//         //
//         //     translateX:1000,
//         //
//         //
//         //
//         //     easing: 'easeInOutSine',
//         //
//         //
//         //
//         //
//         // });
//         const tl = gsap.timeline()
//             .fromTo([gistContainer.current], {
//             x:"100%",
//
//
//         },{
//             duration:1.5,
//
//             x:"70%",
//
//
//
//
//             ease: CustomEase.create("custom", "M0,0 C0.11,0.494 0.192,0.726 0.318,0.852 0.45,0.984 0.504,1 1,1")
//
//
//         });
//
//         gsap.set([gistContainer.current],
//             {x:"70%"}
//         )
//
//             // .to([gistContainer.current],{
//             //     duration:1.5,
//             //
//             //     x:"0%",
//             //
//             //
//             //
//             //
//             //     ease: CustomEase.create("custom", "M0,0 C0.11,0.494 0.192,0.726 0.318,0.852 0.45,0.984 0.504,1 1,1")
//             //
//             //
//             // },"-=0.2" )
// // if (inView2===true){
// //
// // gsap.fromTo([gistContainer.current],{
// //     x:"70%",
// //
// //
// //
// //
// //
// //
// // },{
// //         duration:1,
// //
// //         x:"40%",
// //
// //
// //
// //
// //         ease: CustomEase.create("custom", "M0,0 C0.11,0.494 0.192,0.726 0.318,0.852 0.45,0.984 0.504,1 1,1")
// //
// //
// //     } )
// // }
//
// // window.onscroll= function () {
// //     animation.seek(window.pageYOffset * 1.5)
// // };
//
//
//         // const tl = gsap.timeline({defaults: {duration: 1}, paused: true})
//         //     .fromTo([gistContainer.current], {
//         //     x:"100%",
//         //
//         //
//         // },{
//         //     duration:3,
//         //
//         //     x:"0",
//         //
//         //
//         //
//         //
//         //     ease: CustomEase.create("custom", "M0,0 C0.11,0.494 0.192,0.726 0.318,0.852 0.45,0.984 0.504,1 1,1")
//         //
//         //
//         // })
//         //
//         // const ST = ScrollTrigger.create({
//         //     trigger:[gistContainer2.current],
//         //     scrub:true,
//         //     toggleActions: "restart pause resume none",
//         //     onUpdate: ({progress}) => tl.progress() < progress ? tl.progress(progress) : null
//         // });
//
//
//
//
//     }
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

<div className={listenstyles.container} data-scroll-section>
    {/*<div  inView={inView}>*/}

    {/*</div>*/}

    <div className={listenstyles.header} ref={mainContainer}>

        <h3 className={listenstyles.head} >
            Listen to gists
        </h3>

        <p className={listenstyles.headParagraph}>
            Our community are posting thousands of amazing gists every day. Here are some of our recent favourites.
        </p>


    </div>


    <div data-scroll data-scroll-direction="horizontal" data-scroll-speed="20" className={listenstyles.floated} >

        <div className={listenstyles.gistsContainer}  ref={gistContainer} >

        <div ref={gistContainer2} ></div>

        <div className={listenstyles.singleGist}>


            <div className={listenstyles.top}>

                <div className={listenstyles.topLeft}>



                <img src="https://res.cloudinary.com/seunsanyaa/image/upload/v1642888388/Ellipse_177_hm1lad.png"/>

                <h3 className={listenstyles.profileName}>
                    Wole Majekodunmi
                </h3>

                <img className={listenstyles.hour} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1642888658/2h_xhfqyz.png"/>

                </div>

                <div className={listenstyles.topRight}>
                <img src="data:image/svg+xml,%3Csvg width='16' height='4' viewBox='0 0 16 4' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2 4C3.10457 4 4 3.10457 4 2C4 0.895431 3.10457 0 2 0C0.895431 0 0 0.895431 0 2C0 3.10457 0.895431 4 2 4Z' fill='%238F8F8F'/%3E%3Cpath d='M7.89471 4C8.99928 4 9.89471 3.10457 9.89471 2C9.89471 0.895431 8.99928 0 7.89471 0C6.79015 0 5.89471 0.895431 5.89471 2C5.89471 3.10457 6.79015 4 7.89471 4Z' fill='%238F8F8F'/%3E%3Cpath d='M13.7895 4C14.894 4 15.7895 3.10457 15.7895 2C15.7895 0.895431 14.894 0 13.7895 0C12.6849 0 11.7895 0.895431 11.7895 2C11.7895 3.10457 12.6849 4 13.7895 4Z' fill='%238F8F8F'/%3E%3C/svg%3E%0A"/>
                {/*<h3 className={listenstyles.hour}>*/}
                {/*    . 2h*/}
                {/*</h3>*/}
                </div>


            </div>

            <img src="https://res.cloudinary.com/seunsanyaa/image/upload/v1642889201/Rectangle_125_rybq23.png"/>


            <div className={listenstyles.playSection}>

                <img src="data:image/svg+xml,%3Csvg width='15' height='17' viewBox='0 0 15 17' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13.6333 6.67308L13.6333 6.67309L13.6367 6.67498C13.8983 6.81989 14.1163 7.03219 14.2681 7.28983C14.4199 7.54747 14.5 7.84106 14.5 8.1401C14.5 8.43914 14.4199 8.73273 14.2681 8.99037C14.1163 9.24801 13.8983 9.46031 13.6367 9.60521L13.6367 9.6052L13.6333 9.60712L3.10115 15.5492L3.09886 15.5505C2.83153 15.7032 2.52853 15.7823 2.22067 15.78C1.91282 15.7776 1.61107 15.6938 1.3461 15.5371L1.34613 15.537L1.33975 15.5334C1.08423 15.3872 0.871938 15.1761 0.724447 14.9213C0.576956 14.6666 0.499519 14.3773 0.500003 14.083V14.0822L0.500004 2.19804L0.500002 2.19722C0.499519 1.90286 0.576956 1.61362 0.724447 1.35887C0.871938 1.10412 1.08423 0.892956 1.33975 0.746816L1.33978 0.746864L1.34621 0.743058C1.61112 0.586249 1.91284 0.502403 2.22067 0.500051C2.52851 0.497699 2.83147 0.576923 3.09875 0.729666L3.09875 0.729672L3.10115 0.731027L13.6333 6.67308Z' stroke='white'/%3E%3C/svg%3E%0A"/>


                <div className={listenstyles.loader}>

                    <img className={listenstyles.redLine} height={4} width={55} src="data:image/svg+xml,%3Csvg width='55' height='4' viewBox='0 0 55 4' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='55' height='4' rx='2' fill='%23ED1C24'/%3E%3C/svg%3E%0A"/>

                </div>

                <img className={listenstyles.gistLogo} width={28} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1642890047/Group_1460_3_oizsma.png"/>
            </div>


            <div className={listenstyles.bottomSection}>

                <div className={listenstyles.bottomLeft}>

                    <div className={listenstyles.viewsAndLikes}>

                        <div className={listenstyles.views}>
                            <img src="data:image/svg+xml,%3Csvg width='18' height='16' viewBox='0 0 18 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M17.5238 0H0V12.87H4.38095V16L7.7981 12.87H17.5238V0ZM14.6324 8.31737C13.6905 8.31737 13.2524 7.46375 12.9457 6.829C12.7048 6.32558 12.5076 5.97538 12.2886 5.97538C12.0695 5.97538 11.8943 6.32558 11.6314 6.829C11.3248 7.46375 10.8867 8.31737 9.92286 8.31737C8.98095 8.31737 8.54286 7.46375 8.23619 6.829C7.99524 6.32558 7.7981 5.97538 7.57905 5.97538C7.36 5.97538 7.18476 6.32558 6.92191 6.829C6.61524 7.46375 6.17714 8.31737 5.23524 8.31737C4.29333 8.31737 3.85524 7.46375 3.54857 6.829C3.30762 6.32558 3.11048 5.97538 2.89143 5.97538C2.56286 5.97538 2.3 5.71272 2.3 5.3844C2.3 5.05609 2.56286 4.79343 2.89143 4.79343C3.83333 4.79343 4.27143 5.64706 4.5781 6.28181C4.81905 6.78523 5.01619 7.13543 5.23524 7.13543C5.43238 7.13543 5.62952 6.78523 5.89238 6.28181C6.19905 5.64706 6.63714 4.79343 7.57905 4.79343C8.52095 4.79343 8.95905 5.64706 9.26571 6.28181C9.50667 6.78523 9.70381 7.13543 9.92286 7.13543C10.1419 7.13543 10.3171 6.78523 10.58 6.28181C10.8867 5.64706 11.3248 4.79343 12.2667 4.79343C13.2086 4.79343 13.6467 5.64706 13.9533 6.28181C14.1943 6.78523 14.3914 7.13543 14.6105 7.13543C14.939 7.13543 15.2019 7.39808 15.2019 7.7264C15.2238 8.05472 14.961 8.31737 14.6324 8.31737Z' fill='%238F8F8F'/%3E%3C/svg%3E%0A"/>
                            <h3 className={listenstyles.numbers}>
                                244
                            </h3>

                        </div>
                        <div className={listenstyles.likes}>
                            <img src="data:image/svg+xml,%3Csvg width='18' height='16' viewBox='0 0 18 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8.99201 16C8.73598 16 8.48915 15.9072 8.29678 15.7388C7.57027 15.1035 6.86983 14.5065 6.25184 13.9799L6.24869 13.9772C4.43687 12.4332 2.87229 11.0998 1.78369 9.7863C0.566803 8.31791 0 6.92567 0 5.40473C0 3.92701 0.506706 2.56372 1.42668 1.56581C2.35763 0.556101 3.63503 0 5.02398 0C6.06209 0 7.0128 0.328199 7.84962 0.975406C8.27195 1.3021 8.65475 1.70192 8.99201 2.16828C9.3294 1.70192 9.71207 1.3021 10.1345 0.975406C10.9714 0.328199 11.9221 0 12.9602 0C14.349 0 15.6265 0.556101 16.5575 1.56581C17.4774 2.56372 17.984 3.92701 17.984 5.40473C17.984 6.92567 17.4174 8.31791 16.2005 9.78616C15.1119 11.0998 13.5474 12.433 11.7359 13.9769C11.1168 14.5043 10.4153 15.1023 9.6871 15.739C9.49487 15.9072 9.2479 16 8.99201 16ZM5.02398 1.05348C3.93277 1.05348 2.93033 1.48897 2.20108 2.27983C1.46098 3.08263 1.05334 4.19236 1.05334 5.40473C1.05334 6.68391 1.52876 7.82794 2.59472 9.11412C3.62501 10.3574 5.15748 11.6633 6.93184 13.1755L6.93514 13.1782C7.55545 13.7069 8.25864 14.3062 8.9905 14.9461C9.72675 14.3049 10.431 13.7047 11.0526 13.1752C12.8268 11.663 14.3591 10.3574 15.3894 9.11412C16.4553 7.82794 16.9307 6.68391 16.9307 5.40473C16.9307 4.19236 16.523 3.08263 15.7829 2.27983C15.0538 1.48897 14.0512 1.05348 12.9602 1.05348C12.1608 1.05348 11.4269 1.30758 10.7789 1.80866C10.2014 2.25541 9.79906 2.82016 9.5632 3.21531C9.44191 3.41852 9.22842 3.53981 8.99201 3.53981C8.7556 3.53981 8.54211 3.41852 8.42082 3.21531C8.18509 2.82016 7.7828 2.25541 7.20516 1.80866C6.55713 1.30758 5.82321 1.05348 5.02398 1.05348Z' fill='%238F8F8F'/%3E%3C/svg%3E%0A"/>
                            <h3 className={listenstyles.numbers}>
                                10
                            </h3>

                        </div>
                    </div>



                    <img src="data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M7.2 0H3.2C1.4328 0 0 1.4328 0 3.2V12.8C0 14.5672 1.4328 16 3.2 16H12.8C14.5672 16 16 14.5672 16 12.8C16 10.9832 16 8.8 16 8.8C16 8.3584 15.6416 8 15.2 8C14.7584 8 14.4 8.3584 14.4 8.8V12.8C14.4 13.6832 13.6832 14.4 12.8 14.4C10.136 14.4 5.8632 14.4 3.2 14.4C2.316 14.4 1.6 13.6832 1.6 12.8C1.6 10.136 1.6 5.8632 1.6 3.2C1.6 2.316 2.316 1.6 3.2 1.6H7.2C7.6416 1.6 8 1.2416 8 0.8C8 0.3584 7.6416 0 7.2 0ZM13.2688 1.6H10.4C9.9584 1.6 9.6 1.2416 9.6 0.8C9.6 0.3584 9.9584 0 10.4 0H15.2C15.6416 0 16 0.3584 16 0.8V5.6C16 6.0416 15.6416 6.4 15.2 6.4C14.7584 6.4 14.4 6.0416 14.4 5.6V2.7312L8.5656 8.5656C8.2536 8.8776 7.7464 8.8776 7.4344 8.5656C7.1216 8.2536 7.1216 7.7464 7.4344 7.4344L13.2688 1.6Z' fill='%238F8F8F'/%3E%3C/svg%3E%0A"/>



                </div>


            </div>




        </div>
        <div className={listenstyles.singleGistafter}>


            <div className={listenstyles.top}>

                <div className={listenstyles.topLeft}>



                    <img src="https://res.cloudinary.com/seunsanyaa/image/upload/v1642888388/Ellipse_177_hm1lad.png"/>

                    <h3 className={listenstyles.profileName}>
                        Wole Majekodunmi
                    </h3>

                    <img className={listenstyles.hour} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1642888658/2h_xhfqyz.png"/>

                </div>

                <div className={listenstyles.topRight}>
                    <img src="data:image/svg+xml,%3Csvg width='16' height='4' viewBox='0 0 16 4' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2 4C3.10457 4 4 3.10457 4 2C4 0.895431 3.10457 0 2 0C0.895431 0 0 0.895431 0 2C0 3.10457 0.895431 4 2 4Z' fill='%238F8F8F'/%3E%3Cpath d='M7.89471 4C8.99928 4 9.89471 3.10457 9.89471 2C9.89471 0.895431 8.99928 0 7.89471 0C6.79015 0 5.89471 0.895431 5.89471 2C5.89471 3.10457 6.79015 4 7.89471 4Z' fill='%238F8F8F'/%3E%3Cpath d='M13.7895 4C14.894 4 15.7895 3.10457 15.7895 2C15.7895 0.895431 14.894 0 13.7895 0C12.6849 0 11.7895 0.895431 11.7895 2C11.7895 3.10457 12.6849 4 13.7895 4Z' fill='%238F8F8F'/%3E%3C/svg%3E%0A"/>
                    {/*<h3 className={listenstyles.hour}>*/}
                    {/*    . 2h*/}
                    {/*</h3>*/}
                </div>


            </div>

            <img src="https://res.cloudinary.com/seunsanyaa/image/upload/v1642892817/Rectangle_125_1_hbfyns.png"/>


            <div className={listenstyles.playSection}>

                <img src="data:image/svg+xml,%3Csvg width='15' height='17' viewBox='0 0 15 17' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13.6333 6.67308L13.6333 6.67309L13.6367 6.67498C13.8983 6.81989 14.1163 7.03219 14.2681 7.28983C14.4199 7.54747 14.5 7.84106 14.5 8.1401C14.5 8.43914 14.4199 8.73273 14.2681 8.99037C14.1163 9.24801 13.8983 9.46031 13.6367 9.60521L13.6367 9.6052L13.6333 9.60712L3.10115 15.5492L3.09886 15.5505C2.83153 15.7032 2.52853 15.7823 2.22067 15.78C1.91282 15.7776 1.61107 15.6938 1.3461 15.5371L1.34613 15.537L1.33975 15.5334C1.08423 15.3872 0.871938 15.1761 0.724447 14.9213C0.576956 14.6666 0.499519 14.3773 0.500003 14.083V14.0822L0.500004 2.19804L0.500002 2.19722C0.499519 1.90286 0.576956 1.61362 0.724447 1.35887C0.871938 1.10412 1.08423 0.892956 1.33975 0.746816L1.33978 0.746864L1.34621 0.743058C1.61112 0.586249 1.91284 0.502403 2.22067 0.500051C2.52851 0.497699 2.83147 0.576923 3.09875 0.729666L3.09875 0.729672L3.10115 0.731027L13.6333 6.67308Z' stroke='white'/%3E%3C/svg%3E%0A"/>


                <div className={listenstyles.loader}>

                    <img className={listenstyles.redLine} height={4} width={55} src="data:image/svg+xml,%3Csvg width='55' height='4' viewBox='0 0 55 4' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='55' height='4' rx='2' fill='%23ED1C24'/%3E%3C/svg%3E%0A"/>

                </div>

                <img className={listenstyles.gistLogo} width={28} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1642890047/Group_1460_3_oizsma.png"/>
            </div>


            <div className={listenstyles.bottomSection}>

                <div className={listenstyles.bottomLeft}>

                    <div className={listenstyles.viewsAndLikes}>

                        <div className={listenstyles.views}>
                            <img src="data:image/svg+xml,%3Csvg width='18' height='16' viewBox='0 0 18 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M17.5238 0H0V12.87H4.38095V16L7.7981 12.87H17.5238V0ZM14.6324 8.31737C13.6905 8.31737 13.2524 7.46375 12.9457 6.829C12.7048 6.32558 12.5076 5.97538 12.2886 5.97538C12.0695 5.97538 11.8943 6.32558 11.6314 6.829C11.3248 7.46375 10.8867 8.31737 9.92286 8.31737C8.98095 8.31737 8.54286 7.46375 8.23619 6.829C7.99524 6.32558 7.7981 5.97538 7.57905 5.97538C7.36 5.97538 7.18476 6.32558 6.92191 6.829C6.61524 7.46375 6.17714 8.31737 5.23524 8.31737C4.29333 8.31737 3.85524 7.46375 3.54857 6.829C3.30762 6.32558 3.11048 5.97538 2.89143 5.97538C2.56286 5.97538 2.3 5.71272 2.3 5.3844C2.3 5.05609 2.56286 4.79343 2.89143 4.79343C3.83333 4.79343 4.27143 5.64706 4.5781 6.28181C4.81905 6.78523 5.01619 7.13543 5.23524 7.13543C5.43238 7.13543 5.62952 6.78523 5.89238 6.28181C6.19905 5.64706 6.63714 4.79343 7.57905 4.79343C8.52095 4.79343 8.95905 5.64706 9.26571 6.28181C9.50667 6.78523 9.70381 7.13543 9.92286 7.13543C10.1419 7.13543 10.3171 6.78523 10.58 6.28181C10.8867 5.64706 11.3248 4.79343 12.2667 4.79343C13.2086 4.79343 13.6467 5.64706 13.9533 6.28181C14.1943 6.78523 14.3914 7.13543 14.6105 7.13543C14.939 7.13543 15.2019 7.39808 15.2019 7.7264C15.2238 8.05472 14.961 8.31737 14.6324 8.31737Z' fill='%238F8F8F'/%3E%3C/svg%3E%0A"/>
                            <h3 className={listenstyles.numbers}>
                                244
                            </h3>

                        </div>
                        <div className={listenstyles.likes}>
                            <img src="data:image/svg+xml,%3Csvg width='18' height='16' viewBox='0 0 18 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8.99201 16C8.73598 16 8.48915 15.9072 8.29678 15.7388C7.57027 15.1035 6.86983 14.5065 6.25184 13.9799L6.24869 13.9772C4.43687 12.4332 2.87229 11.0998 1.78369 9.7863C0.566803 8.31791 0 6.92567 0 5.40473C0 3.92701 0.506706 2.56372 1.42668 1.56581C2.35763 0.556101 3.63503 0 5.02398 0C6.06209 0 7.0128 0.328199 7.84962 0.975406C8.27195 1.3021 8.65475 1.70192 8.99201 2.16828C9.3294 1.70192 9.71207 1.3021 10.1345 0.975406C10.9714 0.328199 11.9221 0 12.9602 0C14.349 0 15.6265 0.556101 16.5575 1.56581C17.4774 2.56372 17.984 3.92701 17.984 5.40473C17.984 6.92567 17.4174 8.31791 16.2005 9.78616C15.1119 11.0998 13.5474 12.433 11.7359 13.9769C11.1168 14.5043 10.4153 15.1023 9.6871 15.739C9.49487 15.9072 9.2479 16 8.99201 16ZM5.02398 1.05348C3.93277 1.05348 2.93033 1.48897 2.20108 2.27983C1.46098 3.08263 1.05334 4.19236 1.05334 5.40473C1.05334 6.68391 1.52876 7.82794 2.59472 9.11412C3.62501 10.3574 5.15748 11.6633 6.93184 13.1755L6.93514 13.1782C7.55545 13.7069 8.25864 14.3062 8.9905 14.9461C9.72675 14.3049 10.431 13.7047 11.0526 13.1752C12.8268 11.663 14.3591 10.3574 15.3894 9.11412C16.4553 7.82794 16.9307 6.68391 16.9307 5.40473C16.9307 4.19236 16.523 3.08263 15.7829 2.27983C15.0538 1.48897 14.0512 1.05348 12.9602 1.05348C12.1608 1.05348 11.4269 1.30758 10.7789 1.80866C10.2014 2.25541 9.79906 2.82016 9.5632 3.21531C9.44191 3.41852 9.22842 3.53981 8.99201 3.53981C8.7556 3.53981 8.54211 3.41852 8.42082 3.21531C8.18509 2.82016 7.7828 2.25541 7.20516 1.80866C6.55713 1.30758 5.82321 1.05348 5.02398 1.05348Z' fill='%238F8F8F'/%3E%3C/svg%3E%0A"/>
                            <h3 className={listenstyles.numbers}>
                                10
                            </h3>

                        </div>
                    </div>



                    <img src="data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M7.2 0H3.2C1.4328 0 0 1.4328 0 3.2V12.8C0 14.5672 1.4328 16 3.2 16H12.8C14.5672 16 16 14.5672 16 12.8C16 10.9832 16 8.8 16 8.8C16 8.3584 15.6416 8 15.2 8C14.7584 8 14.4 8.3584 14.4 8.8V12.8C14.4 13.6832 13.6832 14.4 12.8 14.4C10.136 14.4 5.8632 14.4 3.2 14.4C2.316 14.4 1.6 13.6832 1.6 12.8C1.6 10.136 1.6 5.8632 1.6 3.2C1.6 2.316 2.316 1.6 3.2 1.6H7.2C7.6416 1.6 8 1.2416 8 0.8C8 0.3584 7.6416 0 7.2 0ZM13.2688 1.6H10.4C9.9584 1.6 9.6 1.2416 9.6 0.8C9.6 0.3584 9.9584 0 10.4 0H15.2C15.6416 0 16 0.3584 16 0.8V5.6C16 6.0416 15.6416 6.4 15.2 6.4C14.7584 6.4 14.4 6.0416 14.4 5.6V2.7312L8.5656 8.5656C8.2536 8.8776 7.7464 8.8776 7.4344 8.5656C7.1216 8.2536 7.1216 7.7464 7.4344 7.4344L13.2688 1.6Z' fill='%238F8F8F'/%3E%3C/svg%3E%0A"/>



                </div>


            </div>




        </div>

        <div className={listenstyles.singleGistafter}>


            <div className={listenstyles.top}>

                <div className={listenstyles.topLeft}>



                    <img src="https://res.cloudinary.com/seunsanyaa/image/upload/v1642888388/Ellipse_177_hm1lad.png"/>

                    <h3 className={listenstyles.profileName}>
                        Wole Majekodunmi
                    </h3>

                    <img className={listenstyles.hour} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1642888658/2h_xhfqyz.png"/>

                </div>

                <div className={listenstyles.topRight}>
                    <img src="data:image/svg+xml,%3Csvg width='16' height='4' viewBox='0 0 16 4' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2 4C3.10457 4 4 3.10457 4 2C4 0.895431 3.10457 0 2 0C0.895431 0 0 0.895431 0 2C0 3.10457 0.895431 4 2 4Z' fill='%238F8F8F'/%3E%3Cpath d='M7.89471 4C8.99928 4 9.89471 3.10457 9.89471 2C9.89471 0.895431 8.99928 0 7.89471 0C6.79015 0 5.89471 0.895431 5.89471 2C5.89471 3.10457 6.79015 4 7.89471 4Z' fill='%238F8F8F'/%3E%3Cpath d='M13.7895 4C14.894 4 15.7895 3.10457 15.7895 2C15.7895 0.895431 14.894 0 13.7895 0C12.6849 0 11.7895 0.895431 11.7895 2C11.7895 3.10457 12.6849 4 13.7895 4Z' fill='%238F8F8F'/%3E%3C/svg%3E%0A"/>
                    {/*<h3 className={listenstyles.hour}>*/}
                    {/*    . 2h*/}
                    {/*</h3>*/}
                </div>


            </div>

            <img src="https://res.cloudinary.com/seunsanyaa/image/upload/v1642892917/Rectangle_125_2_hsebtk.png"/>


            <div className={listenstyles.playSection}>

                <img src="data:image/svg+xml,%3Csvg width='15' height='17' viewBox='0 0 15 17' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13.6333 6.67308L13.6333 6.67309L13.6367 6.67498C13.8983 6.81989 14.1163 7.03219 14.2681 7.28983C14.4199 7.54747 14.5 7.84106 14.5 8.1401C14.5 8.43914 14.4199 8.73273 14.2681 8.99037C14.1163 9.24801 13.8983 9.46031 13.6367 9.60521L13.6367 9.6052L13.6333 9.60712L3.10115 15.5492L3.09886 15.5505C2.83153 15.7032 2.52853 15.7823 2.22067 15.78C1.91282 15.7776 1.61107 15.6938 1.3461 15.5371L1.34613 15.537L1.33975 15.5334C1.08423 15.3872 0.871938 15.1761 0.724447 14.9213C0.576956 14.6666 0.499519 14.3773 0.500003 14.083V14.0822L0.500004 2.19804L0.500002 2.19722C0.499519 1.90286 0.576956 1.61362 0.724447 1.35887C0.871938 1.10412 1.08423 0.892956 1.33975 0.746816L1.33978 0.746864L1.34621 0.743058C1.61112 0.586249 1.91284 0.502403 2.22067 0.500051C2.52851 0.497699 2.83147 0.576923 3.09875 0.729666L3.09875 0.729672L3.10115 0.731027L13.6333 6.67308Z' stroke='white'/%3E%3C/svg%3E%0A"/>


                <div className={listenstyles.loader}>

                    <img className={listenstyles.redLine} height={4} width={55} src="data:image/svg+xml,%3Csvg width='55' height='4' viewBox='0 0 55 4' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='55' height='4' rx='2' fill='%23ED1C24'/%3E%3C/svg%3E%0A"/>

                </div>

                <img className={listenstyles.gistLogo} width={28} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1642890047/Group_1460_3_oizsma.png"/>
            </div>


            <div className={listenstyles.bottomSection}>

                <div className={listenstyles.bottomLeft}>

                    <div className={listenstyles.viewsAndLikes}>

                        <div className={listenstyles.views}>
                            <img src="data:image/svg+xml,%3Csvg width='18' height='16' viewBox='0 0 18 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M17.5238 0H0V12.87H4.38095V16L7.7981 12.87H17.5238V0ZM14.6324 8.31737C13.6905 8.31737 13.2524 7.46375 12.9457 6.829C12.7048 6.32558 12.5076 5.97538 12.2886 5.97538C12.0695 5.97538 11.8943 6.32558 11.6314 6.829C11.3248 7.46375 10.8867 8.31737 9.92286 8.31737C8.98095 8.31737 8.54286 7.46375 8.23619 6.829C7.99524 6.32558 7.7981 5.97538 7.57905 5.97538C7.36 5.97538 7.18476 6.32558 6.92191 6.829C6.61524 7.46375 6.17714 8.31737 5.23524 8.31737C4.29333 8.31737 3.85524 7.46375 3.54857 6.829C3.30762 6.32558 3.11048 5.97538 2.89143 5.97538C2.56286 5.97538 2.3 5.71272 2.3 5.3844C2.3 5.05609 2.56286 4.79343 2.89143 4.79343C3.83333 4.79343 4.27143 5.64706 4.5781 6.28181C4.81905 6.78523 5.01619 7.13543 5.23524 7.13543C5.43238 7.13543 5.62952 6.78523 5.89238 6.28181C6.19905 5.64706 6.63714 4.79343 7.57905 4.79343C8.52095 4.79343 8.95905 5.64706 9.26571 6.28181C9.50667 6.78523 9.70381 7.13543 9.92286 7.13543C10.1419 7.13543 10.3171 6.78523 10.58 6.28181C10.8867 5.64706 11.3248 4.79343 12.2667 4.79343C13.2086 4.79343 13.6467 5.64706 13.9533 6.28181C14.1943 6.78523 14.3914 7.13543 14.6105 7.13543C14.939 7.13543 15.2019 7.39808 15.2019 7.7264C15.2238 8.05472 14.961 8.31737 14.6324 8.31737Z' fill='%238F8F8F'/%3E%3C/svg%3E%0A"/>
                            <h3 className={listenstyles.numbers}>
                                244
                            </h3>

                        </div>
                        <div className={listenstyles.likes}>
                            <img src="data:image/svg+xml,%3Csvg width='18' height='16' viewBox='0 0 18 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8.99201 16C8.73598 16 8.48915 15.9072 8.29678 15.7388C7.57027 15.1035 6.86983 14.5065 6.25184 13.9799L6.24869 13.9772C4.43687 12.4332 2.87229 11.0998 1.78369 9.7863C0.566803 8.31791 0 6.92567 0 5.40473C0 3.92701 0.506706 2.56372 1.42668 1.56581C2.35763 0.556101 3.63503 0 5.02398 0C6.06209 0 7.0128 0.328199 7.84962 0.975406C8.27195 1.3021 8.65475 1.70192 8.99201 2.16828C9.3294 1.70192 9.71207 1.3021 10.1345 0.975406C10.9714 0.328199 11.9221 0 12.9602 0C14.349 0 15.6265 0.556101 16.5575 1.56581C17.4774 2.56372 17.984 3.92701 17.984 5.40473C17.984 6.92567 17.4174 8.31791 16.2005 9.78616C15.1119 11.0998 13.5474 12.433 11.7359 13.9769C11.1168 14.5043 10.4153 15.1023 9.6871 15.739C9.49487 15.9072 9.2479 16 8.99201 16ZM5.02398 1.05348C3.93277 1.05348 2.93033 1.48897 2.20108 2.27983C1.46098 3.08263 1.05334 4.19236 1.05334 5.40473C1.05334 6.68391 1.52876 7.82794 2.59472 9.11412C3.62501 10.3574 5.15748 11.6633 6.93184 13.1755L6.93514 13.1782C7.55545 13.7069 8.25864 14.3062 8.9905 14.9461C9.72675 14.3049 10.431 13.7047 11.0526 13.1752C12.8268 11.663 14.3591 10.3574 15.3894 9.11412C16.4553 7.82794 16.9307 6.68391 16.9307 5.40473C16.9307 4.19236 16.523 3.08263 15.7829 2.27983C15.0538 1.48897 14.0512 1.05348 12.9602 1.05348C12.1608 1.05348 11.4269 1.30758 10.7789 1.80866C10.2014 2.25541 9.79906 2.82016 9.5632 3.21531C9.44191 3.41852 9.22842 3.53981 8.99201 3.53981C8.7556 3.53981 8.54211 3.41852 8.42082 3.21531C8.18509 2.82016 7.7828 2.25541 7.20516 1.80866C6.55713 1.30758 5.82321 1.05348 5.02398 1.05348Z' fill='%238F8F8F'/%3E%3C/svg%3E%0A"/>
                            <h3 className={listenstyles.numbers}>
                                10
                            </h3>

                        </div>
                    </div>



                    <img src="data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M7.2 0H3.2C1.4328 0 0 1.4328 0 3.2V12.8C0 14.5672 1.4328 16 3.2 16H12.8C14.5672 16 16 14.5672 16 12.8C16 10.9832 16 8.8 16 8.8C16 8.3584 15.6416 8 15.2 8C14.7584 8 14.4 8.3584 14.4 8.8V12.8C14.4 13.6832 13.6832 14.4 12.8 14.4C10.136 14.4 5.8632 14.4 3.2 14.4C2.316 14.4 1.6 13.6832 1.6 12.8C1.6 10.136 1.6 5.8632 1.6 3.2C1.6 2.316 2.316 1.6 3.2 1.6H7.2C7.6416 1.6 8 1.2416 8 0.8C8 0.3584 7.6416 0 7.2 0ZM13.2688 1.6H10.4C9.9584 1.6 9.6 1.2416 9.6 0.8C9.6 0.3584 9.9584 0 10.4 0H15.2C15.6416 0 16 0.3584 16 0.8V5.6C16 6.0416 15.6416 6.4 15.2 6.4C14.7584 6.4 14.4 6.0416 14.4 5.6V2.7312L8.5656 8.5656C8.2536 8.8776 7.7464 8.8776 7.4344 8.5656C7.1216 8.2536 7.1216 7.7464 7.4344 7.4344L13.2688 1.6Z' fill='%238F8F8F'/%3E%3C/svg%3E%0A"/>



                </div>


            </div>




        </div>

        <div className={listenstyles.singleGistafter}>


            <div className={listenstyles.top}>

                <div className={listenstyles.topLeft}>



                    <img src="https://res.cloudinary.com/seunsanyaa/image/upload/v1642888388/Ellipse_177_hm1lad.png"/>

                    <h3 className={listenstyles.profileName}>
                        Wole Majekodunmi
                    </h3>

                    <img className={listenstyles.hour} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1642888658/2h_xhfqyz.png"/>

                </div>

                <div className={listenstyles.topRight}>
                    <img src="data:image/svg+xml,%3Csvg width='16' height='4' viewBox='0 0 16 4' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2 4C3.10457 4 4 3.10457 4 2C4 0.895431 3.10457 0 2 0C0.895431 0 0 0.895431 0 2C0 3.10457 0.895431 4 2 4Z' fill='%238F8F8F'/%3E%3Cpath d='M7.89471 4C8.99928 4 9.89471 3.10457 9.89471 2C9.89471 0.895431 8.99928 0 7.89471 0C6.79015 0 5.89471 0.895431 5.89471 2C5.89471 3.10457 6.79015 4 7.89471 4Z' fill='%238F8F8F'/%3E%3Cpath d='M13.7895 4C14.894 4 15.7895 3.10457 15.7895 2C15.7895 0.895431 14.894 0 13.7895 0C12.6849 0 11.7895 0.895431 11.7895 2C11.7895 3.10457 12.6849 4 13.7895 4Z' fill='%238F8F8F'/%3E%3C/svg%3E%0A"/>
                    {/*<h3 className={listenstyles.hour}>*/}
                    {/*    . 2h*/}
                    {/*</h3>*/}
                </div>


            </div>

            <img src="https://res.cloudinary.com/seunsanyaa/image/upload/v1642889201/Rectangle_125_rybq23.png"/>


            <div className={listenstyles.playSection}>

                <img src="data:image/svg+xml,%3Csvg width='15' height='17' viewBox='0 0 15 17' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13.6333 6.67308L13.6333 6.67309L13.6367 6.67498C13.8983 6.81989 14.1163 7.03219 14.2681 7.28983C14.4199 7.54747 14.5 7.84106 14.5 8.1401C14.5 8.43914 14.4199 8.73273 14.2681 8.99037C14.1163 9.24801 13.8983 9.46031 13.6367 9.60521L13.6367 9.6052L13.6333 9.60712L3.10115 15.5492L3.09886 15.5505C2.83153 15.7032 2.52853 15.7823 2.22067 15.78C1.91282 15.7776 1.61107 15.6938 1.3461 15.5371L1.34613 15.537L1.33975 15.5334C1.08423 15.3872 0.871938 15.1761 0.724447 14.9213C0.576956 14.6666 0.499519 14.3773 0.500003 14.083V14.0822L0.500004 2.19804L0.500002 2.19722C0.499519 1.90286 0.576956 1.61362 0.724447 1.35887C0.871938 1.10412 1.08423 0.892956 1.33975 0.746816L1.33978 0.746864L1.34621 0.743058C1.61112 0.586249 1.91284 0.502403 2.22067 0.500051C2.52851 0.497699 2.83147 0.576923 3.09875 0.729666L3.09875 0.729672L3.10115 0.731027L13.6333 6.67308Z' stroke='white'/%3E%3C/svg%3E%0A"/>


                <div className={listenstyles.loader}>

                    <img className={listenstyles.redLine} height={4} width={55} src="data:image/svg+xml,%3Csvg width='55' height='4' viewBox='0 0 55 4' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='55' height='4' rx='2' fill='%23ED1C24'/%3E%3C/svg%3E%0A"/>

                </div>

                <img className={listenstyles.gistLogo} width={28} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1642890047/Group_1460_3_oizsma.png"/>
            </div>


            <div className={listenstyles.bottomSection}>

                <div className={listenstyles.bottomLeft}>

                    <div className={listenstyles.viewsAndLikes}>

                        <div className={listenstyles.views}>
                            <img src="data:image/svg+xml,%3Csvg width='18' height='16' viewBox='0 0 18 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M17.5238 0H0V12.87H4.38095V16L7.7981 12.87H17.5238V0ZM14.6324 8.31737C13.6905 8.31737 13.2524 7.46375 12.9457 6.829C12.7048 6.32558 12.5076 5.97538 12.2886 5.97538C12.0695 5.97538 11.8943 6.32558 11.6314 6.829C11.3248 7.46375 10.8867 8.31737 9.92286 8.31737C8.98095 8.31737 8.54286 7.46375 8.23619 6.829C7.99524 6.32558 7.7981 5.97538 7.57905 5.97538C7.36 5.97538 7.18476 6.32558 6.92191 6.829C6.61524 7.46375 6.17714 8.31737 5.23524 8.31737C4.29333 8.31737 3.85524 7.46375 3.54857 6.829C3.30762 6.32558 3.11048 5.97538 2.89143 5.97538C2.56286 5.97538 2.3 5.71272 2.3 5.3844C2.3 5.05609 2.56286 4.79343 2.89143 4.79343C3.83333 4.79343 4.27143 5.64706 4.5781 6.28181C4.81905 6.78523 5.01619 7.13543 5.23524 7.13543C5.43238 7.13543 5.62952 6.78523 5.89238 6.28181C6.19905 5.64706 6.63714 4.79343 7.57905 4.79343C8.52095 4.79343 8.95905 5.64706 9.26571 6.28181C9.50667 6.78523 9.70381 7.13543 9.92286 7.13543C10.1419 7.13543 10.3171 6.78523 10.58 6.28181C10.8867 5.64706 11.3248 4.79343 12.2667 4.79343C13.2086 4.79343 13.6467 5.64706 13.9533 6.28181C14.1943 6.78523 14.3914 7.13543 14.6105 7.13543C14.939 7.13543 15.2019 7.39808 15.2019 7.7264C15.2238 8.05472 14.961 8.31737 14.6324 8.31737Z' fill='%238F8F8F'/%3E%3C/svg%3E%0A"/>
                            <h3 className={listenstyles.numbers}>
                                244
                            </h3>

                        </div>
                        <div className={listenstyles.likes}>
                            <img src="data:image/svg+xml,%3Csvg width='18' height='16' viewBox='0 0 18 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8.99201 16C8.73598 16 8.48915 15.9072 8.29678 15.7388C7.57027 15.1035 6.86983 14.5065 6.25184 13.9799L6.24869 13.9772C4.43687 12.4332 2.87229 11.0998 1.78369 9.7863C0.566803 8.31791 0 6.92567 0 5.40473C0 3.92701 0.506706 2.56372 1.42668 1.56581C2.35763 0.556101 3.63503 0 5.02398 0C6.06209 0 7.0128 0.328199 7.84962 0.975406C8.27195 1.3021 8.65475 1.70192 8.99201 2.16828C9.3294 1.70192 9.71207 1.3021 10.1345 0.975406C10.9714 0.328199 11.9221 0 12.9602 0C14.349 0 15.6265 0.556101 16.5575 1.56581C17.4774 2.56372 17.984 3.92701 17.984 5.40473C17.984 6.92567 17.4174 8.31791 16.2005 9.78616C15.1119 11.0998 13.5474 12.433 11.7359 13.9769C11.1168 14.5043 10.4153 15.1023 9.6871 15.739C9.49487 15.9072 9.2479 16 8.99201 16ZM5.02398 1.05348C3.93277 1.05348 2.93033 1.48897 2.20108 2.27983C1.46098 3.08263 1.05334 4.19236 1.05334 5.40473C1.05334 6.68391 1.52876 7.82794 2.59472 9.11412C3.62501 10.3574 5.15748 11.6633 6.93184 13.1755L6.93514 13.1782C7.55545 13.7069 8.25864 14.3062 8.9905 14.9461C9.72675 14.3049 10.431 13.7047 11.0526 13.1752C12.8268 11.663 14.3591 10.3574 15.3894 9.11412C16.4553 7.82794 16.9307 6.68391 16.9307 5.40473C16.9307 4.19236 16.523 3.08263 15.7829 2.27983C15.0538 1.48897 14.0512 1.05348 12.9602 1.05348C12.1608 1.05348 11.4269 1.30758 10.7789 1.80866C10.2014 2.25541 9.79906 2.82016 9.5632 3.21531C9.44191 3.41852 9.22842 3.53981 8.99201 3.53981C8.7556 3.53981 8.54211 3.41852 8.42082 3.21531C8.18509 2.82016 7.7828 2.25541 7.20516 1.80866C6.55713 1.30758 5.82321 1.05348 5.02398 1.05348Z' fill='%238F8F8F'/%3E%3C/svg%3E%0A"/>
                            <h3 className={listenstyles.numbers}>
                                10
                            </h3>

                        </div>
                    </div>



                    <img src="data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M7.2 0H3.2C1.4328 0 0 1.4328 0 3.2V12.8C0 14.5672 1.4328 16 3.2 16H12.8C14.5672 16 16 14.5672 16 12.8C16 10.9832 16 8.8 16 8.8C16 8.3584 15.6416 8 15.2 8C14.7584 8 14.4 8.3584 14.4 8.8V12.8C14.4 13.6832 13.6832 14.4 12.8 14.4C10.136 14.4 5.8632 14.4 3.2 14.4C2.316 14.4 1.6 13.6832 1.6 12.8C1.6 10.136 1.6 5.8632 1.6 3.2C1.6 2.316 2.316 1.6 3.2 1.6H7.2C7.6416 1.6 8 1.2416 8 0.8C8 0.3584 7.6416 0 7.2 0ZM13.2688 1.6H10.4C9.9584 1.6 9.6 1.2416 9.6 0.8C9.6 0.3584 9.9584 0 10.4 0H15.2C15.6416 0 16 0.3584 16 0.8V5.6C16 6.0416 15.6416 6.4 15.2 6.4C14.7584 6.4 14.4 6.0416 14.4 5.6V2.7312L8.5656 8.5656C8.2536 8.8776 7.7464 8.8776 7.4344 8.5656C7.1216 8.2536 7.1216 7.7464 7.4344 7.4344L13.2688 1.6Z' fill='%238F8F8F'/%3E%3C/svg%3E%0A"/>



                </div>


            </div>




        </div>


            <div className={listenstyles.singleGistafter}>


                <div className={listenstyles.top}>

                    <div className={listenstyles.topLeft}>



                        <img src="https://res.cloudinary.com/seunsanyaa/image/upload/v1642888388/Ellipse_177_hm1lad.png"/>

                        <h3 className={listenstyles.profileName}>
                            Wole Majekodunmi
                        </h3>

                        <img className={listenstyles.hour} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1642888658/2h_xhfqyz.png"/>

                    </div>

                    <div className={listenstyles.topRight}>
                        <img src="data:image/svg+xml,%3Csvg width='16' height='4' viewBox='0 0 16 4' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2 4C3.10457 4 4 3.10457 4 2C4 0.895431 3.10457 0 2 0C0.895431 0 0 0.895431 0 2C0 3.10457 0.895431 4 2 4Z' fill='%238F8F8F'/%3E%3Cpath d='M7.89471 4C8.99928 4 9.89471 3.10457 9.89471 2C9.89471 0.895431 8.99928 0 7.89471 0C6.79015 0 5.89471 0.895431 5.89471 2C5.89471 3.10457 6.79015 4 7.89471 4Z' fill='%238F8F8F'/%3E%3Cpath d='M13.7895 4C14.894 4 15.7895 3.10457 15.7895 2C15.7895 0.895431 14.894 0 13.7895 0C12.6849 0 11.7895 0.895431 11.7895 2C11.7895 3.10457 12.6849 4 13.7895 4Z' fill='%238F8F8F'/%3E%3C/svg%3E%0A"/>
                        {/*<h3 className={listenstyles.hour}>*/}
                        {/*    . 2h*/}
                        {/*</h3>*/}
                    </div>


                </div>

                <img src="https://res.cloudinary.com/seunsanyaa/image/upload/v1642892817/Rectangle_125_1_hbfyns.png"/>


                <div className={listenstyles.playSection}>

                    <img src="data:image/svg+xml,%3Csvg width='15' height='17' viewBox='0 0 15 17' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13.6333 6.67308L13.6333 6.67309L13.6367 6.67498C13.8983 6.81989 14.1163 7.03219 14.2681 7.28983C14.4199 7.54747 14.5 7.84106 14.5 8.1401C14.5 8.43914 14.4199 8.73273 14.2681 8.99037C14.1163 9.24801 13.8983 9.46031 13.6367 9.60521L13.6367 9.6052L13.6333 9.60712L3.10115 15.5492L3.09886 15.5505C2.83153 15.7032 2.52853 15.7823 2.22067 15.78C1.91282 15.7776 1.61107 15.6938 1.3461 15.5371L1.34613 15.537L1.33975 15.5334C1.08423 15.3872 0.871938 15.1761 0.724447 14.9213C0.576956 14.6666 0.499519 14.3773 0.500003 14.083V14.0822L0.500004 2.19804L0.500002 2.19722C0.499519 1.90286 0.576956 1.61362 0.724447 1.35887C0.871938 1.10412 1.08423 0.892956 1.33975 0.746816L1.33978 0.746864L1.34621 0.743058C1.61112 0.586249 1.91284 0.502403 2.22067 0.500051C2.52851 0.497699 2.83147 0.576923 3.09875 0.729666L3.09875 0.729672L3.10115 0.731027L13.6333 6.67308Z' stroke='white'/%3E%3C/svg%3E%0A"/>


                    <div className={listenstyles.loader}>

                        <img className={listenstyles.redLine} height={4} width={55} src="data:image/svg+xml,%3Csvg width='55' height='4' viewBox='0 0 55 4' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='55' height='4' rx='2' fill='%23ED1C24'/%3E%3C/svg%3E%0A"/>

                    </div>

                    <img className={listenstyles.gistLogo} width={28} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1642890047/Group_1460_3_oizsma.png"/>
                </div>


                <div className={listenstyles.bottomSection}>

                    <div className={listenstyles.bottomLeft}>

                        <div className={listenstyles.viewsAndLikes}>

                            <div className={listenstyles.views}>
                                <img src="data:image/svg+xml,%3Csvg width='18' height='16' viewBox='0 0 18 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M17.5238 0H0V12.87H4.38095V16L7.7981 12.87H17.5238V0ZM14.6324 8.31737C13.6905 8.31737 13.2524 7.46375 12.9457 6.829C12.7048 6.32558 12.5076 5.97538 12.2886 5.97538C12.0695 5.97538 11.8943 6.32558 11.6314 6.829C11.3248 7.46375 10.8867 8.31737 9.92286 8.31737C8.98095 8.31737 8.54286 7.46375 8.23619 6.829C7.99524 6.32558 7.7981 5.97538 7.57905 5.97538C7.36 5.97538 7.18476 6.32558 6.92191 6.829C6.61524 7.46375 6.17714 8.31737 5.23524 8.31737C4.29333 8.31737 3.85524 7.46375 3.54857 6.829C3.30762 6.32558 3.11048 5.97538 2.89143 5.97538C2.56286 5.97538 2.3 5.71272 2.3 5.3844C2.3 5.05609 2.56286 4.79343 2.89143 4.79343C3.83333 4.79343 4.27143 5.64706 4.5781 6.28181C4.81905 6.78523 5.01619 7.13543 5.23524 7.13543C5.43238 7.13543 5.62952 6.78523 5.89238 6.28181C6.19905 5.64706 6.63714 4.79343 7.57905 4.79343C8.52095 4.79343 8.95905 5.64706 9.26571 6.28181C9.50667 6.78523 9.70381 7.13543 9.92286 7.13543C10.1419 7.13543 10.3171 6.78523 10.58 6.28181C10.8867 5.64706 11.3248 4.79343 12.2667 4.79343C13.2086 4.79343 13.6467 5.64706 13.9533 6.28181C14.1943 6.78523 14.3914 7.13543 14.6105 7.13543C14.939 7.13543 15.2019 7.39808 15.2019 7.7264C15.2238 8.05472 14.961 8.31737 14.6324 8.31737Z' fill='%238F8F8F'/%3E%3C/svg%3E%0A"/>
                                <h3 className={listenstyles.numbers}>
                                    244
                                </h3>

                            </div>
                            <div className={listenstyles.likes}>
                                <img src="data:image/svg+xml,%3Csvg width='18' height='16' viewBox='0 0 18 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8.99201 16C8.73598 16 8.48915 15.9072 8.29678 15.7388C7.57027 15.1035 6.86983 14.5065 6.25184 13.9799L6.24869 13.9772C4.43687 12.4332 2.87229 11.0998 1.78369 9.7863C0.566803 8.31791 0 6.92567 0 5.40473C0 3.92701 0.506706 2.56372 1.42668 1.56581C2.35763 0.556101 3.63503 0 5.02398 0C6.06209 0 7.0128 0.328199 7.84962 0.975406C8.27195 1.3021 8.65475 1.70192 8.99201 2.16828C9.3294 1.70192 9.71207 1.3021 10.1345 0.975406C10.9714 0.328199 11.9221 0 12.9602 0C14.349 0 15.6265 0.556101 16.5575 1.56581C17.4774 2.56372 17.984 3.92701 17.984 5.40473C17.984 6.92567 17.4174 8.31791 16.2005 9.78616C15.1119 11.0998 13.5474 12.433 11.7359 13.9769C11.1168 14.5043 10.4153 15.1023 9.6871 15.739C9.49487 15.9072 9.2479 16 8.99201 16ZM5.02398 1.05348C3.93277 1.05348 2.93033 1.48897 2.20108 2.27983C1.46098 3.08263 1.05334 4.19236 1.05334 5.40473C1.05334 6.68391 1.52876 7.82794 2.59472 9.11412C3.62501 10.3574 5.15748 11.6633 6.93184 13.1755L6.93514 13.1782C7.55545 13.7069 8.25864 14.3062 8.9905 14.9461C9.72675 14.3049 10.431 13.7047 11.0526 13.1752C12.8268 11.663 14.3591 10.3574 15.3894 9.11412C16.4553 7.82794 16.9307 6.68391 16.9307 5.40473C16.9307 4.19236 16.523 3.08263 15.7829 2.27983C15.0538 1.48897 14.0512 1.05348 12.9602 1.05348C12.1608 1.05348 11.4269 1.30758 10.7789 1.80866C10.2014 2.25541 9.79906 2.82016 9.5632 3.21531C9.44191 3.41852 9.22842 3.53981 8.99201 3.53981C8.7556 3.53981 8.54211 3.41852 8.42082 3.21531C8.18509 2.82016 7.7828 2.25541 7.20516 1.80866C6.55713 1.30758 5.82321 1.05348 5.02398 1.05348Z' fill='%238F8F8F'/%3E%3C/svg%3E%0A"/>
                                <h3 className={listenstyles.numbers}>
                                    10
                                </h3>

                            </div>
                        </div>



                        <img src="data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M7.2 0H3.2C1.4328 0 0 1.4328 0 3.2V12.8C0 14.5672 1.4328 16 3.2 16H12.8C14.5672 16 16 14.5672 16 12.8C16 10.9832 16 8.8 16 8.8C16 8.3584 15.6416 8 15.2 8C14.7584 8 14.4 8.3584 14.4 8.8V12.8C14.4 13.6832 13.6832 14.4 12.8 14.4C10.136 14.4 5.8632 14.4 3.2 14.4C2.316 14.4 1.6 13.6832 1.6 12.8C1.6 10.136 1.6 5.8632 1.6 3.2C1.6 2.316 2.316 1.6 3.2 1.6H7.2C7.6416 1.6 8 1.2416 8 0.8C8 0.3584 7.6416 0 7.2 0ZM13.2688 1.6H10.4C9.9584 1.6 9.6 1.2416 9.6 0.8C9.6 0.3584 9.9584 0 10.4 0H15.2C15.6416 0 16 0.3584 16 0.8V5.6C16 6.0416 15.6416 6.4 15.2 6.4C14.7584 6.4 14.4 6.0416 14.4 5.6V2.7312L8.5656 8.5656C8.2536 8.8776 7.7464 8.8776 7.4344 8.5656C7.1216 8.2536 7.1216 7.7464 7.4344 7.4344L13.2688 1.6Z' fill='%238F8F8F'/%3E%3C/svg%3E%0A"/>



                    </div>


                </div>




            </div>
        <div className={listenstyles.singleGistafter}>


            <div className={listenstyles.top}>

                <div className={listenstyles.topLeft}>



                    <img src="https://res.cloudinary.com/seunsanyaa/image/upload/v1642987770/Ellipse_177_pntl1f.png"/>

                    <h3 className={listenstyles.profileName}>
                        Wole Majekodunmi
                    </h3>

                    <img className={listenstyles.hour} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1642888658/2h_xhfqyz.png"/>

                </div>

                <div className={listenstyles.topRight}>
                    <img src="data:image/svg+xml,%3Csvg width='16' height='4' viewBox='0 0 16 4' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2 4C3.10457 4 4 3.10457 4 2C4 0.895431 3.10457 0 2 0C0.895431 0 0 0.895431 0 2C0 3.10457 0.895431 4 2 4Z' fill='%238F8F8F'/%3E%3Cpath d='M7.89471 4C8.99928 4 9.89471 3.10457 9.89471 2C9.89471 0.895431 8.99928 0 7.89471 0C6.79015 0 5.89471 0.895431 5.89471 2C5.89471 3.10457 6.79015 4 7.89471 4Z' fill='%238F8F8F'/%3E%3Cpath d='M13.7895 4C14.894 4 15.7895 3.10457 15.7895 2C15.7895 0.895431 14.894 0 13.7895 0C12.6849 0 11.7895 0.895431 11.7895 2C11.7895 3.10457 12.6849 4 13.7895 4Z' fill='%238F8F8F'/%3E%3C/svg%3E%0A"/>
                    {/*<h3 className={listenstyles.hour}>*/}
                    {/*    . 2h*/}
                    {/*</h3>*/}
                </div>


            </div>

            <img src="https://res.cloudinary.com/seunsanyaa/image/upload/v1642892817/Rectangle_125_1_hbfyns.png"/>


            <div className={listenstyles.playSection}>

                <img src="data:image/svg+xml,%3Csvg width='15' height='17' viewBox='0 0 15 17' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13.6333 6.67308L13.6333 6.67309L13.6367 6.67498C13.8983 6.81989 14.1163 7.03219 14.2681 7.28983C14.4199 7.54747 14.5 7.84106 14.5 8.1401C14.5 8.43914 14.4199 8.73273 14.2681 8.99037C14.1163 9.24801 13.8983 9.46031 13.6367 9.60521L13.6367 9.6052L13.6333 9.60712L3.10115 15.5492L3.09886 15.5505C2.83153 15.7032 2.52853 15.7823 2.22067 15.78C1.91282 15.7776 1.61107 15.6938 1.3461 15.5371L1.34613 15.537L1.33975 15.5334C1.08423 15.3872 0.871938 15.1761 0.724447 14.9213C0.576956 14.6666 0.499519 14.3773 0.500003 14.083V14.0822L0.500004 2.19804L0.500002 2.19722C0.499519 1.90286 0.576956 1.61362 0.724447 1.35887C0.871938 1.10412 1.08423 0.892956 1.33975 0.746816L1.33978 0.746864L1.34621 0.743058C1.61112 0.586249 1.91284 0.502403 2.22067 0.500051C2.52851 0.497699 2.83147 0.576923 3.09875 0.729666L3.09875 0.729672L3.10115 0.731027L13.6333 6.67308Z' stroke='white'/%3E%3C/svg%3E%0A"/>


                <div className={listenstyles.loader}>

                    <img className={listenstyles.redLine} height={4} width={55} src="data:image/svg+xml,%3Csvg width='55' height='4' viewBox='0 0 55 4' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='55' height='4' rx='2' fill='%23ED1C24'/%3E%3C/svg%3E%0A"/>

                </div>

                <img className={listenstyles.gistLogo} width={28} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1642890047/Group_1460_3_oizsma.png"/>
            </div>


            <div className={listenstyles.bottomSection}>

                <div className={listenstyles.bottomLeft}>

                    <div className={listenstyles.viewsAndLikes}>

                        <div className={listenstyles.views}>
                            <img src="data:image/svg+xml,%3Csvg width='18' height='16' viewBox='0 0 18 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M17.5238 0H0V12.87H4.38095V16L7.7981 12.87H17.5238V0ZM14.6324 8.31737C13.6905 8.31737 13.2524 7.46375 12.9457 6.829C12.7048 6.32558 12.5076 5.97538 12.2886 5.97538C12.0695 5.97538 11.8943 6.32558 11.6314 6.829C11.3248 7.46375 10.8867 8.31737 9.92286 8.31737C8.98095 8.31737 8.54286 7.46375 8.23619 6.829C7.99524 6.32558 7.7981 5.97538 7.57905 5.97538C7.36 5.97538 7.18476 6.32558 6.92191 6.829C6.61524 7.46375 6.17714 8.31737 5.23524 8.31737C4.29333 8.31737 3.85524 7.46375 3.54857 6.829C3.30762 6.32558 3.11048 5.97538 2.89143 5.97538C2.56286 5.97538 2.3 5.71272 2.3 5.3844C2.3 5.05609 2.56286 4.79343 2.89143 4.79343C3.83333 4.79343 4.27143 5.64706 4.5781 6.28181C4.81905 6.78523 5.01619 7.13543 5.23524 7.13543C5.43238 7.13543 5.62952 6.78523 5.89238 6.28181C6.19905 5.64706 6.63714 4.79343 7.57905 4.79343C8.52095 4.79343 8.95905 5.64706 9.26571 6.28181C9.50667 6.78523 9.70381 7.13543 9.92286 7.13543C10.1419 7.13543 10.3171 6.78523 10.58 6.28181C10.8867 5.64706 11.3248 4.79343 12.2667 4.79343C13.2086 4.79343 13.6467 5.64706 13.9533 6.28181C14.1943 6.78523 14.3914 7.13543 14.6105 7.13543C14.939 7.13543 15.2019 7.39808 15.2019 7.7264C15.2238 8.05472 14.961 8.31737 14.6324 8.31737Z' fill='%238F8F8F'/%3E%3C/svg%3E%0A"/>
                            <h3 className={listenstyles.numbers}>
                                244
                            </h3>

                        </div>
                        <div className={listenstyles.likes}>
                            <img src="data:image/svg+xml,%3Csvg width='18' height='16' viewBox='0 0 18 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8.99201 16C8.73598 16 8.48915 15.9072 8.29678 15.7388C7.57027 15.1035 6.86983 14.5065 6.25184 13.9799L6.24869 13.9772C4.43687 12.4332 2.87229 11.0998 1.78369 9.7863C0.566803 8.31791 0 6.92567 0 5.40473C0 3.92701 0.506706 2.56372 1.42668 1.56581C2.35763 0.556101 3.63503 0 5.02398 0C6.06209 0 7.0128 0.328199 7.84962 0.975406C8.27195 1.3021 8.65475 1.70192 8.99201 2.16828C9.3294 1.70192 9.71207 1.3021 10.1345 0.975406C10.9714 0.328199 11.9221 0 12.9602 0C14.349 0 15.6265 0.556101 16.5575 1.56581C17.4774 2.56372 17.984 3.92701 17.984 5.40473C17.984 6.92567 17.4174 8.31791 16.2005 9.78616C15.1119 11.0998 13.5474 12.433 11.7359 13.9769C11.1168 14.5043 10.4153 15.1023 9.6871 15.739C9.49487 15.9072 9.2479 16 8.99201 16ZM5.02398 1.05348C3.93277 1.05348 2.93033 1.48897 2.20108 2.27983C1.46098 3.08263 1.05334 4.19236 1.05334 5.40473C1.05334 6.68391 1.52876 7.82794 2.59472 9.11412C3.62501 10.3574 5.15748 11.6633 6.93184 13.1755L6.93514 13.1782C7.55545 13.7069 8.25864 14.3062 8.9905 14.9461C9.72675 14.3049 10.431 13.7047 11.0526 13.1752C12.8268 11.663 14.3591 10.3574 15.3894 9.11412C16.4553 7.82794 16.9307 6.68391 16.9307 5.40473C16.9307 4.19236 16.523 3.08263 15.7829 2.27983C15.0538 1.48897 14.0512 1.05348 12.9602 1.05348C12.1608 1.05348 11.4269 1.30758 10.7789 1.80866C10.2014 2.25541 9.79906 2.82016 9.5632 3.21531C9.44191 3.41852 9.22842 3.53981 8.99201 3.53981C8.7556 3.53981 8.54211 3.41852 8.42082 3.21531C8.18509 2.82016 7.7828 2.25541 7.20516 1.80866C6.55713 1.30758 5.82321 1.05348 5.02398 1.05348Z' fill='%238F8F8F'/%3E%3C/svg%3E%0A"/>
                            <h3 className={listenstyles.numbers}>
                                10
                            </h3>

                        </div>
                    </div>



                    <img src="data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M7.2 0H3.2C1.4328 0 0 1.4328 0 3.2V12.8C0 14.5672 1.4328 16 3.2 16H12.8C14.5672 16 16 14.5672 16 12.8C16 10.9832 16 8.8 16 8.8C16 8.3584 15.6416 8 15.2 8C14.7584 8 14.4 8.3584 14.4 8.8V12.8C14.4 13.6832 13.6832 14.4 12.8 14.4C10.136 14.4 5.8632 14.4 3.2 14.4C2.316 14.4 1.6 13.6832 1.6 12.8C1.6 10.136 1.6 5.8632 1.6 3.2C1.6 2.316 2.316 1.6 3.2 1.6H7.2C7.6416 1.6 8 1.2416 8 0.8C8 0.3584 7.6416 0 7.2 0ZM13.2688 1.6H10.4C9.9584 1.6 9.6 1.2416 9.6 0.8C9.6 0.3584 9.9584 0 10.4 0H15.2C15.6416 0 16 0.3584 16 0.8V5.6C16 6.0416 15.6416 6.4 15.2 6.4C14.7584 6.4 14.4 6.0416 14.4 5.6V2.7312L8.5656 8.5656C8.2536 8.8776 7.7464 8.8776 7.4344 8.5656C7.1216 8.2536 7.1216 7.7464 7.4344 7.4344L13.2688 1.6Z' fill='%238F8F8F'/%3E%3C/svg%3E%0A"/>



                </div>


            </div>




        </div>


        <div className={listenstyles.singleGistafter}>


            <div className={listenstyles.top}>

                <div className={listenstyles.topLeft}>



                    <img src="https://res.cloudinary.com/seunsanyaa/image/upload/v1642888388/Ellipse_177_hm1lad.png"/>

                    <h3 className={listenstyles.profileName}>
                        Wole Majekodunmi
                    </h3>

                    <img className={listenstyles.hour} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1642888658/2h_xhfqyz.png"/>

                </div>

                <div className={listenstyles.topRight}>
                    <img src="data:image/svg+xml,%3Csvg width='16' height='4' viewBox='0 0 16 4' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2 4C3.10457 4 4 3.10457 4 2C4 0.895431 3.10457 0 2 0C0.895431 0 0 0.895431 0 2C0 3.10457 0.895431 4 2 4Z' fill='%238F8F8F'/%3E%3Cpath d='M7.89471 4C8.99928 4 9.89471 3.10457 9.89471 2C9.89471 0.895431 8.99928 0 7.89471 0C6.79015 0 5.89471 0.895431 5.89471 2C5.89471 3.10457 6.79015 4 7.89471 4Z' fill='%238F8F8F'/%3E%3Cpath d='M13.7895 4C14.894 4 15.7895 3.10457 15.7895 2C15.7895 0.895431 14.894 0 13.7895 0C12.6849 0 11.7895 0.895431 11.7895 2C11.7895 3.10457 12.6849 4 13.7895 4Z' fill='%238F8F8F'/%3E%3C/svg%3E%0A"/>
                    {/*<h3 className={listenstyles.hour}>*/}
                    {/*    . 2h*/}
                    {/*</h3>*/}
                </div>


            </div>

            <img src="https://res.cloudinary.com/seunsanyaa/image/upload/v1642892917/Rectangle_125_2_hsebtk.png"/>


            <div className={listenstyles.playSection}>

                <img src="data:image/svg+xml,%3Csvg width='15' height='17' viewBox='0 0 15 17' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13.6333 6.67308L13.6333 6.67309L13.6367 6.67498C13.8983 6.81989 14.1163 7.03219 14.2681 7.28983C14.4199 7.54747 14.5 7.84106 14.5 8.1401C14.5 8.43914 14.4199 8.73273 14.2681 8.99037C14.1163 9.24801 13.8983 9.46031 13.6367 9.60521L13.6367 9.6052L13.6333 9.60712L3.10115 15.5492L3.09886 15.5505C2.83153 15.7032 2.52853 15.7823 2.22067 15.78C1.91282 15.7776 1.61107 15.6938 1.3461 15.5371L1.34613 15.537L1.33975 15.5334C1.08423 15.3872 0.871938 15.1761 0.724447 14.9213C0.576956 14.6666 0.499519 14.3773 0.500003 14.083V14.0822L0.500004 2.19804L0.500002 2.19722C0.499519 1.90286 0.576956 1.61362 0.724447 1.35887C0.871938 1.10412 1.08423 0.892956 1.33975 0.746816L1.33978 0.746864L1.34621 0.743058C1.61112 0.586249 1.91284 0.502403 2.22067 0.500051C2.52851 0.497699 2.83147 0.576923 3.09875 0.729666L3.09875 0.729672L3.10115 0.731027L13.6333 6.67308Z' stroke='white'/%3E%3C/svg%3E%0A"/>


                <div className={listenstyles.loader}>

                    <img className={listenstyles.redLine} height={4} width={55} src="data:image/svg+xml,%3Csvg width='55' height='4' viewBox='0 0 55 4' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='55' height='4' rx='2' fill='%23ED1C24'/%3E%3C/svg%3E%0A"/>

                </div>

                <img className={listenstyles.gistLogo} width={28} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1642890047/Group_1460_3_oizsma.png"/>
            </div>


            <div className={listenstyles.bottomSection}>

                <div className={listenstyles.bottomLeft}>

                    <div className={listenstyles.viewsAndLikes}>

                        <div className={listenstyles.views}>
                            <img src="data:image/svg+xml,%3Csvg width='18' height='16' viewBox='0 0 18 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M17.5238 0H0V12.87H4.38095V16L7.7981 12.87H17.5238V0ZM14.6324 8.31737C13.6905 8.31737 13.2524 7.46375 12.9457 6.829C12.7048 6.32558 12.5076 5.97538 12.2886 5.97538C12.0695 5.97538 11.8943 6.32558 11.6314 6.829C11.3248 7.46375 10.8867 8.31737 9.92286 8.31737C8.98095 8.31737 8.54286 7.46375 8.23619 6.829C7.99524 6.32558 7.7981 5.97538 7.57905 5.97538C7.36 5.97538 7.18476 6.32558 6.92191 6.829C6.61524 7.46375 6.17714 8.31737 5.23524 8.31737C4.29333 8.31737 3.85524 7.46375 3.54857 6.829C3.30762 6.32558 3.11048 5.97538 2.89143 5.97538C2.56286 5.97538 2.3 5.71272 2.3 5.3844C2.3 5.05609 2.56286 4.79343 2.89143 4.79343C3.83333 4.79343 4.27143 5.64706 4.5781 6.28181C4.81905 6.78523 5.01619 7.13543 5.23524 7.13543C5.43238 7.13543 5.62952 6.78523 5.89238 6.28181C6.19905 5.64706 6.63714 4.79343 7.57905 4.79343C8.52095 4.79343 8.95905 5.64706 9.26571 6.28181C9.50667 6.78523 9.70381 7.13543 9.92286 7.13543C10.1419 7.13543 10.3171 6.78523 10.58 6.28181C10.8867 5.64706 11.3248 4.79343 12.2667 4.79343C13.2086 4.79343 13.6467 5.64706 13.9533 6.28181C14.1943 6.78523 14.3914 7.13543 14.6105 7.13543C14.939 7.13543 15.2019 7.39808 15.2019 7.7264C15.2238 8.05472 14.961 8.31737 14.6324 8.31737Z' fill='%238F8F8F'/%3E%3C/svg%3E%0A"/>
                            <h3 className={listenstyles.numbers}>
                                244
                            </h3>

                        </div>
                        <div className={listenstyles.likes}>
                            <img src="data:image/svg+xml,%3Csvg width='18' height='16' viewBox='0 0 18 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8.99201 16C8.73598 16 8.48915 15.9072 8.29678 15.7388C7.57027 15.1035 6.86983 14.5065 6.25184 13.9799L6.24869 13.9772C4.43687 12.4332 2.87229 11.0998 1.78369 9.7863C0.566803 8.31791 0 6.92567 0 5.40473C0 3.92701 0.506706 2.56372 1.42668 1.56581C2.35763 0.556101 3.63503 0 5.02398 0C6.06209 0 7.0128 0.328199 7.84962 0.975406C8.27195 1.3021 8.65475 1.70192 8.99201 2.16828C9.3294 1.70192 9.71207 1.3021 10.1345 0.975406C10.9714 0.328199 11.9221 0 12.9602 0C14.349 0 15.6265 0.556101 16.5575 1.56581C17.4774 2.56372 17.984 3.92701 17.984 5.40473C17.984 6.92567 17.4174 8.31791 16.2005 9.78616C15.1119 11.0998 13.5474 12.433 11.7359 13.9769C11.1168 14.5043 10.4153 15.1023 9.6871 15.739C9.49487 15.9072 9.2479 16 8.99201 16ZM5.02398 1.05348C3.93277 1.05348 2.93033 1.48897 2.20108 2.27983C1.46098 3.08263 1.05334 4.19236 1.05334 5.40473C1.05334 6.68391 1.52876 7.82794 2.59472 9.11412C3.62501 10.3574 5.15748 11.6633 6.93184 13.1755L6.93514 13.1782C7.55545 13.7069 8.25864 14.3062 8.9905 14.9461C9.72675 14.3049 10.431 13.7047 11.0526 13.1752C12.8268 11.663 14.3591 10.3574 15.3894 9.11412C16.4553 7.82794 16.9307 6.68391 16.9307 5.40473C16.9307 4.19236 16.523 3.08263 15.7829 2.27983C15.0538 1.48897 14.0512 1.05348 12.9602 1.05348C12.1608 1.05348 11.4269 1.30758 10.7789 1.80866C10.2014 2.25541 9.79906 2.82016 9.5632 3.21531C9.44191 3.41852 9.22842 3.53981 8.99201 3.53981C8.7556 3.53981 8.54211 3.41852 8.42082 3.21531C8.18509 2.82016 7.7828 2.25541 7.20516 1.80866C6.55713 1.30758 5.82321 1.05348 5.02398 1.05348Z' fill='%238F8F8F'/%3E%3C/svg%3E%0A"/>
                            <h3 className={listenstyles.numbers}>
                                10
                            </h3>

                        </div>
                    </div>



                    <img src="data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M7.2 0H3.2C1.4328 0 0 1.4328 0 3.2V12.8C0 14.5672 1.4328 16 3.2 16H12.8C14.5672 16 16 14.5672 16 12.8C16 10.9832 16 8.8 16 8.8C16 8.3584 15.6416 8 15.2 8C14.7584 8 14.4 8.3584 14.4 8.8V12.8C14.4 13.6832 13.6832 14.4 12.8 14.4C10.136 14.4 5.8632 14.4 3.2 14.4C2.316 14.4 1.6 13.6832 1.6 12.8C1.6 10.136 1.6 5.8632 1.6 3.2C1.6 2.316 2.316 1.6 3.2 1.6H7.2C7.6416 1.6 8 1.2416 8 0.8C8 0.3584 7.6416 0 7.2 0ZM13.2688 1.6H10.4C9.9584 1.6 9.6 1.2416 9.6 0.8C9.6 0.3584 9.9584 0 10.4 0H15.2C15.6416 0 16 0.3584 16 0.8V5.6C16 6.0416 15.6416 6.4 15.2 6.4C14.7584 6.4 14.4 6.0416 14.4 5.6V2.7312L8.5656 8.5656C8.2536 8.8776 7.7464 8.8776 7.4344 8.5656C7.1216 8.2536 7.1216 7.7464 7.4344 7.4344L13.2688 1.6Z' fill='%238F8F8F'/%3E%3C/svg%3E%0A"/>



                </div>


            </div>




        </div>

    </div>




</div>


    <div className={listenstyles.gistsContainerMobile}>


        <Swiper
            modules={[Pagination]}
            pagination={true}
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            className="mySwiper">
            <SwiperSlide>

                <div className={listenstyles.singleGist} >


                    <div className={listenstyles.top}>

                        <div className={listenstyles.topLeft}>



                            <img src="https://res.cloudinary.com/seunsanyaa/image/upload/v1642888388/Ellipse_177_hm1lad.png"/>

                            <h3 className={listenstyles.profileName}>
                                Wole Majekodunmi
                            </h3>

                            <img className={listenstyles.hour} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1642888658/2h_xhfqyz.png"/>

                        </div>

                        <div className={listenstyles.topRight}>
                            <img src="data:image/svg+xml,%3Csvg width='16' height='4' viewBox='0 0 16 4' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2 4C3.10457 4 4 3.10457 4 2C4 0.895431 3.10457 0 2 0C0.895431 0 0 0.895431 0 2C0 3.10457 0.895431 4 2 4Z' fill='%238F8F8F'/%3E%3Cpath d='M7.89471 4C8.99928 4 9.89471 3.10457 9.89471 2C9.89471 0.895431 8.99928 0 7.89471 0C6.79015 0 5.89471 0.895431 5.89471 2C5.89471 3.10457 6.79015 4 7.89471 4Z' fill='%238F8F8F'/%3E%3Cpath d='M13.7895 4C14.894 4 15.7895 3.10457 15.7895 2C15.7895 0.895431 14.894 0 13.7895 0C12.6849 0 11.7895 0.895431 11.7895 2C11.7895 3.10457 12.6849 4 13.7895 4Z' fill='%238F8F8F'/%3E%3C/svg%3E%0A"/>
                            {/*<h3 className={listenstyles.hour}>*/}
                            {/*    . 2h*/}
                            {/*</h3>*/}
                        </div>


                    </div>

                    <img className={listenstyles.image} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1642889201/Rectangle_125_rybq23.png"/>


                    <div className={listenstyles.playSection}>

                        <img src="data:image/svg+xml,%3Csvg width='15' height='17' viewBox='0 0 15 17' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13.6333 6.67308L13.6333 6.67309L13.6367 6.67498C13.8983 6.81989 14.1163 7.03219 14.2681 7.28983C14.4199 7.54747 14.5 7.84106 14.5 8.1401C14.5 8.43914 14.4199 8.73273 14.2681 8.99037C14.1163 9.24801 13.8983 9.46031 13.6367 9.60521L13.6367 9.6052L13.6333 9.60712L3.10115 15.5492L3.09886 15.5505C2.83153 15.7032 2.52853 15.7823 2.22067 15.78C1.91282 15.7776 1.61107 15.6938 1.3461 15.5371L1.34613 15.537L1.33975 15.5334C1.08423 15.3872 0.871938 15.1761 0.724447 14.9213C0.576956 14.6666 0.499519 14.3773 0.500003 14.083V14.0822L0.500004 2.19804L0.500002 2.19722C0.499519 1.90286 0.576956 1.61362 0.724447 1.35887C0.871938 1.10412 1.08423 0.892956 1.33975 0.746816L1.33978 0.746864L1.34621 0.743058C1.61112 0.586249 1.91284 0.502403 2.22067 0.500051C2.52851 0.497699 2.83147 0.576923 3.09875 0.729666L3.09875 0.729672L3.10115 0.731027L13.6333 6.67308Z' stroke='white'/%3E%3C/svg%3E%0A"/>


                        <div className={listenstyles.loader}>

                            <img className={listenstyles.redLine} height={4} width={55} src="data:image/svg+xml,%3Csvg width='55' height='4' viewBox='0 0 55 4' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='55' height='4' rx='2' fill='%23ED1C24'/%3E%3C/svg%3E%0A"/>

                        </div>

                        <img className={listenstyles.gistLogoMobile} src="data:image/svg+xml,%3Csvg width='28' height='18' viewBox='0 0 28 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M25.6251 2.13396V1.14441e-05H24.1138V2.13396H19.2571H19.2073C17.209 2.15331 15.9191 3.28638 15.9191 4.6649C15.9191 8.03968 21.2998 6.86509 21.2998 8.88323C21.2998 9.62778 20.6356 10.2233 19.4398 10.2233C18.1611 10.2233 17.3805 9.56155 17.2974 8.68481H15.7365C15.8361 10.3391 17.3307 11.4971 19.4564 11.4971C21.4658 11.4971 22.7779 10.3721 22.7779 8.88323C22.7114 5.64093 17.4304 6.81552 17.4304 4.6649C17.4304 3.93702 18.0946 3.40769 19.2073 3.40769H22.1745H22.9348H24.1138V8.86685C24.1138 10.6864 25.0272 11.3482 26.6382 11.3482H28V10.0745H26.8873C25.9572 10.0745 25.6251 9.76011 25.6251 8.86685V3.40769H28V2.28281V2.13396H25.6251Z' fill='white'/%3E%3Cpath d='M12.926 11.2416H14.459V2.04393H12.926V11.2416Z' fill='white'/%3E%3Cpath d='M2.88235 6.12442C2.31024 5.84678 1.88059 5.3631 1.67244 4.76221C1.46414 4.16146 1.50246 3.51551 1.77995 2.9434C2.35319 1.76254 3.78025 1.26818 4.96097 1.84114L8.82611 3.71679C10.007 4.28989 10.5015 5.71695 9.92837 6.89795C9.35528 8.07895 7.92836 8.57345 6.74736 8.00021L2.88235 6.12442ZM8.02914 9.76919C9.39331 9.68231 10.6747 8.88491 11.313 7.56986C12.2567 5.62557 11.4426 3.27577 9.49803 2.33212L5.63288 0.456469C3.68887 -0.487465 1.33908 0.327053 0.395423 2.27148C-0.0617352 3.21345 -0.124758 4.27698 0.218146 5.26624C0.56091 6.25552 1.26833 7.05207 2.2103 7.50909L6.07544 9.38488C6.22226 9.45604 6.37133 9.51654 6.52194 9.56805V9.95194V11.0211C6.52194 11.9195 7.25125 12.6512 8.15224 12.6512C9.17154 12.6512 10.0324 13.4078 10.1069 14.3752C10.1507 14.9209 9.95069 15.4572 9.56343 15.8467C9.20706 16.1996 8.73951 16.3972 8.23982 16.3972H6.39884C5.37714 16.3972 4.51645 15.6383 4.44304 14.6734C4.39924 14.1253 4.59575 13.5914 4.98526 13.2019C5.05628 13.1307 5.13558 13.0656 5.22078 13.0017L4.21453 11.8757C4.11038 11.9587 4.01213 12.0463 3.92201 12.1363C3.22007 12.8347 2.8613 13.8021 2.93822 14.7918C3.07563 16.5369 4.59575 17.9044 6.39884 17.9044H8.23982C9.14193 17.9044 9.98845 17.5504 10.6302 16.9122C11.3288 16.2114 11.6874 15.2441 11.6105 14.2602C11.4743 12.5116 9.95532 11.1442 8.15224 11.1442C8.08472 11.1442 8.02914 11.0873 8.02914 11.0211V9.95194V9.76919Z' fill='white'/%3E%3Cpath d='M9.62627 6.75149C9.45573 7.10071 9.19059 7.38972 8.86973 7.58973C8.54886 7.78989 8.17241 7.90344 7.7829 7.90344C7.47382 7.90344 7.17429 7.8348 6.89371 7.69865L3.02829 5.82328C2.53688 5.5841 2.16871 5.16863 1.98989 4.65238C1.81107 4.13627 1.84307 3.58212 2.08225 3.09086C2.42207 2.39115 3.14549 1.93891 3.92562 1.93891C4.2347 1.93891 4.53423 2.00754 4.81481 2.1437L8.67911 4.01893C9.69379 4.5116 10.1188 5.73696 9.62627 6.75149Z' fill='%23ED1D24'/%3E%3C/svg%3E%0A"/>

                        <img className={listenstyles.gistLogo} width={28} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1642890047/Group_1460_3_oizsma.png"/>
                    </div>


                    <div className={listenstyles.bottomSection}>

                        <div className={listenstyles.bottomLeft}>

                            <div className={listenstyles.viewsAndLikes}>

                                <div className={listenstyles.views}>
                                    <img src="data:image/svg+xml,%3Csvg width='18' height='16' viewBox='0 0 18 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M17.5238 0H0V12.87H4.38095V16L7.7981 12.87H17.5238V0ZM14.6324 8.31737C13.6905 8.31737 13.2524 7.46375 12.9457 6.829C12.7048 6.32558 12.5076 5.97538 12.2886 5.97538C12.0695 5.97538 11.8943 6.32558 11.6314 6.829C11.3248 7.46375 10.8867 8.31737 9.92286 8.31737C8.98095 8.31737 8.54286 7.46375 8.23619 6.829C7.99524 6.32558 7.7981 5.97538 7.57905 5.97538C7.36 5.97538 7.18476 6.32558 6.92191 6.829C6.61524 7.46375 6.17714 8.31737 5.23524 8.31737C4.29333 8.31737 3.85524 7.46375 3.54857 6.829C3.30762 6.32558 3.11048 5.97538 2.89143 5.97538C2.56286 5.97538 2.3 5.71272 2.3 5.3844C2.3 5.05609 2.56286 4.79343 2.89143 4.79343C3.83333 4.79343 4.27143 5.64706 4.5781 6.28181C4.81905 6.78523 5.01619 7.13543 5.23524 7.13543C5.43238 7.13543 5.62952 6.78523 5.89238 6.28181C6.19905 5.64706 6.63714 4.79343 7.57905 4.79343C8.52095 4.79343 8.95905 5.64706 9.26571 6.28181C9.50667 6.78523 9.70381 7.13543 9.92286 7.13543C10.1419 7.13543 10.3171 6.78523 10.58 6.28181C10.8867 5.64706 11.3248 4.79343 12.2667 4.79343C13.2086 4.79343 13.6467 5.64706 13.9533 6.28181C14.1943 6.78523 14.3914 7.13543 14.6105 7.13543C14.939 7.13543 15.2019 7.39808 15.2019 7.7264C15.2238 8.05472 14.961 8.31737 14.6324 8.31737Z' fill='%238F8F8F'/%3E%3C/svg%3E%0A"/>
                                    <h3 className={listenstyles.numbers}>
                                        244
                                    </h3>

                                </div>
                                <div className={listenstyles.likes}>
                                    <img src="data:image/svg+xml,%3Csvg width='18' height='16' viewBox='0 0 18 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8.99201 16C8.73598 16 8.48915 15.9072 8.29678 15.7388C7.57027 15.1035 6.86983 14.5065 6.25184 13.9799L6.24869 13.9772C4.43687 12.4332 2.87229 11.0998 1.78369 9.7863C0.566803 8.31791 0 6.92567 0 5.40473C0 3.92701 0.506706 2.56372 1.42668 1.56581C2.35763 0.556101 3.63503 0 5.02398 0C6.06209 0 7.0128 0.328199 7.84962 0.975406C8.27195 1.3021 8.65475 1.70192 8.99201 2.16828C9.3294 1.70192 9.71207 1.3021 10.1345 0.975406C10.9714 0.328199 11.9221 0 12.9602 0C14.349 0 15.6265 0.556101 16.5575 1.56581C17.4774 2.56372 17.984 3.92701 17.984 5.40473C17.984 6.92567 17.4174 8.31791 16.2005 9.78616C15.1119 11.0998 13.5474 12.433 11.7359 13.9769C11.1168 14.5043 10.4153 15.1023 9.6871 15.739C9.49487 15.9072 9.2479 16 8.99201 16ZM5.02398 1.05348C3.93277 1.05348 2.93033 1.48897 2.20108 2.27983C1.46098 3.08263 1.05334 4.19236 1.05334 5.40473C1.05334 6.68391 1.52876 7.82794 2.59472 9.11412C3.62501 10.3574 5.15748 11.6633 6.93184 13.1755L6.93514 13.1782C7.55545 13.7069 8.25864 14.3062 8.9905 14.9461C9.72675 14.3049 10.431 13.7047 11.0526 13.1752C12.8268 11.663 14.3591 10.3574 15.3894 9.11412C16.4553 7.82794 16.9307 6.68391 16.9307 5.40473C16.9307 4.19236 16.523 3.08263 15.7829 2.27983C15.0538 1.48897 14.0512 1.05348 12.9602 1.05348C12.1608 1.05348 11.4269 1.30758 10.7789 1.80866C10.2014 2.25541 9.79906 2.82016 9.5632 3.21531C9.44191 3.41852 9.22842 3.53981 8.99201 3.53981C8.7556 3.53981 8.54211 3.41852 8.42082 3.21531C8.18509 2.82016 7.7828 2.25541 7.20516 1.80866C6.55713 1.30758 5.82321 1.05348 5.02398 1.05348Z' fill='%238F8F8F'/%3E%3C/svg%3E%0A"/>
                                    <h3 className={listenstyles.numbers}>
                                        10
                                    </h3>

                                </div>
                            </div>



                            <img src="data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M7.2 0H3.2C1.4328 0 0 1.4328 0 3.2V12.8C0 14.5672 1.4328 16 3.2 16H12.8C14.5672 16 16 14.5672 16 12.8C16 10.9832 16 8.8 16 8.8C16 8.3584 15.6416 8 15.2 8C14.7584 8 14.4 8.3584 14.4 8.8V12.8C14.4 13.6832 13.6832 14.4 12.8 14.4C10.136 14.4 5.8632 14.4 3.2 14.4C2.316 14.4 1.6 13.6832 1.6 12.8C1.6 10.136 1.6 5.8632 1.6 3.2C1.6 2.316 2.316 1.6 3.2 1.6H7.2C7.6416 1.6 8 1.2416 8 0.8C8 0.3584 7.6416 0 7.2 0ZM13.2688 1.6H10.4C9.9584 1.6 9.6 1.2416 9.6 0.8C9.6 0.3584 9.9584 0 10.4 0H15.2C15.6416 0 16 0.3584 16 0.8V5.6C16 6.0416 15.6416 6.4 15.2 6.4C14.7584 6.4 14.4 6.0416 14.4 5.6V2.7312L8.5656 8.5656C8.2536 8.8776 7.7464 8.8776 7.4344 8.5656C7.1216 8.2536 7.1216 7.7464 7.4344 7.4344L13.2688 1.6Z' fill='%238F8F8F'/%3E%3C/svg%3E%0A"/>



                        </div>


                    </div>




                </div>


            </SwiperSlide>


            <SwiperSlide>

                <div className={listenstyles.singleGist} >


                    <div className={listenstyles.top}>

                        <div className={listenstyles.topLeft}>



                            <img src="https://res.cloudinary.com/seunsanyaa/image/upload/v1642888388/Ellipse_177_hm1lad.png"/>

                            <h3 className={listenstyles.profileName}>
                                Wole Majekodunmi
                            </h3>

                            <img className={listenstyles.hour} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1642888658/2h_xhfqyz.png"/>

                        </div>

                        <div className={listenstyles.topRight}>
                            <img src="data:image/svg+xml,%3Csvg width='16' height='4' viewBox='0 0 16 4' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2 4C3.10457 4 4 3.10457 4 2C4 0.895431 3.10457 0 2 0C0.895431 0 0 0.895431 0 2C0 3.10457 0.895431 4 2 4Z' fill='%238F8F8F'/%3E%3Cpath d='M7.89471 4C8.99928 4 9.89471 3.10457 9.89471 2C9.89471 0.895431 8.99928 0 7.89471 0C6.79015 0 5.89471 0.895431 5.89471 2C5.89471 3.10457 6.79015 4 7.89471 4Z' fill='%238F8F8F'/%3E%3Cpath d='M13.7895 4C14.894 4 15.7895 3.10457 15.7895 2C15.7895 0.895431 14.894 0 13.7895 0C12.6849 0 11.7895 0.895431 11.7895 2C11.7895 3.10457 12.6849 4 13.7895 4Z' fill='%238F8F8F'/%3E%3C/svg%3E%0A"/>
                            {/*<h3 className={listenstyles.hour}>*/}
                            {/*    . 2h*/}
                            {/*</h3>*/}
                        </div>


                    </div>

                    <img className={listenstyles.image} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1642889201/Rectangle_125_rybq23.png"/>


                    <div className={listenstyles.playSection}>

                        <img src="data:image/svg+xml,%3Csvg width='15' height='17' viewBox='0 0 15 17' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13.6333 6.67308L13.6333 6.67309L13.6367 6.67498C13.8983 6.81989 14.1163 7.03219 14.2681 7.28983C14.4199 7.54747 14.5 7.84106 14.5 8.1401C14.5 8.43914 14.4199 8.73273 14.2681 8.99037C14.1163 9.24801 13.8983 9.46031 13.6367 9.60521L13.6367 9.6052L13.6333 9.60712L3.10115 15.5492L3.09886 15.5505C2.83153 15.7032 2.52853 15.7823 2.22067 15.78C1.91282 15.7776 1.61107 15.6938 1.3461 15.5371L1.34613 15.537L1.33975 15.5334C1.08423 15.3872 0.871938 15.1761 0.724447 14.9213C0.576956 14.6666 0.499519 14.3773 0.500003 14.083V14.0822L0.500004 2.19804L0.500002 2.19722C0.499519 1.90286 0.576956 1.61362 0.724447 1.35887C0.871938 1.10412 1.08423 0.892956 1.33975 0.746816L1.33978 0.746864L1.34621 0.743058C1.61112 0.586249 1.91284 0.502403 2.22067 0.500051C2.52851 0.497699 2.83147 0.576923 3.09875 0.729666L3.09875 0.729672L3.10115 0.731027L13.6333 6.67308Z' stroke='white'/%3E%3C/svg%3E%0A"/>


                        <div className={listenstyles.loader}>

                            <img className={listenstyles.redLine} height={4} width={55} src="data:image/svg+xml,%3Csvg width='55' height='4' viewBox='0 0 55 4' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='55' height='4' rx='2' fill='%23ED1C24'/%3E%3C/svg%3E%0A"/>

                        </div>

                        <img className={listenstyles.gistLogoMobile} src="data:image/svg+xml,%3Csvg width='28' height='18' viewBox='0 0 28 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M25.6251 2.13396V1.14441e-05H24.1138V2.13396H19.2571H19.2073C17.209 2.15331 15.9191 3.28638 15.9191 4.6649C15.9191 8.03968 21.2998 6.86509 21.2998 8.88323C21.2998 9.62778 20.6356 10.2233 19.4398 10.2233C18.1611 10.2233 17.3805 9.56155 17.2974 8.68481H15.7365C15.8361 10.3391 17.3307 11.4971 19.4564 11.4971C21.4658 11.4971 22.7779 10.3721 22.7779 8.88323C22.7114 5.64093 17.4304 6.81552 17.4304 4.6649C17.4304 3.93702 18.0946 3.40769 19.2073 3.40769H22.1745H22.9348H24.1138V8.86685C24.1138 10.6864 25.0272 11.3482 26.6382 11.3482H28V10.0745H26.8873C25.9572 10.0745 25.6251 9.76011 25.6251 8.86685V3.40769H28V2.28281V2.13396H25.6251Z' fill='white'/%3E%3Cpath d='M12.926 11.2416H14.459V2.04393H12.926V11.2416Z' fill='white'/%3E%3Cpath d='M2.88235 6.12442C2.31024 5.84678 1.88059 5.3631 1.67244 4.76221C1.46414 4.16146 1.50246 3.51551 1.77995 2.9434C2.35319 1.76254 3.78025 1.26818 4.96097 1.84114L8.82611 3.71679C10.007 4.28989 10.5015 5.71695 9.92837 6.89795C9.35528 8.07895 7.92836 8.57345 6.74736 8.00021L2.88235 6.12442ZM8.02914 9.76919C9.39331 9.68231 10.6747 8.88491 11.313 7.56986C12.2567 5.62557 11.4426 3.27577 9.49803 2.33212L5.63288 0.456469C3.68887 -0.487465 1.33908 0.327053 0.395423 2.27148C-0.0617352 3.21345 -0.124758 4.27698 0.218146 5.26624C0.56091 6.25552 1.26833 7.05207 2.2103 7.50909L6.07544 9.38488C6.22226 9.45604 6.37133 9.51654 6.52194 9.56805V9.95194V11.0211C6.52194 11.9195 7.25125 12.6512 8.15224 12.6512C9.17154 12.6512 10.0324 13.4078 10.1069 14.3752C10.1507 14.9209 9.95069 15.4572 9.56343 15.8467C9.20706 16.1996 8.73951 16.3972 8.23982 16.3972H6.39884C5.37714 16.3972 4.51645 15.6383 4.44304 14.6734C4.39924 14.1253 4.59575 13.5914 4.98526 13.2019C5.05628 13.1307 5.13558 13.0656 5.22078 13.0017L4.21453 11.8757C4.11038 11.9587 4.01213 12.0463 3.92201 12.1363C3.22007 12.8347 2.8613 13.8021 2.93822 14.7918C3.07563 16.5369 4.59575 17.9044 6.39884 17.9044H8.23982C9.14193 17.9044 9.98845 17.5504 10.6302 16.9122C11.3288 16.2114 11.6874 15.2441 11.6105 14.2602C11.4743 12.5116 9.95532 11.1442 8.15224 11.1442C8.08472 11.1442 8.02914 11.0873 8.02914 11.0211V9.95194V9.76919Z' fill='white'/%3E%3Cpath d='M9.62627 6.75149C9.45573 7.10071 9.19059 7.38972 8.86973 7.58973C8.54886 7.78989 8.17241 7.90344 7.7829 7.90344C7.47382 7.90344 7.17429 7.8348 6.89371 7.69865L3.02829 5.82328C2.53688 5.5841 2.16871 5.16863 1.98989 4.65238C1.81107 4.13627 1.84307 3.58212 2.08225 3.09086C2.42207 2.39115 3.14549 1.93891 3.92562 1.93891C4.2347 1.93891 4.53423 2.00754 4.81481 2.1437L8.67911 4.01893C9.69379 4.5116 10.1188 5.73696 9.62627 6.75149Z' fill='%23ED1D24'/%3E%3C/svg%3E%0A"/>

                        <img className={listenstyles.gistLogo} width={28} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1642890047/Group_1460_3_oizsma.png"/>
                    </div>


                    <div className={listenstyles.bottomSection}>

                        <div className={listenstyles.bottomLeft}>

                            <div className={listenstyles.viewsAndLikes}>

                                <div className={listenstyles.views}>
                                    <img src="data:image/svg+xml,%3Csvg width='18' height='16' viewBox='0 0 18 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M17.5238 0H0V12.87H4.38095V16L7.7981 12.87H17.5238V0ZM14.6324 8.31737C13.6905 8.31737 13.2524 7.46375 12.9457 6.829C12.7048 6.32558 12.5076 5.97538 12.2886 5.97538C12.0695 5.97538 11.8943 6.32558 11.6314 6.829C11.3248 7.46375 10.8867 8.31737 9.92286 8.31737C8.98095 8.31737 8.54286 7.46375 8.23619 6.829C7.99524 6.32558 7.7981 5.97538 7.57905 5.97538C7.36 5.97538 7.18476 6.32558 6.92191 6.829C6.61524 7.46375 6.17714 8.31737 5.23524 8.31737C4.29333 8.31737 3.85524 7.46375 3.54857 6.829C3.30762 6.32558 3.11048 5.97538 2.89143 5.97538C2.56286 5.97538 2.3 5.71272 2.3 5.3844C2.3 5.05609 2.56286 4.79343 2.89143 4.79343C3.83333 4.79343 4.27143 5.64706 4.5781 6.28181C4.81905 6.78523 5.01619 7.13543 5.23524 7.13543C5.43238 7.13543 5.62952 6.78523 5.89238 6.28181C6.19905 5.64706 6.63714 4.79343 7.57905 4.79343C8.52095 4.79343 8.95905 5.64706 9.26571 6.28181C9.50667 6.78523 9.70381 7.13543 9.92286 7.13543C10.1419 7.13543 10.3171 6.78523 10.58 6.28181C10.8867 5.64706 11.3248 4.79343 12.2667 4.79343C13.2086 4.79343 13.6467 5.64706 13.9533 6.28181C14.1943 6.78523 14.3914 7.13543 14.6105 7.13543C14.939 7.13543 15.2019 7.39808 15.2019 7.7264C15.2238 8.05472 14.961 8.31737 14.6324 8.31737Z' fill='%238F8F8F'/%3E%3C/svg%3E%0A"/>
                                    <h3 className={listenstyles.numbers}>
                                        244
                                    </h3>

                                </div>
                                <div className={listenstyles.likes}>
                                    <img src="data:image/svg+xml,%3Csvg width='18' height='16' viewBox='0 0 18 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8.99201 16C8.73598 16 8.48915 15.9072 8.29678 15.7388C7.57027 15.1035 6.86983 14.5065 6.25184 13.9799L6.24869 13.9772C4.43687 12.4332 2.87229 11.0998 1.78369 9.7863C0.566803 8.31791 0 6.92567 0 5.40473C0 3.92701 0.506706 2.56372 1.42668 1.56581C2.35763 0.556101 3.63503 0 5.02398 0C6.06209 0 7.0128 0.328199 7.84962 0.975406C8.27195 1.3021 8.65475 1.70192 8.99201 2.16828C9.3294 1.70192 9.71207 1.3021 10.1345 0.975406C10.9714 0.328199 11.9221 0 12.9602 0C14.349 0 15.6265 0.556101 16.5575 1.56581C17.4774 2.56372 17.984 3.92701 17.984 5.40473C17.984 6.92567 17.4174 8.31791 16.2005 9.78616C15.1119 11.0998 13.5474 12.433 11.7359 13.9769C11.1168 14.5043 10.4153 15.1023 9.6871 15.739C9.49487 15.9072 9.2479 16 8.99201 16ZM5.02398 1.05348C3.93277 1.05348 2.93033 1.48897 2.20108 2.27983C1.46098 3.08263 1.05334 4.19236 1.05334 5.40473C1.05334 6.68391 1.52876 7.82794 2.59472 9.11412C3.62501 10.3574 5.15748 11.6633 6.93184 13.1755L6.93514 13.1782C7.55545 13.7069 8.25864 14.3062 8.9905 14.9461C9.72675 14.3049 10.431 13.7047 11.0526 13.1752C12.8268 11.663 14.3591 10.3574 15.3894 9.11412C16.4553 7.82794 16.9307 6.68391 16.9307 5.40473C16.9307 4.19236 16.523 3.08263 15.7829 2.27983C15.0538 1.48897 14.0512 1.05348 12.9602 1.05348C12.1608 1.05348 11.4269 1.30758 10.7789 1.80866C10.2014 2.25541 9.79906 2.82016 9.5632 3.21531C9.44191 3.41852 9.22842 3.53981 8.99201 3.53981C8.7556 3.53981 8.54211 3.41852 8.42082 3.21531C8.18509 2.82016 7.7828 2.25541 7.20516 1.80866C6.55713 1.30758 5.82321 1.05348 5.02398 1.05348Z' fill='%238F8F8F'/%3E%3C/svg%3E%0A"/>
                                    <h3 className={listenstyles.numbers}>
                                        10
                                    </h3>

                                </div>
                            </div>



                            <img src="data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M7.2 0H3.2C1.4328 0 0 1.4328 0 3.2V12.8C0 14.5672 1.4328 16 3.2 16H12.8C14.5672 16 16 14.5672 16 12.8C16 10.9832 16 8.8 16 8.8C16 8.3584 15.6416 8 15.2 8C14.7584 8 14.4 8.3584 14.4 8.8V12.8C14.4 13.6832 13.6832 14.4 12.8 14.4C10.136 14.4 5.8632 14.4 3.2 14.4C2.316 14.4 1.6 13.6832 1.6 12.8C1.6 10.136 1.6 5.8632 1.6 3.2C1.6 2.316 2.316 1.6 3.2 1.6H7.2C7.6416 1.6 8 1.2416 8 0.8C8 0.3584 7.6416 0 7.2 0ZM13.2688 1.6H10.4C9.9584 1.6 9.6 1.2416 9.6 0.8C9.6 0.3584 9.9584 0 10.4 0H15.2C15.6416 0 16 0.3584 16 0.8V5.6C16 6.0416 15.6416 6.4 15.2 6.4C14.7584 6.4 14.4 6.0416 14.4 5.6V2.7312L8.5656 8.5656C8.2536 8.8776 7.7464 8.8776 7.4344 8.5656C7.1216 8.2536 7.1216 7.7464 7.4344 7.4344L13.2688 1.6Z' fill='%238F8F8F'/%3E%3C/svg%3E%0A"/>



                        </div>


                    </div>




                </div>


            </SwiperSlide>

            <SwiperSlide>

                <div className={listenstyles.singleGist} >


                    <div className={listenstyles.top}>

                        <div className={listenstyles.topLeft}>



                            <img src="https://res.cloudinary.com/seunsanyaa/image/upload/v1642888388/Ellipse_177_hm1lad.png"/>

                            <h3 className={listenstyles.profileName}>
                                Wole Majekodunmi
                            </h3>

                            <img className={listenstyles.hour} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1642888658/2h_xhfqyz.png"/>

                        </div>

                        <div className={listenstyles.topRight}>
                            <img src="data:image/svg+xml,%3Csvg width='16' height='4' viewBox='0 0 16 4' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2 4C3.10457 4 4 3.10457 4 2C4 0.895431 3.10457 0 2 0C0.895431 0 0 0.895431 0 2C0 3.10457 0.895431 4 2 4Z' fill='%238F8F8F'/%3E%3Cpath d='M7.89471 4C8.99928 4 9.89471 3.10457 9.89471 2C9.89471 0.895431 8.99928 0 7.89471 0C6.79015 0 5.89471 0.895431 5.89471 2C5.89471 3.10457 6.79015 4 7.89471 4Z' fill='%238F8F8F'/%3E%3Cpath d='M13.7895 4C14.894 4 15.7895 3.10457 15.7895 2C15.7895 0.895431 14.894 0 13.7895 0C12.6849 0 11.7895 0.895431 11.7895 2C11.7895 3.10457 12.6849 4 13.7895 4Z' fill='%238F8F8F'/%3E%3C/svg%3E%0A"/>
                            {/*<h3 className={listenstyles.hour}>*/}
                            {/*    . 2h*/}
                            {/*</h3>*/}
                        </div>


                    </div>

                    <img className={listenstyles.image} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1642889201/Rectangle_125_rybq23.png"/>


                    <div className={listenstyles.playSection}>

                        <img src="data:image/svg+xml,%3Csvg width='15' height='17' viewBox='0 0 15 17' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13.6333 6.67308L13.6333 6.67309L13.6367 6.67498C13.8983 6.81989 14.1163 7.03219 14.2681 7.28983C14.4199 7.54747 14.5 7.84106 14.5 8.1401C14.5 8.43914 14.4199 8.73273 14.2681 8.99037C14.1163 9.24801 13.8983 9.46031 13.6367 9.60521L13.6367 9.6052L13.6333 9.60712L3.10115 15.5492L3.09886 15.5505C2.83153 15.7032 2.52853 15.7823 2.22067 15.78C1.91282 15.7776 1.61107 15.6938 1.3461 15.5371L1.34613 15.537L1.33975 15.5334C1.08423 15.3872 0.871938 15.1761 0.724447 14.9213C0.576956 14.6666 0.499519 14.3773 0.500003 14.083V14.0822L0.500004 2.19804L0.500002 2.19722C0.499519 1.90286 0.576956 1.61362 0.724447 1.35887C0.871938 1.10412 1.08423 0.892956 1.33975 0.746816L1.33978 0.746864L1.34621 0.743058C1.61112 0.586249 1.91284 0.502403 2.22067 0.500051C2.52851 0.497699 2.83147 0.576923 3.09875 0.729666L3.09875 0.729672L3.10115 0.731027L13.6333 6.67308Z' stroke='white'/%3E%3C/svg%3E%0A"/>


                        <div className={listenstyles.loader}>

                            <img className={listenstyles.redLine} height={4} width={55} src="data:image/svg+xml,%3Csvg width='55' height='4' viewBox='0 0 55 4' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='55' height='4' rx='2' fill='%23ED1C24'/%3E%3C/svg%3E%0A"/>

                        </div>

                        <img className={listenstyles.gistLogoMobile} src="data:image/svg+xml,%3Csvg width='28' height='18' viewBox='0 0 28 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M25.6251 2.13396V1.14441e-05H24.1138V2.13396H19.2571H19.2073C17.209 2.15331 15.9191 3.28638 15.9191 4.6649C15.9191 8.03968 21.2998 6.86509 21.2998 8.88323C21.2998 9.62778 20.6356 10.2233 19.4398 10.2233C18.1611 10.2233 17.3805 9.56155 17.2974 8.68481H15.7365C15.8361 10.3391 17.3307 11.4971 19.4564 11.4971C21.4658 11.4971 22.7779 10.3721 22.7779 8.88323C22.7114 5.64093 17.4304 6.81552 17.4304 4.6649C17.4304 3.93702 18.0946 3.40769 19.2073 3.40769H22.1745H22.9348H24.1138V8.86685C24.1138 10.6864 25.0272 11.3482 26.6382 11.3482H28V10.0745H26.8873C25.9572 10.0745 25.6251 9.76011 25.6251 8.86685V3.40769H28V2.28281V2.13396H25.6251Z' fill='white'/%3E%3Cpath d='M12.926 11.2416H14.459V2.04393H12.926V11.2416Z' fill='white'/%3E%3Cpath d='M2.88235 6.12442C2.31024 5.84678 1.88059 5.3631 1.67244 4.76221C1.46414 4.16146 1.50246 3.51551 1.77995 2.9434C2.35319 1.76254 3.78025 1.26818 4.96097 1.84114L8.82611 3.71679C10.007 4.28989 10.5015 5.71695 9.92837 6.89795C9.35528 8.07895 7.92836 8.57345 6.74736 8.00021L2.88235 6.12442ZM8.02914 9.76919C9.39331 9.68231 10.6747 8.88491 11.313 7.56986C12.2567 5.62557 11.4426 3.27577 9.49803 2.33212L5.63288 0.456469C3.68887 -0.487465 1.33908 0.327053 0.395423 2.27148C-0.0617352 3.21345 -0.124758 4.27698 0.218146 5.26624C0.56091 6.25552 1.26833 7.05207 2.2103 7.50909L6.07544 9.38488C6.22226 9.45604 6.37133 9.51654 6.52194 9.56805V9.95194V11.0211C6.52194 11.9195 7.25125 12.6512 8.15224 12.6512C9.17154 12.6512 10.0324 13.4078 10.1069 14.3752C10.1507 14.9209 9.95069 15.4572 9.56343 15.8467C9.20706 16.1996 8.73951 16.3972 8.23982 16.3972H6.39884C5.37714 16.3972 4.51645 15.6383 4.44304 14.6734C4.39924 14.1253 4.59575 13.5914 4.98526 13.2019C5.05628 13.1307 5.13558 13.0656 5.22078 13.0017L4.21453 11.8757C4.11038 11.9587 4.01213 12.0463 3.92201 12.1363C3.22007 12.8347 2.8613 13.8021 2.93822 14.7918C3.07563 16.5369 4.59575 17.9044 6.39884 17.9044H8.23982C9.14193 17.9044 9.98845 17.5504 10.6302 16.9122C11.3288 16.2114 11.6874 15.2441 11.6105 14.2602C11.4743 12.5116 9.95532 11.1442 8.15224 11.1442C8.08472 11.1442 8.02914 11.0873 8.02914 11.0211V9.95194V9.76919Z' fill='white'/%3E%3Cpath d='M9.62627 6.75149C9.45573 7.10071 9.19059 7.38972 8.86973 7.58973C8.54886 7.78989 8.17241 7.90344 7.7829 7.90344C7.47382 7.90344 7.17429 7.8348 6.89371 7.69865L3.02829 5.82328C2.53688 5.5841 2.16871 5.16863 1.98989 4.65238C1.81107 4.13627 1.84307 3.58212 2.08225 3.09086C2.42207 2.39115 3.14549 1.93891 3.92562 1.93891C4.2347 1.93891 4.53423 2.00754 4.81481 2.1437L8.67911 4.01893C9.69379 4.5116 10.1188 5.73696 9.62627 6.75149Z' fill='%23ED1D24'/%3E%3C/svg%3E%0A"/>

                        <img className={listenstyles.gistLogo} width={28} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1642890047/Group_1460_3_oizsma.png"/>
                    </div>


                    <div className={listenstyles.bottomSection}>

                        <div className={listenstyles.bottomLeft}>

                            <div className={listenstyles.viewsAndLikes}>

                                <div className={listenstyles.views}>
                                    <img src="data:image/svg+xml,%3Csvg width='18' height='16' viewBox='0 0 18 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M17.5238 0H0V12.87H4.38095V16L7.7981 12.87H17.5238V0ZM14.6324 8.31737C13.6905 8.31737 13.2524 7.46375 12.9457 6.829C12.7048 6.32558 12.5076 5.97538 12.2886 5.97538C12.0695 5.97538 11.8943 6.32558 11.6314 6.829C11.3248 7.46375 10.8867 8.31737 9.92286 8.31737C8.98095 8.31737 8.54286 7.46375 8.23619 6.829C7.99524 6.32558 7.7981 5.97538 7.57905 5.97538C7.36 5.97538 7.18476 6.32558 6.92191 6.829C6.61524 7.46375 6.17714 8.31737 5.23524 8.31737C4.29333 8.31737 3.85524 7.46375 3.54857 6.829C3.30762 6.32558 3.11048 5.97538 2.89143 5.97538C2.56286 5.97538 2.3 5.71272 2.3 5.3844C2.3 5.05609 2.56286 4.79343 2.89143 4.79343C3.83333 4.79343 4.27143 5.64706 4.5781 6.28181C4.81905 6.78523 5.01619 7.13543 5.23524 7.13543C5.43238 7.13543 5.62952 6.78523 5.89238 6.28181C6.19905 5.64706 6.63714 4.79343 7.57905 4.79343C8.52095 4.79343 8.95905 5.64706 9.26571 6.28181C9.50667 6.78523 9.70381 7.13543 9.92286 7.13543C10.1419 7.13543 10.3171 6.78523 10.58 6.28181C10.8867 5.64706 11.3248 4.79343 12.2667 4.79343C13.2086 4.79343 13.6467 5.64706 13.9533 6.28181C14.1943 6.78523 14.3914 7.13543 14.6105 7.13543C14.939 7.13543 15.2019 7.39808 15.2019 7.7264C15.2238 8.05472 14.961 8.31737 14.6324 8.31737Z' fill='%238F8F8F'/%3E%3C/svg%3E%0A"/>
                                    <h3 className={listenstyles.numbers}>
                                        244
                                    </h3>

                                </div>
                                <div className={listenstyles.likes}>
                                    <img src="data:image/svg+xml,%3Csvg width='18' height='16' viewBox='0 0 18 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8.99201 16C8.73598 16 8.48915 15.9072 8.29678 15.7388C7.57027 15.1035 6.86983 14.5065 6.25184 13.9799L6.24869 13.9772C4.43687 12.4332 2.87229 11.0998 1.78369 9.7863C0.566803 8.31791 0 6.92567 0 5.40473C0 3.92701 0.506706 2.56372 1.42668 1.56581C2.35763 0.556101 3.63503 0 5.02398 0C6.06209 0 7.0128 0.328199 7.84962 0.975406C8.27195 1.3021 8.65475 1.70192 8.99201 2.16828C9.3294 1.70192 9.71207 1.3021 10.1345 0.975406C10.9714 0.328199 11.9221 0 12.9602 0C14.349 0 15.6265 0.556101 16.5575 1.56581C17.4774 2.56372 17.984 3.92701 17.984 5.40473C17.984 6.92567 17.4174 8.31791 16.2005 9.78616C15.1119 11.0998 13.5474 12.433 11.7359 13.9769C11.1168 14.5043 10.4153 15.1023 9.6871 15.739C9.49487 15.9072 9.2479 16 8.99201 16ZM5.02398 1.05348C3.93277 1.05348 2.93033 1.48897 2.20108 2.27983C1.46098 3.08263 1.05334 4.19236 1.05334 5.40473C1.05334 6.68391 1.52876 7.82794 2.59472 9.11412C3.62501 10.3574 5.15748 11.6633 6.93184 13.1755L6.93514 13.1782C7.55545 13.7069 8.25864 14.3062 8.9905 14.9461C9.72675 14.3049 10.431 13.7047 11.0526 13.1752C12.8268 11.663 14.3591 10.3574 15.3894 9.11412C16.4553 7.82794 16.9307 6.68391 16.9307 5.40473C16.9307 4.19236 16.523 3.08263 15.7829 2.27983C15.0538 1.48897 14.0512 1.05348 12.9602 1.05348C12.1608 1.05348 11.4269 1.30758 10.7789 1.80866C10.2014 2.25541 9.79906 2.82016 9.5632 3.21531C9.44191 3.41852 9.22842 3.53981 8.99201 3.53981C8.7556 3.53981 8.54211 3.41852 8.42082 3.21531C8.18509 2.82016 7.7828 2.25541 7.20516 1.80866C6.55713 1.30758 5.82321 1.05348 5.02398 1.05348Z' fill='%238F8F8F'/%3E%3C/svg%3E%0A"/>
                                    <h3 className={listenstyles.numbers}>
                                        10
                                    </h3>

                                </div>
                            </div>



                            <img src="data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M7.2 0H3.2C1.4328 0 0 1.4328 0 3.2V12.8C0 14.5672 1.4328 16 3.2 16H12.8C14.5672 16 16 14.5672 16 12.8C16 10.9832 16 8.8 16 8.8C16 8.3584 15.6416 8 15.2 8C14.7584 8 14.4 8.3584 14.4 8.8V12.8C14.4 13.6832 13.6832 14.4 12.8 14.4C10.136 14.4 5.8632 14.4 3.2 14.4C2.316 14.4 1.6 13.6832 1.6 12.8C1.6 10.136 1.6 5.8632 1.6 3.2C1.6 2.316 2.316 1.6 3.2 1.6H7.2C7.6416 1.6 8 1.2416 8 0.8C8 0.3584 7.6416 0 7.2 0ZM13.2688 1.6H10.4C9.9584 1.6 9.6 1.2416 9.6 0.8C9.6 0.3584 9.9584 0 10.4 0H15.2C15.6416 0 16 0.3584 16 0.8V5.6C16 6.0416 15.6416 6.4 15.2 6.4C14.7584 6.4 14.4 6.0416 14.4 5.6V2.7312L8.5656 8.5656C8.2536 8.8776 7.7464 8.8776 7.4344 8.5656C7.1216 8.2536 7.1216 7.7464 7.4344 7.4344L13.2688 1.6Z' fill='%238F8F8F'/%3E%3C/svg%3E%0A"/>



                        </div>


                    </div>




                </div>


            </SwiperSlide>
            <SwiperSlide>

                <div className={listenstyles.singleGist} >


                    <div className={listenstyles.top}>

                        <div className={listenstyles.topLeft}>



                            <img src="https://res.cloudinary.com/seunsanyaa/image/upload/v1642888388/Ellipse_177_hm1lad.png"/>

                            <h3 className={listenstyles.profileName}>
                                Wole Majekodunmi
                            </h3>

                            <img className={listenstyles.hour} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1642888658/2h_xhfqyz.png"/>

                        </div>

                        <div className={listenstyles.topRight}>
                            <img src="data:image/svg+xml,%3Csvg width='16' height='4' viewBox='0 0 16 4' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2 4C3.10457 4 4 3.10457 4 2C4 0.895431 3.10457 0 2 0C0.895431 0 0 0.895431 0 2C0 3.10457 0.895431 4 2 4Z' fill='%238F8F8F'/%3E%3Cpath d='M7.89471 4C8.99928 4 9.89471 3.10457 9.89471 2C9.89471 0.895431 8.99928 0 7.89471 0C6.79015 0 5.89471 0.895431 5.89471 2C5.89471 3.10457 6.79015 4 7.89471 4Z' fill='%238F8F8F'/%3E%3Cpath d='M13.7895 4C14.894 4 15.7895 3.10457 15.7895 2C15.7895 0.895431 14.894 0 13.7895 0C12.6849 0 11.7895 0.895431 11.7895 2C11.7895 3.10457 12.6849 4 13.7895 4Z' fill='%238F8F8F'/%3E%3C/svg%3E%0A"/>
                            {/*<h3 className={listenstyles.hour}>*/}
                            {/*    . 2h*/}
                            {/*</h3>*/}
                        </div>


                    </div>

                    <img className={listenstyles.image} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1642889201/Rectangle_125_rybq23.png"/>


                    <div className={listenstyles.playSection}>

                        <img src="data:image/svg+xml,%3Csvg width='15' height='17' viewBox='0 0 15 17' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13.6333 6.67308L13.6333 6.67309L13.6367 6.67498C13.8983 6.81989 14.1163 7.03219 14.2681 7.28983C14.4199 7.54747 14.5 7.84106 14.5 8.1401C14.5 8.43914 14.4199 8.73273 14.2681 8.99037C14.1163 9.24801 13.8983 9.46031 13.6367 9.60521L13.6367 9.6052L13.6333 9.60712L3.10115 15.5492L3.09886 15.5505C2.83153 15.7032 2.52853 15.7823 2.22067 15.78C1.91282 15.7776 1.61107 15.6938 1.3461 15.5371L1.34613 15.537L1.33975 15.5334C1.08423 15.3872 0.871938 15.1761 0.724447 14.9213C0.576956 14.6666 0.499519 14.3773 0.500003 14.083V14.0822L0.500004 2.19804L0.500002 2.19722C0.499519 1.90286 0.576956 1.61362 0.724447 1.35887C0.871938 1.10412 1.08423 0.892956 1.33975 0.746816L1.33978 0.746864L1.34621 0.743058C1.61112 0.586249 1.91284 0.502403 2.22067 0.500051C2.52851 0.497699 2.83147 0.576923 3.09875 0.729666L3.09875 0.729672L3.10115 0.731027L13.6333 6.67308Z' stroke='white'/%3E%3C/svg%3E%0A"/>


                        <div className={listenstyles.loader}>

                            <img className={listenstyles.redLine} height={4} width={55} src="data:image/svg+xml,%3Csvg width='55' height='4' viewBox='0 0 55 4' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='55' height='4' rx='2' fill='%23ED1C24'/%3E%3C/svg%3E%0A"/>

                        </div>

                        <img className={listenstyles.gistLogoMobile} src="data:image/svg+xml,%3Csvg width='28' height='18' viewBox='0 0 28 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M25.6251 2.13396V1.14441e-05H24.1138V2.13396H19.2571H19.2073C17.209 2.15331 15.9191 3.28638 15.9191 4.6649C15.9191 8.03968 21.2998 6.86509 21.2998 8.88323C21.2998 9.62778 20.6356 10.2233 19.4398 10.2233C18.1611 10.2233 17.3805 9.56155 17.2974 8.68481H15.7365C15.8361 10.3391 17.3307 11.4971 19.4564 11.4971C21.4658 11.4971 22.7779 10.3721 22.7779 8.88323C22.7114 5.64093 17.4304 6.81552 17.4304 4.6649C17.4304 3.93702 18.0946 3.40769 19.2073 3.40769H22.1745H22.9348H24.1138V8.86685C24.1138 10.6864 25.0272 11.3482 26.6382 11.3482H28V10.0745H26.8873C25.9572 10.0745 25.6251 9.76011 25.6251 8.86685V3.40769H28V2.28281V2.13396H25.6251Z' fill='white'/%3E%3Cpath d='M12.926 11.2416H14.459V2.04393H12.926V11.2416Z' fill='white'/%3E%3Cpath d='M2.88235 6.12442C2.31024 5.84678 1.88059 5.3631 1.67244 4.76221C1.46414 4.16146 1.50246 3.51551 1.77995 2.9434C2.35319 1.76254 3.78025 1.26818 4.96097 1.84114L8.82611 3.71679C10.007 4.28989 10.5015 5.71695 9.92837 6.89795C9.35528 8.07895 7.92836 8.57345 6.74736 8.00021L2.88235 6.12442ZM8.02914 9.76919C9.39331 9.68231 10.6747 8.88491 11.313 7.56986C12.2567 5.62557 11.4426 3.27577 9.49803 2.33212L5.63288 0.456469C3.68887 -0.487465 1.33908 0.327053 0.395423 2.27148C-0.0617352 3.21345 -0.124758 4.27698 0.218146 5.26624C0.56091 6.25552 1.26833 7.05207 2.2103 7.50909L6.07544 9.38488C6.22226 9.45604 6.37133 9.51654 6.52194 9.56805V9.95194V11.0211C6.52194 11.9195 7.25125 12.6512 8.15224 12.6512C9.17154 12.6512 10.0324 13.4078 10.1069 14.3752C10.1507 14.9209 9.95069 15.4572 9.56343 15.8467C9.20706 16.1996 8.73951 16.3972 8.23982 16.3972H6.39884C5.37714 16.3972 4.51645 15.6383 4.44304 14.6734C4.39924 14.1253 4.59575 13.5914 4.98526 13.2019C5.05628 13.1307 5.13558 13.0656 5.22078 13.0017L4.21453 11.8757C4.11038 11.9587 4.01213 12.0463 3.92201 12.1363C3.22007 12.8347 2.8613 13.8021 2.93822 14.7918C3.07563 16.5369 4.59575 17.9044 6.39884 17.9044H8.23982C9.14193 17.9044 9.98845 17.5504 10.6302 16.9122C11.3288 16.2114 11.6874 15.2441 11.6105 14.2602C11.4743 12.5116 9.95532 11.1442 8.15224 11.1442C8.08472 11.1442 8.02914 11.0873 8.02914 11.0211V9.95194V9.76919Z' fill='white'/%3E%3Cpath d='M9.62627 6.75149C9.45573 7.10071 9.19059 7.38972 8.86973 7.58973C8.54886 7.78989 8.17241 7.90344 7.7829 7.90344C7.47382 7.90344 7.17429 7.8348 6.89371 7.69865L3.02829 5.82328C2.53688 5.5841 2.16871 5.16863 1.98989 4.65238C1.81107 4.13627 1.84307 3.58212 2.08225 3.09086C2.42207 2.39115 3.14549 1.93891 3.92562 1.93891C4.2347 1.93891 4.53423 2.00754 4.81481 2.1437L8.67911 4.01893C9.69379 4.5116 10.1188 5.73696 9.62627 6.75149Z' fill='%23ED1D24'/%3E%3C/svg%3E%0A"/>

                        <img className={listenstyles.gistLogo} width={28} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1642890047/Group_1460_3_oizsma.png"/>
                    </div>


                    <div className={listenstyles.bottomSection}>

                        <div className={listenstyles.bottomLeft}>

                            <div className={listenstyles.viewsAndLikes}>

                                <div className={listenstyles.views}>
                                    <img src="data:image/svg+xml,%3Csvg width='18' height='16' viewBox='0 0 18 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M17.5238 0H0V12.87H4.38095V16L7.7981 12.87H17.5238V0ZM14.6324 8.31737C13.6905 8.31737 13.2524 7.46375 12.9457 6.829C12.7048 6.32558 12.5076 5.97538 12.2886 5.97538C12.0695 5.97538 11.8943 6.32558 11.6314 6.829C11.3248 7.46375 10.8867 8.31737 9.92286 8.31737C8.98095 8.31737 8.54286 7.46375 8.23619 6.829C7.99524 6.32558 7.7981 5.97538 7.57905 5.97538C7.36 5.97538 7.18476 6.32558 6.92191 6.829C6.61524 7.46375 6.17714 8.31737 5.23524 8.31737C4.29333 8.31737 3.85524 7.46375 3.54857 6.829C3.30762 6.32558 3.11048 5.97538 2.89143 5.97538C2.56286 5.97538 2.3 5.71272 2.3 5.3844C2.3 5.05609 2.56286 4.79343 2.89143 4.79343C3.83333 4.79343 4.27143 5.64706 4.5781 6.28181C4.81905 6.78523 5.01619 7.13543 5.23524 7.13543C5.43238 7.13543 5.62952 6.78523 5.89238 6.28181C6.19905 5.64706 6.63714 4.79343 7.57905 4.79343C8.52095 4.79343 8.95905 5.64706 9.26571 6.28181C9.50667 6.78523 9.70381 7.13543 9.92286 7.13543C10.1419 7.13543 10.3171 6.78523 10.58 6.28181C10.8867 5.64706 11.3248 4.79343 12.2667 4.79343C13.2086 4.79343 13.6467 5.64706 13.9533 6.28181C14.1943 6.78523 14.3914 7.13543 14.6105 7.13543C14.939 7.13543 15.2019 7.39808 15.2019 7.7264C15.2238 8.05472 14.961 8.31737 14.6324 8.31737Z' fill='%238F8F8F'/%3E%3C/svg%3E%0A"/>
                                    <h3 className={listenstyles.numbers}>
                                        244
                                    </h3>

                                </div>
                                <div className={listenstyles.likes}>
                                    <img src="data:image/svg+xml,%3Csvg width='18' height='16' viewBox='0 0 18 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8.99201 16C8.73598 16 8.48915 15.9072 8.29678 15.7388C7.57027 15.1035 6.86983 14.5065 6.25184 13.9799L6.24869 13.9772C4.43687 12.4332 2.87229 11.0998 1.78369 9.7863C0.566803 8.31791 0 6.92567 0 5.40473C0 3.92701 0.506706 2.56372 1.42668 1.56581C2.35763 0.556101 3.63503 0 5.02398 0C6.06209 0 7.0128 0.328199 7.84962 0.975406C8.27195 1.3021 8.65475 1.70192 8.99201 2.16828C9.3294 1.70192 9.71207 1.3021 10.1345 0.975406C10.9714 0.328199 11.9221 0 12.9602 0C14.349 0 15.6265 0.556101 16.5575 1.56581C17.4774 2.56372 17.984 3.92701 17.984 5.40473C17.984 6.92567 17.4174 8.31791 16.2005 9.78616C15.1119 11.0998 13.5474 12.433 11.7359 13.9769C11.1168 14.5043 10.4153 15.1023 9.6871 15.739C9.49487 15.9072 9.2479 16 8.99201 16ZM5.02398 1.05348C3.93277 1.05348 2.93033 1.48897 2.20108 2.27983C1.46098 3.08263 1.05334 4.19236 1.05334 5.40473C1.05334 6.68391 1.52876 7.82794 2.59472 9.11412C3.62501 10.3574 5.15748 11.6633 6.93184 13.1755L6.93514 13.1782C7.55545 13.7069 8.25864 14.3062 8.9905 14.9461C9.72675 14.3049 10.431 13.7047 11.0526 13.1752C12.8268 11.663 14.3591 10.3574 15.3894 9.11412C16.4553 7.82794 16.9307 6.68391 16.9307 5.40473C16.9307 4.19236 16.523 3.08263 15.7829 2.27983C15.0538 1.48897 14.0512 1.05348 12.9602 1.05348C12.1608 1.05348 11.4269 1.30758 10.7789 1.80866C10.2014 2.25541 9.79906 2.82016 9.5632 3.21531C9.44191 3.41852 9.22842 3.53981 8.99201 3.53981C8.7556 3.53981 8.54211 3.41852 8.42082 3.21531C8.18509 2.82016 7.7828 2.25541 7.20516 1.80866C6.55713 1.30758 5.82321 1.05348 5.02398 1.05348Z' fill='%238F8F8F'/%3E%3C/svg%3E%0A"/>
                                    <h3 className={listenstyles.numbers}>
                                        10
                                    </h3>

                                </div>
                            </div>



                            <img src="data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M7.2 0H3.2C1.4328 0 0 1.4328 0 3.2V12.8C0 14.5672 1.4328 16 3.2 16H12.8C14.5672 16 16 14.5672 16 12.8C16 10.9832 16 8.8 16 8.8C16 8.3584 15.6416 8 15.2 8C14.7584 8 14.4 8.3584 14.4 8.8V12.8C14.4 13.6832 13.6832 14.4 12.8 14.4C10.136 14.4 5.8632 14.4 3.2 14.4C2.316 14.4 1.6 13.6832 1.6 12.8C1.6 10.136 1.6 5.8632 1.6 3.2C1.6 2.316 2.316 1.6 3.2 1.6H7.2C7.6416 1.6 8 1.2416 8 0.8C8 0.3584 7.6416 0 7.2 0ZM13.2688 1.6H10.4C9.9584 1.6 9.6 1.2416 9.6 0.8C9.6 0.3584 9.9584 0 10.4 0H15.2C15.6416 0 16 0.3584 16 0.8V5.6C16 6.0416 15.6416 6.4 15.2 6.4C14.7584 6.4 14.4 6.0416 14.4 5.6V2.7312L8.5656 8.5656C8.2536 8.8776 7.7464 8.8776 7.4344 8.5656C7.1216 8.2536 7.1216 7.7464 7.4344 7.4344L13.2688 1.6Z' fill='%238F8F8F'/%3E%3C/svg%3E%0A"/>



                        </div>


                    </div>




                </div>


            </SwiperSlide>
            <SwiperSlide>

                <div className={listenstyles.singleGist} >


                    <div className={listenstyles.top}>

                        <div className={listenstyles.topLeft}>



                            <img src="https://res.cloudinary.com/seunsanyaa/image/upload/v1642888388/Ellipse_177_hm1lad.png"/>

                            <h3 className={listenstyles.profileName}>
                                Wole Majekodunmi
                            </h3>

                            <img className={listenstyles.hour} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1642888658/2h_xhfqyz.png"/>

                        </div>

                        <div className={listenstyles.topRight}>
                            <img src="data:image/svg+xml,%3Csvg width='16' height='4' viewBox='0 0 16 4' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2 4C3.10457 4 4 3.10457 4 2C4 0.895431 3.10457 0 2 0C0.895431 0 0 0.895431 0 2C0 3.10457 0.895431 4 2 4Z' fill='%238F8F8F'/%3E%3Cpath d='M7.89471 4C8.99928 4 9.89471 3.10457 9.89471 2C9.89471 0.895431 8.99928 0 7.89471 0C6.79015 0 5.89471 0.895431 5.89471 2C5.89471 3.10457 6.79015 4 7.89471 4Z' fill='%238F8F8F'/%3E%3Cpath d='M13.7895 4C14.894 4 15.7895 3.10457 15.7895 2C15.7895 0.895431 14.894 0 13.7895 0C12.6849 0 11.7895 0.895431 11.7895 2C11.7895 3.10457 12.6849 4 13.7895 4Z' fill='%238F8F8F'/%3E%3C/svg%3E%0A"/>
                            {/*<h3 className={listenstyles.hour}>*/}
                            {/*    . 2h*/}
                            {/*</h3>*/}
                        </div>


                    </div>

                    <img className={listenstyles.image} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1642889201/Rectangle_125_rybq23.png"/>


                    <div className={listenstyles.playSection}>

                        <img src="data:image/svg+xml,%3Csvg width='15' height='17' viewBox='0 0 15 17' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13.6333 6.67308L13.6333 6.67309L13.6367 6.67498C13.8983 6.81989 14.1163 7.03219 14.2681 7.28983C14.4199 7.54747 14.5 7.84106 14.5 8.1401C14.5 8.43914 14.4199 8.73273 14.2681 8.99037C14.1163 9.24801 13.8983 9.46031 13.6367 9.60521L13.6367 9.6052L13.6333 9.60712L3.10115 15.5492L3.09886 15.5505C2.83153 15.7032 2.52853 15.7823 2.22067 15.78C1.91282 15.7776 1.61107 15.6938 1.3461 15.5371L1.34613 15.537L1.33975 15.5334C1.08423 15.3872 0.871938 15.1761 0.724447 14.9213C0.576956 14.6666 0.499519 14.3773 0.500003 14.083V14.0822L0.500004 2.19804L0.500002 2.19722C0.499519 1.90286 0.576956 1.61362 0.724447 1.35887C0.871938 1.10412 1.08423 0.892956 1.33975 0.746816L1.33978 0.746864L1.34621 0.743058C1.61112 0.586249 1.91284 0.502403 2.22067 0.500051C2.52851 0.497699 2.83147 0.576923 3.09875 0.729666L3.09875 0.729672L3.10115 0.731027L13.6333 6.67308Z' stroke='white'/%3E%3C/svg%3E%0A"/>


                        <div className={listenstyles.loader}>

                            <img className={listenstyles.redLine} height={4} width={55} src="data:image/svg+xml,%3Csvg width='55' height='4' viewBox='0 0 55 4' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='55' height='4' rx='2' fill='%23ED1C24'/%3E%3C/svg%3E%0A"/>

                        </div>

                        <img className={listenstyles.gistLogoMobile} src="data:image/svg+xml,%3Csvg width='28' height='18' viewBox='0 0 28 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M25.6251 2.13396V1.14441e-05H24.1138V2.13396H19.2571H19.2073C17.209 2.15331 15.9191 3.28638 15.9191 4.6649C15.9191 8.03968 21.2998 6.86509 21.2998 8.88323C21.2998 9.62778 20.6356 10.2233 19.4398 10.2233C18.1611 10.2233 17.3805 9.56155 17.2974 8.68481H15.7365C15.8361 10.3391 17.3307 11.4971 19.4564 11.4971C21.4658 11.4971 22.7779 10.3721 22.7779 8.88323C22.7114 5.64093 17.4304 6.81552 17.4304 4.6649C17.4304 3.93702 18.0946 3.40769 19.2073 3.40769H22.1745H22.9348H24.1138V8.86685C24.1138 10.6864 25.0272 11.3482 26.6382 11.3482H28V10.0745H26.8873C25.9572 10.0745 25.6251 9.76011 25.6251 8.86685V3.40769H28V2.28281V2.13396H25.6251Z' fill='white'/%3E%3Cpath d='M12.926 11.2416H14.459V2.04393H12.926V11.2416Z' fill='white'/%3E%3Cpath d='M2.88235 6.12442C2.31024 5.84678 1.88059 5.3631 1.67244 4.76221C1.46414 4.16146 1.50246 3.51551 1.77995 2.9434C2.35319 1.76254 3.78025 1.26818 4.96097 1.84114L8.82611 3.71679C10.007 4.28989 10.5015 5.71695 9.92837 6.89795C9.35528 8.07895 7.92836 8.57345 6.74736 8.00021L2.88235 6.12442ZM8.02914 9.76919C9.39331 9.68231 10.6747 8.88491 11.313 7.56986C12.2567 5.62557 11.4426 3.27577 9.49803 2.33212L5.63288 0.456469C3.68887 -0.487465 1.33908 0.327053 0.395423 2.27148C-0.0617352 3.21345 -0.124758 4.27698 0.218146 5.26624C0.56091 6.25552 1.26833 7.05207 2.2103 7.50909L6.07544 9.38488C6.22226 9.45604 6.37133 9.51654 6.52194 9.56805V9.95194V11.0211C6.52194 11.9195 7.25125 12.6512 8.15224 12.6512C9.17154 12.6512 10.0324 13.4078 10.1069 14.3752C10.1507 14.9209 9.95069 15.4572 9.56343 15.8467C9.20706 16.1996 8.73951 16.3972 8.23982 16.3972H6.39884C5.37714 16.3972 4.51645 15.6383 4.44304 14.6734C4.39924 14.1253 4.59575 13.5914 4.98526 13.2019C5.05628 13.1307 5.13558 13.0656 5.22078 13.0017L4.21453 11.8757C4.11038 11.9587 4.01213 12.0463 3.92201 12.1363C3.22007 12.8347 2.8613 13.8021 2.93822 14.7918C3.07563 16.5369 4.59575 17.9044 6.39884 17.9044H8.23982C9.14193 17.9044 9.98845 17.5504 10.6302 16.9122C11.3288 16.2114 11.6874 15.2441 11.6105 14.2602C11.4743 12.5116 9.95532 11.1442 8.15224 11.1442C8.08472 11.1442 8.02914 11.0873 8.02914 11.0211V9.95194V9.76919Z' fill='white'/%3E%3Cpath d='M9.62627 6.75149C9.45573 7.10071 9.19059 7.38972 8.86973 7.58973C8.54886 7.78989 8.17241 7.90344 7.7829 7.90344C7.47382 7.90344 7.17429 7.8348 6.89371 7.69865L3.02829 5.82328C2.53688 5.5841 2.16871 5.16863 1.98989 4.65238C1.81107 4.13627 1.84307 3.58212 2.08225 3.09086C2.42207 2.39115 3.14549 1.93891 3.92562 1.93891C4.2347 1.93891 4.53423 2.00754 4.81481 2.1437L8.67911 4.01893C9.69379 4.5116 10.1188 5.73696 9.62627 6.75149Z' fill='%23ED1D24'/%3E%3C/svg%3E%0A"/>

                        <img className={listenstyles.gistLogo} width={28} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1642890047/Group_1460_3_oizsma.png"/>
                    </div>


                    <div className={listenstyles.bottomSection}>

                        <div className={listenstyles.bottomLeft}>

                            <div className={listenstyles.viewsAndLikes}>

                                <div className={listenstyles.views}>
                                    <img src="data:image/svg+xml,%3Csvg width='18' height='16' viewBox='0 0 18 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M17.5238 0H0V12.87H4.38095V16L7.7981 12.87H17.5238V0ZM14.6324 8.31737C13.6905 8.31737 13.2524 7.46375 12.9457 6.829C12.7048 6.32558 12.5076 5.97538 12.2886 5.97538C12.0695 5.97538 11.8943 6.32558 11.6314 6.829C11.3248 7.46375 10.8867 8.31737 9.92286 8.31737C8.98095 8.31737 8.54286 7.46375 8.23619 6.829C7.99524 6.32558 7.7981 5.97538 7.57905 5.97538C7.36 5.97538 7.18476 6.32558 6.92191 6.829C6.61524 7.46375 6.17714 8.31737 5.23524 8.31737C4.29333 8.31737 3.85524 7.46375 3.54857 6.829C3.30762 6.32558 3.11048 5.97538 2.89143 5.97538C2.56286 5.97538 2.3 5.71272 2.3 5.3844C2.3 5.05609 2.56286 4.79343 2.89143 4.79343C3.83333 4.79343 4.27143 5.64706 4.5781 6.28181C4.81905 6.78523 5.01619 7.13543 5.23524 7.13543C5.43238 7.13543 5.62952 6.78523 5.89238 6.28181C6.19905 5.64706 6.63714 4.79343 7.57905 4.79343C8.52095 4.79343 8.95905 5.64706 9.26571 6.28181C9.50667 6.78523 9.70381 7.13543 9.92286 7.13543C10.1419 7.13543 10.3171 6.78523 10.58 6.28181C10.8867 5.64706 11.3248 4.79343 12.2667 4.79343C13.2086 4.79343 13.6467 5.64706 13.9533 6.28181C14.1943 6.78523 14.3914 7.13543 14.6105 7.13543C14.939 7.13543 15.2019 7.39808 15.2019 7.7264C15.2238 8.05472 14.961 8.31737 14.6324 8.31737Z' fill='%238F8F8F'/%3E%3C/svg%3E%0A"/>
                                    <h3 className={listenstyles.numbers}>
                                        244
                                    </h3>

                                </div>
                                <div className={listenstyles.likes}>
                                    <img src="data:image/svg+xml,%3Csvg width='18' height='16' viewBox='0 0 18 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8.99201 16C8.73598 16 8.48915 15.9072 8.29678 15.7388C7.57027 15.1035 6.86983 14.5065 6.25184 13.9799L6.24869 13.9772C4.43687 12.4332 2.87229 11.0998 1.78369 9.7863C0.566803 8.31791 0 6.92567 0 5.40473C0 3.92701 0.506706 2.56372 1.42668 1.56581C2.35763 0.556101 3.63503 0 5.02398 0C6.06209 0 7.0128 0.328199 7.84962 0.975406C8.27195 1.3021 8.65475 1.70192 8.99201 2.16828C9.3294 1.70192 9.71207 1.3021 10.1345 0.975406C10.9714 0.328199 11.9221 0 12.9602 0C14.349 0 15.6265 0.556101 16.5575 1.56581C17.4774 2.56372 17.984 3.92701 17.984 5.40473C17.984 6.92567 17.4174 8.31791 16.2005 9.78616C15.1119 11.0998 13.5474 12.433 11.7359 13.9769C11.1168 14.5043 10.4153 15.1023 9.6871 15.739C9.49487 15.9072 9.2479 16 8.99201 16ZM5.02398 1.05348C3.93277 1.05348 2.93033 1.48897 2.20108 2.27983C1.46098 3.08263 1.05334 4.19236 1.05334 5.40473C1.05334 6.68391 1.52876 7.82794 2.59472 9.11412C3.62501 10.3574 5.15748 11.6633 6.93184 13.1755L6.93514 13.1782C7.55545 13.7069 8.25864 14.3062 8.9905 14.9461C9.72675 14.3049 10.431 13.7047 11.0526 13.1752C12.8268 11.663 14.3591 10.3574 15.3894 9.11412C16.4553 7.82794 16.9307 6.68391 16.9307 5.40473C16.9307 4.19236 16.523 3.08263 15.7829 2.27983C15.0538 1.48897 14.0512 1.05348 12.9602 1.05348C12.1608 1.05348 11.4269 1.30758 10.7789 1.80866C10.2014 2.25541 9.79906 2.82016 9.5632 3.21531C9.44191 3.41852 9.22842 3.53981 8.99201 3.53981C8.7556 3.53981 8.54211 3.41852 8.42082 3.21531C8.18509 2.82016 7.7828 2.25541 7.20516 1.80866C6.55713 1.30758 5.82321 1.05348 5.02398 1.05348Z' fill='%238F8F8F'/%3E%3C/svg%3E%0A"/>
                                    <h3 className={listenstyles.numbers}>
                                        10
                                    </h3>

                                </div>
                            </div>



                            <img src="data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M7.2 0H3.2C1.4328 0 0 1.4328 0 3.2V12.8C0 14.5672 1.4328 16 3.2 16H12.8C14.5672 16 16 14.5672 16 12.8C16 10.9832 16 8.8 16 8.8C16 8.3584 15.6416 8 15.2 8C14.7584 8 14.4 8.3584 14.4 8.8V12.8C14.4 13.6832 13.6832 14.4 12.8 14.4C10.136 14.4 5.8632 14.4 3.2 14.4C2.316 14.4 1.6 13.6832 1.6 12.8C1.6 10.136 1.6 5.8632 1.6 3.2C1.6 2.316 2.316 1.6 3.2 1.6H7.2C7.6416 1.6 8 1.2416 8 0.8C8 0.3584 7.6416 0 7.2 0ZM13.2688 1.6H10.4C9.9584 1.6 9.6 1.2416 9.6 0.8C9.6 0.3584 9.9584 0 10.4 0H15.2C15.6416 0 16 0.3584 16 0.8V5.6C16 6.0416 15.6416 6.4 15.2 6.4C14.7584 6.4 14.4 6.0416 14.4 5.6V2.7312L8.5656 8.5656C8.2536 8.8776 7.7464 8.8776 7.4344 8.5656C7.1216 8.2536 7.1216 7.7464 7.4344 7.4344L13.2688 1.6Z' fill='%238F8F8F'/%3E%3C/svg%3E%0A"/>



                        </div>


                    </div>




                </div>


            </SwiperSlide>
            <SwiperSlide>

                <div className={listenstyles.singleGist} >


                    <div className={listenstyles.top}>

                        <div className={listenstyles.topLeft}>



                            <img src="https://res.cloudinary.com/seunsanyaa/image/upload/v1642888388/Ellipse_177_hm1lad.png"/>

                            <h3 className={listenstyles.profileName}>
                                Wole Majekodunmi
                            </h3>

                            <img className={listenstyles.hour} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1642888658/2h_xhfqyz.png"/>

                        </div>

                        <div className={listenstyles.topRight}>
                            <img src="data:image/svg+xml,%3Csvg width='16' height='4' viewBox='0 0 16 4' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2 4C3.10457 4 4 3.10457 4 2C4 0.895431 3.10457 0 2 0C0.895431 0 0 0.895431 0 2C0 3.10457 0.895431 4 2 4Z' fill='%238F8F8F'/%3E%3Cpath d='M7.89471 4C8.99928 4 9.89471 3.10457 9.89471 2C9.89471 0.895431 8.99928 0 7.89471 0C6.79015 0 5.89471 0.895431 5.89471 2C5.89471 3.10457 6.79015 4 7.89471 4Z' fill='%238F8F8F'/%3E%3Cpath d='M13.7895 4C14.894 4 15.7895 3.10457 15.7895 2C15.7895 0.895431 14.894 0 13.7895 0C12.6849 0 11.7895 0.895431 11.7895 2C11.7895 3.10457 12.6849 4 13.7895 4Z' fill='%238F8F8F'/%3E%3C/svg%3E%0A"/>
                            {/*<h3 className={listenstyles.hour}>*/}
                            {/*    . 2h*/}
                            {/*</h3>*/}
                        </div>


                    </div>

                    <img className={listenstyles.image} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1642889201/Rectangle_125_rybq23.png"/>


                    <div className={listenstyles.playSection}>

                        <img src="data:image/svg+xml,%3Csvg width='15' height='17' viewBox='0 0 15 17' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13.6333 6.67308L13.6333 6.67309L13.6367 6.67498C13.8983 6.81989 14.1163 7.03219 14.2681 7.28983C14.4199 7.54747 14.5 7.84106 14.5 8.1401C14.5 8.43914 14.4199 8.73273 14.2681 8.99037C14.1163 9.24801 13.8983 9.46031 13.6367 9.60521L13.6367 9.6052L13.6333 9.60712L3.10115 15.5492L3.09886 15.5505C2.83153 15.7032 2.52853 15.7823 2.22067 15.78C1.91282 15.7776 1.61107 15.6938 1.3461 15.5371L1.34613 15.537L1.33975 15.5334C1.08423 15.3872 0.871938 15.1761 0.724447 14.9213C0.576956 14.6666 0.499519 14.3773 0.500003 14.083V14.0822L0.500004 2.19804L0.500002 2.19722C0.499519 1.90286 0.576956 1.61362 0.724447 1.35887C0.871938 1.10412 1.08423 0.892956 1.33975 0.746816L1.33978 0.746864L1.34621 0.743058C1.61112 0.586249 1.91284 0.502403 2.22067 0.500051C2.52851 0.497699 2.83147 0.576923 3.09875 0.729666L3.09875 0.729672L3.10115 0.731027L13.6333 6.67308Z' stroke='white'/%3E%3C/svg%3E%0A"/>


                        <div className={listenstyles.loader}>

                            <img className={listenstyles.redLine} height={4} width={55} src="data:image/svg+xml,%3Csvg width='55' height='4' viewBox='0 0 55 4' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='55' height='4' rx='2' fill='%23ED1C24'/%3E%3C/svg%3E%0A"/>

                        </div>

                        <img className={listenstyles.gistLogoMobile} src="data:image/svg+xml,%3Csvg width='28' height='18' viewBox='0 0 28 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M25.6251 2.13396V1.14441e-05H24.1138V2.13396H19.2571H19.2073C17.209 2.15331 15.9191 3.28638 15.9191 4.6649C15.9191 8.03968 21.2998 6.86509 21.2998 8.88323C21.2998 9.62778 20.6356 10.2233 19.4398 10.2233C18.1611 10.2233 17.3805 9.56155 17.2974 8.68481H15.7365C15.8361 10.3391 17.3307 11.4971 19.4564 11.4971C21.4658 11.4971 22.7779 10.3721 22.7779 8.88323C22.7114 5.64093 17.4304 6.81552 17.4304 4.6649C17.4304 3.93702 18.0946 3.40769 19.2073 3.40769H22.1745H22.9348H24.1138V8.86685C24.1138 10.6864 25.0272 11.3482 26.6382 11.3482H28V10.0745H26.8873C25.9572 10.0745 25.6251 9.76011 25.6251 8.86685V3.40769H28V2.28281V2.13396H25.6251Z' fill='white'/%3E%3Cpath d='M12.926 11.2416H14.459V2.04393H12.926V11.2416Z' fill='white'/%3E%3Cpath d='M2.88235 6.12442C2.31024 5.84678 1.88059 5.3631 1.67244 4.76221C1.46414 4.16146 1.50246 3.51551 1.77995 2.9434C2.35319 1.76254 3.78025 1.26818 4.96097 1.84114L8.82611 3.71679C10.007 4.28989 10.5015 5.71695 9.92837 6.89795C9.35528 8.07895 7.92836 8.57345 6.74736 8.00021L2.88235 6.12442ZM8.02914 9.76919C9.39331 9.68231 10.6747 8.88491 11.313 7.56986C12.2567 5.62557 11.4426 3.27577 9.49803 2.33212L5.63288 0.456469C3.68887 -0.487465 1.33908 0.327053 0.395423 2.27148C-0.0617352 3.21345 -0.124758 4.27698 0.218146 5.26624C0.56091 6.25552 1.26833 7.05207 2.2103 7.50909L6.07544 9.38488C6.22226 9.45604 6.37133 9.51654 6.52194 9.56805V9.95194V11.0211C6.52194 11.9195 7.25125 12.6512 8.15224 12.6512C9.17154 12.6512 10.0324 13.4078 10.1069 14.3752C10.1507 14.9209 9.95069 15.4572 9.56343 15.8467C9.20706 16.1996 8.73951 16.3972 8.23982 16.3972H6.39884C5.37714 16.3972 4.51645 15.6383 4.44304 14.6734C4.39924 14.1253 4.59575 13.5914 4.98526 13.2019C5.05628 13.1307 5.13558 13.0656 5.22078 13.0017L4.21453 11.8757C4.11038 11.9587 4.01213 12.0463 3.92201 12.1363C3.22007 12.8347 2.8613 13.8021 2.93822 14.7918C3.07563 16.5369 4.59575 17.9044 6.39884 17.9044H8.23982C9.14193 17.9044 9.98845 17.5504 10.6302 16.9122C11.3288 16.2114 11.6874 15.2441 11.6105 14.2602C11.4743 12.5116 9.95532 11.1442 8.15224 11.1442C8.08472 11.1442 8.02914 11.0873 8.02914 11.0211V9.95194V9.76919Z' fill='white'/%3E%3Cpath d='M9.62627 6.75149C9.45573 7.10071 9.19059 7.38972 8.86973 7.58973C8.54886 7.78989 8.17241 7.90344 7.7829 7.90344C7.47382 7.90344 7.17429 7.8348 6.89371 7.69865L3.02829 5.82328C2.53688 5.5841 2.16871 5.16863 1.98989 4.65238C1.81107 4.13627 1.84307 3.58212 2.08225 3.09086C2.42207 2.39115 3.14549 1.93891 3.92562 1.93891C4.2347 1.93891 4.53423 2.00754 4.81481 2.1437L8.67911 4.01893C9.69379 4.5116 10.1188 5.73696 9.62627 6.75149Z' fill='%23ED1D24'/%3E%3C/svg%3E%0A"/>

                        <img className={listenstyles.gistLogo} width={28} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1642890047/Group_1460_3_oizsma.png"/>
                    </div>


                    <div className={listenstyles.bottomSection}>

                        <div className={listenstyles.bottomLeft}>

                            <div className={listenstyles.viewsAndLikes}>

                                <div className={listenstyles.views}>
                                    <img src="data:image/svg+xml,%3Csvg width='18' height='16' viewBox='0 0 18 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M17.5238 0H0V12.87H4.38095V16L7.7981 12.87H17.5238V0ZM14.6324 8.31737C13.6905 8.31737 13.2524 7.46375 12.9457 6.829C12.7048 6.32558 12.5076 5.97538 12.2886 5.97538C12.0695 5.97538 11.8943 6.32558 11.6314 6.829C11.3248 7.46375 10.8867 8.31737 9.92286 8.31737C8.98095 8.31737 8.54286 7.46375 8.23619 6.829C7.99524 6.32558 7.7981 5.97538 7.57905 5.97538C7.36 5.97538 7.18476 6.32558 6.92191 6.829C6.61524 7.46375 6.17714 8.31737 5.23524 8.31737C4.29333 8.31737 3.85524 7.46375 3.54857 6.829C3.30762 6.32558 3.11048 5.97538 2.89143 5.97538C2.56286 5.97538 2.3 5.71272 2.3 5.3844C2.3 5.05609 2.56286 4.79343 2.89143 4.79343C3.83333 4.79343 4.27143 5.64706 4.5781 6.28181C4.81905 6.78523 5.01619 7.13543 5.23524 7.13543C5.43238 7.13543 5.62952 6.78523 5.89238 6.28181C6.19905 5.64706 6.63714 4.79343 7.57905 4.79343C8.52095 4.79343 8.95905 5.64706 9.26571 6.28181C9.50667 6.78523 9.70381 7.13543 9.92286 7.13543C10.1419 7.13543 10.3171 6.78523 10.58 6.28181C10.8867 5.64706 11.3248 4.79343 12.2667 4.79343C13.2086 4.79343 13.6467 5.64706 13.9533 6.28181C14.1943 6.78523 14.3914 7.13543 14.6105 7.13543C14.939 7.13543 15.2019 7.39808 15.2019 7.7264C15.2238 8.05472 14.961 8.31737 14.6324 8.31737Z' fill='%238F8F8F'/%3E%3C/svg%3E%0A"/>
                                    <h3 className={listenstyles.numbers}>
                                        244
                                    </h3>

                                </div>
                                <div className={listenstyles.likes}>
                                    <img src="data:image/svg+xml,%3Csvg width='18' height='16' viewBox='0 0 18 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8.99201 16C8.73598 16 8.48915 15.9072 8.29678 15.7388C7.57027 15.1035 6.86983 14.5065 6.25184 13.9799L6.24869 13.9772C4.43687 12.4332 2.87229 11.0998 1.78369 9.7863C0.566803 8.31791 0 6.92567 0 5.40473C0 3.92701 0.506706 2.56372 1.42668 1.56581C2.35763 0.556101 3.63503 0 5.02398 0C6.06209 0 7.0128 0.328199 7.84962 0.975406C8.27195 1.3021 8.65475 1.70192 8.99201 2.16828C9.3294 1.70192 9.71207 1.3021 10.1345 0.975406C10.9714 0.328199 11.9221 0 12.9602 0C14.349 0 15.6265 0.556101 16.5575 1.56581C17.4774 2.56372 17.984 3.92701 17.984 5.40473C17.984 6.92567 17.4174 8.31791 16.2005 9.78616C15.1119 11.0998 13.5474 12.433 11.7359 13.9769C11.1168 14.5043 10.4153 15.1023 9.6871 15.739C9.49487 15.9072 9.2479 16 8.99201 16ZM5.02398 1.05348C3.93277 1.05348 2.93033 1.48897 2.20108 2.27983C1.46098 3.08263 1.05334 4.19236 1.05334 5.40473C1.05334 6.68391 1.52876 7.82794 2.59472 9.11412C3.62501 10.3574 5.15748 11.6633 6.93184 13.1755L6.93514 13.1782C7.55545 13.7069 8.25864 14.3062 8.9905 14.9461C9.72675 14.3049 10.431 13.7047 11.0526 13.1752C12.8268 11.663 14.3591 10.3574 15.3894 9.11412C16.4553 7.82794 16.9307 6.68391 16.9307 5.40473C16.9307 4.19236 16.523 3.08263 15.7829 2.27983C15.0538 1.48897 14.0512 1.05348 12.9602 1.05348C12.1608 1.05348 11.4269 1.30758 10.7789 1.80866C10.2014 2.25541 9.79906 2.82016 9.5632 3.21531C9.44191 3.41852 9.22842 3.53981 8.99201 3.53981C8.7556 3.53981 8.54211 3.41852 8.42082 3.21531C8.18509 2.82016 7.7828 2.25541 7.20516 1.80866C6.55713 1.30758 5.82321 1.05348 5.02398 1.05348Z' fill='%238F8F8F'/%3E%3C/svg%3E%0A"/>
                                    <h3 className={listenstyles.numbers}>
                                        10
                                    </h3>

                                </div>
                            </div>



                            <img src="data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M7.2 0H3.2C1.4328 0 0 1.4328 0 3.2V12.8C0 14.5672 1.4328 16 3.2 16H12.8C14.5672 16 16 14.5672 16 12.8C16 10.9832 16 8.8 16 8.8C16 8.3584 15.6416 8 15.2 8C14.7584 8 14.4 8.3584 14.4 8.8V12.8C14.4 13.6832 13.6832 14.4 12.8 14.4C10.136 14.4 5.8632 14.4 3.2 14.4C2.316 14.4 1.6 13.6832 1.6 12.8C1.6 10.136 1.6 5.8632 1.6 3.2C1.6 2.316 2.316 1.6 3.2 1.6H7.2C7.6416 1.6 8 1.2416 8 0.8C8 0.3584 7.6416 0 7.2 0ZM13.2688 1.6H10.4C9.9584 1.6 9.6 1.2416 9.6 0.8C9.6 0.3584 9.9584 0 10.4 0H15.2C15.6416 0 16 0.3584 16 0.8V5.6C16 6.0416 15.6416 6.4 15.2 6.4C14.7584 6.4 14.4 6.0416 14.4 5.6V2.7312L8.5656 8.5656C8.2536 8.8776 7.7464 8.8776 7.4344 8.5656C7.1216 8.2536 7.1216 7.7464 7.4344 7.4344L13.2688 1.6Z' fill='%238F8F8F'/%3E%3C/svg%3E%0A"/>



                        </div>


                    </div>




                </div>


            </SwiperSlide>


        </Swiper>
        {/*<div uk-slideshow="animation: push">*/}

        {/*    <div className="uk-position-relative uk-visible-toggle uk-light" tabIndex="-1">*/}

        {/*        <ul className="uk-slideshow-items">*/}
        {/*            <li>*/}
        {/*                <div className={listenstyles.singleGist} >*/}


        {/*                    <div className={listenstyles.top}>*/}

        {/*                        <div className={listenstyles.topLeft}>*/}



        {/*                            <img src="https://res.cloudinary.com/seunsanyaa/image/upload/v1642888388/Ellipse_177_hm1lad.png"/>*/}

        {/*                            <h3 className={listenstyles.profileName}>*/}
        {/*                                Wole Majekodunmi*/}
        {/*                            </h3>*/}

        {/*                            <img className={listenstyles.hour} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1642888658/2h_xhfqyz.png"/>*/}

        {/*                        </div>*/}

        {/*                        <div className={listenstyles.topRight}>*/}
        {/*                            <img src="data:image/svg+xml,%3Csvg width='16' height='4' viewBox='0 0 16 4' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2 4C3.10457 4 4 3.10457 4 2C4 0.895431 3.10457 0 2 0C0.895431 0 0 0.895431 0 2C0 3.10457 0.895431 4 2 4Z' fill='%238F8F8F'/%3E%3Cpath d='M7.89471 4C8.99928 4 9.89471 3.10457 9.89471 2C9.89471 0.895431 8.99928 0 7.89471 0C6.79015 0 5.89471 0.895431 5.89471 2C5.89471 3.10457 6.79015 4 7.89471 4Z' fill='%238F8F8F'/%3E%3Cpath d='M13.7895 4C14.894 4 15.7895 3.10457 15.7895 2C15.7895 0.895431 14.894 0 13.7895 0C12.6849 0 11.7895 0.895431 11.7895 2C11.7895 3.10457 12.6849 4 13.7895 4Z' fill='%238F8F8F'/%3E%3C/svg%3E%0A"/>*/}
        {/*                            /!*<h3 className={listenstyles.hour}>*!/*/}
        {/*                            /!*    . 2h*!/*/}
        {/*                            /!*</h3>*!/*/}
        {/*                        </div>*/}


        {/*                    </div>*/}

        {/*                    <img className={listenstyles.image} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1642889201/Rectangle_125_rybq23.png"/>*/}


        {/*                    <div className={listenstyles.playSection}>*/}

        {/*                        <img src="data:image/svg+xml,%3Csvg width='15' height='17' viewBox='0 0 15 17' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13.6333 6.67308L13.6333 6.67309L13.6367 6.67498C13.8983 6.81989 14.1163 7.03219 14.2681 7.28983C14.4199 7.54747 14.5 7.84106 14.5 8.1401C14.5 8.43914 14.4199 8.73273 14.2681 8.99037C14.1163 9.24801 13.8983 9.46031 13.6367 9.60521L13.6367 9.6052L13.6333 9.60712L3.10115 15.5492L3.09886 15.5505C2.83153 15.7032 2.52853 15.7823 2.22067 15.78C1.91282 15.7776 1.61107 15.6938 1.3461 15.5371L1.34613 15.537L1.33975 15.5334C1.08423 15.3872 0.871938 15.1761 0.724447 14.9213C0.576956 14.6666 0.499519 14.3773 0.500003 14.083V14.0822L0.500004 2.19804L0.500002 2.19722C0.499519 1.90286 0.576956 1.61362 0.724447 1.35887C0.871938 1.10412 1.08423 0.892956 1.33975 0.746816L1.33978 0.746864L1.34621 0.743058C1.61112 0.586249 1.91284 0.502403 2.22067 0.500051C2.52851 0.497699 2.83147 0.576923 3.09875 0.729666L3.09875 0.729672L3.10115 0.731027L13.6333 6.67308Z' stroke='white'/%3E%3C/svg%3E%0A"/>*/}


        {/*                        <div className={listenstyles.loader}>*/}

        {/*                            <img className={listenstyles.redLine} height={4} width={55} src="data:image/svg+xml,%3Csvg width='55' height='4' viewBox='0 0 55 4' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='55' height='4' rx='2' fill='%23ED1C24'/%3E%3C/svg%3E%0A"/>*/}

        {/*                        </div>*/}

        {/*                        <img className={listenstyles.gistLogo} width={28} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1642890047/Group_1460_3_oizsma.png"/>*/}
        {/*                    </div>*/}


        {/*                    <div className={listenstyles.bottomSection}>*/}

        {/*                        <div className={listenstyles.bottomLeft}>*/}

        {/*                            <div className={listenstyles.viewsAndLikes}>*/}

        {/*                                <div className={listenstyles.views}>*/}
        {/*                                    <img src="data:image/svg+xml,%3Csvg width='18' height='16' viewBox='0 0 18 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M17.5238 0H0V12.87H4.38095V16L7.7981 12.87H17.5238V0ZM14.6324 8.31737C13.6905 8.31737 13.2524 7.46375 12.9457 6.829C12.7048 6.32558 12.5076 5.97538 12.2886 5.97538C12.0695 5.97538 11.8943 6.32558 11.6314 6.829C11.3248 7.46375 10.8867 8.31737 9.92286 8.31737C8.98095 8.31737 8.54286 7.46375 8.23619 6.829C7.99524 6.32558 7.7981 5.97538 7.57905 5.97538C7.36 5.97538 7.18476 6.32558 6.92191 6.829C6.61524 7.46375 6.17714 8.31737 5.23524 8.31737C4.29333 8.31737 3.85524 7.46375 3.54857 6.829C3.30762 6.32558 3.11048 5.97538 2.89143 5.97538C2.56286 5.97538 2.3 5.71272 2.3 5.3844C2.3 5.05609 2.56286 4.79343 2.89143 4.79343C3.83333 4.79343 4.27143 5.64706 4.5781 6.28181C4.81905 6.78523 5.01619 7.13543 5.23524 7.13543C5.43238 7.13543 5.62952 6.78523 5.89238 6.28181C6.19905 5.64706 6.63714 4.79343 7.57905 4.79343C8.52095 4.79343 8.95905 5.64706 9.26571 6.28181C9.50667 6.78523 9.70381 7.13543 9.92286 7.13543C10.1419 7.13543 10.3171 6.78523 10.58 6.28181C10.8867 5.64706 11.3248 4.79343 12.2667 4.79343C13.2086 4.79343 13.6467 5.64706 13.9533 6.28181C14.1943 6.78523 14.3914 7.13543 14.6105 7.13543C14.939 7.13543 15.2019 7.39808 15.2019 7.7264C15.2238 8.05472 14.961 8.31737 14.6324 8.31737Z' fill='%238F8F8F'/%3E%3C/svg%3E%0A"/>*/}
        {/*                                    <h3 className={listenstyles.numbers}>*/}
        {/*                                        244*/}
        {/*                                    </h3>*/}

        {/*                                </div>*/}
        {/*                                <div className={listenstyles.likes}>*/}
        {/*                                    <img src="data:image/svg+xml,%3Csvg width='18' height='16' viewBox='0 0 18 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8.99201 16C8.73598 16 8.48915 15.9072 8.29678 15.7388C7.57027 15.1035 6.86983 14.5065 6.25184 13.9799L6.24869 13.9772C4.43687 12.4332 2.87229 11.0998 1.78369 9.7863C0.566803 8.31791 0 6.92567 0 5.40473C0 3.92701 0.506706 2.56372 1.42668 1.56581C2.35763 0.556101 3.63503 0 5.02398 0C6.06209 0 7.0128 0.328199 7.84962 0.975406C8.27195 1.3021 8.65475 1.70192 8.99201 2.16828C9.3294 1.70192 9.71207 1.3021 10.1345 0.975406C10.9714 0.328199 11.9221 0 12.9602 0C14.349 0 15.6265 0.556101 16.5575 1.56581C17.4774 2.56372 17.984 3.92701 17.984 5.40473C17.984 6.92567 17.4174 8.31791 16.2005 9.78616C15.1119 11.0998 13.5474 12.433 11.7359 13.9769C11.1168 14.5043 10.4153 15.1023 9.6871 15.739C9.49487 15.9072 9.2479 16 8.99201 16ZM5.02398 1.05348C3.93277 1.05348 2.93033 1.48897 2.20108 2.27983C1.46098 3.08263 1.05334 4.19236 1.05334 5.40473C1.05334 6.68391 1.52876 7.82794 2.59472 9.11412C3.62501 10.3574 5.15748 11.6633 6.93184 13.1755L6.93514 13.1782C7.55545 13.7069 8.25864 14.3062 8.9905 14.9461C9.72675 14.3049 10.431 13.7047 11.0526 13.1752C12.8268 11.663 14.3591 10.3574 15.3894 9.11412C16.4553 7.82794 16.9307 6.68391 16.9307 5.40473C16.9307 4.19236 16.523 3.08263 15.7829 2.27983C15.0538 1.48897 14.0512 1.05348 12.9602 1.05348C12.1608 1.05348 11.4269 1.30758 10.7789 1.80866C10.2014 2.25541 9.79906 2.82016 9.5632 3.21531C9.44191 3.41852 9.22842 3.53981 8.99201 3.53981C8.7556 3.53981 8.54211 3.41852 8.42082 3.21531C8.18509 2.82016 7.7828 2.25541 7.20516 1.80866C6.55713 1.30758 5.82321 1.05348 5.02398 1.05348Z' fill='%238F8F8F'/%3E%3C/svg%3E%0A"/>*/}
        {/*                                    <h3 className={listenstyles.numbers}>*/}
        {/*                                        10*/}
        {/*                                    </h3>*/}

        {/*                                </div>*/}
        {/*                            </div>*/}



        {/*                            <img src="data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M7.2 0H3.2C1.4328 0 0 1.4328 0 3.2V12.8C0 14.5672 1.4328 16 3.2 16H12.8C14.5672 16 16 14.5672 16 12.8C16 10.9832 16 8.8 16 8.8C16 8.3584 15.6416 8 15.2 8C14.7584 8 14.4 8.3584 14.4 8.8V12.8C14.4 13.6832 13.6832 14.4 12.8 14.4C10.136 14.4 5.8632 14.4 3.2 14.4C2.316 14.4 1.6 13.6832 1.6 12.8C1.6 10.136 1.6 5.8632 1.6 3.2C1.6 2.316 2.316 1.6 3.2 1.6H7.2C7.6416 1.6 8 1.2416 8 0.8C8 0.3584 7.6416 0 7.2 0ZM13.2688 1.6H10.4C9.9584 1.6 9.6 1.2416 9.6 0.8C9.6 0.3584 9.9584 0 10.4 0H15.2C15.6416 0 16 0.3584 16 0.8V5.6C16 6.0416 15.6416 6.4 15.2 6.4C14.7584 6.4 14.4 6.0416 14.4 5.6V2.7312L8.5656 8.5656C8.2536 8.8776 7.7464 8.8776 7.4344 8.5656C7.1216 8.2536 7.1216 7.7464 7.4344 7.4344L13.2688 1.6Z' fill='%238F8F8F'/%3E%3C/svg%3E%0A"/>*/}



        {/*                        </div>*/}


        {/*                    </div>*/}




        {/*                </div>*/}
        {/*            </li>*/}
        {/*            <li>*/}
        {/*                <div className={listenstyles.singleGist} >*/}


        {/*                    <div className={listenstyles.top}>*/}

        {/*                        <div className={listenstyles.topLeft}>*/}



        {/*                            <img src="https://res.cloudinary.com/seunsanyaa/image/upload/v1642888388/Ellipse_177_hm1lad.png"/>*/}

        {/*                            <h3 className={listenstyles.profileName}>*/}
        {/*                                Wole Majekodunmi*/}
        {/*                            </h3>*/}

        {/*                            <img className={listenstyles.hour} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1642888658/2h_xhfqyz.png"/>*/}

        {/*                        </div>*/}

        {/*                        <div className={listenstyles.topRight}>*/}
        {/*                            <img src="data:image/svg+xml,%3Csvg width='16' height='4' viewBox='0 0 16 4' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2 4C3.10457 4 4 3.10457 4 2C4 0.895431 3.10457 0 2 0C0.895431 0 0 0.895431 0 2C0 3.10457 0.895431 4 2 4Z' fill='%238F8F8F'/%3E%3Cpath d='M7.89471 4C8.99928 4 9.89471 3.10457 9.89471 2C9.89471 0.895431 8.99928 0 7.89471 0C6.79015 0 5.89471 0.895431 5.89471 2C5.89471 3.10457 6.79015 4 7.89471 4Z' fill='%238F8F8F'/%3E%3Cpath d='M13.7895 4C14.894 4 15.7895 3.10457 15.7895 2C15.7895 0.895431 14.894 0 13.7895 0C12.6849 0 11.7895 0.895431 11.7895 2C11.7895 3.10457 12.6849 4 13.7895 4Z' fill='%238F8F8F'/%3E%3C/svg%3E%0A"/>*/}
        {/*                            /!*<h3 className={listenstyles.hour}>*!/*/}
        {/*                            /!*    . 2h*!/*/}
        {/*                            /!*</h3>*!/*/}
        {/*                        </div>*/}


        {/*                    </div>*/}

        {/*                    <img className={listenstyles.image} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1642889201/Rectangle_125_rybq23.png"/>*/}


        {/*                    <div className={listenstyles.playSection}>*/}

        {/*                        <img src="data:image/svg+xml,%3Csvg width='15' height='17' viewBox='0 0 15 17' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13.6333 6.67308L13.6333 6.67309L13.6367 6.67498C13.8983 6.81989 14.1163 7.03219 14.2681 7.28983C14.4199 7.54747 14.5 7.84106 14.5 8.1401C14.5 8.43914 14.4199 8.73273 14.2681 8.99037C14.1163 9.24801 13.8983 9.46031 13.6367 9.60521L13.6367 9.6052L13.6333 9.60712L3.10115 15.5492L3.09886 15.5505C2.83153 15.7032 2.52853 15.7823 2.22067 15.78C1.91282 15.7776 1.61107 15.6938 1.3461 15.5371L1.34613 15.537L1.33975 15.5334C1.08423 15.3872 0.871938 15.1761 0.724447 14.9213C0.576956 14.6666 0.499519 14.3773 0.500003 14.083V14.0822L0.500004 2.19804L0.500002 2.19722C0.499519 1.90286 0.576956 1.61362 0.724447 1.35887C0.871938 1.10412 1.08423 0.892956 1.33975 0.746816L1.33978 0.746864L1.34621 0.743058C1.61112 0.586249 1.91284 0.502403 2.22067 0.500051C2.52851 0.497699 2.83147 0.576923 3.09875 0.729666L3.09875 0.729672L3.10115 0.731027L13.6333 6.67308Z' stroke='white'/%3E%3C/svg%3E%0A"/>*/}


        {/*                        <div className={listenstyles.loader}>*/}

        {/*                            <img className={listenstyles.redLine} height={4} width={55} src="data:image/svg+xml,%3Csvg width='55' height='4' viewBox='0 0 55 4' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='55' height='4' rx='2' fill='%23ED1C24'/%3E%3C/svg%3E%0A"/>*/}

        {/*                        </div>*/}

        {/*                        <img className={listenstyles.gistLogo} width={28} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1642890047/Group_1460_3_oizsma.png"/>*/}
        {/*                    </div>*/}


        {/*                    <div className={listenstyles.bottomSection}>*/}

        {/*                        <div className={listenstyles.bottomLeft}>*/}

        {/*                            <div className={listenstyles.viewsAndLikes}>*/}

        {/*                                <div className={listenstyles.views}>*/}
        {/*                                    <img src="data:image/svg+xml,%3Csvg width='18' height='16' viewBox='0 0 18 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M17.5238 0H0V12.87H4.38095V16L7.7981 12.87H17.5238V0ZM14.6324 8.31737C13.6905 8.31737 13.2524 7.46375 12.9457 6.829C12.7048 6.32558 12.5076 5.97538 12.2886 5.97538C12.0695 5.97538 11.8943 6.32558 11.6314 6.829C11.3248 7.46375 10.8867 8.31737 9.92286 8.31737C8.98095 8.31737 8.54286 7.46375 8.23619 6.829C7.99524 6.32558 7.7981 5.97538 7.57905 5.97538C7.36 5.97538 7.18476 6.32558 6.92191 6.829C6.61524 7.46375 6.17714 8.31737 5.23524 8.31737C4.29333 8.31737 3.85524 7.46375 3.54857 6.829C3.30762 6.32558 3.11048 5.97538 2.89143 5.97538C2.56286 5.97538 2.3 5.71272 2.3 5.3844C2.3 5.05609 2.56286 4.79343 2.89143 4.79343C3.83333 4.79343 4.27143 5.64706 4.5781 6.28181C4.81905 6.78523 5.01619 7.13543 5.23524 7.13543C5.43238 7.13543 5.62952 6.78523 5.89238 6.28181C6.19905 5.64706 6.63714 4.79343 7.57905 4.79343C8.52095 4.79343 8.95905 5.64706 9.26571 6.28181C9.50667 6.78523 9.70381 7.13543 9.92286 7.13543C10.1419 7.13543 10.3171 6.78523 10.58 6.28181C10.8867 5.64706 11.3248 4.79343 12.2667 4.79343C13.2086 4.79343 13.6467 5.64706 13.9533 6.28181C14.1943 6.78523 14.3914 7.13543 14.6105 7.13543C14.939 7.13543 15.2019 7.39808 15.2019 7.7264C15.2238 8.05472 14.961 8.31737 14.6324 8.31737Z' fill='%238F8F8F'/%3E%3C/svg%3E%0A"/>*/}
        {/*                                    <h3 className={listenstyles.numbers}>*/}
        {/*                                        244*/}
        {/*                                    </h3>*/}

        {/*                                </div>*/}
        {/*                                <div className={listenstyles.likes}>*/}
        {/*                                    <img src="data:image/svg+xml,%3Csvg width='18' height='16' viewBox='0 0 18 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8.99201 16C8.73598 16 8.48915 15.9072 8.29678 15.7388C7.57027 15.1035 6.86983 14.5065 6.25184 13.9799L6.24869 13.9772C4.43687 12.4332 2.87229 11.0998 1.78369 9.7863C0.566803 8.31791 0 6.92567 0 5.40473C0 3.92701 0.506706 2.56372 1.42668 1.56581C2.35763 0.556101 3.63503 0 5.02398 0C6.06209 0 7.0128 0.328199 7.84962 0.975406C8.27195 1.3021 8.65475 1.70192 8.99201 2.16828C9.3294 1.70192 9.71207 1.3021 10.1345 0.975406C10.9714 0.328199 11.9221 0 12.9602 0C14.349 0 15.6265 0.556101 16.5575 1.56581C17.4774 2.56372 17.984 3.92701 17.984 5.40473C17.984 6.92567 17.4174 8.31791 16.2005 9.78616C15.1119 11.0998 13.5474 12.433 11.7359 13.9769C11.1168 14.5043 10.4153 15.1023 9.6871 15.739C9.49487 15.9072 9.2479 16 8.99201 16ZM5.02398 1.05348C3.93277 1.05348 2.93033 1.48897 2.20108 2.27983C1.46098 3.08263 1.05334 4.19236 1.05334 5.40473C1.05334 6.68391 1.52876 7.82794 2.59472 9.11412C3.62501 10.3574 5.15748 11.6633 6.93184 13.1755L6.93514 13.1782C7.55545 13.7069 8.25864 14.3062 8.9905 14.9461C9.72675 14.3049 10.431 13.7047 11.0526 13.1752C12.8268 11.663 14.3591 10.3574 15.3894 9.11412C16.4553 7.82794 16.9307 6.68391 16.9307 5.40473C16.9307 4.19236 16.523 3.08263 15.7829 2.27983C15.0538 1.48897 14.0512 1.05348 12.9602 1.05348C12.1608 1.05348 11.4269 1.30758 10.7789 1.80866C10.2014 2.25541 9.79906 2.82016 9.5632 3.21531C9.44191 3.41852 9.22842 3.53981 8.99201 3.53981C8.7556 3.53981 8.54211 3.41852 8.42082 3.21531C8.18509 2.82016 7.7828 2.25541 7.20516 1.80866C6.55713 1.30758 5.82321 1.05348 5.02398 1.05348Z' fill='%238F8F8F'/%3E%3C/svg%3E%0A"/>*/}
        {/*                                    <h3 className={listenstyles.numbers}>*/}
        {/*                                        10*/}
        {/*                                    </h3>*/}

        {/*                                </div>*/}
        {/*                            </div>*/}



        {/*                            <img src="data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M7.2 0H3.2C1.4328 0 0 1.4328 0 3.2V12.8C0 14.5672 1.4328 16 3.2 16H12.8C14.5672 16 16 14.5672 16 12.8C16 10.9832 16 8.8 16 8.8C16 8.3584 15.6416 8 15.2 8C14.7584 8 14.4 8.3584 14.4 8.8V12.8C14.4 13.6832 13.6832 14.4 12.8 14.4C10.136 14.4 5.8632 14.4 3.2 14.4C2.316 14.4 1.6 13.6832 1.6 12.8C1.6 10.136 1.6 5.8632 1.6 3.2C1.6 2.316 2.316 1.6 3.2 1.6H7.2C7.6416 1.6 8 1.2416 8 0.8C8 0.3584 7.6416 0 7.2 0ZM13.2688 1.6H10.4C9.9584 1.6 9.6 1.2416 9.6 0.8C9.6 0.3584 9.9584 0 10.4 0H15.2C15.6416 0 16 0.3584 16 0.8V5.6C16 6.0416 15.6416 6.4 15.2 6.4C14.7584 6.4 14.4 6.0416 14.4 5.6V2.7312L8.5656 8.5656C8.2536 8.8776 7.7464 8.8776 7.4344 8.5656C7.1216 8.2536 7.1216 7.7464 7.4344 7.4344L13.2688 1.6Z' fill='%238F8F8F'/%3E%3C/svg%3E%0A"/>*/}



        {/*                        </div>*/}


        {/*                    </div>*/}




        {/*                </div>*/}
        {/*            </li>*/}
        {/*            <li>*/}
        {/*                <div className={listenstyles.singleGist}>*/}


        {/*                    <div className={listenstyles.top}>*/}

        {/*                        <div className={listenstyles.topLeft}>*/}



        {/*                            <img src="https://res.cloudinary.com/seunsanyaa/image/upload/v1642888388/Ellipse_177_hm1lad.png"/>*/}

        {/*                            <h3 className={listenstyles.profileName}>*/}
        {/*                                Wole Majekodunmi*/}
        {/*                            </h3>*/}

        {/*                            <img className={listenstyles.hour} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1642888658/2h_xhfqyz.png"/>*/}

        {/*                        </div>*/}

        {/*                        <div className={listenstyles.topRight}>*/}
        {/*                            <img src="data:image/svg+xml,%3Csvg width='16' height='4' viewBox='0 0 16 4' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2 4C3.10457 4 4 3.10457 4 2C4 0.895431 3.10457 0 2 0C0.895431 0 0 0.895431 0 2C0 3.10457 0.895431 4 2 4Z' fill='%238F8F8F'/%3E%3Cpath d='M7.89471 4C8.99928 4 9.89471 3.10457 9.89471 2C9.89471 0.895431 8.99928 0 7.89471 0C6.79015 0 5.89471 0.895431 5.89471 2C5.89471 3.10457 6.79015 4 7.89471 4Z' fill='%238F8F8F'/%3E%3Cpath d='M13.7895 4C14.894 4 15.7895 3.10457 15.7895 2C15.7895 0.895431 14.894 0 13.7895 0C12.6849 0 11.7895 0.895431 11.7895 2C11.7895 3.10457 12.6849 4 13.7895 4Z' fill='%238F8F8F'/%3E%3C/svg%3E%0A"/>*/}
        {/*                            /!*<h3 className={listenstyles.hour}>*!/*/}
        {/*                            /!*    . 2h*!/*/}
        {/*                            /!*</h3>*!/*/}
        {/*                        </div>*/}


        {/*                    </div>*/}

        {/*                    <img src="https://res.cloudinary.com/seunsanyaa/image/upload/v1642889201/Rectangle_125_rybq23.png"/>*/}


        {/*                    <div className={listenstyles.playSection}>*/}

        {/*                        <img src="data:image/svg+xml,%3Csvg width='15' height='17' viewBox='0 0 15 17' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13.6333 6.67308L13.6333 6.67309L13.6367 6.67498C13.8983 6.81989 14.1163 7.03219 14.2681 7.28983C14.4199 7.54747 14.5 7.84106 14.5 8.1401C14.5 8.43914 14.4199 8.73273 14.2681 8.99037C14.1163 9.24801 13.8983 9.46031 13.6367 9.60521L13.6367 9.6052L13.6333 9.60712L3.10115 15.5492L3.09886 15.5505C2.83153 15.7032 2.52853 15.7823 2.22067 15.78C1.91282 15.7776 1.61107 15.6938 1.3461 15.5371L1.34613 15.537L1.33975 15.5334C1.08423 15.3872 0.871938 15.1761 0.724447 14.9213C0.576956 14.6666 0.499519 14.3773 0.500003 14.083V14.0822L0.500004 2.19804L0.500002 2.19722C0.499519 1.90286 0.576956 1.61362 0.724447 1.35887C0.871938 1.10412 1.08423 0.892956 1.33975 0.746816L1.33978 0.746864L1.34621 0.743058C1.61112 0.586249 1.91284 0.502403 2.22067 0.500051C2.52851 0.497699 2.83147 0.576923 3.09875 0.729666L3.09875 0.729672L3.10115 0.731027L13.6333 6.67308Z' stroke='white'/%3E%3C/svg%3E%0A"/>*/}


        {/*                        <div className={listenstyles.loader}>*/}

        {/*                            <img className={listenstyles.redLine} height={4} width={55} src="data:image/svg+xml,%3Csvg width='55' height='4' viewBox='0 0 55 4' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='55' height='4' rx='2' fill='%23ED1C24'/%3E%3C/svg%3E%0A"/>*/}

        {/*                        </div>*/}

        {/*                        <img className={listenstyles.gistLogo} width={28} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1642890047/Group_1460_3_oizsma.png"/>*/}
        {/*                    </div>*/}


        {/*                    <div className={listenstyles.bottomSection}>*/}

        {/*                        <div className={listenstyles.bottomLeft}>*/}

        {/*                            <div className={listenstyles.viewsAndLikes}>*/}

        {/*                                <div className={listenstyles.views}>*/}
        {/*                                    <img src="data:image/svg+xml,%3Csvg width='18' height='16' viewBox='0 0 18 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M17.5238 0H0V12.87H4.38095V16L7.7981 12.87H17.5238V0ZM14.6324 8.31737C13.6905 8.31737 13.2524 7.46375 12.9457 6.829C12.7048 6.32558 12.5076 5.97538 12.2886 5.97538C12.0695 5.97538 11.8943 6.32558 11.6314 6.829C11.3248 7.46375 10.8867 8.31737 9.92286 8.31737C8.98095 8.31737 8.54286 7.46375 8.23619 6.829C7.99524 6.32558 7.7981 5.97538 7.57905 5.97538C7.36 5.97538 7.18476 6.32558 6.92191 6.829C6.61524 7.46375 6.17714 8.31737 5.23524 8.31737C4.29333 8.31737 3.85524 7.46375 3.54857 6.829C3.30762 6.32558 3.11048 5.97538 2.89143 5.97538C2.56286 5.97538 2.3 5.71272 2.3 5.3844C2.3 5.05609 2.56286 4.79343 2.89143 4.79343C3.83333 4.79343 4.27143 5.64706 4.5781 6.28181C4.81905 6.78523 5.01619 7.13543 5.23524 7.13543C5.43238 7.13543 5.62952 6.78523 5.89238 6.28181C6.19905 5.64706 6.63714 4.79343 7.57905 4.79343C8.52095 4.79343 8.95905 5.64706 9.26571 6.28181C9.50667 6.78523 9.70381 7.13543 9.92286 7.13543C10.1419 7.13543 10.3171 6.78523 10.58 6.28181C10.8867 5.64706 11.3248 4.79343 12.2667 4.79343C13.2086 4.79343 13.6467 5.64706 13.9533 6.28181C14.1943 6.78523 14.3914 7.13543 14.6105 7.13543C14.939 7.13543 15.2019 7.39808 15.2019 7.7264C15.2238 8.05472 14.961 8.31737 14.6324 8.31737Z' fill='%238F8F8F'/%3E%3C/svg%3E%0A"/>*/}
        {/*                                    <h3 className={listenstyles.numbers}>*/}
        {/*                                        244*/}
        {/*                                    </h3>*/}

        {/*                                </div>*/}
        {/*                                <div className={listenstyles.likes}>*/}
        {/*                                    <img src="data:image/svg+xml,%3Csvg width='18' height='16' viewBox='0 0 18 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8.99201 16C8.73598 16 8.48915 15.9072 8.29678 15.7388C7.57027 15.1035 6.86983 14.5065 6.25184 13.9799L6.24869 13.9772C4.43687 12.4332 2.87229 11.0998 1.78369 9.7863C0.566803 8.31791 0 6.92567 0 5.40473C0 3.92701 0.506706 2.56372 1.42668 1.56581C2.35763 0.556101 3.63503 0 5.02398 0C6.06209 0 7.0128 0.328199 7.84962 0.975406C8.27195 1.3021 8.65475 1.70192 8.99201 2.16828C9.3294 1.70192 9.71207 1.3021 10.1345 0.975406C10.9714 0.328199 11.9221 0 12.9602 0C14.349 0 15.6265 0.556101 16.5575 1.56581C17.4774 2.56372 17.984 3.92701 17.984 5.40473C17.984 6.92567 17.4174 8.31791 16.2005 9.78616C15.1119 11.0998 13.5474 12.433 11.7359 13.9769C11.1168 14.5043 10.4153 15.1023 9.6871 15.739C9.49487 15.9072 9.2479 16 8.99201 16ZM5.02398 1.05348C3.93277 1.05348 2.93033 1.48897 2.20108 2.27983C1.46098 3.08263 1.05334 4.19236 1.05334 5.40473C1.05334 6.68391 1.52876 7.82794 2.59472 9.11412C3.62501 10.3574 5.15748 11.6633 6.93184 13.1755L6.93514 13.1782C7.55545 13.7069 8.25864 14.3062 8.9905 14.9461C9.72675 14.3049 10.431 13.7047 11.0526 13.1752C12.8268 11.663 14.3591 10.3574 15.3894 9.11412C16.4553 7.82794 16.9307 6.68391 16.9307 5.40473C16.9307 4.19236 16.523 3.08263 15.7829 2.27983C15.0538 1.48897 14.0512 1.05348 12.9602 1.05348C12.1608 1.05348 11.4269 1.30758 10.7789 1.80866C10.2014 2.25541 9.79906 2.82016 9.5632 3.21531C9.44191 3.41852 9.22842 3.53981 8.99201 3.53981C8.7556 3.53981 8.54211 3.41852 8.42082 3.21531C8.18509 2.82016 7.7828 2.25541 7.20516 1.80866C6.55713 1.30758 5.82321 1.05348 5.02398 1.05348Z' fill='%238F8F8F'/%3E%3C/svg%3E%0A"/>*/}
        {/*                                    <h3 className={listenstyles.numbers}>*/}
        {/*                                        10*/}
        {/*                                    </h3>*/}

        {/*                                </div>*/}
        {/*                            </div>*/}



        {/*                            <img src="data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M7.2 0H3.2C1.4328 0 0 1.4328 0 3.2V12.8C0 14.5672 1.4328 16 3.2 16H12.8C14.5672 16 16 14.5672 16 12.8C16 10.9832 16 8.8 16 8.8C16 8.3584 15.6416 8 15.2 8C14.7584 8 14.4 8.3584 14.4 8.8V12.8C14.4 13.6832 13.6832 14.4 12.8 14.4C10.136 14.4 5.8632 14.4 3.2 14.4C2.316 14.4 1.6 13.6832 1.6 12.8C1.6 10.136 1.6 5.8632 1.6 3.2C1.6 2.316 2.316 1.6 3.2 1.6H7.2C7.6416 1.6 8 1.2416 8 0.8C8 0.3584 7.6416 0 7.2 0ZM13.2688 1.6H10.4C9.9584 1.6 9.6 1.2416 9.6 0.8C9.6 0.3584 9.9584 0 10.4 0H15.2C15.6416 0 16 0.3584 16 0.8V5.6C16 6.0416 15.6416 6.4 15.2 6.4C14.7584 6.4 14.4 6.0416 14.4 5.6V2.7312L8.5656 8.5656C8.2536 8.8776 7.7464 8.8776 7.4344 8.5656C7.1216 8.2536 7.1216 7.7464 7.4344 7.4344L13.2688 1.6Z' fill='%238F8F8F'/%3E%3C/svg%3E%0A"/>*/}



        {/*                        </div>*/}


        {/*                    </div>*/}




        {/*                </div>*/}
        {/*            </li>*/}
        {/*        </ul>*/}

        {/*        <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous*/}
        {/*           uk-slideshow-item="previous"></a>*/}
        {/*        <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next*/}
        {/*           uk-slideshow-item="next"></a>*/}

        {/*    </div>*/}

        {/*    <ul className="uk-slideshow-nav uk-dotnav uk-flex-center uk-margin"></ul>*/}

        {/*</div>*/}



    </div>










</div>

    )
}
