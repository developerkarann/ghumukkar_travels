import React, { useEffect, useState } from 'react'

const Blog = () => {

  const [blogs, setBlogs] = useState([])

  const fetchBlogs = async () => {
    const res = await fetch("https://dev.to/api/articles?per_page=10")
      .then(res => res.json())
      .then(data => {
        // console.log(data)
        setBlogs(data)
      });
  }

  // blogs && console.log(blogs)
  useEffect(() => {
    fetchBlogs()
  }, [])

  // Pegination

  const itemsPerPage = 6;

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(blogs.length / itemsPerPage);
  // console.log(totalPages)
  // Get current page data
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = blogs.slice(indexOfFirstItem, indexOfLastItem);

  // Handle page change
  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const blogData = [
    {
      title: 'Hidden Himalayan Spots',
      image: 'https://images.unsplash.com/photo-1607836046730-3317bd58a31b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: "India’s Best Beaches",
      image: 'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: 'Mountain Camping Guide',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: 'Sacred Cities of India',
      image: 'https://images.unsplash.com/photo-1651478881270-6c3a0fc883f4?q=80&w=1431&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: 'Solo Travel in India',
      image: 'https://images.unsplash.com/photo-1663803648155-6a7e61b8ab42?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: 'Scenic Train Rides',
      image: 'https://images.unsplash.com/photo-1535535112387-56ffe8db21ff?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
  ]

  return (
    <section className='banner pt-13'>
      <div className="topBanner">
        <img className='w-full' src="./banner.png" alt="Ghumukkar Travels" />
      </div>

      <div className="blogContent">
        <div className=" w-full ">

          <div className="w-full mx-auto py-10 px-4 md:px-8">
            <div className="max-w-2xl mx-auto text-center">
            </div>
            <div className="grid max-w-2xl grid-cols-1 gap-8 mx-auto mt-8 auto-rows-fr lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {
                currentItems && currentItems.map((data, index) => (
                  <article
                    key={index}
                    className="relative flex flex-col h-50 justify-end px-4 pt-40 pb-4 overflow-hidden bg-gray-900 md:pt-28 isolate rounded-xl dark:shadow dark:shadow-gray-400/50">
                    <img src={data.cover_image} alt="" className="absolute inset-0 object-cover w-full h-full -z-10" />
                    <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                    <div className="absolute inset-0 -z-10 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>

                    <a className="text-lg font-semibold leading-6 text-white hover:text-teal-100" href={data.url} target='_blank'>
                      {data.title}
                    </a>
                  </article>
                ))
              }

            </div>
          </div>

        </div>
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

export default Blog