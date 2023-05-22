import React, { useEffect, useState } from 'react';
import Carousel from '../components/Carousel';
import apiService from '../services/ApiServices';

function Home() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await apiService.fetchData();
        setData(responseData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);


  return (
    <div>
      <Carousel images={data} />
    </div>
  );
}

export default Home;
