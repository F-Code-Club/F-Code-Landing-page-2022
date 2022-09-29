import Button from '../Button';
import * as Styled from './Timeline.styled';

const CARD_LIST = [
    {
        heading: 'Form registration',
        subheading: 'Time: 21/9 - 24/10',
        content: 'Click on the Register button to accept the challenges from F-Code!',
        buttonTitle: 'Register Now!',
    },
    {
        heading: 'First Challenge',
        subheading: 'Time: 21/9 - 24/10',
        content: 'Click on the Register button to accept the challenges from F-Code!',
        buttonTitle: 'See Detail',
    },
    {
        heading: 'Second Challenge',
        subheading: 'Time: 21/9 - 24/10',
        content: 'Click on the Register button to accept the challenges from F-Code!',
        status: 'disabled',
    },
    {
        heading: 'Third Challenge',
        subheading: 'Time: 21/9 - 24/10',
        content: 'Click on the Register button to accept the challenges from F-Code!',
        status: 'disabled',
    },
];

const Timeline = () => {
    return (
        <Styled.Wrapper>
            <Styled.Container>
                <Styled.Heading>
                    <h1>Timeline</h1>
                    <p>To become an official member of F-Code, you need to go through 4 stages.</p>
                </Styled.Heading>
                <Styled.CardContainer>
                    {CARD_LIST.map((item) => (
                        <Styled.Card key={item.heading} status={item.status}>
                            <Styled.Left>
                                <Styled.CardHeading>{item.heading}</Styled.CardHeading>
                                <Styled.CardSubheading>{item.subheading}</Styled.CardSubheading>
                                <p>{item.content}</p>
                            </Styled.Left>
                            {!item.status && (
                                <Styled.Right>
                                    <Button>{item.buttonTitle}</Button>
                                </Styled.Right>
                            )}
                        </Styled.Card>
                    ))}
                </Styled.CardContainer>
            </Styled.Container>
        </Styled.Wrapper>
    );
};

Timeline.propTypes = {};

export default Timeline;
