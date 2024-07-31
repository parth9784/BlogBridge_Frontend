import React, { useEffect, useState } from 'react';
import Blogcard from './Blogcard';
import Getdata from './Getdata';

export default function Bloglist() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await Getdata();
        // console.log(res.data)
        setData(res.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='flex flex-wrap gap-4'>
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
