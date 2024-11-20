import InputComp from './input'
import { useState } from 'react';
import {Blog} from './interface'

// parent component
const BlogList: React.FC = () => {
    const [myBlog,setMyBlog] = useState<Blog[]>([]);

    return(
        <div>
             {/* Pass setMyBlog as a prop to InputComp */}
            <InputComp setMyBlog = {setMyBlog} currentBlogs = {myBlog}/>
            <div>
                {myBlog.map((blog) => (
                    <div key={blog.id} className='blog-entry'>
                        <h2>{blog.title}</h2>
                        <p>{blog.content}</p>
                        <small>{blog.createdAt}</small>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default BlogList