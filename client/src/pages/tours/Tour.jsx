import React, { useEffect, useState } from 'react'
import TourCard from '../../components/TourCard'
import AddNodal from '../../components/addModal'
import { toast } from 'react-toastify';
import SERVER from '../../assets/backendUrl';

const Tour = () => {

    const [open, setOpen] = useState(false);
    const [tourData, setTourData] = useState([])
    const [form, setForm] = useState({
        tourId: "",
        title: "",
        description: "",
        pick_up: "",
        meeting_point: "",
        drop_off: "",
        duration: "",
        duration_unit: "",
    });

    const getTourData = async () => {
        const response = await fetch(`${SERVER}/tour`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        })

        const data = await response.json()
        setTourData(data.tours)
    }

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const sendData = async (e) => {
        e.preventDefault()
        const { tourId, title, description, pick_up, meeting_point, drop_off, duration, duration_unit } = form;

        const res = await fetch(SERVER, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                tourId, title, description, pick_up, meeting_point, drop_off, duration, duration_unit
            })
        })

        const response = await res.json()
        toast.success(response.message)
        console.log(response)
        setTimeout(() => {
            window.location.reload()
        }, 5000);
    }

    useEffect(() => {
        getTourData()
    }, [])

    return (
        <>
            <section className="tour pt-20 flex justify-center items-center flex-col">
                <div className="header">
                    <button onClick={() => setOpen(true)} className="bg-indigo-600 cursor-pointer hover:bg-indigo-700 text-white px-6 py-2 rounded-sm transition">
                        Add a new tour
                    </button>
                </div>
                <div className="title py-7">
                    <h2 className=' text-3xl text-indigo-600'>ALL TOURS</h2>
                </div>

                <div className="allTours justify-center items-center grid grid-cols-1 md:grid-cols-2 space-x-8">
                    {
                        tourData && tourData.map((item, i) => (
                            <TourCard data={item} key={i} />
                        ))
                    }
                </div>


                <div className="p-4">
                    {open && (
                        <div
                            onClick={() => setOpen(false)}
                            className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50"
                        >
                            <div
                                onClick={(e) => e.stopPropagation()}
                                className="bg-white rounded-lg shadow-md p-6 w-full max-w-sm"
                            >
                                <h2 className="text-lg font-semibold mb-4 text-indigo-700">Add a new tour</h2>
                                <form className="space-y-4">
                                    <input type="text" name="tourId" placeholder="Tour Id" value={form.name} onChange={handleChange} required className="w-full p-2 border-1 text-indigo-700 rounded outline-none border-indigo-500" />
                                    <input type="text" name="title" placeholder="Title" value={form.name} onChange={handleChange} required className="w-full p-2 border-1 text-indigo-700 rounded outline-none border-indigo-500" />
                                    <input type="text" name="description" placeholder="Description" value={form.name} onChange={handleChange} required className="w-full p-2 border-1 text-indigo-700 rounded outline-none border-indigo-500" />
                                    <input type="text" name="pick_up" placeholder="Pick Up" value={form.name} onChange={handleChange} required className="w-full p-2 border-1 text-indigo-700 rounded outline-none border-indigo-500" />
                                    <input type="text" name="meeting_point" placeholder="Meeting Point" value={form.name} onChange={handleChange} required className="w-full p-2 border-1 text-indigo-700 rounded outline-none border-indigo-500" />
                                    <input type="text" name="drop_off" placeholder="Drop Off" value={form.name} onChange={handleChange} required className="w-full p-2 border-1 text-indigo-700 rounded outline-none border-indigo-500" />
                                    <input type="number" name="duration" placeholder="Duration" value={form.name} onChange={handleChange} required className="w-full p-2 border-1 text-indigo-700 rounded outline-none border-indigo-500" />
                                    <input type="text" name="duration_unit" placeholder="Duration Unit" value={form.name} onChange={handleChange} required className="w-full p-2 border-1 text-indigo-700 rounded outline-none border-indigo-500" />

                                    <div className="flex justify-end space-x-2">
                                        <button
                                            type="button"
                                            onClick={() => setOpen(false)}
                                            className="px-4 py-2 border rounded text-gray-600 hover:bg-gray-100"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            onClick={sendData}
                                            type="submit"
                                            className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
                                        >
                                            Create tour
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}
                </div>


            </section>

        </>
    )
}

export default Tour