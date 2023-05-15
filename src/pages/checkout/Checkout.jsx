import { useLoaderData } from "react-router-dom";
import checkoutImg from "../../assets/images/checkout/checkout.png";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
const Checkout = () => {
  const { _id, title, price, img } = useLoaderData();
  const { user } = useContext(AuthContext);

  const handleOrder = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = form.email.value;
    const price = form.price.value;
    console.log(name, date, email, price);
    const order = {
      service_id: _id,
      customerName: name,
      service_title: title,
      date,
      email,
      price,
      img,
    };

    fetch("http://localhost:5000/checkout", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.insertedId){
          alert('Successfully confirmed your order')
        }
      });
  };

  return (
    <div>
      <div className="carousel-item relative w-full">
        <img src={checkoutImg} className="w-full rounded-xl" />
        <div className="absolute flex items-center h-full gap-2 transform bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 50)] text-white rounded-xl">
          <h2 className="text-2xl md:text-4xl font-bold ml-20">Check Out</h2>
        </div>
        <p className="bg-red-500 text-white font-bold absolute bottom-0 left-[44%]  px-3 py-2 rounded-tl-3xl rounded-br-2xl">
          Home/Checkout
        </p>
      </div>
      <form onSubmit={handleOrder} className=" border bg-base-200">
        <div className="card-body grid grid-cols-1 md:grid-cols-2 gap-10 pb-0">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Name</span>
            </label>
            <input
              type="text"
              name="name"
              defaultValue={user?.displayName}
              className="input input-bordered rounded-md"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Date</span>
            </label>
            <input
              type="date"
              name="date"
              className="input input-bordered rounded-md"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Email</span>
            </label>
            <input
              type="email"
              name="email"
              defaultValue={user?.email}
              className="input input-bordered rounded-md"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Due Amount</span>
            </label>
            <input
              type="number"
              name="price"
              defaultValue={price}
              className="input input-bordered rounded-md"
            />
          </div>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-red-600 mx-8 mb-10">Order Confirm</button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
