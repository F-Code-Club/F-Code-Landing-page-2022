import netcompany from '../../../assets/images/telescope/netcompany.jpg';
import poster from '../../../assets/images/telescope/poster.jpg';
import recap from '../../../assets/images/telescope/recap.jpg';
import Glass from '../../Activities/components/Glass/index';
import * as Styled from '../../Activities/components/Hero/Hero.styled';

const IMG_LIST = [recap, poster, netcompany];

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
