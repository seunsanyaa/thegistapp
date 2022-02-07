import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
// import styles from '../../styles/Home.module.css'
// import navstyles from './navbar.module.scss'
import downloadappstyles from './downloadapp.module.scss'


import {useEffect, useRef, useState} from "react";
import audiostyles from "../AudioChats/audiochats.module.scss";
import {useInView} from "react-intersection-observer";

import {gsap, Linear} from "gsap";
import { ExpoScaleEase } from "gsap/dist/EasePack";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import CustomEase from 'gsap/dist/CustomEase'
import listenstyles from "../Listen/listen.module.scss";
gsap.registerPlugin(ExpoScaleEase,CustomEase, Linear,ScrollTrigger);

export default function DownloadApp( ) {

    let phoneImage = useRef();
    let container = useRef()
    let mainText = useRef()
    let bigImageMobile = useRef()
    let containerMobile = useRef()

    const [ref, inView] = useInView({
        threshold: 0.15,
        triggerOnce:true
    })


    if(inView===true){



            const tl = gsap.timeline()
                .fromTo([phoneImage.current],{
                y:550


                }, {


                y:0,

                    // autoAlpha:0,

                    duration:1.3,
                    ease: CustomEase.create("custom", "M0,0 C0.11,0.494 0.192,0.726 0.318,0.852 0.45,0.984 0.504,1 1,1")



                })




            //
            // const ST = ScrollTrigger.create({
            //     trigger:mainText.current,
            //     scrub:true,
            //     toggleActions: "play pause resume none",
            //     onUpdate: ({progress}) => tl.progress() < progress ? tl.progress(progress) : null
            // });
            //




            const tlmobile = gsap.timeline()
                .fromTo([bigImageMobile.current],{
                    y:600


                }, {


                    y:0,

                    // autoAlpha:0,

                    duration:1.3,
                    ease: CustomEase.create("custom", "M0,0 C0.11,0.494 0.192,0.726 0.318,0.852 0.45,0.984 0.504,1 1,1")



                })










    }

    // useEffect(() => {
    //
    //     const tl = gsap.timeline({defaults: {duration: 1}, paused: true})
    //         .fromTo([phoneImage.current],{
    //         y:550
    //
    //
    //         }, {
    //
    //
    //         y:0,
    //
    //             // autoAlpha:0,
    //
    //             duration:1,
    //             ease: CustomEase.create("custom", "M0,0 C0.11,0.494 0.192,0.726 0.318,0.852 0.45,0.984 0.504,1 1,1")
    //
    //
    //
    //         })
    //
    //
    //
    //
    //
    //     const ST = ScrollTrigger.create({
    //         trigger:mainText.current,
    //         scrub:true,
    //         toggleActions: "play pause resume none",
    //         onUpdate: ({progress}) => tl.progress() < progress ? tl.progress(progress) : null
    //     });
    //
    //
    //
    //
    //
    //     const tlmobile = gsap.timeline({defaults: {duration: 1}, paused: true})
    //         .fromTo([bigImageMobile.current],{
    //             y:600
    //
    //
    //         }, {
    //
    //
    //             y:0,
    //
    //             // autoAlpha:0,
    //
    //             duration:1,
    //             ease: CustomEase.create("custom", "M0,0 C0.11,0.494 0.192,0.726 0.318,0.852 0.45,0.984 0.504,1 1,1")
    //
    //
    //
    //         })
    //
    //
    //
    //
    //
    //     const STmobile = ScrollTrigger.create({
    //         trigger:containerMobile.current,
    //         scrub:true,
    //         toggleActions: "play pause resume none",
    //         onUpdate: ({progress}) => tlmobile.progress() < progress ? tlmobile.progress(progress) : null
    //     });
    //
    //
    //
    // },[]);


    return (
<div className={downloadappstyles.containerOutside} data-scroll-section inView={inView}>


<div ref={ref}>


    <div className={downloadappstyles.container} ref={container}>


{/*<img src="https://res.cloudinary.com/seunsanyaa/image/upload/v1642896614/Mask_Group_1_uqoyvt.png"/>*/}
          <div className={downloadappstyles.textSide} ref={mainText}>

              <h3 className={downloadappstyles.mainText}>
                  Download the app to get started
              </h3>

              <div className={downloadappstyles.appstoreSection}>

                  <img className={downloadappstyles.store1} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1642878698/app_store_icon_1_yzumum.png"/>


                  <img className={downloadappstyles.store} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1642878754/google_play_store_icon_1_yrpsbb.png"/>

              </div>





          </div>

          <img ref={phoneImage}  className={downloadappstyles.phoneImage} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1642896956/Rectangle_qlrtrx.png" />

          <img className={downloadappstyles.gistLogo} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1642897013/Group_1611_hmmol5.png"/>

      </div>


    <div className={downloadappstyles.containerMobile}>


        <img className={downloadappstyles.gistLogoMobile} src="data:image/svg+xml,%3Csvg width='51' height='32' viewBox='0 0 51 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M45.8002 3.81398V-6.04686e-05H43.0991V3.81398H34.4186H34.3296C30.7579 3.84856 28.4525 5.87372 28.4525 8.33758C28.4525 14.3694 38.0696 12.27 38.0696 15.8771C38.0696 17.2078 36.8824 18.2723 34.7452 18.2723C32.4598 18.2723 31.0646 17.0894 30.9161 15.5224H28.1261C28.3042 18.4793 30.9756 20.5488 34.7749 20.5488C38.3663 20.5488 40.7113 18.5381 40.7113 15.8771C40.5925 10.082 31.1538 12.1814 31.1538 8.33758C31.1538 7.03661 32.3409 6.09055 34.3296 6.09055H39.6328H40.9919H43.0991V15.8478C43.0991 19.0999 44.7316 20.2828 47.611 20.2828H50.0449V18.0062H48.0562C46.3939 18.0062 45.8002 17.4443 45.8002 15.8478V6.09055H50.0449V4.08003V3.81398H45.8002' fill='white'/%3E%3Cpath d='M23.1029 20.0916H25.8428V3.65244H23.1029V20.0916Z' fill='white'/%3E%3Cpath d='M5.15168 10.9456C4.12913 10.4494 3.36121 9.58493 2.98917 8.51095C2.61688 7.43722 2.68537 6.28271 3.18134 5.26016C4.20589 3.14959 6.7565 2.26602 8.86683 3.29007L15.7751 6.64247C17.8856 7.66677 18.7695 10.2174 17.7451 12.3282C16.7208 14.439 14.1705 15.3228 12.0597 14.2983L5.15168 10.9456ZM14.3506 17.46C16.7888 17.3047 19.079 15.8795 20.22 13.5291C21.9066 10.0541 20.4515 5.85423 16.976 4.16762L10.0677 0.815235C6.59318 -0.871872 2.39335 0.583927 0.706746 4.05924C-0.11034 5.74284 -0.222981 7.64369 0.389896 9.41183C1.00252 11.18 2.26691 12.6037 3.95051 13.4205L10.8587 16.7731C11.1212 16.9003 11.3876 17.0084 11.6568 17.1005V17.7867V19.6975C11.6568 21.3034 12.9603 22.6111 14.5706 22.6111C16.3924 22.6111 17.931 23.9633 18.0643 25.6923C18.1425 26.6677 17.785 27.6263 17.0929 28.3225C16.4559 28.9532 15.6203 29.3064 14.7272 29.3064H11.4367C9.61066 29.3064 8.07232 27.9499 7.94111 26.2254C7.86284 25.2458 8.21406 24.2915 8.91023 23.5953C9.03717 23.4681 9.17891 23.3517 9.33119 23.2376L7.53269 21.2251C7.34655 21.3734 7.17094 21.5299 7.00988 21.6907C5.75528 22.939 5.11405 24.668 5.25152 26.4369C5.49713 29.556 8.21406 32.0002 11.4367 32.0002H14.7272C16.3395 32.0002 17.8525 31.3675 18.9995 30.2268C20.2481 28.9742 20.8891 27.2455 20.7516 25.4869C20.5082 22.3615 17.7933 19.9176 14.5706 19.9176C14.45 19.9176 14.3506 19.8159 14.3506 19.6975V17.7867V17.46' fill='white'/%3E%3Cpath d='M17.2052 12.0656C16.9004 12.6898 16.4265 13.2063 15.853 13.5638C15.2796 13.9216 14.6067 14.1245 13.9105 14.1245C13.3581 14.1245 12.8228 14.0018 12.3213 13.7585L5.41255 10.4066C4.53425 9.97912 3.87621 9.23654 3.5566 8.31384C3.23699 7.39138 3.29419 6.40095 3.72168 5.5229C4.32904 4.27231 5.62203 3.464 7.01637 3.464C7.56879 3.464 8.10414 3.58668 8.60563 3.83002L15.5124 7.18166C17.3259 8.06222 18.0855 10.2523 17.2052 12.0656Z' fill='%23ED1D24'/%3E%3C/svg%3E%0A"/>

        <div className={audiostyles.textSide}>

            <h3 className={audiostyles.text}>
                A whole new experience to audio chats <img className={audiostyles.emoji} width={50} src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/126/speech-balloon_1f4ac.png"/>.
            </h3>




        </div>
        <div className={downloadappstyles.appstoreSectionMobile}  ref={containerMobile}>

            <img className={audiostyles.store1Mobile} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1643028977/app_store_icon_1_b9wczf.png"/>


            <img className={audiostyles.storeMobile} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1643029047/google_play_store_icon_1_htdh3f.png"/>

        </div>



        <img ref={bigImageMobile} className={downloadappstyles.bigImageMobile} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1643062409/Rectangle_3_or0x99.png" />


    </div>
</div>

</div>
    )
}
