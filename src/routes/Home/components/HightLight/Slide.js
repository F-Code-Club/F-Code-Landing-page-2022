import Carousel from 'react-multi-carousel';

import {
    Image,
    LeftArrow,
    RightArrow,
    SliderContainer,
    Activities,
    SubTitle,
    SliderContent,
    ContentsContainer,
    MiniTitle,
} from '../styled';
import { clubActiveFix } from './../../../../assets/images/highlight/index';

import 'react-multi-carousel/lib/styles.css';

const responsive = {
    desktop: {
        breakpoint: {
            max: 3000,
            min: 1400,
        },
        items: 3,
    },
    mobile: {
        breakpoint: {
            max: 1000,
            min: 0,
        },
        items: 1,
    },
    tablet: {
        breakpoint: {
            max: 1440,
            min: 1000,
        },
        items: 2,
    },
};

const Slider = () => {
    return (
        <Activities>
            <ContentsContainer>
                <SliderContent>
                    <MiniTitle data-aos="fade-up">Activites</MiniTitle>
                    <SubTitle data-aos="fade-up">Hightlights Of F-Code</SubTitle>
                    <SliderContainer data-aos="flip-up" className="hi">
                        <Carousel
                            itemClass="carousel-item"
                            additionalTransfrom={0}
                            arrows
                            autoPlay
                            autoPlaySpeed={2500}
                            centerMode={false}
                            customLeftArrow={<LeftArrow />}
                            customRightArrow={<RightArrow />}
                            focusOnSelect={false}
                            infinite
                            keyBoardControl
                            minimumTouchDrag={80}
                            renderButtonGroupOutside={false}
                            renderDotsOutside={false}
                            responsive={responsive}
                            showDots={false}
                            slidesToSlide={1}
                        >
                            {clubActiveFix.map((item, index) => {
                                return <Image key={index} src={item}></Image>;
                            })}
                        </Carousel>
                    </SliderContainer>
                </SliderContent>
            </ContentsContainer>
        </Activities>
    );
};
export default Slider;
