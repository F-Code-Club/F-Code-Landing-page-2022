import { Link } from 'react-router-dom';
import { down, up } from 'styled-breakpoints';
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    margin-bottom: 40px;
    cursor: pointer;
    ${down('lg')} {
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;
export const Header = styled.div`
    display: flex;
    align-items: center;
    ${down('lg')} {
        margin-top: 10px;
    }
    ${down('sm')} {
        flex-direction: column;
    }
`;
export const Img = styled.img`
    width: 320px;
    height: 200px;
    border-radius: 10px;
    margin-right: 30px;
    ${down('lg')} {
        width: 100%;
        height: 300px;
        object-fit: cover;
        margin: 0;
    }
    ${down('sm')} {
        width: 80%;
    }
`;
export const RightContent = styled.div`
    min-width: 510px;
    display: flex;
    flex-direction: column;

    ${down('lg')} {
        min-width: 480px;
        width: 100%;
        object-fit: cover;
        align-items: center;
    }
    ${down('sm')} {
        width: 80%;
        min-width: 310px;
    }
`;
export const Date = styled.div`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 150%;
`;
export const Category = styled.div`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 150%;
    text-transform: uppercase;
`;
export const Title = styled.div`
    font-family: 'GT Walsheim Pro';
    font-style: normal;
    font-weight: 800;
    font-size: 26px;
    line-height: 120%;
    margin: 5px 0 10px;
    max-width: 480px;
    ${down('lg')} {
        text-align: center;
    }
`;
export const Description = styled.div`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    margin-bottom: 10px;
    max-width: 480px;
    /* or 24px */
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3; /* number of lines to show */
    line-clamp: 3;
    -webkit-box-orient: vertical;
    ${down('lg')} {
        text-align: center;
    }
`;
export const Ava = styled.img`
    border-radius: 100%;
    width: 50px;
    object-fit: cover;
    height: 50px;
    margin-right: 20px;
`;

export const Author = styled.div`
    margin-left: 10px;
`;
export const Space = styled.div`
    margin: 0 10px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 150%;
    ${down('sm')} {
        display: none;
    }
`;
export const StyleLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;
