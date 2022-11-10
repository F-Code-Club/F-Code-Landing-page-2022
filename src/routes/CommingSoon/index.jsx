import { down } from 'styled-breakpoints';
import styled from 'styled-components';

const CommingSoon = () => {
    const styles2 = { color: '#6B7280', marginBottom: '120px' };
    return (
        <div style={{ textAlign: 'center' }}>
            <Styles>Ending Registration</Styles>
            <p style={styles2}>Thanks for Joining</p>
        </div>
    );
};

export default CommingSoon;
export const Styles = styled.h1`
    margin-top: 120px;
    font-size: 40px;
    margin-bottom: 6px;
    ${down('sm')} {
        font-size: 40px;
    }
`;
