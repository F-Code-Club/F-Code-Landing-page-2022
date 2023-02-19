import { useEffect, useState } from 'react';

import { getGenreById } from '../../../utils/productAPI';
import {
    Container,
    Img,
    RightContent,
    Header,
    Category,
    Date,
    Title,
    Description,
    Author,
    Space,
    StyleLink,
} from './style';

import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';

function Element({ blog }) {
    const [genre, setGenre] = useState('');
    useEffect(() => {
        getGenre();
    }, []);
    const getGenre = async () => {
        const path = await getGenreById(blog.genreId);
        setGenre(path.data.data.name);
    };
    return (
        <StyleLink to={'/hi'}>
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
                        <Category>{genre}</Category>
                        <Space>
                            <HorizontalRuleIcon />
                        </Space>
                        <Date>{blog.createdTime}</Date>
                        <Author> by {blog.author}</Author>
                    </Header>

                    <Title>{blog.title}</Title>
                    <Description>{blog.description}</Description>
                </RightContent>
            </Container>
        </StyleLink>
    );
}

export default Element;
