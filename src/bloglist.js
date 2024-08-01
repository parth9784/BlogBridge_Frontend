import React, { useEffect, useState } from 'react';
import Blogcard from './Blogcard';
import Getdata from './Getdata';
import Loading from './Loading';
import NoDataFound from './Nodatafound';

export default function Bloglist() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nodata, setNoData] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await Getdata();
        setData(res.data);
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

  if (loading) {
    return <Loading />;
  }

  if (nodata) {
    return <NoDataFound />;
  }

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
