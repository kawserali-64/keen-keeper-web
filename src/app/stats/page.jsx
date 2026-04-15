"use client";

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { useTimeline } from "@/context/TimelineContext";

const color = ["#7C3AED", "#1F2937", "#22C55E"];

const Page = () => {
    const { timeline } = useTimeline();

    const data = [
        { name: "Text", value: timeline.filter(t => t.type === "Text").length },
        { name: "Call", value: timeline.filter(t => t.type === "Call").length },
        { name: "Video", value: timeline.filter(t => t.type === "Video").length },
    ];

    const isEmpty = timeline.length === 0;

    return (
        <div className='bg-[#F8FAFC] '>

            <h1 className="font-bold text-3xl container mx-auto mt-20 pt-5">
                Friendship Analytics
            </h1>

            <div className="container mx-auto p-6 bg-white rounded-xl mt-5 mb-8 shadow-sm">

                <h2 className="text-[#64748B]">By Interaction Type</h2>

                {isEmpty ? (
                    <div className="min-h-[300px] flex flex-col items-center justify-center text-center">

                        <div className="bg-[#244D3F] text-white p-5 rounded-full mb-4">
                            📊
                        </div>

                        <h1 className="text-xl font-bold text-gray-800">
                            No Timeline Data Found
                        </h1>

                        <p className="text-gray-500 mt-2 max-w-sm">
                            Start adding calls, texts, or videos to see your friendship analytics.
                        </p>

                    </div>
                ) : (
                    <>
                        <div className="flex flex-col items-center">
                            <ResponsiveContainer width={250} height={250}>
                                <PieChart>
                                    <Pie
                                        data={data}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={70}
                                        outerRadius={100}
                                        paddingAngle={5}
                                        dataKey="value"
                                    >
                                        {data.map((entry, index) => (
                                            <Cell key={index} fill={color[index]} />
                                        ))}
                                    </Pie>

                                    <Tooltip />
                                </PieChart>
                            </ResponsiveContainer>

                            <div className="flex gap-5 mt-4 text-sm">
                                {data.map((item, index) => (
                                    <div key={index} className="flex items-center gap-2">
                                        <span
                                            className="w-3 h-3 rounded-full"
                                            style={{ backgroundColor: color[index] }}
                                        />
                                        <span>{item.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Page;