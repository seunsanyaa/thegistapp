import '../styles/globals.css'
import '../node_modules/uikit/dist/css/uikit.css'
import 'swiper/css';
import "locomotive-scroll/src/locomotive-scroll.scss"


function MyApp({ Component, pageProps }) {
  // const scroll = new LocomotiveScroll();
  //

  // const { scroll } = useLocomotiveScroll()
  return <Component {...pageProps} />
}

export default MyApp
