import AOS from 'aos';
import { Navigate, useNavigate, useLocation, useParams, useSearchParams } from 'react-router-dom';

import { toastError, toastSuccess } from '../../components/ToastNorification';
import AboutUs from './components/AboutUs/AboutUs';
import Hero from './components/Hero/Hero';
import HightLight from './components/HightLight/HightLight';
import Spirit from './components/Spirit';
import Timeline from './components/Timeline';

import 'aos/dist/aos.css';

AOS.init({
    // Global settings:
    disable: false,
    debounceDelay: 50, // the delay when resize windows
    throttleDelay: 0, // the delay when scrolling

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // the trigger point (px)
    delay: 0,
    duration: 1200, // values from 0 to 3000, with step 50ms
    easing: 'eas',
    once: false, // render one time or not
    mirror: false, // is animate out when scrolling past them
    anchorPlacement: 'top-bottom', // Which position that the element should be triggered
});
function Home() {
    // const navigate = useNavigate();

    return (
        <>
            <Hero />
            <AboutUs />
            <HightLight />
            <Spirit />
            <Timeline />
        </>
    );
}

export default Home;
