import { Box } from '@mui/material';

const CircleBlur = ({ width, height }) => {
    return (
        <Box
            sx={{
                width: `${width}`,
                height: `${height}`,
                borderRadius: '50%',
                position: 'absolute',
                background:
                    'linear-gradient(152.97deg, rgba(21, 21, 21, 0.08) 0%, rgba(21, 21, 21, 0) 100%)',
                backdropFilter: 'blur(5px)',
            }}
        />
    );
};

export default CircleBlur;
