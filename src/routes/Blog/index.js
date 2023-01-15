import { useEffect, useState } from 'react';

import AOS from 'aos';

import { getAllBlog } from '../../utils/productAPI';
import Element from './components/Element';
import { Hero, LoadMoreBtn } from './style';

AOS.init({
    // Global settings:
    disable: false,
    debounceDelay: 50, // the delay when resize windows
    throttleDelay: 0, // the delay when scrolling

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // the trigger point (px)
    delay: 0,
    duration: 1200, // values from 0 to 3000, with step 50ms
    easing: 'eas',
    once: false, // render one time or not
    mirror: false, // is animate out when scrolling past them
    anchorPlacement: 'top-bottom', // Which position that the element should be triggered
});
function Blog() {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        getBlog();
    }, []);
    const getBlog = async () => {
        const path = await getAllBlog();
        setBlogs(path.data.data);
    };
    const BlogPerTime = 4;
    const [next, setNext] = useState(BlogPerTime);
    const handleMoreBlog = () => {
        setNext(next + BlogPerTime);
    };
    return (
        <>
            <Hero>
                Welcome to <span>F-Code’s</span> Blog.
            </Hero>
            {blogs && (
                <>
                    {blogs?.slice(0, next)?.map((blog, index) => {
                        return <Element blog={blog} key={index}></Element>;
                    })}
                </>
            )}
            {next < blogs?.length && <LoadMoreBtn onClick={handleMoreBlog}>Load more</LoadMoreBtn>}
        </>
    );
}

export default Blog;
