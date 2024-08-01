import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Getdata from './Getdata';
import Loading from './Loading';
import Getbyid from './Getbyid';
import { toast } from 'react-toastify';
const BlogPage = () => {
    const [data, setData] = useState([]);
    const [blogg, setBlogg] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await Getdata();
                if(res.status===401){
                    console.log("401")
                    toast.error("Session Expired Please Login Again!!")
                }
                setData(res.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        const token = localStorage.getItem("authToken");
        if (token) {
            const fetchbyid = async () => {
                try {
                    const res = await Getbyid(id, token);
                    setBlogg(res);
                } catch (err) {
                    console.error('Error fetching blog by ID:', err);
                }
            }
            fetchbyid();
        } else {
            navigate("/login");
        }
    }, [id, navigate]);

    if (!data.length || !blogg) {
        return <Loading />;
    }

    return (
        <div className="flex flex-col md:flex-row min-h-screen p-4 popr">
            <div className="flex-1 md:flex-[8] p-4 bg-white rounded-lg shadow-md">
                <h1 className="text-3xl font-bold mb-4">{blogg.title}</h1>
                <p className="font-md">By {blogg.person}</p>
                <img className="rounded-lg mb-4 mt-2 mx-auto block max-h-[400px] max-w-[400px]" src={blogg.image} alt="photo" />
                <div className="text-lg" dangerouslySetInnerHTML={{ __html: blogg.content }} />
            </div>

            <div className="flex-1 md:flex-[2] p-4 bg-gray-100 rounded-lg shadow-md mt-4 md:mt-0 md:ml-4">
                <h2 className="text-xl font-bold mb-4">You May Also Like</h2>
                <div className="space-y-6">
                    {data
                        .filter(item => item._id !== id)
                        .map(item => (
                            <Link to={`/blog/${item._id}`} key={item._id}>
                                <div className="flex flex-col p-3 bg-white rounded-lg shadow-md hover:cursor-pointer mb-2">
                                    <img
                                        className="w-full h-32 object-cover rounded-lg"
                                        src={item.image}
                                        alt="img"
                                    />
                                    <h3 className="text-lg font-bold mt-2">{item.title}</h3>
                                </div>
                            </Link>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
