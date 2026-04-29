'use client';

import { useState } from "react";
import DataJSON from "../../utils/classmate-list.json";

export default function Home() {
  const jsonData = JSON.parse(JSON.stringify(DataJSON));
  const [nameSearch, setNameSearch] = useState("");

  return (
    <main className="flex flex-col items-center justify-center w-full px-4 gap-10">
      <img src="https://nhs.edu.mn/favicon.ico"></img>
      <div className="text-3xl font-bold">Classmate List</div>
      <div className="flex gap-4 items-center">
        <input value={nameSearch} onChange={(e) => setNameSearch(e.target.value)} type="text" placeholder="Search..." className="w-full max-w-md px-4 py-2 border rounded-lg"/>
      </div>
      <div className="w-full grid grid-cols-6 gap-4">
        {jsonData.filter((item) => item.first_name.toLowerCase().includes(nameSearch.toLowerCase())).map((item) => (
          <div className="p-4 border rounded-2xl flex flex-col gap-2" key={item.id}>
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
            
            <button className="bg-red-600 hover:bg-red-500 text-white rounded-lg px-4 py-2">Delete</button>
          </div>
        ))}
      </div>
    </main>
  );
}