import Hero from './components/Hero';
import RODE from './components/RODE';
import Teambuilding from './components/Teambuilding';
import Telescope from './components/Telescope';

const Activities = () => {
    return (
        <>
            <Hero />
            <Telescope />
            <Teambuilding />
            <RODE />
            <h1 style={{ textAlign: 'center' }}>And more activities are waiting for you!!!</h1>
        </>
    );
};

export default Activities;
