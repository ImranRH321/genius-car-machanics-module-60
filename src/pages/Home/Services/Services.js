import { useState, useEffect } from "react";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then(res => res.json())
      .then(data => setServices(data));
  }, []);

  return (
    <div>
      <h2>Services: {services.length}</h2>
      {services.map(service => (
        <Service service={service} key={service.id}></Service>
      ))}
    </div>
  );
};

export default Services;
