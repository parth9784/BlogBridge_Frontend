import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { FaUserCircle } from 'react-icons/fa';

const CommentSection = ({ id }) => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const token = localStorage.getItem('authToken');

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const res = await axios.get("http://localhost:3001/fetchcomments", { params: { blog_id: id } });
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
            const res = await axios.post('http://localhost:3001/docomment', 
                { blog_id: id, content: newComment },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            setComments(prevComments => [...prevComments, res.data.comment]); // Adjust based on actual response
            setNewComment('');
            toast.success('Comment posted successfully!');
        } catch (error) {
            console.error('Error posting comment:', error);
            toast.error('Error posting comment.');
        }
    };

    return (
        <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">Comments</h2>
            <div className="space-y-4">
                {comments.length > 0 ? (
                    comments.map((comment, index) => (
                        <div key={index} className="bg-white p-3 rounded-lg shadow-md flex flex-col">
                            <div className="flex items-center gap-2 mb-2">
                                <FaUserCircle className="text-lg" />
                                <p className="text-md text-gray-500">{comment.username || 'Anonymous'}</p>
                            </div>
                            <div>
                                <p>{comment.content}</p>
                            </div>
                        </div>
                    ))
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
