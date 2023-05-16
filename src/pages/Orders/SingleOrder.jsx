const SingleOrder = ({
  order,
  handleDeleteOrder,
  handleConfirmOrder,
}) => {
  const { _id, img, price, date, service_title, status } = order;
  // console.log(order)
  return (
    <tr>
      <td className="text-right">
        <button onClick={() => handleDeleteOrder(_id)} className="btn btn-sm">
          X
        </button>
      </td>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="rounded-md w-16 h-16">
              <img src={img} alt="Order Service" />
            </div>
          </div>
          <div>
            <div className="font-bold">{service_title}</div>
            <div className="text-sm opacity-50">Service</div>
          </div>
        </div>
      </td>
      <td>${price}</td>
      <td>{date}</td>
      <td>
        {status === "Confirm" ? (
          <button className="btn bg-green-600 btn-sm normal-case">
            Confirmed
          </button>
        ) : (
          <button
            onClick={() => handleConfirmOrder(_id)}
            className="btn bg-red-600 btn-sm normal-case"
          >
            Pending
          </button>
        )}
      </td>
    </tr>
  );
};

export default SingleOrder;
