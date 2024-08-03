import React, { useEffect, useState } from 'react';
import Bloglist from './bloglist';
import axios from 'axios';
import { IoMdAdd } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

export default function Homepage({ isloggedin,query }) {
    const baseurl = process.env.base_url;
    const navigate = useNavigate();
    const [username, setUsername] = useState('');

    function handleclick() {
        navigate("/createblog");
    }

    useEffect(() => {
        if (isloggedin) {
            const token = localStorage.getItem("authToken");

            async function getuserid(token) {
                try {
                    const response = await axios.get(`${baseurl}getuserinfo`, {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    });
                    localStorage.setItem("userid", response.data.user_id);
                    localStorage.setItem("username", response.data.username);
                    setUsername(response.data.username);
                } catch (error) {
                    console.error('Error fetching user info:', error);
                }
            }
            getuserid(token);
        }
    }, [isloggedin]);

    function getlogin() {
        const sampleStrings = [
            `Hello, ${username}! Your thoughts deserve to be heard. Ready to blog?`,
        ];
        const randomIndex = Math.floor(Math.random() * sampleStrings.length);
        return sampleStrings[randomIndex];
    }

    return (
        <div className='flex flex-col'>
            {isloggedin && username && <h3 className='popmed ml-4 text-lg mb-1 mt-2 md:text-xl'>{getlogin()}</h3>}
            {isloggedin && <button type="button" onClick={handleclick} className="mr-3 self-end text-[#539F8D] flex gap-1 text-center hover:text-black border border-[#539F8D] hover:bg-[#D3E8E2] font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"><IoMdAdd className='text-xl' />NEW POST</button>}
            <Bloglist searchQuery={query} />
        </div>
    );
}
