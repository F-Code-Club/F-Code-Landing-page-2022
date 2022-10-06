import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 0px;
    gap: 10px;

    height: 1204px;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 96px;

    width: 1100px;
    height: 1104px;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
`;

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 16px;

    height: 88px;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
`;

export const Heading = styled.h1`
    font-family: 'GT Walsheim Pro Black';
    font-weight: 800;
    font-size: 36px;
    line-height: 125%;
    /* identical to box height, or 45px */

    display: flex;
    align-items: center;
    text-align: center;

    /* Black/400 */

    color: #1b1b1b;
`;

export const Subheading = styled.h1`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 150%;
    /* identical to box height, or 27px */

    /* gray/500 */

    color: #6b7280;
`;

export const CardContainer = styled.div`
    width: 806px;
    height: 920px;

    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;
`;

export const Card = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 30px 40px;
    gap: 10px;

    width: 800px;
    height: 200px;
    left: 153px;
    top: 184px;

    /* glassmorphism */

    background: linear-gradient(152.97deg, rgba(105, 105, 105, 0.2) 0%, rgba(21, 21, 21, 0) 100%);
    border-radius: 16px;
    transition: all 0.4s ease-in-out 0s;

    &:not(:last-child) {
        margin-bottom: 40px;
    }

    ${(props) => props.status === 'disabled' && 'filter: grayscale(100%); opacity: 0.75'};

    &:hover {
        transform: translateX(14px);
    }
`;

export const Left = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0px;
    gap: 5px;

    width: 537px;
    height: 137px;
`;
export const Right = styled.div``;

export const CardHeading = styled.div`
    font-style: normal;
    font-weight: 800;
    font-size: 26px;
    line-height: 150%;
    /* identical to box height, or 39px */

    /* Green/500 */

    color: #00c464;
`;

export const CardSubheading = styled.p`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 150%;
`;