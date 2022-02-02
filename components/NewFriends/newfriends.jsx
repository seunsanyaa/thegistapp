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

          <img className={newfriendsstyles.circleMobile} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1643063219/Group_1623_2_idcsdp.png"/>


      </div>


    )
}
