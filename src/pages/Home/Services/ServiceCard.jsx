import { FiArrowRight } from "react-icons/fi";

const ServiceCard = ({ service }) => {
  const { title, img, price } = service;
  return (
    <div className="bg-base-100 border">
      <figure className="px-6 pt-6">
        <img src={img} alt="Service" className="rounded-md" />
      </figure>
      <div className="card-body text-left">
        <h2 className="card-title font-bold">{title}</h2>
        <div className="font-bold text-red-500 flex justify-between items-center">
        <p>{price}</p>
        <FiArrowRight className="font-5xl font-bold"></FiArrowRight>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
