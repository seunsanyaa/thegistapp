import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

import NavBar from "../components/Navbar/navbar";
import Hero from "../components/Hero/hero";
import AudioCharts from "../components/AudioChats/audiochats";
import Listen from "../components/Listen/listen";
import LiveRooms from "../components/LiveRooms/liverooms";
import NewFriends from "../components/NewFriends/newfriends";
import DownloadApp from "../components/DownloadApp/downloadapp";
import Footer from "../components/Footer/footer";
import { gsap ,Linear } from "gsap";
import {useEffect, useRef, useState} from "react";



import { useInView } from 'react-intersection-observer';


import  ScrollTrigger  from "gsap/dist/ScrollTrigger";
import { ExpoScaleEase } from "gsap/dist/EasePack";
import CustomEase from 'gsap/dist/CustomEase'
gsap.registerPlugin(ExpoScaleEase,CustomEase, Linear, ScrollTrigger);
import "uikit/dist/js/uikit.min.js";
import useLocoScroll from "../components/hooks/useLocoScroll";
// import LocomotiveScroll from "locomotive-scroll";


export default function Home() {

    const [ref, inView] = useInView({
        threshold: 0.4,
        triggerOnce:true
    })

    let background = useRef(null)
    let smooth = useRef();



    const [preloader , setPreloader] = useState(true);

    useLocoScroll(!preloader)

    const [timer , setTimer] = useState(5)

    const id = useRef(null)
    const clear = ()=>{
        window.clearInterval(id.current);

        setPreloader(false);
    }


    useEffect(()=>{
        id.current = window.setInterval(()=>{

            setTimer((timer)=>timer-1)



        }, 1000)



    },[])

    useEffect(()=>{

        if (timer===0){
            clear();
        }



    },[timer])



    useEffect(() => {


        const GSAP = require("gsap/dist/CSSRulePlugin");

        const { CSSRulePlugin } = GSAP;
        gsap.registerPlugin(CSSRulePlugin);
        // uses el.current.querySelectorAll() internally














                        //
       //                  gsap.fromTo([background.current], {
       //                      scale:1.2, autoAlpha:0
       //                  },{
       //                      scale:1,
       //                      duration:2,
       //                      autoAlpha:1,
       //                      ease:ExpoScaleEase.config(1.2, 1, CustomEase.create("custom", "M0,0 C0,0 0.06612,-0.00069 0.105,0.00463 0.13557,0.00882 0.15735,0.01361 0.185,0.02533 0.21427,0.03773 0.23495,0.05027 0.26,0.0703 0.28674,0.0917 0.30294,0.10989 0.325,0.13731 0.34837,0.16636 0.36089,0.1866 0.38,0.21949 0.40135,0.25624 0.41346,0.27844 0.43,0.31803 0.497,0.47845 0.52752,0.57771 0.595,0.73428 0.61144,0.77243 0.62657,0.79424 0.65,0.8285 0.67045,0.85841 0.68506,0.87712 0.71,0.90244 0.73103,0.9238 0.74749,0.93696 0.7725,0.95289 0.79397,0.96656 0.81073,0.97423 0.835,0.98203 0.86192,0.99069 0.88118,0.99395 0.91,0.99708 0.94392,1.00078 1,1 1,1 "))
       //
       //
       //                  })
       //  //
       //
       //
       // //
       // gsap.to([background.current], 20, {
       //      backgroundPosition: "-2247px 0px",
       //      delay:2,
       //      repeat: -1,
       //      //autoRound:false,
       //      ease: Linear.easeNone
       //  })






    },[]);




    if(inView===true){

        // let tline= gsap.timeline()

         gsap.fromTo([background.current], {
             scale:1.2, autoAlpha:0
         },{
             scale:1,
             duration:2,
             autoAlpha:1,
             ease:ExpoScaleEase.config(1.2, 1, CustomEase.create("custom", "M0,0 C0,0 0.06612,-0.00069 0.105,0.00463 0.13557,0.00882 0.15735,0.01361 0.185,0.02533 0.21427,0.03773 0.23495,0.05027 0.26,0.0703 0.28674,0.0917 0.30294,0.10989 0.325,0.13731 0.34837,0.16636 0.36089,0.1866 0.38,0.21949 0.40135,0.25624 0.41346,0.27844 0.43,0.31803 0.497,0.47845 0.52752,0.57771 0.595,0.73428 0.61144,0.77243 0.62657,0.79424 0.65,0.8285 0.67045,0.85841 0.68506,0.87712 0.71,0.90244 0.73103,0.9238 0.74749,0.93696 0.7725,0.95289 0.79397,0.96656 0.81073,0.97423 0.835,0.98203 0.86192,0.99069 0.88118,0.99395 0.91,0.99708 0.94392,1.00078 1,1 1,1 "))


         })

        gsap.to([background.current], 20, {
             backgroundPosition: "-2247px 0px",
             delay:2,
             repeat: -1,
             //autoRound:false,
             ease: Linear.easeNone
         })



    }



    return (


        <div className= "hidden">
        <div className="background">
      <Head>
        <title>Gist App</title>
          {/*<img src="https://res.cloudinary.com/seunsanyaa/image/upload/v1642870478/Group_1460_2_sdovvo.png"/>*/}

          <meta name="description" content="Gist app" />
        <link rel="icon" href="data:image/svg+xml,%3Csvg width='51' height='32' viewBox='0 0 51 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M45.7998 3.81408V5.91278e-05H43.0988V3.81408H34.4183H34.3294C30.7577 3.84866 28.4522 5.87381 28.4522 8.33765C28.4522 14.3694 38.0693 12.2701 38.0693 15.8771C38.0693 17.2078 36.8821 18.2723 34.7449 18.2723C32.4595 18.2723 31.0643 17.0895 30.9158 15.5224H28.1259C28.304 18.4793 30.9753 20.5488 34.7746 20.5488C38.366 20.5488 40.711 18.5381 40.711 15.8771C40.5922 10.0821 31.1535 12.1815 31.1535 8.33765C31.1535 7.03669 32.3407 6.09063 34.3294 6.09063H39.6325H40.9915H43.0988V15.8478C43.0988 19.1 44.7312 20.2828 47.6106 20.2828H50.0445V18.0062H48.0558C46.3935 18.0062 45.7998 17.4444 45.7998 15.8478V6.09063H50.0445V4.08013V3.81408H45.7998Z' fill='white'/%3E%3Cpath d='M23.1028 20.0916H25.8426V3.65254H23.1028V20.0916Z' fill='white'/%3E%3Cpath d='M5.15165 10.9457C4.1291 10.4494 3.36119 9.58494 2.98915 8.51097C2.61686 7.43725 2.68535 6.28274 3.18132 5.2602C4.20587 3.14963 6.75646 2.26607 8.86678 3.29012L15.775 6.64249C17.8855 7.66679 18.7693 10.2174 17.745 12.3282C16.7207 14.439 14.1704 15.3228 12.0596 14.2983L5.15165 10.9457ZM14.3505 17.46C16.7887 17.3047 19.0789 15.8795 20.2199 13.5291C21.9065 10.0541 20.4514 5.85426 16.9759 4.16766L10.0677 0.815296C6.59314 -0.871803 2.39334 0.58399 0.706742 4.05928C-0.11034 5.74287 -0.22298 7.64371 0.389894 9.41184C1.00252 11.18 2.2669 12.6037 3.95048 13.4205L10.8587 16.7731C11.1211 16.9003 11.3875 17.0084 11.6567 17.1005V17.7866V19.6975C11.6567 21.3033 12.9602 22.6111 14.5705 22.6111C16.3924 22.6111 17.9309 23.9633 18.0641 25.6923C18.1424 26.6676 17.7849 27.6262 17.0928 28.3224C16.4558 28.9531 15.6202 29.3063 14.7271 29.3063H11.4367C9.6106 29.3063 8.07227 27.9498 7.94106 26.2254C7.86279 25.2457 8.21401 24.2914 8.91018 23.5952C9.03712 23.4681 9.17886 23.3517 9.33114 23.2375L7.53265 21.225C7.3465 21.3733 7.1709 21.5298 7.00984 21.6906C5.75524 22.939 5.11402 24.668 5.25149 26.4368C5.49709 29.5559 8.21401 32.0001 11.4367 32.0001H14.7271C16.3394 32.0001 17.8524 31.3674 18.9994 30.2267C20.248 28.9741 20.8889 27.2454 20.7515 25.4868C20.5081 22.3615 17.7932 19.9175 14.5705 19.9175C14.4499 19.9175 14.3505 19.8159 14.3505 19.6975V17.7866V17.46Z' fill='white'/%3E%3Cpath d='M17.2052 12.0657C16.9003 12.6899 16.4265 13.2064 15.853 13.5639C15.2795 13.9217 14.6066 14.1246 13.9105 14.1246C13.3581 14.1246 12.8227 14.002 12.3212 13.7586L5.41253 10.4067C4.53424 9.97926 3.87621 9.23669 3.5566 8.31399C3.23699 7.39155 3.29419 6.40111 3.72168 5.52307C4.32903 4.27249 5.62201 3.46418 7.01635 3.46418C7.56876 3.46418 8.10411 3.58686 8.6056 3.8302L15.5123 7.18182C17.3258 8.06237 18.0855 10.2525 17.2052 12.0657Z' fill='%23ED1D24'/%3E%3C/svg%3E%0A" />
      </Head>
            {preloader ? <div className='loader-wrapper absolute'>

                <h1 className='loaderText'>Loading.....</h1>
                </div> :


                <div className="main-container" id="main-container" data-scroll-container inView={inView}>
                <div className="mainbg" ref={ref}>
                    <div className="hero" ref={background} data-scroll-section></div>

                    <NavBar/>

                    <Hero/>


                </div>




        <AudioCharts/>

        <Listen/>

        <LiveRooms/>

        <NewFriends/>

        <DownloadApp/>

        <Footer/>

             </div>

                }

    </div>
        </div>



  )
}
