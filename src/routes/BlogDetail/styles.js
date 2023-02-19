import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 800px;

    & > * {
        margin-bottom: 20px;
    }
`;

export const Genre = styled.p`
    font-weight: 600;
    font-size: 14px;
`;

export const Title = styled.h1`
    font-family: 'Inter';
    font-weight: 900;
    font-size: 60px;
    line-height: 65px;
    color: #1b1b1b;
`;

export const Description = styled.p`
    font-family: 'Inter';
    font-weight: 500;
    font-size: 14px;
    line-height: 120%;
    color: rgba(0, 0, 0, 0.38);
`;

export const Author = styled.div`
    display: flex;
    align-items: center;

    img {
        width: 40px;
        height: 40px;
        margin-right: 10px;
    }

    h4 {
        font-weight: 600;
        color: #1b1b1b;
    }
`;

export const Content = styled.div`
    margin-top: 50px;

    & span[data-offset-key] {
        background-color: transparent !important;
    }

    figure {
        display: flex;
        justify-content: center;

        img {
            max-width: 800px;
            object-fit: contain;
            border-radius: 5px;
        }
    }
`;

export const GenreTypes = styled.div`
    margin-top: 30px;
    display: flex;

    div {
        padding: 3px 11px;
        background: rgba(171, 171, 171, 0.38);
        border-radius: 5px;
    }
`;

export const RelatedTopics = styled.div`
    margin-top: 30px;

    h2 {
        font-family: 'GT Walsheim Pro Black';
        font-weight: 700;
        font-size: 25px;
        line-height: 120%;
        color: #1b1b1b;
    }
`;
