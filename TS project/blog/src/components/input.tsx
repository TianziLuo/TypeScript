import React from 'react'
import { Blog }from './interface'
import { useState } from 'react'
import './input.css'

// ComponentProps:  properties (props) that are passed to a component
interface InputCompProps {
    myBlog: Blog[];
    setMyBlog:React.Dispatch<React.SetStateAction<Blog[]>>;
}

const InputComp: React.FC<InputCompProps> = ({myBlog,setMyBlog}:InputCompProps) => {
    const [nextId, setNextId] = useState<number>(0);
    const [title,setTitle] = useState<string>('');
    const [content, setContent] = useState<string>('');
    // const [userInput, setUserInput] = useState<Blog | null>(null);

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
      };
    const handleContentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setContent(e.target.value);
      };

    const handleSave = () =>{
        if (title.trim() === '' || content.trim() === '') {
            alert('Both title and content are required.');
            return;
        }
        const newBlog: Blog = {
            id: nextId,
            title: title,
            content: content,
            createdAt: new Date().toLocaleDateString(),
        }
        setMyBlog((myBlog) => [...myBlog,newBlog]);
        setNextId((c) => c+1); // id ++
        setTitle(''); // Clear the title input
        setContent(''); // Clear the content input
    };

    return (
        <div className="input-component">
            <h1 className="input-title">My Blog</h1>
            <div className="input-group">
                <p className="input-label">Blog Title</p>
                <input
                    className="input-field"
                    type="text"
                    placeholder="Enter Blog Title"
                    value={title}
                    onChange={handleTitleChange}
                />

                <p className="input-label">Blog Content</p>
                <input
                    className="input-field"
                    type="text"
                    placeholder="Enter Blog Content"
                    value={content}
                    onChange={handleContentChange}
                />
            </div>

            <div className="button-group">
                <button className="save-button" onClick={handleSave}>
                    Save Change
                </button>
            </div>
        </div>
    );
};

export default InputComp

