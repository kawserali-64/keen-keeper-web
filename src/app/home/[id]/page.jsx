
import { Archive, BellDot, MessageSquare, Phone, Trash, Video } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CheckIn from "../../timeline/CheckIn";

import { useTimeline } from "@/context/TimelineContext";
const FriendDetailsPage = async ({ params }) => {
    const res = await fetch("http://localhost:3000/data.json")
    const friends = await res.json();

    const { id } = await params;
    const friendInfo = friends.find(f => f.id === parseInt(id));


    const statusColors = {
        active: "badge-success",
        pending: "badge-warning",
        overdue: "badge-error",
    };

    return (
        <div className=" bg-[#F8FAFC] pt-20 pb-5">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-5xl container mx-auto items-center justify-center">
                <div className="ml-4 bg-white rounded-2xl shadow-sm p-6 text-center space-y-3 flex flex-col items-center">
                    <Image
                        src={friendInfo.picture}
                        alt={friendInfo.name}
                        width={150}
                        height={150}
                        className="rounded-full"
                    />

                    <h2 className="font-semibold text-lg">{friendInfo.name}</h2>

                    <div className='space-y-2'>

                        <div className={`badge text-white p-2 rounded-2xl ${statusColors[friendInfo.status]}`}>
                            {friendInfo.status}
                        </div>

                        <div>
                            {friendInfo.category.map((cat, index) => (
                                <span key={index} className="badge badge-accent mr-2 p-2 rounded-2xl">
                                    {cat}
                                </span>
                            ))}
                        </div>
                    </div>

                    <p className="text-sm text-gray-500 italic">Former colleague, great mentor</p>
                    <p className="text-xs text-gray-400">Preferred: email</p>

                    <div className="space-y-2 pt-3">

                        <button className="w-full btn border rounded-lg py-2 flex items-center justify-center gap-2"><BellDot /> Snooze 2 Weeks</button>

                        <button className="w-full btn border rounded-lg py-2 flex items-center justify-center gap-2"><Archive /> Archive</button>

                        <button className="w-full btn text-red-500 rounded-lg py-2 flex items-center justify-center gap-2"><Trash /> Delete</button>
                    </div>
                </div>
                <div className="col-span-2 space-y-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[
                            { label: "Days Since Contact", value: "62" },
                            { label: "Goal (Days)", value: "30" },
                            { label: "Next Due", value: "Feb 27, 2026" },
                        ].map((item, i) => (
                            <div key={i} className="bg-white rounded-2xl shadow-sm p-4 text-center">
                                <p className="text-xl font-semibold">{item.value}</p>
                                <p className="text-sm text-gray-500">{item.label}</p>
                            </div>
                        ))}
                    </div>

                    <div className="bg-white rounded-2xl shadow-sm p-4 flex justify-between items-center">
                        <div>
                            <p className="font-medium text-[#244D3F]">Relationship Goal</p>
                            <p className="text-sm text-gray-500">
                                Connect every <b>30 days</b>
                            </p>
                        </div>
                        <button className="border px-3 py-1 rounded-lg text-sm">Edit</button>
                    </div>

                   <CheckIn friend={friendInfo}></CheckIn>
                </div>
            </div>
        </div>
    );
}


export default FriendDetailsPage;