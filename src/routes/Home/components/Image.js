import styled from 'styled-components';

const Image = ({ url, alt }) => (
    <Img
        draggable={false}
        style={{ width: '100%', height: '100%', position: 'relative' }}
        src={url}
        alt={alt}
    />
);

export default Image;
const Img = styled.img`
    width: calc((90vw) / 3) !important;
    border-radius: 15px;
    padding: 8px;
`;
