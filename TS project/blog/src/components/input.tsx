import React from 'react'
import { Blog }from './interface' 
import BlogList from './blogList'
import { useState } from 'react'

// ComponentProps:  properties (props) that are passed to a component
interface InputCompProps {
    setMyBlog:React.Dispatch<React.SetStateAction<Blog[]>>;
    currentBlogs: Blog[];

}

const InputComp: React.FC = () => {
    const [nextId, setNextId] = useState<number>(0);
    const [title,setTitle] = useState<string>('');
    const [content, setContent] = useState<string>('');
    // const [userInput, setUserInput] = useState<Blog | null>(null);
    const [myBlog,setMyBlog] = useState<Blog[]>([]);

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
      };
    const handleContentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setContent(e.target.value);
      };

    const handleSave = () =>{
        const newBlog: Blog = {
            id: nextId,
            title: title,
            content: content,
            createdAt: new Date().toLocaleDateString(),
        }
        setMyBlog((c) => [...c,newBlog]);
        setNextId((c) => c+1);
    }

    return(
       <div className='input-component'>
            <h1> My Blog </h1>
            <div>
                <p>Blog Title</p>
                <input type="text"
                   placeholder='Enter Blog Title'
                   onChange={handleTitleChange}
                   />
   
       </div> 
    )
}

export default InputComp

