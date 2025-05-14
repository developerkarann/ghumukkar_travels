import { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import SERVER from '../assets/backendUrl';

const TourCard = ({ data }) => {

    const [open, setOpen] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
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

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }


    const handleDelete = async (id) => {
        setOpen(false);
        const res = await fetch(`${SERVER}/tour/${id}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ id })
        })

        const response = await res.json()
        toast.success(response.message)
        console.log(response)
        setTimeout(() => {
            window.location.reload()
        }, 4000);
    }

    const handleUpdate = async (id) => {
        const { tourId, title, description, pick_up, meeting_point, drop_off, duration, duration_unit } = form;
        const res = await fetch(`${SERVER}/tour/${id}`, {
            method: 'PUT',
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

    return (
        <>
            <div className="flex my-5 flex-col md:flex-row w-100 max-w-4xl rounded-2xl shadow-lg overflow-hidden border border-gray-300 p-2">
                <div className='flex flex-col w-full'>
                    <Link to={`/`} className='self-center'>
                        <h2 className="text-lg font-semibold self-center">{data.title}</h2>
                    </Link>
                    <p className="text-sm text-gray-600 self-center ">{data.description}</p>
                    <span className="inline-block bg-green-100 text-green-700 text-xs px-2 py-1 rounded mt-1">
                        {data.duration} Days trip
                    </span>

                    <ul className="text-sm text-gray-700 mt-2 space-y-1">
                        <li>✅ Pickup from {data.pick_up}</li>
                        <li>✅ Meeting Point is {data.meeting_point}</li>
                        <li>✅ Drop of at {data.drop_off}</li>
                    </ul>

                    <p className="text-xs text-red-500 mt-2">
                        Duration Unit: <span className=' text-gray-700'> {data.duration_unit} </span>
                    </p>

                    <div className="functions py-2 flex justify-evenly">
                        <button onClick={() => setOpenEdit(true)} className="bg-indigo-600 cursor-pointer text-sm hover:bg-indigo-700 text-white px-5 py-1 rounded-sm transition">
                            Edit tour
                        </button>
                        <button onClick={() => setOpen(true)} className="bg-red-500 text-sm cursor-pointer hover:bg-red-700 text-white px-5 py-1 rounded-sm transition">
                            Delete tour
                        </button>

                    </div>
                </div>

                {/* Delete Modal  */}
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
                                <h2 className="text-lg font-semibold mb-4 text-indigo-700">
                                    Confirm Deletion
                                </h2>
                                <p className="mb-6 text-gray-700">
                                    Are you sure you want to delete this item? This action cannot be undone.
                                </p>
                                <div className="flex justify-end space-x-2">
                                    <button
                                        onClick={() => setOpen(false)}
                                        className="px-4 py-2 border rounded text-gray-600 hover:bg-gray-100"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        onClick={() => handleDelete(data._id)}
                                        className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Edit Modal  */}

                <div className="p-4">
                    {openEdit && (
                        <div
                            onClick={() => setOpenEdit(false)}
                            className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50"
                        >
                            <div
                                onClick={(e) => e.stopPropagation()}
                                className="bg-white rounded-lg shadow-md p-6 w-full max-w-sm"
                            >
                                <h2 className="text-lg font-semibold mb-4 text-indigo-700">Edit your tour</h2>
                                <form className="space-y-4">
                                    <input type="text" name="tourId" placeholder="Tour Id" value={form.name} onChange={handleChange} className="w-full p-2 border-1 text-indigo-700 rounded outline-none border-indigo-500" />
                                    <input type="text" name="title" placeholder="Title" value={form.name} onChange={handleChange} className="w-full p-2 border-1 text-indigo-700 rounded outline-none border-indigo-500" />
                                    <input type="text" name="description" placeholder="Description" value={form.name} onChange={handleChange} className="w-full p-2 border-1 text-indigo-700 rounded outline-none border-indigo-500" />
                                    <input type="text" name="pick_up" placeholder="Pick Up" value={form.name} onChange={handleChange} className="w-full p-2 border-1 text-indigo-700 rounded outline-none border-indigo-500" />
                                    <input type="text" name="meeting_point" placeholder="Meeting Point" value={form.name} onChange={handleChange} className="w-full p-2 border-1 text-indigo-700 rounded outline-none border-indigo-500" />
                                    <input type="text" name="drop_off" placeholder="Drop Off" value={form.name} onChange={handleChange} className="w-full p-2 border-1 text-indigo-700 rounded outline-none border-indigo-500" />
                                    <input type="text" name="duration" placeholder="Duration" value={form.name} onChange={handleChange} className="w-full p-2 border-1 text-indigo-700 rounded outline-none border-indigo-500" />
                                    <input type="text" name="duration_unit" placeholder="Duration Unit" value={form.name} onChange={handleChange} className="w-full p-2 border-1 text-indigo-700 rounded outline-none border-indigo-500" />
                                    <div className="flex justify-end space-x-2">
                                        <button
                                            type="button"
                                            onClick={() => setOpenEdit(false)}
                                            className="px-4 py-2 border rounded text-gray-600 hover:bg-gray-100"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            onClick={() => handleUpdate(data._id)}
                                            type="button"
                                            className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
                                        >
                                            Save Changes
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}
                </div>


            </div>




        </>
    )
}

export default TourCard