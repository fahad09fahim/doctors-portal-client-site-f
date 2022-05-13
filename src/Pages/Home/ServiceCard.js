import React from 'react';

const ServiceCard = ({img, serviceTitle}) => {
    return (
        <div class="card lg:max-w-lg  bg-base-100 shadow-2xl">
  <figure><img src={img} alt="Album"/></figure>
  <div class="card-body">
    <h2 class="text-center text-2xl">{serviceTitle}</h2>
    <p className='text-center'>Click the button to listen on Spotiwhy app.</p>
  </div>
</div>
    );
};

export default ServiceCard;