import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

const ServiceDetails = () => {
  const { serviceId } = useParams();
  // console.log(serviceId);
  const [service, setService] = useState({});
  const url = `http://localhost:5000/service/${serviceId}`;
  fetch(url)
  .then(res => res.json())
  .then(data => setService(data)) 
  return (
    <div>
      <h1>Your are want to book:  {service.name}</h1>
        
      <div className="text-center mt-4">
        <Link to="/checkout">
          <button class="btn btn-success w-25 mx-auto">Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetails;
