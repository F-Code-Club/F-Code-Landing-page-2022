import './App.css';
import AboutUs from './components/AboutUs';
import Hero from './components/Hero';
import HightLight from './components/HightLight';
import Spirit from './components/Spirit';
import Timeline from './components/Timeline';

function Home() {
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
