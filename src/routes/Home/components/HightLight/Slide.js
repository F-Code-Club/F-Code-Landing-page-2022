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
    TitleContainer,
    Description,
} from '../styled';
import anniversary1 from './../../../../assets/images/anniversary/anniversary1.jpg';
import anniversary2 from './../../../../assets/images/anniversary/anniversary2.jpg';
import anniversary3 from './../../../../assets/images/anniversary/anniversary3.jpg';
import anniversary4 from './../../../../assets/images/anniversary/anniversary4.jpg';
import anniversary5 from './../../../../assets/images/anniversary/anniversary5.jpg';
import anniversary6 from './../../../../assets/images/anniversary/anniversary6.jpg';
import anniversary7 from './../../../../assets/images/anniversary/anniversary7.jpg';
import anniversary8 from './../../../../assets/images/anniversary/anniversary8.jpg';
import anniversary9 from './../../../../assets/images/anniversary/anniversary9.jpg';
import { clubActiveFix } from './../../../../assets/images/highlight/index';

import 'react-multi-carousel/lib/styles.css';

const ANIVERSARY_IMAGES = [
    anniversary1,
    anniversary2,
    anniversary3,
    anniversary4,
    anniversary5,
    anniversary6,
    anniversary7,
    anniversary8,
    anniversary9,
];

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
    const images = anniversary ? ANIVERSARY_IMAGES : clubActiveFix;

    return (
        <Activities>
            <ContentsContainer>
                <SliderContent>
                    <TitleContainer>
                        <MiniTitle data-aos="fade-up">Activites</MiniTitle>
                        <SubTitle data-aos="fade-up">Hightlights Of F-Code</SubTitle>
                    </TitleContainer>
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
                            {images.map((item, index) => {
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
