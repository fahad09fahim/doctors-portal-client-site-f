import React from 'react';
import ServiceCard from './ServiceCard';
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'
const Service = () => {
    return (
        <div>
            <h2 className='text-secondary text-center mt-14 text-2xl'>Our Service</h2>
           <h1 className='text-black text-3xl text-center mt-3'>Services We Provide</h1>
           <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-5 mt-20'>
              <ServiceCard serviceTitle='Fluoride Treatment' img={fluoride} />
              <ServiceCard serviceTitle='Cavity Filling' img={cavity} />
              <ServiceCard serviceTitle='Teeth Whitening' img={whitening} />
           </div>
        </div>
    );
};

export default Service;