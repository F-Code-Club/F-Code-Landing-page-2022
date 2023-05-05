import { useEffect, useState } from 'react';

import { Editor } from 'react-draft-wysiwyg';
import { useParams } from 'react-router';

import avatar from '../../assets/avatar.png';
import BlogItem from '../../components/BlogItem';
import { HTMLToEditorState } from '../../utils/DraftJSConversion';
import { getArticleByID, getArticlesByGenreID, getGenreByID } from '../../utils/blogAPI';
import * as St from './styles';

import 'draft-js/dist/Draft.css';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const BlogDetail = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState({});
    const [relatedBlogs, setRelatedBlogs] = useState([]);
    const [genre, setGenre] = useState('');

    // getArticleByID
    useEffect(() => {
        (async () => {
            const { data } = await getArticleByID(id);
            setBlog(data.data);
        })();
    }, [id]);

    // getArticlesByGenreID
    useEffect(() => {
        (async () => {
            const { data } = await getArticlesByGenreID(blog?.genreId);
            const newData = data.data
                // .filter((item) => item.id !== Number.parseInt(id))
                .splice(0, 5);
            setRelatedBlogs(newData);
        })();
    }, [blog?.genreId]);

    // getGenreByID
    useEffect(() => {
        if (blog?.genreId) {
            (async () => {
                const { data } = await getGenreByID(blog?.genreId);
                setGenre(data.data.name);
            })();
        }
    }, [blog?.genreId]);

    return (
        <St.Wrapper>
            <St.Genre>{genre}</St.Genre>
            <St.Title>{blog.title}</St.Title>
            <St.Description>{blog.description}</St.Description>
            <St.Author>
                <img
                    src=""
                    alt=""
                    onError={({ currentTarget }) => {
                        currentTarget.onerror = null; // prevents looping
                        currentTarget.src = avatar;
                    }}
                />
                <div>
                    <h4>{blog.author}</h4>
                    <p>{blog.updatedTime}</p>
                </div>
            </St.Author>
            <St.Content>
                {blog.content && (
                    <Editor
                        readOnly="true"
                        editorState={HTMLToEditorState(blog.content)}
                        toolbarHidden={true}
                    />
                )}
            </St.Content>
            <St.GenreTypes>
                <div>{genre}</div>
            </St.GenreTypes>
            <St.RelatedTopics>
                <h2>Related Topics</h2>
                {relatedBlogs.map((blog) => (
                    <BlogItem blog={blog} key={blog.id} genre={genre} />
                ))}
            </St.RelatedTopics>
        </St.Wrapper>
    );
};

export default BlogDetail;
