import { ReactComponent as Ellipse19 } from '../../../assets/registration/Ellipse 19.svg';
import { ReactComponent as Ellipse20 } from '../../../assets/registration/Ellipse 20.svg';
import { ReactComponent as Ellipse21 } from '../../../assets/registration/Ellipse 21.svg';
import CircleBlur from './Graphic/CircleBlur';

import { Box } from '@mui/material';

const RightContent = () => {
    return (
        <Box sx={{ width: '100vw', height: '100vh', backgroundColor: 'red', position: 'relative' }}>
            <Box sx={{ position: 'absolute', left: 134 }}>
                <CircleBlur width="100px" height="100px"></CircleBlur>
            </Box>
            <Box sx={{ position: 'absolute', left: 141, top: 17 }}>
                <Ellipse19 />
            </Box>
            <Box sx={{ position: 'absolute', left: 31, top: 278 }}>
                <Ellipse20 />
            </Box>
            <Box sx={{ position: 'absolute', left: 256, top: 187 }}>
                <Ellipse21 />
            </Box>
        </Box>
    );
};

export default RightContent;
