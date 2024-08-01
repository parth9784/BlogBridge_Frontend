import React, { useEffect, useState, useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { MdUpdate } from "react-icons/md";
import axios from "axios";
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import Getbyid from './Getbyid';

export default function CreateBlog() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [content, setContent] = useState('');
    const quillRef = useRef(null);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const token = localStorage.getItem("authToken");
                const res = await Getbyid(id, token);
                console.log(res)
                setTitle(res.title);
                setImage(res.image);
                setContent(res.content);
            } catch (err) {
                console.error('Error fetching blog data:', err);
                toast.error('Failed to load blog data.');
                // navigate('/myblogs');
            }
        };

        fetchBlog();
    }, [id, navigate]);

    const handleSave = async () => {
        try {
            const token = localStorage.getItem("authToken");
            const updatedBlog = { title, image, content,token,id };
            await axios.put(`http://localhost:3001/editblog`, updatedBlog);
            toast.success('Blog updated successfully.');
            navigate('/myblogs');
        } catch (err) {
            console.error('Error updating blog:', err);
            toast.error('Failed to update blog.');
        }
    };

    return (
        <div className="flex flex-col items-center min-h-screen">
        <div className="md:w-[700px] w-[300px] lg:w-[1100px] rounded-lg m-3">
          <div className='flex justify-between mb-2'>
            <h1 className="text-lg md:text-xl lg:text-3xl popmed mt-3">Your Words, Your Way: Edit Your Blog</h1>
            <button type="button" onClick={handleSave} class="self-end text-[#539F8D] flex gap-1 items-center text-center hover:text-black border border-[#539F8D] hover:bg-[#D3E8E2] font-medium rounded-full text-[12px] px-5 py-2.5 text-center me-2 mb-2"><MdUpdate className='text-xl' />Publish Changes</button>
          </div>
          <form className="flex flex-col gap-6">
            <div className="relative h-11 w-[80%] min-w-[200px] mt-4 flex flex-col">
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
                className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-[#b6f1e1] focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              />
              <label className="after:content[' '] pointer-events-none absolute left-0 -top-2.5 flex h-full w-full select-none !overflow-visible truncate text-sm font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:text-sm peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-[#D3E8E2] peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Title
              </label>
            </div>
            <div className="relative h-11 w-[80%] min-w-[200px] mt-7 flex flex-col">
              <input
                type="url"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                placeholder="Image Url"
                className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-[#b6f1e1] focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              />
              <label className="after:content[' '] pointer-events-none absolute left-0 -top-2.5 flex h-full w-full select-none !overflow-visible truncate text-sm font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:text-sm peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-[#D3E8E2] peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Image Url
              </label>
            </div>
            <ReactQuill value={content} onChange={setContent} theme="snow" className="mt-2 h-[600px] mb-11" />
          </form>
        </div>
      </div>
    );
}
