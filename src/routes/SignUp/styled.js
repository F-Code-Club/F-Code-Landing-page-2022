import styled from 'styled-components';

export const Container = styled.section`
    max-width: 927px;
    width: 100%;
    margin-top: 120px;
`;
export const Hero = styled.h1`
    text-align: center;
    font-family: 'GT Walsheim Pro Black';
    font-style: normal;
    font-weight: 900;
    font-size: 60px;
    line-height: 65px;

    color: #1b1b1b;
    span {
        font-family: 'GT Walsheim Pro Black';
        color: #45ce7c;
    }
    margin-bottom: 24px;
`;
export const Description = styled.h5`
    font-family: 'GT Walsheim Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    margin-bottom: 48px;
    text-align: center;
    color: #6b7280;
    span {
        font-family: 'GT Walsheim Pro';
        color: #45ce7c;
    }
`;
export const Step = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const Stage = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: linear-gradient(153.18deg, rgba(56, 255, 76, 0.2) 0%, rgba(81, 223, 95, 0) 167.08%);
    backdrop-filter: blur(5px);
    color: #45ce7c;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 12px;
`;
export const Bar = styled.div`
    width: 90%;
    height: 2px;
    background: rgba(171, 171, 171, 0.38);
`;
export const Box = styled.div`
    width: 40px;
`;
export const Name = styled.div`
    max-width: 150px;
    text-align: center;
    font-family: 'GT Walsheim Pro';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: #00d17d;
`;
export const NameContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`;

export const Button = styled.a`
    background: linear-gradient(152.97deg, rgba(105, 105, 105, 0.2) 0%, rgba(21, 21, 21, 0) 100%);
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 20px;
    width: 220px;
    height: 48px;
    border: 0;
    margin-top: 24px;
    cursor: pointer;
    box-shadow: 4px 4px 2px #aaaaaa;
    transition: 0.3s ease all;
    &:hover {
        transform: translateY(-10px);
    }
`;
export const Img = styled.img`
    width: 30px;
    background: white;
    border-radius: 50%;
    margin-right: 12px;
`;
export const Google = styled.div`
    font-family: 'Inter';
    font-style: normal;
    // font-weight: 600;
    tex-decoration: none;
    color: darkblue;
    font-size: 14px;
    line-height: 150%;
`;
export const GoogleContainer = styled.div`
    // margin-top: 40px;
    width: 100%;
    display: flex;
    justify-content: center;
`;
export const ButtonLogOut = styled(Button)`
    background: #e97777;
    color: white;
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 20px;
    width: 140px;
    height: 48px;
    border: 0;
    margin-top: 24px;
    cursor: pointer;
    box-shadow: 4px 4px 2px #aaaaaa;
    transition: 0.3s ease all;
    &:hover {
        transform: translateY(-10px);
    }
`;
