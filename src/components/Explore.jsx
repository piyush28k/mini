import React, { useState } from "react";
import data from "../../public/Temp.json";
import { useNavigate } from "react-router-dom";

function Explore() {
  const [search, setSearch] = useState("");
  const Navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(search);
  };
  
  const filteredData = data.filter((job) =>
    job.role.toLowerCase().includes(search.toLowerCase()) ||
    job.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="h-full w-screen">
        <div className="h-72 w-full flex flex-col items-center justify-center border-b border-b-slate-200 gap-10">
          <h1 className="text-4xl font-bold">Explore Jobs</h1>
          <label className="px-3 w-1/2 py-2 border rounded-xl flex items-center gap-2 border-black">
            <input
              type="text"
              className="grow outline-none rounded-xl px-1"
              placeholder="Search"
              onChange={(e) => setSearch(e.target.value)}
            />
            <button onClick={handleSubmit} className="bg-gray-800 px-7 py-2 rounded-xl text-white">
              Search
            </button>
          </label>
        </div>

        <div className="h-full w-screen p-10">
          <h3 className="mb-10">We've found {filteredData.length} job postings</h3>

          <div className="box h-full w-full flex flex-col items-center justify-center gap-10">
            {filteredData.map((c) => (
              <div
                key={c.id}
                onClick={() => { Navigate(`Explore/${c.id}`) }}
                className="w-full border flex justify-between items-center p-5 border-gray-500 rounded-xl"
              >
                <div className="h-full w-full flex">
                  <img className="h-14 w-14 rounded-xl" src={c.img} alt="" />
                  <div className="ml-5">
                    <h1 className="text-xl font-bold">{c.role}</h1>
                    <h4>{c.name}</h4>
                  </div>
                </div>
                <div>apply</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Explore;
