import React from "react";
import { useForm } from "react-hook-form";

const AddService = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    fetch("http://localhost:5000/service", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => {
        console.log("Success:", data);
      });
    console.log(data);
  };
  return (
    <div className="w-50 mx-auto">
      <h2>Add Services </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Name"
          {...register("name", { required: true, maxLength: 20 })}
        />
        <input
          type="text"
          placeholder="description"
          {...register("description")}
        />
        <input type="number" placeholder="price" {...register("price")} />
        <input type="text" placeholder="img-url" {...register("img")} />
        <input type="submit" value="addService" />
      </form>
    </div>
  );
};

export default AddService;
