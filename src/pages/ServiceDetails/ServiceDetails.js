import React from "react";
import { useParams } from "react-router-dom";

const ServiceDetails = () => {
  const { serviceId } = useParams();
  console.log(serviceId);
  return (
    <div>
      <h1>Service Detils {serviceId}</h1>
    </div>
  );
};

export default ServiceDetails;




