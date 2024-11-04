import { down } from 'styled-breakpoints';
import styled from 'styled-components';

const PageComingSoon = () => {
    const styles2 = { color: '#6B7280', marginBottom: '120px' };
    return (
        <div style={{ textAlign: 'center' }}>
            <Styles>Coming Soon</Styles>
            <p style={styles2}>Thanks for Joining</p>
        </div>
    );
};

export default PageComingSoon;
export const Styles = styled.h1`
    margin-top: 120px;
    font-size: 40px;
    margin-bottom: 6px;
    ${down('sm')} {
        font-size: 40px;
    }
`;
