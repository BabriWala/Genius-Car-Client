import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Checkout = () => {
    const {title, price, _id} = useLoaderData()
    const {user} = useContext(AuthContext);

    const handlePlaceOrder = event =>{
        event.preventDefault()
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'unregistered';
        const phone = form.phone.value;
        const message = form.message.value;

        const order = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            phone,
            message
        }
    }

    return (
        <div className='text-center'>
            <h2 className='text-4xl font-bold'>You are about to order:{title}</h2>
            <h4>Price: {price}</h4>
            <form onSubmit={handlePlaceOrder}>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                <input type="text" name='firstName' placeholder="First Name" className="input input-bordered w-full " />
            <input type="text" name='lastName' placeholder="Last Name" className="input input-bordered w-full " />
            <input type="text" name='phone' placeholder="Your Phone" className="input input-bordered w-full " />
            <input type="text" name='email' placeholder="Your Email" defaultValue={user?.email} readOnly className="input input-bordered w-full " />
                </div>
                <textarea name='message' className='textarea textarea-bordered h-24 w-full' placeholder='Product Description'></textarea>
                <input
                type="submit"
                value="Submit"
                className="btn bg-[#FF3811] w-full border-transparent hover:border-[#FF3811] hover:bg-transparent hover:text-[#FF3811]"
              />
            </form>
        </div>
    );
};

export default Checkout;