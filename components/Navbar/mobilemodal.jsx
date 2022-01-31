// import Head from 'next/head'
// import Image from 'next/image'
// import Link from 'next/link'
// import styles from '../../styles/Home.module.css'
// import navstylemobile from './navbarmobile.module.scss'
//
//
// const linkedIn  =  <img className={navstylemobile.icons} width={36} src='https://res.cloudinary.com/seunsanyaa/image/upload/v1641305857/Group_52_z48o2r.png'/>
// const Instagram =  <img className={navstylemobile.icons} width={36} src='https://res.cloudinary.com/seunsanyaa/image/upload/v1641306171/instagram_wwwqqe.png'/>
// const Behance= <img className={navstylemobile.icons} width={36} src='https://res.cloudinary.com/seunsanyaa/image/upload/v1641306324/Group_51_mv43jn.png'/>
// const Dribble = <img className={navstylemobile.icons} width={36} src='https://res.cloudinary.com/seunsanyaa/image/upload/v1641306376/dribbble_ggl4fv.png'/>
//
//
// export default function NavBarModal( ) {
//
//     return (
//
//         <div className={navstylemobile.nav}>
//
//             <div className={styles}>
//
//
//                 <button className={navstylemobile.cancel} onClick={() => setShowModal(false)}>
//              <img src="data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16 3C8.832 3 3 8.832 3 16C3 23.168 8.832 29 16 29C23.168 29 29 23.168 29 16C29 8.832 23.168 3 16 3ZM16 5C22.087 5 27 9.913 27 16C27 22.087 22.087 27 16 27C9.913 27 5 22.087 5 16C5 9.913 9.913 5 16 5ZM12.22 10.78L10.78 12.22L14.564 16L10.782 19.78L12.222 21.22L16 17.437L19.78 21.217L21.22 19.78L17.437 16L21.217 12.22L19.78 10.78L16 14.564L12.22 10.782V10.78Z' fill='white'/%3E%3C/svg%3E%0A"/>
//                 </button>
//
//                 <div className={navstylemobile.NavbarContainer}>
//
//
//
//
//
//                         <div className={navstylemobile.resumeAndContact}>
//
//
//
//                             <Link href="/" >
//
//                                 <a className={navstylemobile.menuLinkContent} >  Resume  </a>
//
//
//                             </Link>
//
//
//                             <Link href="mailto:eni.ajibode@gmail.com" className={navstylemobile.link}>
//
//                                 <a className={navstylemobile.menuLinkContent} >  Contact me </a>
//
//
//                             </Link>
//
//
//                         </div>
//
//                         <div className={navstylemobile.socials}>
//
//
//                             <Link href='https://www.linkedin.com/in/eniolaajibode/' className={navstylemobile.link}>
//                                 <a > {linkedIn} </a>
//
//                             </Link>
//
//
//                             <Link href='https://www.instagram.com/ui.eniola/' className={navstylemobile.link}>
//                                 <a className={navstylemobile.link} > {Instagram} </a>
//
//                             </Link>
//                             <Link href='https://www.behance.net/eniolaajibode1' className={navstylemobile.link}>
//                                 <a className={navstylemobile.link}> {Behance} </a>
//
//                             </Link>
//                             <Link href='https://dribbble.com/Ajibode' className={navstylemobile.link}>
//                                 <a className={navstylemobile.link}> {Dribble} </a>
//
//                             </Link>
//
//
//
//
//
//
//                     </div>
//
//
//                 </div>
//             </div>
//         </div>
//     )
// }
