'use client';

import { useState } from "react";
import DataJSON from "../../utils/classmate-list.json";
import Link from 'next/link';

export default function Home() {
  const jsonData = JSON.parse(JSON.stringify(DataJSON));
  const [nameSearch, setNameSearch] = useState("");
  const [itemIndexById, setItemIndexById] = useState({});

  const handlePrevItem = (userId, itemCount) => {
    setItemIndexById((prev) => {
      const currentIndex = prev[userId] ?? 0;
      const nextIndex = currentIndex === 0 ? itemCount - 1 : currentIndex - 1;
      return { ...prev, [userId]: nextIndex };
    });
  };

  const handleNextItem = (userId, itemCount) => {
    setItemIndexById((prev) => {
      const currentIndex = prev[userId] ?? 0;
      const nextIndex = currentIndex === itemCount - 1 ? 0 : currentIndex + 1;
      return { ...prev, [userId]: nextIndex };
    });
  };

  return (
    <div className="w-full flex justify-center">
      <main className="container flex flex-col items-center justify-center w-full px-4 gap-10">
        <Link href="/">
          <img src="https://nhs.edu.mn/favicon.ico"></img>
        </Link>
        <div className="text-3xl font-bold">Classmate List</div>
        <div className="flex gap-4 items-center">
          <input value={nameSearch} onChange={(e) => setNameSearch(e.target.value)} type="text" placeholder="Search..." className="w-full max-w-md px-4 py-2 border rounded-lg"/>
        </div>
        <div className="w-full grid 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {jsonData.filter((item) => item.first_name.toLowerCase().includes(nameSearch.toLowerCase())).map((item) => (
            <div className="p-4 border rounded-2xl flex flex-col justify-between gap-2" key={item.id}>
              <div className="flex flex-col gap-2">
                <div className="flex gap-2 items-center">
                  <img src={item.image} className="w-16"></img>
                  <div className="flex flex-col w-full">
                    <h2 className="font-bold text-lg">{item.first_name}</h2>
                    {(item.type == "student") ? <div className="bg-blue-400 text-blue-600 px-2 py-1 rounded-full font-bold">{item.type}</div> : <div className="bg-green-400 text-green-800 px-2 py-1 rounded-full font-bold">{item.type}</div>}
                  </div>
                </div>
                <p>Age: {item.age}</p>
                <p>Email: {item.email}</p>
                <p>Country: {item.country}</p>
                <p>Point: {item.point}</p>
                <p>Created: {item.created_at}</p>
                <h3>Items:</h3>
                <div className="flex flex-col gap-3">
                  {item.item && item.item.length > 0 ? (
                    <>
                      <div className="flex gap-2">
                        <button
                          className="flex-1 bg-blue-500 hover:bg-blue-400 rounded-lg px-3 py-2"
                          onClick={() => handlePrevItem(item.id, item.item.length)}
                        >
                          Prev
                        </button>
                        <button
                          className="flex-1 bg-blue-500 hover:bg-blue-400 rounded-lg px-3 py-2"
                          onClick={() => handleNextItem(item.id, item.item.length)}
                        >
                          Next
                        </button>
                      </div>
                      <div className="border rounded-xl p-3 bg-slate-50">
                        <div className="flex items-center gap-3">
                          {item.item[itemIndexById[item.id] ?? 0]?.image ? (
                            <img src={item.item[itemIndexById[item.id] ?? 0].image} alt={item.item[itemIndexById[item.id] ?? 0].name} className="w-20 h-20 object-cover rounded-lg" />
                          ) : null}
                          <div>
                            <div className="font-bold text-base">{item.item[itemIndexById[item.id] ?? 0].name}</div>
                            <p className="text-sm font-semibold">${item.item[itemIndexById[item.id] ?? 0].price}</p>
                          </div>
                        </div>
                        <p className="text-sm text-slate-600">{item.item[itemIndexById[item.id] ?? 0].description}</p>
                      </div>
                    </>
                  ) : (
                    <p className="text-sm text-slate-500">No items available.</p>
                  )}
                </div>
              </div>
              <button className="bg-red-600 hover:bg-red-400 text-white rounded-lg px-4 py-2">Delete</button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}