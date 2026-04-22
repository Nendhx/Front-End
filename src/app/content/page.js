import DataJSON from "../../utils/classmate-list.json";

export default function Home() {
  const jsonData = JSON.parse(JSON.stringify(DataJSON));
  return (
    <div className="font-sans container w-screen">
      <main className="flex flex-col items-center justify-center w-full gap-10">
        <img src="https://nhs.edu.mn/favicon.ico"></img>
        <div className="w-full grid grid-cols-6 gap-4">
          {jsonData.map((item) => (
            <div className="p-4 border rounded-2xl flex flex-col gap-2" key={item.id}>
              <div className="flex justify-between items-center">
                <h2 className="font-bold text-lg">{item.first_name}</h2>
                {(item.type == "student") ? <div className="bg-blue-400 text-blue-600 px-2 py-1 rounded-full font-bold">{item.type}</div> : <div className="bg-green-400 text-green-800 px-2 py-1 rounded-full font-bold">{item.type}</div>}
              </div>
              <p>Age: {item.age}</p>
              <p>Country: {item.country}</p>!
              <p>Point: {item.point}</p>
              <p>Created: {item.created_at}</p>
              <img src={item.image} className="w-[100%]"></img>
              <button className="bg-red-600 hover:bg-red-500 text-white rounded-lg px-4 py-2">Delete</button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}