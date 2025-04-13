import React, { useEffect, useState } from 'react';
import { MdFreeBreakfast, MdLocalParking, MdLocationOn, MdRestaurant, MdSmokingRooms } from 'react-icons/md';

import { FaShareAlt } from 'react-icons/fa';
import { MdCheckCircle } from 'react-icons/md';

import { FaCheckCircle } from 'react-icons/fa';
import { useParams } from 'react-router-dom';

const HotelDetails = () => {

  const [hotel, setHotel] = useState([])
  const {id} = useParams()
  // console.log(id)

  const apiKey = "sand_4b413864-b136-4095-b8e0-26d3250acde6"
  let fetchHotels = async () => {
    let response = await fetch('https://api.liteapi.travel/v3.0/data/hotels?countryCode=IT&cityName=Rome', {
      headers: {
        'X-API-Key': apiKey
      }
    })
    let resData = await response.json()
    let filterHotel = resData.data.slice(0,20).filter((item)=> {
      return item.id.includes(id)
    })
      setHotel(filterHotel[0])
  }

  // hotel && console.log(hotel)



   useEffect(() => {
      fetchHotels()
    }, [])

  return (
    <>
      <section className="hotelDetails cursor-pointer py-20 flex flex-col justify-center items-center px-4 2xl:px-30  gap-10" >
        <div className="w-full max-w-6xl lg: mx-auto border border-gray-300 rounded-2xl shadow-md p-4 flex flex-col md:flex-row gap-4">
          {/* Left Section - Images */}
          <div className="md:w-1/2 w-full grid grid-cols-2 gap-2 p-2">
            <img
              src={hotel.thumbnail}
              alt="Main Property"
              className="col-span-2 rounded-xl h-90 w-[100%] object-cover"
            />
          </div>

          {/* Right Section - Details */}
          <div className="md:w-1/2 w-full flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-semibold"> {hotel.address} <span className="text-sm">★★★</span></h2>
                <p className="text-sm text-gray-600 mt-1">{hotel.name}</p>
                <ul className="text-sm text-gray-700 mt-2 space-y-1">
                  <li>No meals included</li>
                  <li>Free Local Transfers</li>
                  <li>Free Cancellation before 14 Sep 11:59 AM</li>
                </ul>
                <p className="text-sm line-through text-gray-400 mt-2">₹2,200</p>
                <p className="text-2xl font-bold text-green-700">₹1,758</p>
                <p className="text-sm text-gray-500">+ ₹300 taxes & fees</p>
                <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700">
                  BOOK THIS NOW
                </button>
              </div>
              <div className="text-right ml-4">
                <div className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full mb-1 inline-block">
                  {hotel.rating}
                </div>
                <p className="text-sm text-gray-500">({hotel.reviewCount})</p>
                <p className="text-sm text-blue-600 underline mt-1 cursor-pointer">All Reviews</p>
                <div className="flex items-center mt-2 text-gray-700">
                  <MdLocationOn className="mr-1" />
                  <span className="text-sm">{hotel.address}</span>
                </div>
              </div>
            </div>

            {/* Bottom - Amenities */}
            <div className="mt-4">
              <h3 className="font-semibold mb-2">Amenities</h3>
              <div className="flex flex-wrap gap-3 text-sm text-gray-700">
                <span className="flex items-center gap-1"><MdLocalParking /> Free Parking</span>
                <span className="flex items-center gap-1"><MdFreeBreakfast /> Free Breakfast</span>
                <span className="flex items-center gap-1"><MdRestaurant /> Restaurant</span>
                <span className="flex items-center gap-1"><MdSmokingRooms /> Smoking Room</span>
                <span className="text-gray-500">+26 Amenities</span>
              </div>
              <div className="mt-2 text-sm font-medium text-gray-800">
                <span className="bg-gray-100 px-2 py-1 rounded">ROOM TYPE</span>: Free Cancellation
              </div>
            </div>
          </div>
        </div>

        {/* Room Card  */}

        <div className="w-full max-w-5xl mx-auto border border-gray-300 rounded-xl shadow-sm flex flex-col md:flex-row p-4 gap-4">
          {/* Left Section - Image and Info */}
          <div className="md:w-1/2 w-full flex flex-col gap-2">
            <div className="relative">
              <img
                src={hotel.main_photo}
                alt="Room"
                className="rounded-xl object-cover w-full h-48"
              />
              <button className="absolute top-2 right-2 bg-white text-blue-600 px-2 py-1 rounded text-xs shadow flex items-center gap-1">
                <FaShareAlt /> Share with friends
              </button>
              <div className="absolute bottom-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">
                56 PHOTOS
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-sm">{hotel.name}</h3>
              <p className="text-xs text-gray-500">195 sq.ft (18.15 sq.m.) | Valley View | Double Bed</p>
              <ul className="text-sm text-gray-700 mt-2 grid grid-cols-2 gap-x-4 gap-y-1">
                <li>• Laundry Service</li>
                <li>• Wi-Fi</li>
                <li>• Room Service</li>
                <li>• Daily Housekeeping</li>
                <li>• Charging Points</li>
                <li>• Closet</li>
              </ul>
              <p className="text-sm text-blue-600 mt-1 cursor-pointer">More Details</p>
            </div>
          </div>

          {/* Right Section - Pricing and Features */}
          <div className="md:w-1/2 w-full flex flex-col justify-between">
            <div>
              <div className="text-xs bg-purple-100 text-purple-700 px-2 py-1 inline-block rounded mb-2 font-semibold">
                RECOMMENDED
              </div>
              <h4 className="font-semibold text-base">Room With Free Cancellation</h4>
              <ul className="text-sm text-gray-700 mt-2 space-y-1">
                <li className="flex items-center gap-1"><MdCheckCircle className="text-green-600" /> No meals included</li>
                <li className="flex items-center gap-1"><MdCheckCircle className="text-green-600" /> Free Local Transfers</li>
                <li className="flex items-center gap-1 text-green-600 font-medium">
                  <MdCheckCircle /> Free Cancellation before 14 Sep 11:59 AM
                </li>
              </ul>
              <p className="text-sm text-blue-600 mt-1 cursor-pointer">More Details</p>
            </div>
            <div className="mt-4">
              <p className="text-sm line-through text-gray-400">₹2,200</p>
              <p className="text-2xl font-bold text-green-700">₹1,758</p>
              <p className="text-sm text-gray-500">+ ₹300 Taxes & Fees / per night</p>
              <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700">
                SELECT ROOM
              </button>
              <p className="text-xs text-green-600 mt-1">Exclusive Offer on HDFC Credit Cards. Get INR 300 OFF Select Room!</p>
              <p className="text-xs text-gray-500">Login Now and get this for INR 1,738 or less</p>
            </div>
          </div>
        </div>

        {/* Card 3  */}

        <div className="w-full max-w-6xl mx-auto mt-6 p-4">
          {/* Property Rules */}
          <div className="border-b pb-4 mb-4">
            <h2 className="font-semibold text-lg mb-2">Property Rules</h2>
            <div className="flex flex-col md:flex-row md:justify-between text-sm text-gray-700">
              <div className="space-y-2">
                <p>Check-in: <span className="font-medium">12 PM</span> &nbsp; Check-out: <span className="font-medium">10 AM</span></p>
                <p className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-600" /> Couple, Bachelor Rules
                  <span className="bg-red-100 text-red-700 text-xs font-semibold px-2 py-0.5 rounded">COUPLE FRIENDLY</span>
                </p>
                <p>Unmarried couples/guests with local IDs are allowed.</p>
                <p>Guests below 18 years of age are not allowed at the property.</p>
              </div>
              <div className="space-y-2 mt-4 md:mt-0">
                <p>• Passport, Aadhaar, Driving License and Govt. ID are accepted as ID proof(s)</p>
                <p>• Pets are not allowed.</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              <button className="text-sm px-3 py-1 bg-gray-100 rounded">Restrictions</button>
              <button className="text-sm px-3 py-1 bg-gray-100 rounded">Guest Profile</button>
              <button className="text-sm px-3 py-1 bg-gray-100 rounded">ID Proof Related</button>
              <button className="text-sm px-3 py-1 text-blue-600 font-medium">Read All Property Rules</button>
            </div>
          </div>

          {/* User Ratings */}
          <div>
            <h2 className="font-semibold text-lg mb-2">User Rating & Reviews</h2>
            <div className="flex flex-col md:flex-row gap-6">
              {/* Rating Summary */}
              <div className="flex flex-col items-center text-center">
                <div className="text-4xl font-bold text-blue-600">{hotel.rating}</div>
                {/* <div className="text-sm text-gray-500">Excellent</div> */}
                <div className="text-xs text-gray-400">{hotel.rating} Rating, {hotel.reviewCount} Reviews</div>
              </div>

              {/* Rating Breakdown */}
              <div className="w-full">
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-1/3">Excellent</div>
                  <div className="w-2/3 bg-gray-200 rounded-full h-2 mx-2">
                    <div className="bg-blue-500 h-2 rounded-full w-[51%]"></div>
                  </div>
                  <div>51%</div>
                </div>
                <div className="flex items-center text-sm text-gray-600 mt-1">
                  <div className="w-1/3">Very Good</div>
                  <div className="w-2/3 bg-gray-200 rounded-full h-2 mx-2">
                    <div className="bg-blue-400 h-2 rounded-full w-[32%]"></div>
                  </div>
                  <div>32%</div>
                </div>
                <div className="flex items-center text-sm text-gray-600 mt-1">
                  <div className="w-1/3">Average</div>
                  <div className="w-2/3 bg-gray-200 rounded-full h-2 mx-2">
                    <div className="bg-yellow-400 h-2 rounded-full w-[7%]"></div>
                  </div>
                  <div>7%</div>
                </div>
                <div className="flex items-center text-sm text-gray-600 mt-1">
                  <div className="w-1/3">Poor</div>
                  <div className="w-2/3 bg-gray-200 rounded-full h-2 mx-2">
                    <div className="bg-orange-400 h-2 rounded-full w-[3%]"></div>
                  </div>
                  <div>3%</div>
                </div>
                <div className="flex items-center text-sm text-gray-600 mt-1">
                  <div className="w-1/3">Bad</div>
                  <div className="w-2/3 bg-gray-200 rounded-full h-2 mx-2">
                    <div className="bg-red-500 h-2 rounded-full w-[3%]"></div>
                  </div>
                  <div>3%</div>
                </div>
              </div>
            </div>
            <div className="flex gap-4 mt-4">
              <button className="text-sm font-medium text-blue-600 border-b border-blue-600">All</button>
              <button className="text-sm text-gray-600 hover:text-blue-600">Couple</button>
              <button className="text-sm text-gray-600 hover:text-blue-600">Family</button>
              <button className="text-sm text-gray-600 hover:text-blue-600">Business</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HotelDetails