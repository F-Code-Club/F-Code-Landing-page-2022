import { Link } from 'react-router-dom';
import { down } from 'styled-breakpoints';
import styled from 'styled-components';

export const RelatedTopic = styled(Link)`
    display: flex;
    margin-top: 60px;
    color: #1b1b1b;

    & > img {
        width: 300px;
        height: 200px;
        border-radius: 10px;
        margin-right: 30px;

        ${down('sm')} {
            margin: auto;
        }
    }

    h2 {
        font-family: 'Inter';
        font-weight: 900;
        font-size: 26px;
        line-height: 120%;
        color: #1b1b1b;
        margin: 5px 0 10px 0;
    }

    p {
        font-family: 'Inter';
        font-size: 16px;
        line-height: 150%;
        margin-bottom: 24px;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        word-wrap: break-word;
    }

    .author {
        display: flex;
        align-items: center;

        img {
            width: 30px;
            height: 30px;
            border-radius: 20px;
            margin-right: 10px;
        }
    }

    ${down('sm')} {
        flex-direction: column;
    }
`;
