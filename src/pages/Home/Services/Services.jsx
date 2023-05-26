import { useEffect, useRef, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  const [asc, setAsc] = useState(true);
  const searchText = useRef(null);
  const [search, setSearch] = useState('')
  useEffect(() => {
    fetch(
      `https://car-doctor-server-indol.vercel.app/services?search=${search}&sort=${
        asc ? "asc" : "desc"
      }`
    )
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [asc,search]);

  const handleSearch = () => {
    console.log(searchText.current.value)
    setSearch(searchText.current.value)
  }

  return (
    <div className="text-center mt-12 mb-24">
      <h5 className="font-extrabold text-lg text-orange-600">Service</h5>
      <h2 className="text-4xl font-bold">Our Service Area</h2>
      <p className="py-5">
        The majority have suffered alteration in some form, by injected humour,
        or randomised words which do not look even slightly believable.
      </p>
      <div className="form-control">
        <div className="input-group">
          <input
          ref={searchText}
            type="text"
            placeholder="Search…"
            className="input input-bordered"
          />
          <button onClick={handleSearch} className="btn btn-square">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      <button onClick={() => setAsc(!asc)} className="btn mb-5">
        {asc ? "Price High to Low" : "Price Low to High"}
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
      <button className="btn btn-outline border-[#ed2c2c] mt-6 text-[#ed2c2c] hover:bg-[#ed2c2c]">
        More Services
      </button>
    </div>
  );
};

export default Services;
