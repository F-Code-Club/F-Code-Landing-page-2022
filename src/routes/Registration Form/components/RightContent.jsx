import ImgRegister1 from '../../../assets/FormRegistration/2024_FormRegis1.jpg';
import ImgRegister2 from '../../../assets/FormRegistration/2024_FormRegis2.jpg';
import ImgRegister3 from '../../../assets/FormRegistration/2024_FormRegis3.jpg';
import Glass from '../../Activities/components/Glass/index';
import * as Styled from '../../Activities/components/Hero/Hero.styled';
import SlideShow from './SlideShow';

const IMG_LIST = [ImgRegister1, ImgRegister2, ImgRegister3];

const RightContent = () => {
    return (
        <Styled.RightContent data-aos="fade-left">
            <Styled.GlassTop>
                <Glass length="100px" />
            </Styled.GlassTop>
            <Styled.GlassLeft style={{ left: '50px' }}>
                <Glass length="60px" />
            </Styled.GlassLeft>
            <Styled.TopImg style={{ width: '320px', height: '320px' }} img={IMG_LIST[2]} />
            <Styled.LeftImg
                style={{ width: '230px', height: '230px', left: '0px' }}
                img={IMG_LIST[1]}
            />
            <Styled.RightImg style={{ width: '270px', height: '270px' }} img={IMG_LIST[0]} />
        </Styled.RightContent>

        // <Styled.GlassRight>
        //     <Glass length="150px" />
        //     // </Styled.GlassRight>
        //     <Styled.GlassCenter>
        //     <Glass length="135px" />
        // </Styled.GlassCenter>
        // <SlideShow />
    );
};

export default RightContent;
