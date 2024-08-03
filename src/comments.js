import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { FaUserCircle } from 'react-icons/fa';
import { MdDelete } from "react-icons/md";
const CommentSection = ({ id }) => {
    const baseurl="https://blogbridge-backend.onrender.com/";//http://localhost:3001/
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const token = localStorage.getItem('authToken');

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const res = await axios.get(`${baseurl}fetchcomments`, { params: { blog_id: id } });
                setComments(res.data.data || []); 
            } catch (error) {
                console.error('Error fetching comments:', error);
                toast.error('Error fetching comments.');
            }
        };
        fetchComments();
    }, [id]);

    const handleCommentSubmit = async (e) => {
        e.preventDefault();
        if (!token) {
            toast.error('You need to be logged in to post a comment.');
            return;
        }

        try {
            const res = await axios.post(`${baseurl}docomment`, 
                { blog_id: id, content: newComment },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            setComments(prevComments => [...prevComments, res.data.comment]);
            setNewComment('');
            toast.success('Comment posted successfully!');
        } catch (error) {
            console.error('Error posting comment:', error);
            toast.error('Error posting comment.');
        }
    };
    // async function getuserid(token) {
    //     try {
    //         const response = await axios.get(`${baseurl}getuserinfo`, {
    //             headers: {
    //                 Authorization: `Bearer ${token}`
    //             }
    //         });
    //         // console.log(response.data.user_id);
    //         localStorage.setItem("userid",response.data.user_id)
    //     } catch (error) {
    //         console.error('Error fetching user info:', error);
    //     }
    // }
    // getuserid(token)
    async function handledelete(id){
        const del=await axios.delete(`${baseurl}deletecomment`, {data: {
            comment_id: id
    }})
    if(del.status===200){
        setComments(prevComments => prevComments.filter(comment => comment._id !== id));
        toast.success("Comment Deleted Successfully!!");
    }else{
        toast.error("Network error please Try after some time!!")
    }
    } 
    return (
        <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">Comments</h2>
            <div className="space-y-4">
                {comments.length > 0 ? (
                    comments.map((comment, index) =>((comment.user===localStorage.getItem("userid")))?(
                        <div key={index} className="bg-white p-3 rounded-lg shadow-md flex flex-col">
                            <div className="flex items-center gap-2 mb-2">
                                <FaUserCircle className="text-lg" />
                                <p className="text-md text-gray-500">{comment.username || 'Anonymous'}</p>
                            </div>
                            <div className='flex items-center relative'>
                                <p>{comment.content}</p>
                                <MdDelete  className='text-xl absolute right-[0] cursor-pointer' onClick={()=>handledelete(comment._id)} />
                            </div>
                            
                        </div>
                    ):(<div key={index} className="bg-white p-3 rounded-lg shadow-md flex flex-col">
                            <div className="flex items-center gap-2 mb-2">
                                <FaUserCircle className="text-lg"/>
                                <p className="text-md text-gray-500">{comment.username || 'Anonymous'}</p>
                            </div>
                            <div>
                                <p>{comment.content}</p>
                            </div>
                        </div>))
                ) : (
                    <p>No comments yet.</p>
                )}
            </div>
            <form onSubmit={handleCommentSubmit} className="mt-4">
                <textarea
                    className="w-full p-2 border rounded-lg"
                    placeholder="Write a comment..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                />
                <button
                    type="submit"
                    className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg"
                >
                    Post Comment
                </button>
            </form>
        </div>
    );
};

export default CommentSection;
