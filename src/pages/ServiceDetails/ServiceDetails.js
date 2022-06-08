import React from "react";
import { Link, useParams } from "react-router-dom";

const ServiceDetails = () => {
  const { serviceId } = useParams();
  console.log(serviceId);
  return (
    <div>
      <h1>Service Detils {serviceId}</h1>
       
       <div className="text-center mt-4">
         <Link to='/checkout'>
         <button class="btn btn-info w-50 mx-auto">Checkout</button>
         </Link>
       </div>

    </div>
  );
};

export default ServiceDetails;




