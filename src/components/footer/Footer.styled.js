import { down } from 'styled-breakpoints';
import styled from 'styled-components';

export const Wrapper = styled.footer`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 64px 0;
`;

export const Info = styled.div`
    display: flex;
    align-items: center;

    ${down('sm')} {
        flex-direction: column;
    }
`;
export const Icon = styled.img`
    width: 100px;
    height: 100px;
`;
export const LogoTitle = styled.p`
    font-weight: 700;
    font-size: 24px;
    line-height: 150%;
    /* identical to box height, or 36px */

    /* gray/900 */

    color: #111928;
`;

export const Copyright = styled.div`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    /* or 24px */

    text-align: center;

    /* gray/500 */

    color: #6b7280;

    & a {
        color: #6b7280;
    }
`;

export const SocialLinks = styled.div`
    margin-top: 20px;
    width: 140px;
    display: flex;
    justify-content: space-between;

    & a {
        color: #9ca3af;
    }

    & svg {
        width: 20px;
        height: 20px;
    }
`;
