import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
// import styles from '../../styles/Home.module.css'
// import navstyles from './navbar.module.scss'
import newfriendsstyles from './newfriends.module.scss'


import {useEffect, useRef, useState} from "react";
import {gsap, Linear} from "gsap";
import { ExpoScaleEase } from "gsap/dist/EasePack";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import CustomEase from 'gsap/dist/CustomEase'
gsap.registerPlugin(ExpoScaleEase,CustomEase, Linear,ScrollTrigger);


export default function NewFriends( ) {
    let line1 = useRef()
    let line2 = useRef()
    let first = useRef()

    let line3= useRef()
    let line4 = useRef()
    let cont = useRef()
    let sweater = useRef()
    let afroguy = useRef()
    let afrolady = useRef()
    let coverface = useRef()
    let blueImage = useRef()
    let southafrica = useRef()
    let header = useRef()
    let circle = useRef()

    let line1mobile = useRef()

    let line2mobile = useRef()

    let line3mobile = useRef()

    let line4mobile = useRef()
    let headerMobile = useRef()

    let southafricaMobile= useRef()
    let sweaterMobile = useRef()
    let afroguyMobile = useRef()
    let afroladyMobile = useRef()
    let coverfaceMobile = useRef()

    let blueImageMobile = useRef()





    //
    //
    // useEffect(() => {
    //
    //
    //
    //     let tl =  gsap.timeline({defaults: {duration: 1}, paused: true});
    //
    //     tl.fromTo([line1.current],
    //          {scale:0.2, autoAlpha:0},
    //         {scale:1,autoAlpha:1,
    //
    //             duration:4.5,
    //             ease:ExpoScaleEase.config(1, 0.5, CustomEase.create("custom", "M0,0 C0,0 0.06612,-0.00069 0.105,0.00463 0.13557,0.00882 0.15735,0.01361 0.185,0.02533 0.21427,0.03773 0.23495,0.05027 0.26,0.0703 0.28674,0.0917 0.30294,0.10989 0.325,0.13731 0.34837,0.16636 0.36089,0.1866 0.38,0.21949 0.40135,0.25624 0.41346,0.27844 0.43,0.31803 0.497,0.47845 0.52752,0.57771 0.595,0.73428 0.61144,0.77243 0.62657,0.79424 0.65,0.8285 0.67045,0.85841 0.68506,0.87712 0.71,0.90244 0.73103,0.9238 0.74749,0.93696 0.7725,0.95289 0.79397,0.96656 0.81073,0.97423 0.835,0.98203 0.86192,0.99069 0.88118,0.99395 0.91,0.99708 0.94392,1.00078 1,1 1,1 "))
    //         })
    //         .fromTo([line2.current],
    //          {scale:0.2, autoAlpha:0},
    //         {scale:1, autoAlpha:1,
    //             duration:3.5,
    //
    //
    //             ease:ExpoScaleEase.config(1, 0.2, CustomEase.create("custom", "M0,0 C0,0 0.06612,-0.00069 0.105,0.00463 0.13557,0.00882 0.15735,0.01361 0.185,0.02533 0.21427,0.03773 0.23495,0.05027 0.26,0.0703 0.28674,0.0917 0.30294,0.10989 0.325,0.13731 0.34837,0.16636 0.36089,0.1866 0.38,0.21949 0.40135,0.25624 0.41346,0.27844 0.43,0.31803 0.497,0.47845 0.52752,0.57771 0.595,0.73428 0.61144,0.77243 0.62657,0.79424 0.65,0.8285 0.67045,0.85841 0.68506,0.87712 0.71,0.90244 0.73103,0.9238 0.74749,0.93696 0.7725,0.95289 0.79397,0.96656 0.81073,0.97423 0.835,0.98203 0.86192,0.99069 0.88118,0.99395 0.91,0.99708 0.94392,1.00078 1,1 1,1 ")
    //             )
    //
    //
    //         },"-=3.5")
    //         .fromTo([line3.current],
    //         {scale:0.2, autoAlpha:0},
    //         {scale:1, autoAlpha:1,
    //
    //             duration:2.5,
    //
    //             ease:ExpoScaleEase.config(1, 0.2, CustomEase.create("custom", "M0,0 C0,0 0.06612,-0.00069 0.105,0.00463 0.13557,0.00882 0.15735,0.01361 0.185,0.02533 0.21427,0.03773 0.23495,0.05027 0.26,0.0703 0.28674,0.0917 0.30294,0.10989 0.325,0.13731 0.34837,0.16636 0.36089,0.1866 0.38,0.21949 0.40135,0.25624 0.41346,0.27844 0.43,0.31803 0.497,0.47845 0.52752,0.57771 0.595,0.73428 0.61144,0.77243 0.62657,0.79424 0.65,0.8285 0.67045,0.85841 0.68506,0.87712 0.71,0.90244 0.73103,0.9238 0.74749,0.93696 0.7725,0.95289 0.79397,0.96656 0.81073,0.97423 0.835,0.98203 0.86192,0.99069 0.88118,0.99395 0.91,0.99708 0.94392,1.00078 1,1 1,1 "))
    //         }, "-=2.5")
    //         .fromTo([line4.current],
    //                  {scale:0.2},
    //                 {scale:1,
    //                     duration:1,
    //                     // scrollTrigger:line4.current,
    //                     // scrollTrigger:{
    //                     //     trigger:cont.current,
    //                     //     scrub:1
    //                     //
    //                     // },
    //                     ease:ExpoScaleEase.config(1, 0.2, CustomEase.create("custom", "M0,0 C0,0 0.06612,-0.00069 0.105,0.00463 0.13557,0.00882 0.15735,0.01361 0.185,0.02533 0.21427,0.03773 0.23495,0.05027 0.26,0.0703 0.28674,0.0917 0.30294,0.10989 0.325,0.13731 0.34837,0.16636 0.36089,0.1866 0.38,0.21949 0.40135,0.25624 0.41346,0.27844 0.43,0.31803 0.497,0.47845 0.52752,0.57771 0.595,0.73428 0.61144,0.77243 0.62657,0.79424 0.65,0.8285 0.67045,0.85841 0.68506,0.87712 0.71,0.90244 0.73103,0.9238 0.74749,0.93696 0.7725,0.95289 0.79397,0.96656 0.81073,0.97423 0.835,0.98203 0.86192,0.99069 0.88118,0.99395 0.91,0.99708 0.94392,1.00078 1,1 1,1 "))
    //                 })
    //         .fromTo([sweater.current],
    //                  { opacity:0},
    //                 {opacity:1,
    //                     //
    //                     // delay:9,
    //
    //
    //
    //
    //
    //                     duration:0.8,
    //                     // scrollTrigger:sweater.current,
    //
    //                 })
    // .fromTo([afroguy.current],
    //                  { opacity:0, autoAlpha:0},
    //                 {opacity:1,
    //                     duration:0.5,
    //                     autoAlpha:1,
    //
    //                     // scrollTrigger:afroguy.current,
    //                 }, "-=0.5"
    // )
    //         .fromTo([coverface.current],
    //         { opacity:0},
    //         {opacity:1,
    //
    //             delay:0.5,
    //             duration:0.5,
    //             // scrollTrigger:coverface.current,
    //         })
    //         .fromTo([afrolady.current],
    //         { opacity:0},
    //         {opacity:1,
    //             duration:0.5,
    //             // scrollTrigger:afrolady.current,
    //         },"-=0.5")
    //         .fromTo([header.current],
    //         { opacity:0},
    //         {opacity:1,
    //             duration:0.5,
    //             // scrollTrigger:header.current,
    //         },"-=0.5")
    //         .fromTo([southafrica.current],
    //         { opacity:0},
    //         {opacity:1,
    //             delay:0.5,
    //             duration:0.5,
    //             // scrollTrigger:southafrica.current,
    //         })
    //         .fromTo([blueImage.current],
    //         { opacity:0},
    //         {opacity:1,
    //             duration:0.5,
    //             // scrollTrigger:blueImage.current,
    //         }, "-=0.5");
    //
    //
    //
    //
    //     const ST = ScrollTrigger.create({
    //         trigger:[cont.current],
    //         scrub:true,
    //         toggleActions: "restart pause resume none",
    //
    //         onUpdate: ({progress}) => tl.progress() < progress ? tl.progress(progress) : null
    //     });
    //
    //
    //
    //
    //
    //
    //     let tlmobile =  gsap.timeline({defaults: {duration: 1}, paused: true});
    //
    //     tlmobile.fromTo([line1mobile.current],
    //         {scale:0.2, autoAlpha:0},
    //         {scale:1,autoAlpha:1,
    //
    //             duration:4.5,
    //             ease:ExpoScaleEase.config(1, 0.5, CustomEase.create("custom", "M0,0 C0,0 0.06612,-0.00069 0.105,0.00463 0.13557,0.00882 0.15735,0.01361 0.185,0.02533 0.21427,0.03773 0.23495,0.05027 0.26,0.0703 0.28674,0.0917 0.30294,0.10989 0.325,0.13731 0.34837,0.16636 0.36089,0.1866 0.38,0.21949 0.40135,0.25624 0.41346,0.27844 0.43,0.31803 0.497,0.47845 0.52752,0.57771 0.595,0.73428 0.61144,0.77243 0.62657,0.79424 0.65,0.8285 0.67045,0.85841 0.68506,0.87712 0.71,0.90244 0.73103,0.9238 0.74749,0.93696 0.7725,0.95289 0.79397,0.96656 0.81073,0.97423 0.835,0.98203 0.86192,0.99069 0.88118,0.99395 0.91,0.99708 0.94392,1.00078 1,1 1,1 "))
    //         })
    //         .fromTo([line2mobile.current],
    //             {scale:0.2, autoAlpha:0},
    //             {scale:1, autoAlpha:1,
    //                 duration:3.5,
    //
    //
    //                 ease:ExpoScaleEase.config(1, 0.2, CustomEase.create("custom", "M0,0 C0,0 0.06612,-0.00069 0.105,0.00463 0.13557,0.00882 0.15735,0.01361 0.185,0.02533 0.21427,0.03773 0.23495,0.05027 0.26,0.0703 0.28674,0.0917 0.30294,0.10989 0.325,0.13731 0.34837,0.16636 0.36089,0.1866 0.38,0.21949 0.40135,0.25624 0.41346,0.27844 0.43,0.31803 0.497,0.47845 0.52752,0.57771 0.595,0.73428 0.61144,0.77243 0.62657,0.79424 0.65,0.8285 0.67045,0.85841 0.68506,0.87712 0.71,0.90244 0.73103,0.9238 0.74749,0.93696 0.7725,0.95289 0.79397,0.96656 0.81073,0.97423 0.835,0.98203 0.86192,0.99069 0.88118,0.99395 0.91,0.99708 0.94392,1.00078 1,1 1,1 ")
    //                 )
    //
    //
    //             },"-=3.5")
    //         .fromTo([line3mobile.current],
    //             {scale:0.2, autoAlpha:0},
    //             {scale:1, autoAlpha:1,
    //
    //                 duration:2.5,
    //                 // scrollTrigger:line2.current,
    //                 // scrollTrigger:{
    //                 //     trigger:cont.current,
    //                 //     scrub:true
    //                 //
    //                 // },
    //                 ease:ExpoScaleEase.config(1, 0.2, CustomEase.create("custom", "M0,0 C0,0 0.06612,-0.00069 0.105,0.00463 0.13557,0.00882 0.15735,0.01361 0.185,0.02533 0.21427,0.03773 0.23495,0.05027 0.26,0.0703 0.28674,0.0917 0.30294,0.10989 0.325,0.13731 0.34837,0.16636 0.36089,0.1866 0.38,0.21949 0.40135,0.25624 0.41346,0.27844 0.43,0.31803 0.497,0.47845 0.52752,0.57771 0.595,0.73428 0.61144,0.77243 0.62657,0.79424 0.65,0.8285 0.67045,0.85841 0.68506,0.87712 0.71,0.90244 0.73103,0.9238 0.74749,0.93696 0.7725,0.95289 0.79397,0.96656 0.81073,0.97423 0.835,0.98203 0.86192,0.99069 0.88118,0.99395 0.91,0.99708 0.94392,1.00078 1,1 1,1 "))
    //             }, "-=2.5")
    //         .fromTo([line4mobile.current],
    //             {scale:0.2},
    //             {scale:1,
    //                 duration:1,
    //                 // scrollTrigger:line4.current,
    //                 // scrollTrigger:{
    //                 //     trigger:cont.current,
    //                 //     scrub:1
    //                 //
    //                 // },
    //                 ease:ExpoScaleEase.config(1, 0.2, CustomEase.create("custom", "M0,0 C0,0 0.06612,-0.00069 0.105,0.00463 0.13557,0.00882 0.15735,0.01361 0.185,0.02533 0.21427,0.03773 0.23495,0.05027 0.26,0.0703 0.28674,0.0917 0.30294,0.10989 0.325,0.13731 0.34837,0.16636 0.36089,0.1866 0.38,0.21949 0.40135,0.25624 0.41346,0.27844 0.43,0.31803 0.497,0.47845 0.52752,0.57771 0.595,0.73428 0.61144,0.77243 0.62657,0.79424 0.65,0.8285 0.67045,0.85841 0.68506,0.87712 0.71,0.90244 0.73103,0.9238 0.74749,0.93696 0.7725,0.95289 0.79397,0.96656 0.81073,0.97423 0.835,0.98203 0.86192,0.99069 0.88118,0.99395 0.91,0.99708 0.94392,1.00078 1,1 1,1 "))
    //             })
    //         .fromTo([sweaterMobile.current],
    //             { opacity:0},
    //             {opacity:1,
    //                 //
    //                 // delay:9,
    //
    //
    //
    //                 ease: CustomEase.create("custom", "M0,0 C0.11,0.494 0.192,0.726 0.318,0.852 0.45,0.984 0.504,1 1,1"),
    //
    //
    //                 duration:0.8,
    //                 // scrollTrigger:sweater.current,
    //
    //             })
    //         .fromTo([afroguyMobile.current],
    //             { opacity:0, autoAlpha:0},
    //             {opacity:1,
    //                 duration:0.5,
    //                 autoAlpha:1,
    //                 ease: CustomEase.create("custom", "M0,0 C0.11,0.494 0.192,0.726 0.318,0.852 0.45,0.984 0.504,1 1,1")
    //
    //                 // scrollTrigger:afroguy.current,
    //             }, "-=0.5"
    //         )
    //         .fromTo([coverfaceMobile.current],
    //             { opacity:0},
    //             {opacity:1,
    //
    //                 delay:0.5,
    //                 duration:0.5,
    //                 ease: CustomEase.create("custom", "M0,0 C0.11,0.494 0.192,0.726 0.318,0.852 0.45,0.984 0.504,1 1,1")
    //
    //                 // scrollTrigger:coverface.current,
    //             })
    //         .fromTo([afroladyMobile.current],
    //             { opacity:0},
    //             {opacity:1,
    //                 duration:0.5,
    //                 ease: CustomEase.create("custom", "M0,0 C0.11,0.494 0.192,0.726 0.318,0.852 0.45,0.984 0.504,1 1,1")
    //
    //                 // scrollTrigger:afrolady.current,
    //             },"-=0.5")
    //         .fromTo([headerMobile.current],
    //             { opacity:0},
    //             {opacity:1,
    //                 duration:0.5,
    //                 ease: CustomEase.create("custom", "M0,0 C0.11,0.494 0.192,0.726 0.318,0.852 0.45,0.984 0.504,1 1,1")
    //
    //                 // scrollTrigger:header.current,
    //             },"-=0.5")
    //         .fromTo([southafricaMobile.current],
    //             { opacity:0},
    //             {opacity:1,
    //                 delay:0.5,
    //                 duration:0.5,
    //                 ease: CustomEase.create("custom", "M0,0 C0.11,0.494 0.192,0.726 0.318,0.852 0.45,0.984 0.504,1 1,1")
    //
    //                 // scrollTrigger:southafrica.current,
    //             })
    //         .fromTo([blueImageMobile.current],
    //             { opacity:0},
    //             {opacity:1,
    //                 duration:0.5,
    //                 ease: CustomEase.create("custom", "M0,0 C0.11,0.494 0.192,0.726 0.318,0.852 0.45,0.984 0.504,1 1,1")
    //
    //                 // scrollTrigger:blueImage.current,
    //             }, "-=0.5");
    //
    //
    //     const STMobile = ScrollTrigger.create({
    //         trigger:[cont.current],
    //         scrub:true,
    //         toggleActions: "restart pause resume none",
    //
    //         onUpdate: ({progress}) => tlmobile.progress() < progress ? tlmobile.progress(progress) : null
    //     });
    //
    // },[]);





    return (
<>

    <div>
        <div ref={cont}></div>

    </div>
      <div className={newfriendsstyles.container} data-scroll-section>

          {/*<img className={newfriendsstyles.circle} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1642896228/Group_1622_hmq5jd.png"/>*/}

          <div className={newfriendsstyles.circle}  ref={circle}>

              <img ref={line1} className={newfriendsstyles.line1} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1643753520/Ellipse_164_1_mavkmw.png"/>

<img ref={line2} className={newfriendsstyles.line2} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1643753695/Ellipse_163_voqpkk.png"/>

<img ref={line3} className={newfriendsstyles.line3} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1643754367/Ellipse_162_2_wmkgl0.png"/>
<img ref={line4} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1643756741/Ellipse_161_co07bi.png" className={newfriendsstyles.line4}/>


              <img ref={blueImage} className={newfriendsstyles.blueImage} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1643757115/Ellipse_177_2_wmtwmf.png" />


              <div className={newfriendsstyles.newfriendsbg}>

                  <div ref={header} className={newfriendsstyles.newfriendtext} >



                  <h3 className={newfriendsstyles.header}>
                      Make new friends
                  </h3>

                  <p className={newfriendsstyles.paragraph}>Searching for a potential match...</p>
                  </div>

              </div>
<img ref={afroguy} className={newfriendsstyles.afroguyImage} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1643754688/Ellipse_179_hrkeov.png"/>
        <img ref={afrolady} className={newfriendsstyles.afroladyImage} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1643755017/Ellipse_178_ga0o8a.png"/>

         <img ref={southafrica} className={newfriendsstyles.southAfrica} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1643755571/Ellipse_182_au1s63.png"/>


         <img ref={coverface} className={newfriendsstyles.coverFace} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1643756159/Ellipse_181_n1anmh.png"/>

<img ref={sweater} className={newfriendsstyles.sweater} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1643756490/Ellipse_180_k36b5j.png"/>
          </div>

          {/*<img className={newfriendsstyles.circleMobile} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1643063219/Group_1623_2_idcsdp.png"/>*/}


          <div className={newfriendsstyles.circleMobile}>



                  <img ref={line1mobile} className={newfriendsstyles.line1Mobile} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1643792875/Ellipse_164_3_m4znnk.png"/>


                  <img ref={line2mobile} className={newfriendsstyles.line2Mobile}  src="https://res.cloudinary.com/seunsanyaa/image/upload/v1643794470/Ellipse_163_2_nvt8z6.png"/>

<img ref={line3mobile} className={newfriendsstyles.line3Mobile} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1643795682/Ellipse_162_4_corr1o.png"/>
<img  ref={line4mobile} className={newfriendsstyles.line4Mobile} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1643797405/Ellipse_161_3_y54o11.png"/>

<img className={newfriendsstyles.newfriendsbgMobile} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1643838898/Ellipse_160_1_amaev8.png"/>


              {/*<div className={newfriendsstyles.newfriendsbgMobile}>*/}

                  <div ref={headerMobile}>



                      <h3 className={newfriendsstyles.header}>
                          Make new friends
                      </h3>

                      <p className={newfriendsstyles.paragraph}>Searching for a potential match...</p>
                  </div>

              {/*</div>*/}
          <img ref={afroguyMobile} className={newfriendsstyles.afroguyImageMobile} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1643795743/Ellipse_179_1_vgy2e8.png"/>
          <img ref={sweaterMobile} className={newfriendsstyles.sweaterMobile} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1643795813/Ellipse_180_2_dcobni.png"/>
          <img ref={coverfaceMobile} className={newfriendsstyles.coverFaceMobile} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1643796298/Ellipse_181_1_wj74mg.png"/>
          <img ref={southafricaMobile} className={newfriendsstyles.southAfricaMobile} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1643796729/Ellipse_182_1_ein8su.png"/>
          <img ref={afroladyMobile} className={newfriendsstyles.afroladyImageMobile} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1643797054/Ellipse_178_1_gashas.png"/>
          <img ref={blueImageMobile} className={newfriendsstyles.blueImageMobile} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1643797982/Ellipse_177_3_bpokxf.png"/>

          </div>

      </div>

</>
    )
}
