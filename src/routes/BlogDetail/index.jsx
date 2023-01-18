import { useEffect, useState } from 'react';

import { Editor } from 'react-draft-wysiwyg';
import { useParams } from 'react-router';

import avatar from '../../assets/avatar.png';
import fallback from '../../assets/fallback.png';
import { HTMLToEditorState } from '../../utils/DraftJSConversion';
import { getArticleByID, getArticlesByGenreID, getGenreByID } from '../../utils/blogAPI';
import * as St from './styles';

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
                .filter((item) => item.id !== Number.parseInt(id))
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
                    <St.RelatedTopic key={blog.id} to={`/blog/${blog.id}`}>
                        <img
                            src={blog.imageUrl}
                            alt={blog.title}
                            onError={({ currentTarget }) => {
                                currentTarget.onerror = null; // prevents looping
                                currentTarget.src = fallback;
                            }}
                        />
                        <div>
                            <span>{genre}</span> • <span>{blog.updatedTime}</span>
                            <h2>{blog.title}</h2>
                            <p>{blog.description}</p>
                            <div className="author">
                                <img
                                    src=""
                                    alt=""
                                    onError={({ currentTarget }) => {
                                        currentTarget.onerror = null; // prevents looping
                                        currentTarget.src = avatar;
                                    }}
                                />
                                <span>{blog.author}</span>
                            </div>
                        </div>
                    </St.RelatedTopic>
                ))}
            </St.RelatedTopics>
        </St.Wrapper>
    );
};

export default BlogDetail;
