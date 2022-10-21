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
    Description,
} from '../styled';
import { clubActiveFix } from './../../../../assets/images/highlight/index';

import 'react-multi-carousel/lib/styles.css';

const responsive = {
    desktop: {
        breakpoint: {
            max: 3000,
            min: 1400,
        },
        items: 2,
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

const Slider = ({ anniversary }) => {
    return (
        <Activities>
            <ContentsContainer>
                <SliderContent>
                    <MiniTitle data-aos="fade-up">
                        {anniversary ? 'Anniversary' : 'Activites'}
                    </MiniTitle>
                    <SubTitle data-aos="fade-up">
                        {anniversary ? '8-year Anniversary of F-Code' : 'Hightlights Of F-Code'}
                    </SubTitle>
                    {anniversary && (
                        <Description>
                            <span>F-Code</span>, established in 2014, is the first academic club of
                            <strong> FPT University</strong> at <strong>Ho Chi Minh City</strong>.
                            With the initial aim of creating a community for Software Engineering
                            major’s students.
                        </Description>
                    )}
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
