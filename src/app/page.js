import Link from 'next/link';

export default function Home() {
  return (
    <div className="font-sans container h-fill w-fill">
      <main className="flex flex-col items-center justify-center h-screen w-screen gap-10">
        <img src="https://nhs.edu.mn/favicon.ico"></img>
        <div className="flex gap-2">
          <button className="border border-1 rounded-lg px-4 py-2 bg-white hover:bg-gray-300 hover:cursor-pointer">Contact</button>
          <Link href="/content">
            <button className="border border-1 rounded-lg px-4 py-2 bg-white hover:bg-gray-300 hover:cursor-pointer">Content</button>
          </Link>
          <button className="border border-1 rounded-lg px-4 py-2 bg-white hover:bg-gray-300 hover:cursor-pointer">About</button>
          <button className="border border-1 rounded-lg px-4 py-2 bg-white hover:bg-gray-300 hover:cursor-pointer">Teacher, Student</button>
        </div>
      </main>
    </div>
  );
}