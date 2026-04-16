import Image from 'next/image';
import Link from 'next/link';
import React, { Suspense } from 'react';

const FriendsList = async () => {
    const res = await fetch("https://keen-keeper-web-beta.vercel.app/data.json");
    const friends = await res.json();

    const statusColors = {
        active: "badge-success",
        pending: "badge-warning",
        overdue: "badge-error",
    };

    return (
        <>
            <h1 className='font-bold text-2xl container mx-auto'>
                Your Friends
            </h1>
            <div className='mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 container mx-auto'>
                {friends.map(friend => (
                    <Link key={friend.id} href={`/home/${friend.id}`}>
                        <div className="card bg-white shadow-md rounded-lg p-4 mb-4 cursor-pointer 
                            transition-all duration-300 ease-in-out 
                            hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] 
                          hover:bg-gray-50">
                            <figure className="px-10 pt-10">
                                <Image
                                    src={friend.picture}
                                    alt={friend.name}
                                    width={150}
                                    height={150}
                                    className="rounded-full"
                                />
                            </figure>

                            <div className="card-body items-center text-center">
                                <h2 className="card-title font-bold text-2xl">
                                    {friend.name}
                                </h2>

                                <div className='space-y-2'>
                                    <div>
                                        {friend.category.map((cat, index) => (
                                            <span key={index} className="badge badge-accent mr-2 p-4 rounded-2xl text-xl">
                                                {cat}
                                            </span>
                                        ))}
                                    </div>

                                    <div className={`badge text-white text-xl p-4 rounded-2xl ${statusColors[friend.status]}`}>
                                        {friend.status}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    );
};

const AllFriends = () => {
    return (
        <div className='bg-[#F8FAFC] min-h-screen'>
            <Suspense fallback={<p className="justify-center flex mt-10"><span className="loading loading-dots loading-xl bg-[#244D3F]"></span></p>}>
                <FriendsList />
            </Suspense>
        </div>
    );
};

export default AllFriends;