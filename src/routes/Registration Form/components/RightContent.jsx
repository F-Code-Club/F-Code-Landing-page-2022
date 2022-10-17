import Glass from '../../Activities/components/Glass/index';
import * as Styled from '../../Activities/components/Hero/Hero.styled';

const IMG_LIST = [
    'https://images.pexels.com/photos/2929245/pexels-photo-2929245.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1050604/pexels-photo-1050604.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/267961/pexels-photo-267961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
];

const RightContent = () => {
    return (
        <Styled.RightContent data-aos="fade-left">
            <Styled.GlassTop>
                <Glass length="100px" />
            </Styled.GlassTop>
            <Styled.GlassLeft>
                <Glass length="50px" />
            </Styled.GlassLeft>
            <Styled.GlassCenter>
                <Glass length="135px" />
            </Styled.GlassCenter>
            <Styled.GlassRight>
                <Glass length="150px" />
            </Styled.GlassRight>
            <Styled.TopImg img={IMG_LIST[0]} />
            <Styled.LeftImg img={IMG_LIST[1]} />
            <Styled.RightImg img={IMG_LIST[2]} />
        </Styled.RightContent>
    );
};

export default RightContent;
