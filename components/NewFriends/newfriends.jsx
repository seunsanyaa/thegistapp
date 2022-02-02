import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
// import styles from '../../styles/Home.module.css'
// import navstyles from './navbar.module.scss'
import newfriendsstyles from './newfriends.module.scss'


import {useEffect, useRef, useState} from "react";



export default function NewFriends( ) {

    return (

      <div className={newfriendsstyles.container}>

          {/*<img className={newfriendsstyles.circle} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1642896228/Group_1622_hmq5jd.png"/>*/}

          <div className={newfriendsstyles.circle} >

              <img className={newfriendsstyles.line1} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1643753520/Ellipse_164_1_mavkmw.png"/>

<img className={newfriendsstyles.line2} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1643753695/Ellipse_163_voqpkk.png"/>
<img className={newfriendsstyles.line3} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1643754367/Ellipse_162_2_wmkgl0.png"/>


              <img src="https://res.cloudinary.com/seunsanyaa/image/upload/v1643756741/Ellipse_161_co07bi.png" className={newfriendsstyles.line4}/>
              <img className={newfriendsstyles.blueImage} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1643757115/Ellipse_177_2_wmtwmf.png" />


              <div className={newfriendsstyles.newfriendsbg}>

                  <div>



                  <h3 className={newfriendsstyles.header}>
                      Make new friends
                  </h3>

                  <p className={newfriendsstyles.paragraph}>Searching for a potential match...</p>
                  </div>

              </div>
<img className={newfriendsstyles.afroguyImage} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1643754688/Ellipse_179_hrkeov.png"/>
        <img className={newfriendsstyles.afroladyImage} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1643755017/Ellipse_178_ga0o8a.png"/>

         <img className={newfriendsstyles.southAfrica} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1643755571/Ellipse_182_au1s63.png"/>


         <img className={newfriendsstyles.coverFace} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1643756159/Ellipse_181_n1anmh.png"/>

<img className={newfriendsstyles.sweater} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1643756490/Ellipse_180_k36b5j.png"/>
          </div>

          {/*<img className={newfriendsstyles.circleMobile} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1643063219/Group_1623_2_idcsdp.png"/>*/}


          <div className={newfriendsstyles.circleMobile}>



                  <img className={newfriendsstyles.line1Mobile} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1643792875/Ellipse_164_3_m4znnk.png"/>






                  <img className={newfriendsstyles.line2Mobile}  src="https://res.cloudinary.com/seunsanyaa/image/upload/v1643794470/Ellipse_163_2_nvt8z6.png"/>

<img className={newfriendsstyles.line3Mobile} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1643795682/Ellipse_162_4_corr1o.png"/>
<img className={newfriendsstyles.line4Mobile} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1643797405/Ellipse_161_3_y54o11.png"/>

              <div className={newfriendsstyles.newfriendsbgMobile}>

                  <div>



                      <h3 className={newfriendsstyles.header}>
                          Make new friends
                      </h3>

                      <p className={newfriendsstyles.paragraph}>Searching for a potential match...</p>
                  </div>

              </div>
          <img className={newfriendsstyles.afroguyImageMobile} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1643795743/Ellipse_179_1_vgy2e8.png"/>
          <img className={newfriendsstyles.sweaterMobile} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1643795813/Ellipse_180_2_dcobni.png"/>
          <img className={newfriendsstyles.coverFaceMobile} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1643796298/Ellipse_181_1_wj74mg.png"/>
          <img className={newfriendsstyles.southAfricaMobile} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1643796729/Ellipse_182_1_ein8su.png"/>
          <img className={newfriendsstyles.afroladyImageMobile} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1643797054/Ellipse_178_1_gashas.png"/>
          <img className={newfriendsstyles.blueImageMobile} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1643797982/Ellipse_177_3_bpokxf.png"/>

          </div>

      </div>


    )
}
