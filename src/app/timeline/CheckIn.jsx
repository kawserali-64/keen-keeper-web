"use client";

import { Phone, MessageSquareReply, Video } from "lucide-react";
import { useTimeline } from "@/context/TimelineContext";
import { toast } from "react-toastify";

const CheckIn = ({ friend }) => {

    const { addTimeline } = useTimeline();

    const getImage = (type) => {
        if (type === "Call") return "/call.png";
        if (type === "Text") return "/text.png";
        if (type === "Video") return "/video.png";
    };

    const handleAdd = (type) => {

        addTimeline({
            id: Date.now(),
            type,
            friendName: friend?.name,
            time: new Date().toLocaleTimeString(),
            picture: friend?.picture,
            status: friend?.status,
            actionImage: getImage(type)
        });

        // 🎯 Different toast for each button
        if (type === "Call") {
            toast.success(`${friend?.name} a call with!`);
        }

        if (type === "Text") {
            toast.success(`${friend?.name} a text message with !`);
        }

        if (type === "Video") {
            toast.success(`${friend?.name} a video call with!`);
        }
    };

    return (
        <div className="bg-white rounded-2xl shadow-sm p-4">
            <p className="font-medium mb-3 text-[#244D3F]">Quick Check-In</p>

            <div className="grid grid-cols-3 gap-4">

                <button
                    onClick={() => handleAdd("Call")}
                    className="btn border border-black h-24 rounded-xl py-6 flex flex-col items-center justify-center gap-2 hover:bg-[#244D3F] hover:text-white transition"
                >
                    <Phone size={18} />
                    Call
                </button>

                <button
                    onClick={() => handleAdd("Text")}
                    className="btn border border-black h-24 rounded-xl py-6 flex flex-col items-center justify-center gap-2 hover:bg-[#244D3F] hover:text-white transition"
                >
                    <MessageSquareReply size={18} />
                    Text
                </button>

                <button
                    onClick={() => handleAdd("Video")}
                    className="btn border border-black h-24 rounded-xl py-6 flex flex-col items-center justify-center gap-2 hover:bg-[#244D3F] hover:text-white transition"
                >
                    <Video size={18} />
                    Video
                </button>

            </div>
        </div>
    );
};

export default CheckIn;