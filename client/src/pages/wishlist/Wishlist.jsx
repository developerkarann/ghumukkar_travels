import React, { useEffect, useState } from 'react'
import HotelCard from '../../components/HotelCard'
import Loader from '../../components/Loader';
import WishListCard from '../../components/WishListCard';
import DataNotFound from '../../components/DataNotFound';

const Wishlist = () => {

  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    setWishlist(storedWishlist);
  }, []);

  const removeFromWishlist = (id) => {
    const updated = wishlist.filter(hotel => hotel.id !== id);
    setWishlist(updated);
    localStorage.setItem('wishlist', JSON.stringify(updated));
  };

  // wishlist && console.log(wishlist)

  return (
    <section className="wishlist py-20 flex flex-col justify-center items-center w-full">
      <h2 className=' text-2xl my-4' >Your Favorite Hotels!</h2>
      <div className="wishlistContent">
        {
          wishlist.length > 0 ? wishlist.map((item, index) => (
            <>
              {/* <HotelCard item={item} key={index}/> */}
              <WishListCard item={item} key={index} />
            </>
          )) : <>
            <DataNotFound />
          </>
        }
      </div>
    </section>
  )
}

export default Wishlist