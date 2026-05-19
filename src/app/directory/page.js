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
      <main className="container flex flex-col items-center justify-center w-full px-4 gap-10 mt-4">
        <div className="text-3xl font-bold">Classmate List</div>
        <div className="flex gap-4 items-center">
          <input value={nameSearch} onChange={(e) => setNameSearch(e.target.value)} type="text" placeholder="Search..." className="w-full max-w-md px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"/>
        </div>
        <div className="w-full mb-4 grid 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {jsonData.filter((item) => item.first_name.toLowerCase().includes(nameSearch.toLowerCase())).length === 0 ? (
            <div className="col-span-full flex flex-col items-center justify-center py-12">
              <svg className="w-16 h-16 text-gray-300 dark:text-gray-700 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
              </svg>
              <p className="text-gray-600 dark:text-gray-400 text-lg font-medium">No user found</p>
              <p className="text-gray-500 dark:text-gray-500 text-sm">Try searching with a different name</p>
            </div>
          ) : (
            jsonData.filter((item) => item.first_name.toLowerCase().includes(nameSearch.toLowerCase())).map((item) => (
            <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-2xl bg-white dark:bg-gray-800 flex flex-col justify-between gap-2 shadow-sm dark:shadow-lg" key={item.id}>
              <div className="flex flex-col gap-2">
                <div className="flex gap-2 items-center">
                  <img src={item.image} className="w-16"></img>
                  <div className="flex flex-col w-full">
                    <h2 className="font-bold text-lg">{item.first_name}</h2>
                    {(item.type == "student") ? <div className="bg-blue-400 text-blue-600 px-2 py-1 rounded-full font-bold text-center">{item.type}</div> : <div className="bg-green-400 text-green-800 px-2 py-1 rounded-full font-bold text-center">{item.type}</div>}
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
                          className="cursor-pointer flex-1 bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white rounded-lg px-3 py-2 transition-colors font-medium"
                          onClick={() => handlePrevItem(item.id, item.item.length)}
                        >
                          Prev
                        </button>
                        <button
                          className="cursor-pointer flex-1 bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white rounded-lg px-3 py-2 transition-colors font-medium"
                          onClick={() => handleNextItem(item.id, item.item.length)}
                        >
                          Next
                        </button>
                      </div>
                      <div className="border border-gray-200 dark:border-gray-600 rounded-xl p-3 bg-gray-50 dark:bg-gray-700">
                        <div className="flex items-center gap-3">
                          {item.item[itemIndexById[item.id] ?? 0]?.image ? (
                            <img src={item.item[itemIndexById[item.id] ?? 0].image} alt={item.item[itemIndexById[item.id] ?? 0].name} className="w-20 h-20 object-cover rounded-lg" />
                          ) : null}
                          <div>
                            <div className="font-bold text-base text-gray-900 dark:text-gray-100">{item.item[itemIndexById[item.id] ?? 0].name}</div>
                            <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">${item.item[itemIndexById[item.id] ?? 0].price}</p>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{item.item[itemIndexById[item.id] ?? 0].description}</p>
                      </div>
                    </>
                  ) : (
                    <p className="text-sm text-gray-500 dark:text-gray-400">No items available.</p>
                  )}
                </div>
              </div>
              <button className="cursor-pointer bg-red-600 hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-800 text-white rounded-lg px-4 py-2 transition-colors font-medium">Delete</button>
            </div>
          ))
          )}
        </div>
      </main>
    </div>
  );
}