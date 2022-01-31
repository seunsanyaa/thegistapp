import '../styles/globals.css'
import '../node_modules/uikit/dist/css/uikit.css'
import 'swiper/css';

// import LocomotiveScroll from 'locomotive-scroll';


// import 'locomotive-scroll/dist/locomotive-scroll.css'
// import $ from 'jquery'
// import 'owl.carousel/dist/assets/owl.carousel.css';

//
// import { useLocomotiveScroll } from 'react-locomotive-scroll'
function MyApp({ Component, pageProps }) {
  // const scroll = new LocomotiveScroll();
  //
  // const { scroll } = useLocomotiveScroll()
  return <Component {...pageProps} />
}

export default MyApp
