"use client";

import { useState } from "react";
import { useTimeline } from "@/context/TimelineContext";
import Image from "next/image";

const TimelinePage = () => {
    const { timeline } = useTimeline();
    const [filter, setFilter] = useState("All");

    const filteredData = filter === "All"
        ? timeline
        : timeline.filter(item => item.type === filter);

    return (
        <div className="p-6 space-y-4 pt-20 ">
            <div className="dropdown ">
                <label tabIndex={0} className="btn btn-outline w-full justify-between">
                    {filter === "All" ? "Filter timeline" : filter}
                    <svg
                        className="w-4 h-4 ml-2"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </label>
                <ul
                    tabIndex={0}
                    className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-full"
                >
                    <li>
                        <button onClick={() => setFilter("All")}>Filter timeline</button>
                    </li>
                    <li>
                        <button onClick={() => setFilter("Call")}> Call</button>
                    </li>
                    <li>
                        <button onClick={() => setFilter("Text")}>Text</button>
                    </li>
                    <li>
                        <button onClick={() => setFilter("Video")}>Video</button>
                    </li>
                </ul>
            </div>
            <div className="space-y-3">
                {filteredData.length === 0 ? (
                    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-6">
                        <div className="bg-[#244D3F] text-white p-6 rounded-full mb-4 shadow-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                            </svg>
                        </div>
                        <h1 className="text-2xl font-bold text-gray-800">
                            No Data Found
                        </h1>
                        <p className="text-gray-500 mt-2 max-w-sm">
                            Sorry, we couldn’t find any data matching your request.
                        </p>
                        <button className="mt-5 px-5 py-2 bg-[#244D3F] text-white rounded-lg hover:opacity-90 transition">
                            Try Again
                        </button>
                    </div>
                ) : (
                    filteredData.map(item => (
                        <div key={item.id} className="p-4 bg-gray-100 rounded-xl flex items-center gap-4">

                            <Image
                                src={item.actionImage}
                                alt={item.type}
                                width={50}
                                height={50}
                                className="rounded-full"
                            />
                            <div>
                                <p className="font-semibold">
                                    {item.type} with {item.friendName}
                                </p>

                                <p className="text-sm text-gray-500">
                                    {item.time}
                                </p>
                            </div>

                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default TimelinePage;