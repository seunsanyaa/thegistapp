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

          <img className={newfriendsstyles.circle} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1642896228/Group_1622_hmq5jd.png"/>
<img className={newfriendsstyles.circleMobile} src="https://res.cloudinary.com/seunsanyaa/image/upload/v1643063219/Group_1623_2_idcsdp.png"/>
      </div>


    )
}
