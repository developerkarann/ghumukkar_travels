import React, { useState, useEffect } from 'react'
import HotelCard from '../../components/HotelCard';
import { Link } from 'react-router-dom';
import countriesData from '../../../src/assets/countrycode.json'
import { AiOutlineHeart } from 'react-icons/ai';
import Loader from '../../components/Loader'
import DataNotFound from '../../components/DataNotFound';



const Hotels = () => {
  
  const countries = [...countriesData];

  const [selectedCountry, setSelectedCountry] = useState('');
  const [hotels, setHotels] = useState([])



  const apiKey = "sand_4b413864-b136-4095-b8e0-26d3250acde6"
  let fetchHotels = async () => {
    let response = await fetch('https://api.liteapi.travel/v3.0/data/hotels?countryCode=IT&cityName=Rome', {
      headers: {
        'X-API-Key': apiKey
      }
    })
    let resData = await response.json()
    setHotels(resData.data.slice(0, 50))
  }

  const handleChange = (e) => {
    setSelectedCountry(e.target.value);
    // console.log('Selected country code:', e.target.value);
  };

  useEffect(() => {
    fetchHotels()
  }, [])

 
  // Filter
  const filteredHotels = selectedCountry
  ? hotels.filter(hotel => hotel.country === selectedCountry)
  : hotels;

  // Pegination

  const itemsPerPage = 10;

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(filteredHotels.length / itemsPerPage);
  // console.log(totalPages)
  // Get current page data
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredHotels.slice(indexOfFirstItem, indexOfLastItem);

  // Handle page change
  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };



  return (
    <section className="hotels py-20 flex flex-col justify-center items-center">
      <div className="countries pb-7">
        <div className="p-4 max-w-xs">
          {/* <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Country
          </label> */}
          <select
            value={selectedCountry}
            onChange={handleChange}
            className="w-full border rounded-md p-2 text-sm shadow-sm border-gray-300  rounded-l-lg focus:outline-none "
          >
            {countries.map((country) => (
              <option key={country.Code} value={country.Code}>
                {country.Name} ({country.Code})
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="hotelsContent">
        {
          currentItems.length > 0 ? currentItems.map((item, index) => (
            <>
              <HotelCard item={item} key={index} />
            </>
          )) : <DataNotFound/>
        }
      </div>
      <div className="pegination">
        <div className="flex justify-center py-10">
          <nav className="bg-gray-200 rounded-full px-2 py-1">
            <ul className="flex text-gray-600 gap-2 font-medium ">
              {
                Array.from({ length: totalPages }, (_, i) => (
                  <li key={i} onClick={() => goToPage(i + 1)}>
                    <button className={`rounded-full px-4 py-2 ${currentPage === i + 1 ? 'bg-white text-gray-600' : 'hover:bg-white hover:text-gray-600 transition duration-300 ease-in-out'}`}>{i + 1}</button>
                  </li>
                ))
              }
            </ul>
          </nav>
        </div>
      </div>
    </section>
  )
}

export default Hotels