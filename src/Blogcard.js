import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Blogcard({ title, img, desc, index, id }) {
  const location = useLocation();
  const linkPath = location.pathname === "/myblogs" ? `/myblog/${id}` : `/blog/${id}`;
  const rowrev = (index % 2) !== 0 ? 'md:flex-row-reverse' : '';
  // console.log(id);

  return (
    <div className={`flex flex-col md:flex-row mx-auto max-w-[1200px] gap-5 m-5 ${rowrev} popmed p-3`}>
      <div className='w-full md:max-w-[40%] img relative rounded-lg'>
        <img className='h-[200px] md:h-[300px] overflow-hidden rounded-lg w-full object-cover' src={img} alt="Blog" />
      </div>
      <div className='flex flex-col w-full md:w-[60%] p-5 popr'>
        <h1 className='text-xl md:text-3xl font-bold'>{title}</h1>
        <div className='text-sm md:text-[15px] mt-3' dangerouslySetInnerHTML={{ __html: desc }} />
        <Link className='self-center' to={linkPath}>
          <button type="button" className="mt-3 text-[#539F8D] w-[130px] text-center hover:text-black border border-[#539F8D] hover:bg-[#D3E8E2] font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            Read More
          </button>
        </Link>
      </div>
    </div>
  );
}


