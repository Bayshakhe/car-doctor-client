import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, title, img, price } = service;
  return (
    <div className="bg-base-100 border">
      <figure className="px-6 pt-6">
        <img src={img} alt="Service" className="rounded-md" />
      </figure>
      <div className="card-body text-left">
        <h2 className="card-title font-bold">{title}</h2>
        <div className="font-bold text-red-500 flex justify-between items-center">
          <p>{price}</p>
          <Link to={`/checkout/${_id}`}>
            <FiArrowRight className="font-5xl font-bold"></FiArrowRight>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
