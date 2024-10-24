import Slider from 'react-slick';

import ImgRegister3 from '../../../assets/FormRegistration/2024_FormRegis3.jpg';
import ImgRegister4 from '../../../assets/FormRegistration/2024_FormRegis4.jpg';
import ImgRegister1 from '../../../assets/FormRegistration/2024_FormRegis5.jpg';
import * as Styled from '../style';

const IMG_LIST = [ImgRegister1, ImgRegister3, ImgRegister4];

const SlideShow = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
    };

    return (
        <Styled.SliderWrapper data-aos="fade-left">
            <Slider {...settings}>
                {IMG_LIST.map((image, index) => (
                    <Styled.Slide key={index}>
                        <img
                            src={image}
                            alt={`Slide ${index + 1}`}
                            style={{
                                borderRadius: '10px',
                            }}
                        />
                    </Styled.Slide>
                ))}
            </Slider>
        </Styled.SliderWrapper>
    );
};

export default SlideShow;
