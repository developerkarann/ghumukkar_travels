import React, { useEffect, useState } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { FaHeart } from "react-icons/fa";
import { toast } from 'react-toastify';


const WishListCard = ({ item }) => {

    const [wishlist, setWishlist] = useState([]);
;

    const removeFromWishlist = (id) => {
        var updated = wishlist.filter(hotel => hotel.id !== id);
        setWishlist(updated);
        localStorage.setItem('wishlist', JSON.stringify(updated));
        toast.success('Remove successfully!')
    };
    useEffect(() => {
        let storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        setWishlist(storedWishlist);
    }, []);
    return (
        <>
            <div className="flex my-10 flex-col md:flex-row w-full max-w-4xl rounded-2xl shadow-lg overflow-hidden border border-gray-300 p-2">
                <div className="w-full md:w-1/3">
                    <img
                        src={item.main_photo} // Replace with actual image URL
                        alt="Resort"
                        className="w-full max-h-48  md:h-full object-cover rounded-xl"
                    />
                    <button className="text-xs text-blue-600 mt-2 underline block md:hidden">Share with Friends</button>
                </div>

                <div className="w-full md:w-2/3 md:pl-4 flex flex-col justify-between mt-4 md:mt-0">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-start">
                        <div>
                            <Link to={`/hotel/${item.id}`}>
                                <h2 className="text-lg font-semibold">{item.name}</h2>
                            </Link>
                            <p className="text-sm text-gray-600">{item.city}</p>
                            <span className="inline-block bg-green-100 text-green-700 text-xs px-2 py-1 rounded mt-1">
                                {item.chain}
                            </span>

                            {/* <ul className="text-sm text-gray-700 mt-2 space-y-1">
                                <li>✅ Free Cancellation</li>
                                <li>✅ Guaranteed Complimentary via Visa</li>
                                <li>✅ Breakfast Included</li>
                            </ul> */}

                            <p className="text-xs text-red-500 mt-2">
                                {item.address}
                            </p>
                        </div>

                        <div className="text-right mt-4 md:mt-0 md:ml-4">
                            <div className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full inline-block mb-1">
                                {item.rating}
                            </div>
                            <p className="text-sm text-gray-500">({item.reviewCount})</p>
                            {/* <p className="text-lg font-bold text-green-700 mt-2">₹ 5,584</p>
                      <p className="text-xs text-gray-500">+ ₹ 1,252 taxes & fees per night</p> */}
                            <button className="mt-2" onClick={() => {removeFromWishlist(item.id), location.reload()}}>
                                <FaHeart className=" text-red-600 text-xl cursor-pointer " />
                            </button>
                        </div>
                    </div>
                    <button className="hidden md:block text-xs text-blue-600 mt-2 underline self-start">Share with Friends</button>
                </div>
            </div>
        </>
    );
};

export default WishListCard;
