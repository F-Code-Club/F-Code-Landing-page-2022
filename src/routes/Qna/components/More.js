import { Container, Hero, Input, Demo, Question, Ans } from '../styled';

function More() {
    return (
        <Container>
            <Hero>You still have questions?</Hero>
            <Input>
                <input placeholder="Enter your question here"></input>
                <button>Send Question</button>
            </Input>
            <Demo>
                <Question>
                    Q: Lorem ipsum is placeholder text commonly used in the graphic, print, and
                    publishing industries for previewing layouts and visual mockups.
                </Question>
                <Ans>
                    A: Lorem ipsum is placeholder text commonly used in the graphic, print, and
                    publishing industries for previewing layouts and visual mockups.
                </Ans>
            </Demo>
            <Demo>
                <Question>
                    Q: Lorem ipsum is placeholder text commonly used in the graphic, print, and
                    publishing industries for previewing layouts and visual mockups.
                </Question>
                <Ans>
                    A: Lorem ipsum is placeholder text commonly used in the graphic, print, and
                    publishing industries for previewing layouts and visual mockups.
                </Ans>
            </Demo>
            <Demo>
                <Question>
                    Q: Lorem ipsum is placeholder text commonly used in the graphic, print, and
                    publishing industries for previewing layouts and visual mockups.
                </Question>
                <Ans>
                    A: Lorem ipsum is placeholder text commonly used in the graphic, print, and
                    publishing industries for previewing layouts and visual mockups.
                </Ans>
            </Demo>
        </Container>
    );
}

export default More;
