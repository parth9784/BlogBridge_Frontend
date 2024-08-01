import React, { useEffect, useState } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import Loading from './Loading';
import Getbyid from './Getbyid';
import { MdModeEditOutline } from "react-icons/md";
const Myblogpage = () => {
    const [blogg, setBlogg] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();
    function handleclick(id){
        navigate(`/editblog/${id}`)
    }
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

    if (!blogg) {
        return <Loading />;
    }

    return (
        <div className="flex flex-col md:flex-row min-h-screen p-4 popr">
            <div className="flex-1 md:flex-[8] p-4 bg-white rounded-lg shadow-md">
            <div className='flex justify-between '>
            <h1 className="text-3xl font-bold mb-4">{blogg.title}</h1>
            <button type="button" onClick={()=>handleclick(id)} className="items-center mr-3 max-w-[150px] self-end text-[#539F8D] flex gap-1 text-center hover:text-black border border-[#539F8D] hover:bg-[#D3E8E2] font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"><MdModeEditOutline />Edit Post</button>
            </div>
                <img className="rounded-lg mb-4 mt-2 mx-auto block max-h-[500px] w-full max-w-[500px]" src={blogg.image} alt="photo" />
                <div className="text-lg" dangerouslySetInnerHTML={{ __html: blogg.content }} />
            </div>
        </div>
    );
};

export default Myblogpage;
