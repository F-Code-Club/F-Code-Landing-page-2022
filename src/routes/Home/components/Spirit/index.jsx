// import React from 'react';
import { BsPeopleFill } from 'react-icons/bs';
import { FaFire, FaBookReader, FaHandsHelping } from 'react-icons/fa';

import * as Styled from './Spirit.styled';

const CARD_LIST = [
    {
        icon: <FaFire size="42" />,
        heading: 'Enthusiasm',
        content: 'Eager to join various activities, ready to dedicate to the club',
    },
    {
        icon: <FaBookReader size="42" />,
        heading: 'Sharing',
        content: 'Be open-minded and ready to share knowledge',
    },
    {
        icon: <FaHandsHelping size="42" />,
        heading: 'Respect',
        content: 'Ready to help other members and show them respect',
    },
    {
        icon: <BsPeopleFill size="42" />,
        heading: 'Responsibility',
        content: 'Be responsible, patient and dare to challenge yourself',
    },
];

const Spirit = () => {
    return (
        <Styled.Wrapper>
            <Styled.Container>
                <Styled.Heading data-aos="fade-up">F-Code Spirit</Styled.Heading>

                <Styled.SupportingText data-aos="fade-up">
                    Members’ spirit plays an important role in building and sustaining a thriving
                    club.
                </Styled.SupportingText>

                <Styled.CardContainer>
                    {CARD_LIST.map((item, idx) => (
                        <Styled.Card
                            key={item.heading}
                            data-aos="flip-right"
                            data-aos-delay={0 + idx * 100}
                            data-aos-duration={600}
                        >
                            <Styled.Icon>{item.icon}</Styled.Icon>
                            <Styled.CardHeading>{item.heading}</Styled.CardHeading>

                            <Styled.Separator />

                            <Styled.Content>{item.content}</Styled.Content>
                        </Styled.Card>
                    ))}
                </Styled.CardContainer>
            </Styled.Container>
        </Styled.Wrapper>
    );
};

Spirit.propTypes = {};

export default Spirit;
