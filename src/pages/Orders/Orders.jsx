import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import SingleOrder from "./SingleOrder";
import { useNavigate } from "react-router-dom";

const Orders = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  const {logout} = useContext(AuthContext)
  // const [controll, setControll] = useState(false);
  const navigate = useNavigate()
  // console.log(user)
  // console.log(orders)

  const url = `http://localhost:5000/checkout?email=${user?.email}`
  
  useEffect(() => {
    fetch(url, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem('car-doctor-access-token')}`
      }
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if(!data.error){
          setOrders(data);
        }
        else{
          logout()
          .then(()=>{
            navigate('/')
          })
        }
      });
  }, [url]);

  const handleDeleteOrder = (id) => {
    const proceed = confirm('Are you want to delete this?')
    if(proceed){
      console.log(id)
      fetch(`http://localhost:5000/checkout/${id}`,{
        method: 'DELETE',
      })
      .then(res => res.json())
      .then(result => {
        console.log(result)
        if(result.deletedCount > 0){
          alert('Successfully deleted')
        }
      })
    }
  }

  const handleConfirmOrder = (id) => {
    console.log(id)
    fetch(`http://localhost:5000/checkout/${id}`,{
        method: 'PATCH',
        headers:{
          'content-type': 'application/json'
        },
        body: JSON.stringify({status: 'Confirm'})
      })
      .then(res => res.json())
      .then(result => {
        console.log(result)
        if(result.modifiedCount > 0){
          alert('Successfully Confirmed')
          const remaining = orders.filter(order => order._id !== id)
          const update = orders.find(order => order._id === id)
          update.status = "Confirm"
          const newOrders = [update, ...remaining]
          setOrders(newOrders)
        }
      })
  }

  return (
    <div className="overflow-x-auto w-full">
        <h2 className="text-3xl font-bold underline text-center mt-8 mb-4">Your Total Order: {orders.length}</h2>
      <table className="table w-full">

        <tbody>
          {orders.map((order) => (
            <SingleOrder key={order._id} order={order} handleDeleteOrder={handleDeleteOrder} handleConfirmOrder={handleConfirmOrder} ></SingleOrder>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
