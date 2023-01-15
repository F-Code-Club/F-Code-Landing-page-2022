import {
    Container,
    Img,
    RightContent,
    Header,
    Category,
    Date,
    Title,
    Description,
    AuthorWrapper,
    Author,
    Ava,
    Space,
} from './style';

function Element({ blog }) {
    return (
        <Container>
            <Img
                data-aos="fade-up-right"
                src={
                    blog.imageUrl ||
                    'https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/320350910_541602290953750_2748185547163871846_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=BxNV1B94zkcAX_J6ubS&tn=1HBnLczPW52L_h4j&_nc_ht=scontent.fdad2-1.fna&oh=00_AfDphRWVePqIZztsJ4aBMEqV9j79j1jR3nGIK3eh6xVyLQ&oe=63C60F7F'
                }
            ></Img>
            <RightContent data-aos="fade-up-left">
                <Header>
                    <Category>CODING - TUTORIAL</Category>
                    <Space>.</Space>
                    <Date>{blog.createdTime}</Date>
                    <Author> by {blog.author}</Author>
                </Header>

                <Title>{blog.title}</Title>
                <Description>{blog.description}</Description>
            </RightContent>
        </Container>
    );
}

export default Element;
