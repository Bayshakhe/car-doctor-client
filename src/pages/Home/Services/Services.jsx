import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  const [asc, setAsc] = useState(true)
  useEffect(() => {
    fetch(`https://car-doctor-server-indol.vercel.app/services?sort=${asc ? 'asc' : 'desc'}`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [asc]);
  return (
    <div className="text-center mt-12 mb-24">
      <h5 className="font-extrabold text-lg text-orange-600">Service</h5>
      <h2 className="text-4xl font-bold">Our Service Area</h2>
      <p className="py-5">
        The majority have suffered alteration in some form, by injected humour,
        or randomised words which do not look even slightly believable.
      </p>
      <button onClick={()=>setAsc(!asc)} className="btn mb-5">{asc ? "Price High to Low" : "Price Low to High"}</button>
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
