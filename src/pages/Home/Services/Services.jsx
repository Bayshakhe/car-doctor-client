import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://car-doctor-server-indol.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="text-center mt-12 mb-24">
      <h5 className="font-extrabold text-lg text-orange-600">Service</h5>
      <h2 className="text-4xl font-bold">Our Service Area</h2>
      <p className="py-5">
        The majority have suffered alteration in some form, by injected humour,
        or randomised words which do not look even slightly believable.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
      <button className="btn btn-outline border-[#ed2c2c] mt-6 text-[#ed2c2c] hover:bg-[#ed2c2c]">More Services</button>
    </div>
  );
};

export default Services;
