
import { Divide, Plus } from "lucide-react";
import AllFriends from "./home/page";



export default function Home() {
  return (
    <>
      <div className="bg-[#F8FAFC]">
        <div className="space-y-5 py-10">
          <h1 className="text-3xl font-bold text-center mt-10">
            Friends to keep close in your life
          </h1>
          <p className="text-center text-[#64748B]">
            Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
            relationships that matter most.
          </p>
          <button className="bg-[#244D3F] text-white font-bold py-2 px-4 rounded mx-auto items-center flex ">
            <Plus className="inline mr-2" /> Add a Friend
          </button>
        </div>

        {/* card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10 container mx-auto">
          <div className="card-body bg-[#FFFFFF] rounded-2xl items-center text-center hover:bg-[#244D3F] hover:text-white transition cursor-pointer">
            <h2 className="card-title font-bold text-2xl">10</h2>
            <p className="text-[#64748B]">Total Friends</p>
          </div>
          <div className="card-body bg-[#FFFFFF] rounded-2xl items-center text-center hover:bg-[#244D3F] hover:text-white transition cursor-pointer">
            <h2 className="card-title font-bold text-2xl ">3</h2>
            <p className="text-[#64748B]">On Track</p>
          </div>
          <div className="card-body  bg-[#FFFFFF] rounded-2xl items-center text-center hover:bg-[#244D3F] hover:text-white transition cursor-pointer">
            <h2 className="card-title font-bold text-2xl">6</h2>
            <p className="text-[#64748B]">Need Attention</p>
          </div>
          <div className="card-body bg-[#FFFFFF] rounded-2xl items-center text-center hover:bg-[#244D3F] hover:text-white transition cursor-pointer">
            <h2 className="card-title font-bold text-2xl">12</h2>
            <p className="text-[#64748B]">Interactions This Month</p>
          </div>
        </div>
        <hr className="my-10 border-gray-300" />

      </div>
        <AllFriends />
    </>

  );
}
