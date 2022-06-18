import React from "react";
import useServices from "../../userServices/useServices";

const ManageService = () => {
  const [services, setServices] = useServices();
  const handleDelete = id => {
    const yes = window.confirm("are you sure ");
    if (yes) {
      const url = `http://localhost:5000/service/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then(res => res.json())
        .then(data => {
          if (data.deletedCount > 0) {
            console.log(data);
            const remaning = services.filter(service => service._id !== id);
            setServices(remaning);
          }
        });
    }
  };
  return (
    <div className="mx-auto w-50">
      <h2>Manges SErvice</h2>
      {services.map(service => (
        <div className="d-flex m-2 border p-3" key={service._id}>
          <h4>{service.name}</h4>
          <button
            onClick={() => handleDelete(service._id)}
            className="ms-3 link btn-danger"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default ManageService;
