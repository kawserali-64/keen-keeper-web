import React from 'react';

const NotFoundPage = () => {
    return (
        <div className="h-screen flex flex-col justify-center items-center bg-linear-to-br from-blue-50 to-purple-100 text-center px-4">

            {/* Big 404 */}
            <h1 className="text-8xl font-extrabold text-[#244D3F] drop-shadow-md">
                404
            </h1>

            {/* Title */}
            <h2 className="text-2xl font-semibold mt-4 text-[#244D3F]">
                Oops! Page not found
            </h2>
        </div>
    );
};

export default NotFoundPage;