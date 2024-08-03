import React, { useEffect, useState } from 'react';
import Blogcard from './Blogcard';
import axios from 'axios';
import Loading from './Loading';
import NoDataFound from './Nodatafound';
import { useNavigate } from 'react-router-dom';

export default function Myblogs() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [noFound, setNoFound] = useState(false);
    const navigate=useNavigate()
    useEffect(() => {
        let token=localStorage.getItem("authToken")
        if(!token){
            navigate("/login")
        }
        const fetchUserBlogs = async () => {
            try {
                const token = localStorage.getItem("authToken");
                const res = await axios.post("https://blogbridge-backend.onrender.com/getuserblog", { token: token });//http://localhost:3001/getuserblog
                setData(res.data);
                setLoading(false);
                if(res.data.length === 0) {
                    setNoFound(true);
                }
            } catch (error) {
                console.error("Error fetching user blogs:", error);
                setLoading(false);
                setNoFound(true);
            }
        };
        fetchUserBlogs();
    }, []);

    if (loading) {
        return <Loading />;
    }

    if (noFound) {
        return <NoDataFound />;
    }

    return (
        <div className=''>
            {data.map((item, index) => (
                <Blogcard 
                    key={item._id} 
                    title={item.title} 
                    desc={item.desc} 
                    img={item.image} 
                    index={index} 
                    id={item._id} 
                />
            ))}
        </div>
    );
}
