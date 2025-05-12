import { useState } from "react";

const AddNodal = () => {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <div className="p-4">
      <button
        onClick={() => setOpen(true)}
        className="bg-indigo-600 text-white px-4 py-2 rounded"
      >
        Open Modal
      </button>

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-lg shadow-md p-6 w-full max-w-sm"
          >
            <h2 className="text-lg font-semibold mb-4 text-indigo-700">Form</h2>
            <form className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="px-4 py-2 border rounded text-gray-600 hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddNodal;
