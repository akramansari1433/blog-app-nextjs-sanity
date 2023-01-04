import React from "react";

function Banner() {
   return (
      <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 my-5 mb-10">
         <div>
            <h1 className="text-5xl">Akram's Daily Blog</h1>
            <h2 className="mt-5 md:mt-0">
               Welcome to developers blog in Devosphere
            </h2>
         </div>
         <p className="mt-5 md:mt-2 text-gray-500 max-w-sm">
            New product features | The Latest in Technology & More!
         </p>
      </div>
   );
}

export default Banner;
