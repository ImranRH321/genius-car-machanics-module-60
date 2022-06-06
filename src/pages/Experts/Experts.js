import React from "react";
import expert1 from "../../images/mechanic/mechanic-1.jpg";
import expert2 from "../../images/mechanic/mechanic-2.jpg";
import expert3 from "../../images/mechanic/mechanic-3.jpg";
import expert4 from "../../images/mechanic/mechanic-4.jpg";
import expert5 from "../../images/mechanic/mechanic-5.jpg";
import Expert from "../Expert/Expert";

const Experts = () => {
  const experts = [
    { id: 1, name: "Manna", img: expert1 },
    { id: 2, name: "rakibul", img: expert2 },
    { id: 3, name: "moynul", img: expert3 },
    { id: 4, name: "Litton", img: expert4 },
    { id: 5, name: "Kasam", img: expert5 },
  ];
  return (
    <div className="container">
      <h1 className="text-primary">Our Experts</h1>
      <div className=" row g-4">
        {experts.map(expert => (
          <Expert expert={expert} key={expert.id}></Expert>
        ))}
      </div>
    </div>
  );
};

export default Experts;
