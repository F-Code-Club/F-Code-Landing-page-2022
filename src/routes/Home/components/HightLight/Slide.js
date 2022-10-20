import React from 'react';

import Slider from 'react-slick';

import img from '../../../../assets/images/highlight/club-activity1.jpeg';

export default class Slide extends React.Component {
    render() {
        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            autoplay: true,
            slidesToShow: 3,
            slidesToScroll: 2,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
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
                        initialSlide: 1,
                    },
                },
            ],
        };
        return (
            <div>
                <Slider {...settings}>
                    <div>
                        <img src={img} alt="img" />
                    </div>
                    <div>
                        <img src={img} alt="img" />
                    </div>
                    <div>
                        <img src={img} alt="img" />
                    </div>
                    <div>
                        <img src={img} alt="img" />
                    </div>
                    <div>
                        <img src={img} alt="img" />
                    </div>
                    <div>
                        <img src={img} alt="img" />
                    </div>
                </Slider>
            </div>
        );
    }
}
