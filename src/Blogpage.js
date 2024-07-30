import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Getdata from './Getdata';
import Loading from './Loading';
import Getbyid from './Getbyid';

const BlogPage = () => {
    const [data, setData] = useState([]);
    const [blogg, setBlogg] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await Getdata();
                setData(res.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        const fetchbyid = async () => {
            try {
                const res = await Getbyid(id);
                setBlogg(res);
            } catch (err) {
                console.error('Error fetching blog by ID:', err);
            }
        }
        fetchbyid();
    }, [id]);

    if (!data.length || !blogg) {
        return <Loading />;
    }

    return (
        <div className="flex flex-col md:flex-row min-h-screen p-4 popr">
            <div className="flex-1 md:flex-[8] p-4 bg-white rounded-lg shadow-md">
                <h1 className="text-3xl font-bold mb-4">{blogg.title}</h1>
                <p className="font-md">By Parth Dadhich</p>
                <img className="rounded-lg mb-2 mt-2" src={blogg.image} alt="photo" />
                <p className="text-lg">{blogg.content}</p>
            </div>
            <div className="flex-1 md:flex-[2] p-4 bg-gray-100 rounded-lg shadow-md mt-4 md:mt-0 md:ml-4">
                <h2 className="text-xl font-bold mb-4">You May Also Like</h2>
                <div className="space-y-6">
                    {data
                        .filter(item => item._id !== id)
                        .map(item => (
                            <Link to={`/blog/${item._id}`} key={item._id}>
                                <div className="flex flex-col p-3 bg-white rounded-lg shadow-md hover:cursor-pointer">
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