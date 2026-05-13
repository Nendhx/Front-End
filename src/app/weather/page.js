'use client';
import Link from 'next/link';

export default function Weather() {
    return(
        <div className="w-full h-screen grid grid-cols-13 gap-2 bg-slate-900 p-2">
            <div className=" h-full w-full bg-blue-950 rounded-xl flex flex-col items-center">
                <Link href={"/"}><button><img alt="" src="https://cdn-icons-png.flaticon.com/512/5024/5024369.png" className="w-[50%] h-[7%] bg-blue-900 rounded-xl p-2 mt-5 cursor-pointer"></img></button></Link>
                <div className=" w-full h-[50%] flex flex-col mt-10">
                    <div className="w-[60%] h-[30%] flex items-center ml-5 flex-col">
                        <img alt="" src="https://cdn-icons-png.flaticon.com/128/3406/3406977.png" className="h-[50%] w-[50%]"></img>
                        <p className="text-blue-300">Weather</p>
                    </div>
                    <div className="w-[60%] h-[30%] flex items-center ml-5 flex-col">
                        <img alt="" src="https://cdn-icons-png.flaticon.com/128/561/561184.png" className="h-[35%] w-[50%]"></img>
                        <p className="text-blue-300">Cities</p>
                    </div>
                    <div className="w-[60%] h-[30%] flex items-center ml-5 flex-col">
                        <img alt="" src="https://cdn-icons-png.flaticon.com/128/876/876205.png" className="h-[35%] w-[50%]"></img>
                        <p className="text-blue-300">Map</p>
                    </div>
                    <div className="w-[60%] h-[30%] flex items-center ml-5 flex-col">
                        <img alt="" src="https://cdn-icons-png.flaticon.com/128/992/992668.png" className="h-[35%] w-[50%]"></img>
                        <p className="text-blue-300">Settings</p>
                    </div>
                </div>
                
            </div>
            <div className=" h-full w-full bg-slate-900 col-span-8 rounded-xl flex flex-col"> 
                <input placeholder="Search for cities" className="w-full h-[5%] bg-blue-950 rounded-xl text-blue-300 pl-5 font-bold text-sm p-5"></input>
                <div className="w-full h-[30%] bg-slate-900 flex justify-between p-5 pl-10 mt-3">
                    <div className="flex flex-col justify-between">
                        <div className="flex flex-col">
                            <p className="text-3xl text-blue-300 font-bold">Madrid</p>
                            <p className="text-sm text-blue-300">Chance of rain: 0%</p>
                        </div>
                        <p className="text-5xl text-blue-300 font-bold">31*</p>
                    </div>
                    <img alt="" src="https://cdn-icons-png.flaticon.com/128/4814/4814268.png" className="mr-10"></img>
                </div>
                <div className="w-full h-[30%] bg-blue-950 flex flex-col justify-between p-5 mt-3 rounded-xl">
                    <div className="flex flex-col">
                        <p className="text-xs text-blue-300 font-bold">TODAY S FORECAST</p>
                        <div className=" w-full h-full mt-5 flex flex-row flex justify-center">
                            <div className="  flex items-center flex-col">
                                <p className="text-sm text-blue-300 font-bold">6:00 AM</p>
                                <img alt="" src="https://cdn-icons-png.flaticon.com/128/14440/14440334.png" className="w-15 h-15"></img>
                                <p className="text-xl text-white font-bold">25*</p>
                            </div>
                            <div className="h-full w-0.5 bg-blue-200 ml-7"></div>

                            <div className=" flex items-center flex-col ml-7">
                                <p className="text-sm text-blue-300 font-bold">9:00 AM</p>
                                <img alt="" src="https://cdn-icons-png.flaticon.com/128/1163/1163661.png" className="w-15 h-15"></img>
                                <p className="text-xl text-white font-bold">28*</p>
                            </div>
                            <div className="h-full w-0.5 bg-blue-200 ml-7"></div>

                            <div className=" flex items-center flex-col ml-7">
                                <p className="text-sm text-blue-300 font-bold">12:00 PM</p>
                                <img alt="" src="https://cdn-icons-png.flaticon.com/128/4814/4814268.png" className="w-15 h-15"></img>
                                <p className="text-xl text-white font-bold">33*</p>
                            </div>
                            <div className="h-full w-0.5 bg-blue-200 ml-7"></div>

                            <div className=" flex items-center flex-col ml-7">
                                <p className="text-sm text-blue-300 font-bold">3:00 PM</p>
                                <img alt="" src="https://cdn-icons-png.flaticon.com/128/4814/4814268.png" className="w-15 h-15"></img>
                                <p className="text-xl text-white font-bold">34*</p>
                            </div>
                            <div className="h-full w-0.5 bg-blue-200 ml-7"></div>

                            <div className=" flex items-center flex-col ml-7">
                                <p className="text-sm text-blue-300 font-bold">6:00 PM</p>
                                <img alt="" src="https://cdn-icons-png.flaticon.com/128/4814/4814268.png" className="w-15 h-15"></img>
                                <p className="text-xl text-white font-bold">32*</p>
                            </div>
                            <div className="h-full w-0.5 bg-blue-200 ml-7"></div>

                            <div className=" flex items-center flex-col ml-7">
                                <p className="text-sm text-blue-300 font-bold">9:00 PM</p>
                                <img alt="" src="https://cdn-icons-png.flaticon.com/128/1163/1163661.png" className="w-15 h-15"></img>
                                <p className="text-xl text-white font-bold">30*</p>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
                <div className="w-full h-full bg-blue-950 rounded-xl mt-3 p-3">
                    <div className="w-full h-auto flex flex-row justify-between items-center">
                        <p className="text-blue-300 font-bold text-xs">AIR CONDITIONS</p>
                        <button className="bg-blue-500 text-blue-300 p-2 font-bold text-xs rounded-full pl-5 pr-5"> See more</button>
                    </div>
                    <div className="h-[80%] w-full  mt-3 grid grid-cols-2 ml-10">
                        <div >
                            <p className="font-semibold text-blue-400">Real Feel</p>
                            <p className="font-bold text-2xl text-blue-300">30*</p>
                        </div>
                        <div>
                            <p className="font-semibold text-blue-400">Wind</p>
                            <p className="font-bold text-2xl text-blue-300">0.3 km/h</p>
                        </div>
                        <div>
                            <p className="font-semibold text-blue-400">Chance of rain</p>
                            <p className="font-bold text-2xl text-blue-300">0%</p>
                        </div>
                        <div>
                            <p className="font-semibold text-blue-400">UV Index</p>
                            <p className="font-bold text-2xl text-blue-300">3</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" h-auto w-full bg-blue-950 col-span-4 rounded-xl mt-14 p-8">
                <p className="font-bold text-xs text-blue-300">7-DAY FORECAST</p>
                <div className="w-full flex flex-row justify-between items-center mt-5">
                    <p className="text-blue-300 text-sm">Today</p>
                    <div className="w-auto flex flex-row justify-center items-center">
                        <img alt="" src="https://cdn-icons-png.flaticon.com/128/4814/4814268.png" className="w-[20%] h-[20%]"></img>
                        <p className="text-white font-bold text-sm ml-5">Sunny</p>
                    </div>
                    <p className="text-blue-300 text-sm"><a className="text-white font-bold text-sm">36</a>/22</p>
                </div>
                <div className="w-full h-[0.1%] bg-blue-300 mt-4 mb-4"></div>

                <div className="w-full flex flex-row justify-between items-center mt-5">
                    <p className="text-blue-300 text-sm">Tue</p>
                    <div className="w-auto flex flex-row justify-center items-center">
                        <img alt="" src="https://cdn-icons-png.flaticon.com/128/4814/4814268.png" className="w-[20%] h-[20%]"></img>
                        <p className="text-white font-bold text-sm ml-5">Sunny</p>
                    </div>
                    <p className="text-blue-300 text-sm"><a className="text-white font-bold text-sm">37</a>/21</p>
                </div>
                <div className="w-full h-[0.1%] bg-blue-300 mt-4 mb-4"></div>

                <div className="w-full flex flex-row justify-between items-center mt-5">
                    <p className="text-blue-300 text-sm">Wed</p>
                    <div className="w-auto flex flex-row justify-center items-center">
                        <img alt="" src="https://cdn-icons-png.flaticon.com/128/4814/4814268.png" className="w-[20%] h-[20%]"></img>
                        <p className="text-white font-bold text-sm ml-5">Sunny</p>
                    </div>
                    <p className="text-blue-300 text-sm"><a className="text-white font-bold text-sm">37</a>/21</p>
                </div>
                <div className="w-full h-[0.1%] bg-blue-300 mt-4 mb-4"></div>

                <div className="w-full flex flex-row justify-between items-center mt-5">
                    <p className="text-blue-300 text-sm">Thu</p>
                    <div className="w-auto flex flex-row justify-center items-center">
                        <img alt="" src="https://cdn-icons-png.flaticon.com/128/14440/14440334.png" className="w-[20%] h-[20%]"></img>
                        <p className="text-white font-bold text-sm ml-5">Cloudy</p>
                    </div>
                    <p className="text-blue-300 text-sm"><a className="text-white font-bold text-sm">37</a>/21</p>
                </div>
                <div className="w-full h-[0.1%] bg-blue-300 mt-4 mb-4"></div>

                <div className="w-full flex flex-row justify-between items-center mt-5">
                    <p className="text-blue-300 text-sm">Fri</p>
                    <div className="w-auto flex flex-row justify-center items-center">
                        <img alt="" src="https://cdn-icons-png.flaticon.com/128/14440/14440334.png" className="w-[20%] h-[20%]"></img>
                        <p className="text-white font-bold text-sm ml-5">Cloudy</p>
                    </div>
                    <p className="text-blue-300 text-sm"><a className="text-white font-bold text-sm">37</a>/21</p>
                </div>
                <div className="w-full h-[0.1%] bg-blue-300 mt-4 mb-4"></div>

                <div className="w-full flex flex-row justify-between items-center mt-5">
                    <p className="text-blue-300 text-sm">Sat</p>
                    <div className="w-auto flex flex-row justify-center items-center">
                        <img alt="" src="https://cdn-icons-png.flaticon.com/128/4088/4088981.png" className="w-[20%] h-[20%]"></img>
                        <p className="text-white font-bold text-sm ml-5">Rainy</p>
                    </div>
                    <p className="text-blue-300 text-sm"><a className="text-white font-bold text-sm">37</a>/21</p>
                </div>
                <div className="w-full h-[0.1%] bg-blue-300 mt-4 mb-4"></div>

                <div className="w-full flex flex-row justify-between items-center mt-5">
                    <p className="text-blue-300 text-sm">Sun</p>
                    <div className="w-auto flex flex-row justify-center items-center">
                        <img alt="" src="https://cdn-icons-png.flaticon.com/128/3982/3982078.png" className="w-[20%] h-[20%]"></img>
                        <p className="text-white font-bold text-sm ml-5">Stormy</p>
                    </div>
                    <p className="text-blue-300 text-sm"><a className="text-white font-bold text-sm">37</a>/21</p>
                </div>
            </div>
        </div>
    );
}