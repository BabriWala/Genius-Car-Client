import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('services.json')
        .then(res=>res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className='pb-20'>
            <div>
            <span className="text-[#FF3811] block font-semibold text-center">Services</span>
            <h1 className="text-5xl font-bold my-5 text-center">
                Our Services Area
            </h1>
            <p className="py-6 text-[#737373] text-center">
            the majority have suffered alteration in some form, by injected humour,<br/> or randomised words which don't look even slightly believable. 
          </p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                  services.map(service => <ServiceCard 
                  key={service._id}
                  service={service}
                  ></ServiceCard>)   
                }
            </div>
        </div>
    );
};

export default Services;