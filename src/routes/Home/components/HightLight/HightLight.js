import { VericalContainer } from '../styled';
import Slide from './Slide';

import 'react-multi-carousel/lib/styles.css';

function HightLight({ anniversary }) {
    return (
        <VericalContainer>
            <Slide anniversary={anniversary} />
        </VericalContainer>
    );
}

export default HightLight;
