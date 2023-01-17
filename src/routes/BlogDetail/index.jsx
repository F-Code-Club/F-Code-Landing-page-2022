import { useEffect, useState } from 'react';

import { Editor } from 'react-draft-wysiwyg';
import { useParams } from 'react-router';

import { HTMLToEditorState } from '../../utils/DraftJSConversion';
import { getArticleByID, getGenreByID } from '../../utils/blogAPI';
import * as St from './styles';

const BlogDetail = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState({});
    const [relatedBlogs, setRelatedBlogs] = useState([...Array(5).keys()]);
    const [genre, setGenre] = useState('');

    useEffect(() => {
        (async () => {
            const { data } = await getArticleByID(id);
            setBlog(data.data);
        })();
    }, []);

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
                <img src="" alt="" />
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
                    <St.RelatedTopic key={blog} to="/blog/${blog}">
                        <img src="" alt="" />
                        <div>
                            <span>{genre}</span> • <span>December 12 2022</span>
                            <h2>Creating a custom right-click menu in React</h2>
                            <p>
                                Click on the Register button to accept the challenges from F-Code!
                            </p>
                            <div className="author">
                                <img src="" alt="" />
                                <span>Jane Dove</span>
                            </div>
                        </div>
                    </St.RelatedTopic>
                ))}
            </St.RelatedTopics>
        </St.Wrapper>
    );
};

export default BlogDetail;
