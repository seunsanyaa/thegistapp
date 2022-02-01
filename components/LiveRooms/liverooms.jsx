import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
// import styles from '../../styles/Home.module.css'
// import navstyles from './navbar.module.scss'
import liveroomstyles from './liverooms.module.scss'

//
import {useEffect, useRef, useState} from "react";

import {gsap, Linear} from "gsap";
import { ExpoScaleEase } from "gsap/dist/EasePack";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import CustomEase from 'gsap/dist/CustomEase'
gsap.registerPlugin(ExpoScaleEase,CustomEase, Linear,ScrollTrigger);

export default function LiveRooms( ) {

    let firstImage= useRef()
    let secondImage = useRef()
    let thirdImage = useRef()
    let container = useRef()
    let head = useRef()
    let paragraph = useRef()

    let secondContainer = useRef()
    let middleContainer = useRef()
    let textSection = useRef()



    useEffect(() => {


        gsap.fromTo([firstImage.current],
            {
                y:170,
                autoAlpha:0

            },
            {
                y:0,
                autoAlpha:1,
                // opacity:0,


            scrollTrigger: container.current,
            duration:0.3
            //         css:{
            //         visibility: "visible"
            // }
        });
        gsap.fromTo([secondImage.current], {
                y:170,
            autoAlpha:0
            },
            {
                y:0,
                autoAlpha:1,



            scrollTrigger: middleContainer.current,
            delay:0.2,
            duration:0.3
            //         css:{
            //         visibility: "visible"
            // }
        });
        gsap.fromTo([thirdImage.current], {
            y:170,
            autoAlpha:0



        },{
            y:0,
            autoAlpha:1,

            scrollTrigger: secondContainer.current,
            delay:0.35,
            duration:0.3

        })
        gsap.fromTo([head.current],{

            autoAlpha:0

        }, {
            // y:170,
            autoAlpha:1,

            scrollTrigger:textSection.current,
            delay:0.4,
            duration:0.4
            //         css:{
            //         visibility: "visible"
            // }
        })
        gsap.fromTo([paragraph.current],{
            autoAlpha:0

        }, {
            // y:170,
            autoAlpha:1,

            scrollTrigger: textSection.current,
            delay:0.55,
            duration:0.4
            //         css:{
            //         visibility: "visible"
            // }
        })





    },[]);


    return (




  <div className={liveroomstyles.container} ref={container}>

      <div ref={middleContainer}></div>

<div className={liveroomstyles.imageContainer} ref={secondContainer}>
      {/*<img className={liveroomstyles.images} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1642895249/Group_1609_zyrxlg.png"/>*/}
<img ref={firstImage} className={liveroomstyles.firstImage} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1643288305/image_3_1_viswd1.png"/>
     <img ref={secondImage} className={liveroomstyles.secondImage} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1643288312/image_2_wudrp8.png"/>
     <img ref={thirdImage} className={liveroomstyles.thirdImage} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1643288320/image_1_lhxle0.png"/>
</div>
      <div className={liveroomstyles.textSection} ref={textSection}>

          <h3 className={liveroomstyles.head} ref={head}>
              Lit live rooms
          </h3>

          <p className={liveroomstyles.paragraph} ref={paragraph}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nascetur imperdiet ornare sed arcu in fringilla magna dolor pulvinar.
              Sed tellus diam auctor consequat. Suspendisse eu tincidunt non in non.
          </p>

      </div>

  </div>


    )
}
