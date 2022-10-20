import Slider from 'react-slick';

import img from '../../../../assets/images/highlight/club-activity1.jpeg';
import * as Styled from './styled';

const Slide = ({ anniversary }) => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <Styled.Wrapper>
            <h4>{anniversary ? 'Anniversary' : 'Activites'}</h4>
            <h1>{anniversary ? '8-year Anniversary of F-Code' : 'Hightlights Of F-Code'}</h1>
            {anniversary && (
                <p>
                    <span>F-Code</span>, established in 2014, is the first academic club of
                    <strong> FPT University</strong> at <strong>Ho Chi Minh City</strong>. With the
                    initial <br />
                    aim of creating a community for Software Engineering major’s students.
                </p>
            )}
            <Slider {...settings}>
                <img src={img} alt="img" />
                <img src={img} alt="img" />
                <img src={img} alt="img" />
                <img src={img} alt="img" />
                <img src={img} alt="img" />
            </Slider>
        </Styled.Wrapper>
    );
};

export default Slide;
