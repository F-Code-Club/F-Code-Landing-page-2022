import SimpleAccordion from './components/Accordion';
import More from './components/More';
import { Container, Hero } from './styled';

function Qna() {
    return (
        <Container>
            <Hero>Frequently asked questions</Hero>
            <SimpleAccordion />
        </Container>
    );
    // <More />
}

export default Qna;
