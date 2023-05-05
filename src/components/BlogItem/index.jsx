import avatar from '../../assets/avatar.png';
import fallback from '../../assets/fallback.png';
import * as St from './BlogItem.styled';

const BlogItem = ({ blog, genre }) => {
    return (
        <St.RelatedTopic key={blog.id} to={`/blog/${blog.id}`}>
            <img
                src={blog.imageUrl ? blog.imageUrl : fallback}
                alt={blog.title}
                onError={({ currentTarget }) => {
                    currentTarget.onerror = null; // prevents looping
                    currentTarget.src = fallback;
                }}
            />
            <div>
                <span>{blog.genre ? blog.genre : genre}</span> • <span>{blog.updatedTime}</span>
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
    );
};

export default BlogItem;
