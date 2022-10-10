import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 96px 0px;
    gap: 10px;

    height: 595px;
    left: 0px;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 170px;

    min-width: 1100px;
    height: 403px;

    flex: none;
    order: 0;
    flex-grow: 0;
`;

export const Heading = styled.h1`
    font-family: 'GT Walsheim Pro Black';
    font-style: normal;
    font-weight: 800;
    font-size: 36px;
    line-height: 125%;
    display: flex;
    align-items: center;
`;

export const SupportingText = styled.p`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 150%;

    height: 33px;
    margin: 16px 0;

    color: #6b7280;
`;

export const CardContainer = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 30px 70px;
    gap: 16px;

    width: 1100px;
    height: 293px;

    /* Inside auto layout */

    flex: none;
    order: 2;
    flex-grow: 0;
`;

export const Card = styled.li`
    padding: 25px;
    gap: 15px;

    width: 200px;
    height: 233px;

    background: linear-gradient(152.97deg, rgba(105, 105, 105, 0.2) 0%, rgba(21, 21, 21, 0) 100%);

    backdrop-filter: blur(5px);

    border-radius: 12px;
    flex: none;
    order: 0;
    flex-grow: 0;
    list-style: none;
    transition: all 0.4s ease-in-out 0s;

    &:hover {
        transform: translateY(-12px);
    }
`;

export const Icon = styled.div`
    width: 42px;
    min-height: 42px;
    color: #fff;
    background: #00c464;
    display: block;
`;

export const CardHeading = styled.div`
    font-weight: 700;
    font-size: 22px;
    line-height: 25px;
    margin-top: 10px;

    /* Green/500 */

    color: #00c464;
`;

export const Separator = styled.div`
    width: 150px;
    height: 0px;
    margin-top: 15px;

    border: 1px solid rgba(171, 171, 171, 0.38);
`;
export const Content = styled.p`
    margin-top: 40px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
`;
