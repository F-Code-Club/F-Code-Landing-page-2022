// import React from 'react';
import * as Styled from './Spirit.styled';

const CARD_LIST = [
    {
        icon: '',
        heading: 'Enthusiasm',
        content: 'Eager to join various activities, ready to dedicate to the club',
    },
    {
        icon: '',
        heading: 'Sharing',
        content: 'Eager to join various activities, ready to dedicate to the club',
    },
    {
        icon: '',
        heading: 'Respect',
        content: 'Eager to join various activities, ready to dedicate to the club',
    },
    {
        icon: '',
        heading: 'Responsibility',
        content: 'Eager to join various activities, ready to dedicate to the club',
    },
];

const Spirit = () => {
    return (
        <Styled.Wrapper>
            <Styled.Container>
                <Styled.Heading>F-Code Spirit</Styled.Heading>

                <Styled.SupportingText>
                    Members’ spirit plays an important role in building and sustaining a thriving
                    club.
                </Styled.SupportingText>

                <Styled.CardContainer>
                    {CARD_LIST.map((item) => (
                        <Styled.Card key={item.heading}>
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
