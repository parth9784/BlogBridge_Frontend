import React, { useEffect, useState } from 'react';
import Blogcard from './Blogcard';
import Getdata from './Getdata';
import Loading from './Loading';
import NotFound from './Datanotfound';

export default function Bloglist({ searchQuery }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nodata, setNoData] = useState(false);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await Getdata();
        setData(res.data);
        setFilteredData(res.data);
        setLoading(false);
        if (res.data.length === 0) {
          setNoData(true);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
        setNoData(true);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filtered = data.filter(blog => 
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.desc.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredData(filtered);
  }, [searchQuery, data]);

  if (loading) {
    return <Loading />;
  }

  if (nodata) {
    return <NotFound/>;
  }

  return (
    <div className='flex flex-col items-center'>
      <div className='flex flex-wrap gap-4'>
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <Blogcard 
              key={item._id} 
              title={item.title} 
              desc={item.desc} 
              img={item.image} 
              index={index} 
              id={item._id} 
            />
          ))
        ) : (
          <NotFound/>
        )}
      </div>
    </div>
  );
}

