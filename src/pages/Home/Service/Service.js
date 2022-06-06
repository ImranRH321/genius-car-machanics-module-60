import React from 'react';

const Service = ({service}) => {
    console.log(service);
    const {img, name}= service;
    return (
        <div>
            <img src={img} alt="" />
            <h2>{name}</h2>
        </div>
    );
};

export default Service;