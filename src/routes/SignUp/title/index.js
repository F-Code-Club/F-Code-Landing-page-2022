import { Container, Item } from './styled';

function Title({ data }) {
    return (
        <Container>
            {data.map((item) => (
                <Item key={item.key}>{item.title}</Item>
            ))}
        </Container>
    );
}

export default Title;
