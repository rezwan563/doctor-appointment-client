import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../HomeComponents/ServiceCard';

const Home = () => {
    const loadServices = useLoaderData()
    return (
        <div>
            <h2 className='text-3xl'>This is home page</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10'>
               {
                loadServices.length === 10 && 
                loadServices.map(service => <ServiceCard
                key={service._id}
                service={service}
                ></ServiceCard>)
               }
            </div>
        </div>
    );
};

export default Home;