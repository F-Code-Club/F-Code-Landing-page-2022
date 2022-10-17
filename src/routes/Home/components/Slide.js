import Carousel from 'react-multi-carousel';

import { Wrapper, RightArrow, LeftArrow, Image } from './styled';

const ACTIVITIES_IMAGES = [
    'https://th.bing.com/th/id/OIP.wx5dUY2-gMwMvc80EJ9ESgHaFj?w=216&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7',
    'https://th.bing.com/th/id/OIP.nBBABfTYuzj2DrsaqZ7pJgHaHa?w=181&h=181&c=7&r=0&o=5&dpr=1.1&pid=1.7',
    'https://th.bing.com/th/id/OIP.wx5dUY2-gMwMvc80EJ9ESgHaFj?w=216&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7',
    'https://th.bing.com/th/id/OIP.wx5dUY2-gMwMvc80EJ9ESgHaFj?w=216&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7',
    'https://th.bing.com/th/id/OIP.wx5dUY2-gMwMvc80EJ9ESgHaFj?w=216&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7',
    'https://th.bing.com/th/id/OIP.wx5dUY2-gMwMvc80EJ9ESgHaFj?w=216&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7',
    'https://th.bing.com/th/id/OIP.wx5dUY2-gMwMvc80EJ9ESgHaFj?w=216&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7',
    'https://th.bing.com/th/id/OIP.wx5dUY2-gMwMvc80EJ9ESgHaFj?w=216&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7',
    'https://th.bing.com/th/id/OIP.wx5dUY2-gMwMvc80EJ9ESgHaFj?w=216&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7',
    'https://th.bing.com/th/id/OIP.wx5dUY2-gMwMvc80EJ9ESgHaFj?w=216&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7',
    'https://th.bing.com/th/id/OIP.wx5dUY2-gMwMvc80EJ9ESgHaFj?w=216&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7',
    'https://th.bing.com/th/id/OIP.wx5dUY2-gMwMvc80EJ9ESgHaFj?w=216&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7',
    'https://th.bing.com/th/id/OIP.wx5dUY2-gMwMvc80EJ9ESgHaFj?w=216&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7',
    'https://th.bing.com/th/id/OIP.wx5dUY2-gMwMvc80EJ9ESgHaFj?w=216&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7',
    'https://th.bing.com/th/id/OIP.wx5dUY2-gMwMvc80EJ9ESgHaFj?w=216&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7',
    'https://th.bing.com/th/id/OIP.wx5dUY2-gMwMvc80EJ9ESgHaFj?w=216&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7',
];

const ANNIVERSARY_IMAGES = [
    'https://th.bing.com/th/id/OIP.wx5dUY2-gMwMvc80EJ9ESgHaFj?w=216&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7',
    'https://th.bing.com/th/id/OIP.nBBABfTYuzj2DrsaqZ7pJgHaHa?w=181&h=181&c=7&r=0&o=5&dpr=1.1&pid=1.7',
    'https://th.bing.com/th/id/OIP.wx5dUY2-gMwMvc80EJ9ESgHaFj?w=216&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7',
    'https://th.bing.com/th/id/OIP.wx5dUY2-gMwMvc80EJ9ESgHaFj?w=216&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7',
    'https://th.bing.com/th/id/OIP.wx5dUY2-gMwMvc80EJ9ESgHaFj?w=216&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7',
    'https://th.bing.com/th/id/OIP.wx5dUY2-gMwMvc80EJ9ESgHaFj?w=216&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7',
    'https://th.bing.com/th/id/OIP.wx5dUY2-gMwMvc80EJ9ESgHaFj?w=216&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7',
    'https://th.bing.com/th/id/OIP.wx5dUY2-gMwMvc80EJ9ESgHaFj?w=216&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7',
    'https://th.bing.com/th/id/OIP.wx5dUY2-gMwMvc80EJ9ESgHaFj?w=216&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7',
    'https://th.bing.com/th/id/OIP.wx5dUY2-gMwMvc80EJ9ESgHaFj?w=216&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7',
    'https://th.bing.com/th/id/OIP.wx5dUY2-gMwMvc80EJ9ESgHaFj?w=216&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7',
    'https://th.bing.com/th/id/OIP.wx5dUY2-gMwMvc80EJ9ESgHaFj?w=216&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7',
    'https://th.bing.com/th/id/OIP.wx5dUY2-gMwMvc80EJ9ESgHaFj?w=216&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7',
    'https://th.bing.com/th/id/OIP.wx5dUY2-gMwMvc80EJ9ESgHaFj?w=216&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7',
    'https://th.bing.com/th/id/OIP.wx5dUY2-gMwMvc80EJ9ESgHaFj?w=216&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7',
    'https://th.bing.com/th/id/OIP.wx5dUY2-gMwMvc80EJ9ESgHaFj?w=216&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7',
];

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};
const Slide = ({ anniversary }) => {
    const images = anniversary ? ANNIVERSARY_IMAGES : ACTIVITIES_IMAGES;
    return (
        <Wrapper data-aos="fade-up">
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
            <Carousel
                customLeftArrow={<LeftArrow />}
                customRightArrow={<RightArrow />}
                autoPlay
                responsive={responsive}
                ssr
                className="slide"
                showDots={true}
                slidesToSlide={1}
                containerClass="container-with-dots"
                itemClass="image-item"
                deviceType={''}
                infinite
                keyBoardControl
                autoPlaySpeed={2500}
                centerMode={true}
            >
                {images.map((image) => {
                    return <Image key={image} url={image} alt={image} />;
                })}
            </Carousel>
        </Wrapper>
    );
};

export default Slide;
