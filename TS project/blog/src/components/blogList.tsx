import React, { useState } from 'react';
import InputComp from './input';
import { Blog } from './interface';
import './BlogList.css';

const BlogList: React.FC = () => {
    const [myBlog, setMyBlog] = useState<Blog[]>([]);

    return (
        <div className="blog-list-container">
            {/* Input Component */}
            <InputComp setMyBlog={setMyBlog} myBlog={myBlog} />

            {/* Blog Entries */}
            <div className="blog-entries">
                {myBlog.map((blog) => (
                    <div key={blog.id} className="blog-entry">
                        <h2 className="blog-title">{blog.title}</h2>
                        <p className="blog-content">{blog.content}</p>
                        <small className="blog-date">Created At: {blog.createdAt}</small>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogList;