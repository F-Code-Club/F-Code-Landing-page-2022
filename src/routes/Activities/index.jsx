import AOS from 'aos';

import HightLight from '../Home/components/HightLight/HightLight';
import Hero from './components/Hero';
import RODE from './components/RODE';
import Teambuilding from './components/Teambuilding';
import Telescope from './components/Telescope';

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

const Activities = () => {
    return (
        <>
            <Hero />
            <Telescope />
            <HightLight anniversary />
            <Teambuilding />
            <RODE />
            <h1 style={{ textAlign: 'center' }}>And more activities are waiting for you!!!</h1>
        </>
    );
};

export default Activities;
