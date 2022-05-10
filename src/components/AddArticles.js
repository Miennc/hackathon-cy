import React from 'react';
import { useState } from 'react';
const AddArticles = () => {
   const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState([]);
    const handSubmit = (evt)=>{
        evt.preventDefault();
    }
    return (
        <div className="flex justify-center mt-5">
            <form enctype="multipart/form-data" onSubmit={handSubmit}>
                <input type="file" onChange={(e)=>setImage(e.target.files[0])}/> <br/>
                <input type="text" placeholder="title" className="border-2 border-red-500 " onChange={(e)=>setTitle(e.target.value)}/> <br/>
                <input type="text" placeholder="content" className="border-2 border-red-500 " onChange={(e)=>setContent(e.target.value)}/> <br/>
                <button type="submit" className="bg-red-500 p-2 mt-4 w-44 text-white">submit</button>
            </form>
        </div>
    );
}

export default AddArticles;
