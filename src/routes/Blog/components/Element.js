import { useEffect, useState } from 'react';

import fallback from '../../../assets/fallback.png';
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
        <StyleLink to={`/blog/${blog.id}`}>
            <Container>
                <Img
                    data-aos="fade-up-right"
                    src={blog.imageUrl ? blog.imageUrl : fallback}
                    onError={({ currentTarget }) => {
                        currentTarget.onerror = null; // prevents looping
                        currentTarget.src = fallback;
                    }}
                />
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
